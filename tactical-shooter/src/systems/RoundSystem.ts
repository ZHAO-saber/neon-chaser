/** 回合流程管理器：状态机 + 经济奖励规则 + 炸弹系统 + 半场交换 */
import {
  KILL_REWARDS,
  ROUND_REWARDS,
  MONEY_MAX,
  type RoundPhase,
  type RoundState,
  type RoundWinner,
} from '../types/round';
import type { WeaponId } from '../types/weapon';
import type { Team } from '../types/player';

/** 回合结束原因 */
export type RoundEndReason = 'BOMB' | 'ELIM' | 'DEFUSE' | 'TIME';

/** 阶段时长（秒） */
const WARMUP_DURATION = 5;
const BUY_DURATION = 15;
const POST_DURATION = 5;
const LIVE_DURATION = 100;

/** 炸弹参数（秒） */
const BOMB_PLANT_TIME = 3;
const BOMB_DEFUSE_TIME = 7;
const BOMB_TIMER = 40;

/** 比赛规则 */
const HALF_SCORE = 12;
const WIN_SCORE = 16;
const MAX_ROUNDS = 30;

/** 回合结算结果 */
export interface RoundSettlement {
  /** 胜方 */
  winner: RoundWinner;
  /** 胜利原因 */
  reason: RoundEndReason;
  /** 胜方奖励金额 */
  winReward: number;
  /** 败方连败补偿金额 */
  lossBonus: number;
  /** 败方阵营 */
  loserTeam: Team;
  /** 是否半场交换 */
  halfTime: boolean;
  /** 比赛是否结束 */
  gameOver: boolean;
}

/** 空结算（已结算或异常时返回） */
function emptySettlement(winner: RoundWinner, reason: RoundEndReason, gameOver: boolean): RoundSettlement {
  return {
    winner,
    reason,
    winReward: 0,
    lossBonus: 0,
    loserTeam: 'SPECTATOR',
    halfTime: false,
    gameOver,
  };
}

export class RoundSystem {
  /** 回合状态 */
  private state: RoundState;
  /** ATK 连败次数 */
  private atkLossStreak = 0;
  /** DEF 连败次数 */
  private defLossStreak = 0;
  /** 本回合 ATK 击杀数（用于连杀奖励） */
  private atkRoundKills = 0;
  /** 本回合 DEF 击杀数（用于连杀奖励） */
  private defRoundKills = 0;
  /** 炸弹安放进度（秒） */
  private bombPlantProgress = 0;
  /** 炸弹拆除进度（秒） */
  private bombDefuseProgress = 0;
  /** 是否正在安放炸弹 */
  private planting = false;
  /** 是否正在拆除炸弹 */
  private defusing = false;
  /** 半场是否已交换 */
  private halfTimeDone = false;
  /** 比赛是否结束 */
  private gameOver = false;

  constructor() {
    this.state = {
      phase: 'WARMUP',
      roundNumber: 0,
      phaseStartTime: 0,
      phaseDuration: WARMUP_DURATION,
      atkScore: 0,
      defScore: 0,
      winner: null,
      halfTime: false,
      bombPlanted: false,
      bombSite: null,
      bombTimer: 0,
    };
  }

  /** 获取当前回合状态（返回副本，防止外部修改） */
  getRoundState(): RoundState {
    return { ...this.state };
  }

  /** BUY 阶段剩余秒数（用于UI显示） */
  get buyPhaseRemaining(): number {
    if (this.state.phase !== 'BUY') return 0;
    const elapsed = (performance.now() - this.state.phaseStartTime) / 1000;
    return Math.max(0, this.state.phaseDuration - elapsed);
  }

  /** 炸弹爆炸倒计时秒数 */
  get bombRemaining(): number {
    if (!this.state.bombPlanted) return 0;
    return Math.max(0, this.state.bombTimer);
  }

  /** 是否处于 BUY 阶段 */
  get isBuyPhase(): boolean {
    return this.state.phase === 'BUY';
  }

  /** 比赛是否结束 */
  get isGameOver(): boolean {
    return this.gameOver;
  }

  /** 推进状态机 */
  update(dt: number, now: number): void {
    if (this.gameOver) return;
    const elapsed = (now - this.state.phaseStartTime) / 1000;

    switch (this.state.phase) {
      case 'WARMUP':
        // 热身结束 → 开始第一回合
        if (elapsed >= WARMUP_DURATION) this.startNewRound();
        break;

      case 'BUY':
        // 购买阶段结束 → 进入实战
        if (elapsed >= BUY_DURATION) this.transitionTo('LIVE', now);
        break;

      case 'LIVE':
        // 处理安放炸弹进度
        if (this.planting) {
          this.bombPlantProgress += dt;
          if (this.bombPlantProgress >= BOMB_PLANT_TIME) {
            this.plantBombComplete(now);
          }
        }
        // 回合时间耗尽且炸弹未安放 → DEF 时间胜利
        if (elapsed >= LIVE_DURATION && !this.state.bombPlanted) {
          this.onRoundEnd('DEF', 'TIME');
        }
        break;

      case 'BOMB_PLANTED':
        // 炸弹倒计时递减
        this.state.bombTimer -= dt;
        // 处理拆除进度
        if (this.defusing) {
          this.bombDefuseProgress += dt;
          if (this.bombDefuseProgress >= BOMB_DEFUSE_TIME) {
            this.onRoundEnd('DEF', 'DEFUSE');
            return;
          }
        }
        // 炸弹爆炸 → ATK 胜利
        if (this.state.bombTimer <= 0) {
          this.onRoundEnd('ATK', 'BOMB');
        }
        break;

      case 'POST':
        // 结算阶段结束 → 检查比赛是否结束，否则开始新回合
        if (elapsed >= POST_DURATION) {
          if (this.gameOver) return;
          if (
            this.state.atkScore >= WIN_SCORE ||
            this.state.defScore >= WIN_SCORE ||
            this.state.roundNumber >= MAX_ROUNDS
          ) {
            this.gameOver = true;
          } else {
            this.startNewRound();
          }
        }
        break;
    }
  }

  /** 开始新回合 */
  startNewRound(): void {
    this.state.roundNumber++;
    this.state.winner = null;
    this.state.halfTime = false;
    this.state.bombPlanted = false;
    this.state.bombSite = null;
    this.state.bombTimer = 0;
    this.bombPlantProgress = 0;
    this.bombDefuseProgress = 0;
    this.planting = false;
    this.defusing = false;
    this.atkRoundKills = 0;
    this.defRoundKills = 0;
    this.transitionTo('BUY', performance.now());
  }

  /** 处理击杀奖励，返回奖励金额 */
  onKill(killerTeam: Team, headshot: boolean, weapon: WeaponId): number {
    // 基础击杀奖励
    let reward = KILL_REWARDS.kill;

    if (weapon === 'knife') {
      // 刀杀固定 1500
      reward = KILL_REWARDS.knife;
    } else if (headshot) {
      // 爆头额外奖励
      reward += KILL_REWARDS.headshot;
    }

    // 连杀奖励（仅对正式阵营，按本回合击杀序号取值）
    if (killerTeam === 'ATK') {
      this.atkRoundKills++;
      const idx = Math.min(this.atkRoundKills - 1, KILL_REWARDS.multiKill.length - 1);
      if (idx >= 0) reward += KILL_REWARDS.multiKill[idx];
    } else if (killerTeam === 'DEF') {
      this.defRoundKills++;
      const idx = Math.min(this.defRoundKills - 1, KILL_REWARDS.multiKill.length - 1);
      if (idx >= 0) reward += KILL_REWARDS.multiKill[idx];
    }

    // 金钱上限
    return Math.min(reward, MONEY_MAX);
  }

  /** 处理回合结算，返回奖励信息供外部分发 */
  onRoundEnd(winner: RoundWinner, reason: RoundEndReason): RoundSettlement {
    // 防止重复结算
    if (this.state.phase === 'POST' || this.gameOver) {
      return emptySettlement(winner, reason, this.gameOver);
    }

    // 更新比分与连败计数
    if (winner === 'ATK') {
      this.state.atkScore++;
      this.atkLossStreak = 0;
      this.defLossStreak++;
    } else if (winner === 'DEF') {
      this.state.defScore++;
      this.defLossStreak = 0;
      this.atkLossStreak++;
    }

    // 计算胜方奖励
    const winReward = winner !== null ? this.computeWinReward(winner, reason) : 0;

    // 计算败方连败补偿（循环取值）
    const loserTeam: Team = winner === 'ATK' ? 'DEF' : winner === 'DEF' ? 'ATK' : 'SPECTATOR';
    const lossStreak = loserTeam === 'ATK' ? this.atkLossStreak : this.defLossStreak;
    const lossBonus =
      lossStreak > 0
        ? ROUND_REWARDS.lossBonus[(lossStreak - 1) % ROUND_REWARDS.lossBonus.length]
        : 0;

    // 半场检测：先到 12 分交换阵营
    const halfTime =
      !this.halfTimeDone &&
      (this.state.atkScore >= HALF_SCORE || this.state.defScore >= HALF_SCORE);
    if (halfTime) this.halfTimeDone = true;

    // 比赛结束检测：先到 16 分或满 30 回合
    const gameOver =
      this.state.atkScore >= WIN_SCORE ||
      this.state.defScore >= WIN_SCORE ||
      this.state.roundNumber >= MAX_ROUNDS;

    this.state.winner = winner;
    this.state.halfTime = halfTime;
    this.gameOver = gameOver;
    this.transitionTo('POST', performance.now());

    return { winner, reason, winReward, lossBonus, loserTeam, halfTime, gameOver };
  }

  /** 开始安放炸弹 */
  startPlanting(site: 'A' | 'B'): void {
    if (this.state.phase !== 'LIVE') return;
    if (this.state.bombPlanted) return;
    this.planting = true;
    this.state.bombSite = site;
  }

  /** 取消安放炸弹 */
  cancelPlanting(): void {
    this.planting = false;
    this.bombPlantProgress = 0;
  }

  /** 开始拆除炸弹 */
  startDefusing(): void {
    if (this.state.phase !== 'BOMB_PLANTED') return;
    this.defusing = true;
  }

  /** 取消拆除炸弹 */
  cancelDefusing(): void {
    this.defusing = false;
    this.bombDefuseProgress = 0;
  }

  /** 安放完成 → 切换到 BOMB_PLANTED 阶段 */
  private plantBombComplete(now: number): void {
    this.planting = false;
    this.bombPlantProgress = 0;
    this.state.bombPlanted = true;
    this.state.bombTimer = BOMB_TIMER;
    this.transitionTo('BOMB_PLANTED', now);
  }

  /** 根据 winner + reason 计算胜方奖励金额 */
  private computeWinReward(winner: RoundWinner, reason: RoundEndReason): number {
    if (winner === 'ATK') {
      // ATK 胜利：炸弹爆炸 3500 / 全灭 3250
      return reason === 'BOMB' ? ROUND_REWARDS.ATK_BOMB : ROUND_REWARDS.ATK_ELIM;
    }
    if (winner === 'DEF') {
      // DEF 胜利：拆除 3500 / 全灭 3250 / 时间 3250
      switch (reason) {
        case 'DEFUSE':
          return ROUND_REWARDS.DEF_DEFUSE;
        case 'ELIM':
          return ROUND_REWARDS.DEF_ELIM;
        case 'TIME':
          return ROUND_REWARDS.DEF_TIME;
        default:
          return ROUND_REWARDS.DEF_TIME;
      }
    }
    return 0;
  }

  /** 切换阶段并重置阶段计时 */
  private transitionTo(phase: RoundPhase, now: number): void {
    this.state.phase = phase;
    this.state.phaseStartTime = now;
    switch (phase) {
      case 'WARMUP':
        this.state.phaseDuration = WARMUP_DURATION;
        break;
      case 'BUY':
        this.state.phaseDuration = BUY_DURATION;
        break;
      case 'LIVE':
        this.state.phaseDuration = LIVE_DURATION;
        break;
      case 'BOMB_PLANTED':
        this.state.phaseDuration = BOMB_TIMER;
        break;
      case 'POST':
        this.state.phaseDuration = POST_DURATION;
        break;
    }
  }
}
