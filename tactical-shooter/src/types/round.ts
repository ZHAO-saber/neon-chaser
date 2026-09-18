/** 回合与经济系统 */

export type RoundPhase = 'WARMUP' | 'BUY' | 'LIVE' | 'BOMB_PLANTED' | 'POST';

export type RoundWinner = 'ATK' | 'DEF' | null;

/** 一回合的完整状态 */
export interface RoundState {
  phase: RoundPhase;
  /** 回合编号 */
  roundNumber: number;
  /** 阶段开始时间戳（ms，服务器） */
  phaseStartTime: number;
  /** 阶段持续时间（秒） */
  phaseDuration: number;
  /** ATK 比分 */
  atkScore: number;
  /** DEF 比分 */
  defScore: number;
  /** 本回合胜者 */
  winner: RoundWinner;
  /** 半场比分交换（先到12或15回合交换） */
  halfTime: boolean;
  /** 炸弹是否已安放 */
  bombPlanted: boolean;
  /** 炸弹安放位置 */
  bombSite: 'A' | 'B' | null;
  /** 炸弹爆炸倒计时（秒） */
  bombTimer: number;
}

/** 购买菜单物品 */
export interface BuyItem {
  id: string;
  name: string;
  price: number;
  category: 'pistol' | 'rifle' | 'sniper' | 'smg' | 'armor' | 'grenade' | 'utility';
}

/** 击杀奖励规则 */
export interface KillReward {
  /** 普通击杀 */
  kill: number;
  /** 爆头击杀额外 */
  headshot: number;
  /** 刀杀 */
  knife: number;
  /** 连杀奖励（第N杀） */
  multiKill: number[];
}

/** 回合胜利奖励 */
export interface RoundReward {
  ATK_BOMB: number;
  ATK_ELIM: number;
  DEF_DEFUSE: number;
  DEF_ELIM: number;
  DEF_TIME: number;
  /** 连败补偿 */
  lossBonus: number[];
}

export const KILL_REWARDS: KillReward = {
  kill: 300,
  headshot: 0,
  knife: 1500,
  multiKill: [0, 0, 100, 200, 300, 400],
};

export const ROUND_REWARDS: RoundReward = {
  ATK_BOMB: 3500,
  ATK_ELIM: 3250,
  DEF_DEFUSE: 3500,
  DEF_ELIM: 3250,
  DEF_TIME: 3250,
  lossBonus: [1400, 1900, 2400, 2900, 3400],
};

export const MONEY_MAX = 16000;
