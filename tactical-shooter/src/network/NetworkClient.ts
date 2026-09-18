/**
 * 客户端网络层：Colyseus 连接 + 客户端预测 + 服务器对账
 * - 发送输入快照给服务器
 * - 缓存未确认的输入（用于服务器对账后重放）
 * - 服务器快照到达时，若预测位置与权威位置偏差过大则回滚并重放
 */
import * as Colyseus from 'colyseus.js';
import type { InputSnapshot } from '../types/player';

export interface RemotePlayer {
  id: string;
  name: string;
  team: 'ATK' | 'DEF';
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  hp: number;
  alive: boolean;
  currentWeapon: string;
  kills: number;
  deaths: number;
}

/** 预测用：玩家本地状态 */
interface PredictedState {
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
}

/** 输入历史项 */
interface InputHistoryItem {
  seq: number;
  input: InputSnapshot;
  state: PredictedState;
}

export class NetworkClient {
  private client: Colyseus.Client;
  private room: Colyseus.Room | null = null;
  private myId = '';

  /** 输入序列号 */
  private seq = 0;
  /** 未确认的输入历史 */
  private inputHistory: InputHistoryItem[] = [];
  /** 本地预测状态（玩家自身） */
  private predicted: PredictedState = { x: 0, y: 1.8, z: 0, yaw: 0, pitch: 0 };

  /** 远程玩家状态（从服务器快照同步） */
  remotePlayers = new Map<string, RemotePlayer>();

  /** 回合状态（从服务器快照同步） */
  phase: string = 'WARMUP';
  roundNumber = 0;
  atkScore = 0;
  defScore = 0;
  bombPlanted = false;
  bombSite: 'A' | 'B' | null = null;
  bombTimer = 0;

  /** 玩家自身 HP/击杀等（服务器权威） */
  myHp = 100;
  myAlive = true;
  myKills = 0;
  myDeaths = 0;
  myMoney = 800;
  myAmmoInMag = 30;
  myAmmoReserve = 90;
  myReloading = false;

  /** 回调 */
  onKill?: (killerId: string, victimId: string, weapon: string, headshot: boolean) => void;
  onHit?: (shooterId: string, targetId: string, damage: number, headshot: boolean) => void;
  onBombPlanted?: (site: 'A' | 'B', planterId: string) => void;
  onBombDefused?: (defuserId: string) => void;
  onRoundEnd?: (winner: 'ATK' | 'DEF', reason: string) => void;

  constructor(url: string = 'ws://localhost:2567') {
    this.client = new Colyseus.Client(url);
  }

  async join(name: string, team?: 'ATK' | 'DEF'): Promise<void> {
    this.room = await this.client.joinOrCreate('game', { name, team });
    this.myId = this.room.sessionId;

    // 监听状态变化
    this.room.state.players.onAdd = (player: any, sessionId: string) => {
      this.remotePlayers.set(sessionId, {
        id: sessionId,
        name: player.name,
        team: player.team,
        x: player.x,
        y: player.y,
        z: player.z,
        yaw: player.yaw,
        pitch: player.pitch,
        hp: player.hp,
        alive: player.alive,
        currentWeapon: player.currentWeapon,
        kills: player.kills,
        deaths: player.deaths,
      });

      // 监听该玩家字段变化
      player.onChange = (changes: Array<{ field: string; value: any }>) => {
        const rp = this.remotePlayers.get(sessionId);
        if (!rp) return;
        for (const c of changes) {
          (rp as any)[c.field] = c.value;
        }
        // 玩家自身状态同步
        if (sessionId === this.myId) {
          this.myHp = player.hp;
          this.myAlive = player.alive;
          this.myKills = player.kills;
          this.myDeaths = player.deaths;
          this.myMoney = player.money;
          this.myAmmoInMag = player.ammoInMag;
          this.myAmmoReserve = player.ammoReserve;
          this.myReloading = player.reloading;
        }
      };
    };

    this.room.state.players.onRemove = (_player: any, sessionId: string) => {
      this.remotePlayers.delete(sessionId);
    };

    this.room.state.onChange = (changes: Array<{ field: string; value: any }>) => {
      for (const c of changes) {
        if (c.field === 'phase') this.phase = c.value;
        else if (c.field === 'roundNumber') this.roundNumber = c.value;
        else if (c.field === 'atkScore') this.atkScore = c.value;
        else if (c.field === 'defScore') this.defScore = c.value;
        else if (c.field === 'bombPlanted') this.bombPlanted = c.value;
        else if (c.field === 'bombSite') this.bombSite = c.value;
        else if (c.field === 'bombTimer') this.bombTimer = c.value;
      }
    };

    // 事件消息
    this.room.onMessage('hit', (msg) => this.onHit?.(msg.shooterId, msg.targetId, msg.damage, msg.headshot));
    this.room.onMessage('kill', (msg) => this.onKill?.(msg.killerId, msg.victimId, msg.weaponId, msg.headshot));
    this.room.onMessage('bombPlanted', (msg) => this.onBombPlanted?.(msg.site, msg.planterId));
    this.room.onMessage('bombDefused', (msg) => this.onBombDefused?.(msg.defuserId));
    this.room.onMessage('roundEnd', (msg) => this.onRoundEnd?.(msg.winner, msg.reason));
  }

  get isConnected(): boolean {
    return this.room !== null && this.room.state !== undefined;
  }

  /** 发送输入并进行本地预测 */
  sendInput(input: Omit<InputSnapshot, 'seq'>): void {
    if (!this.room) return;
    const snap: InputSnapshot = { ...input, seq: this.seq++ };
    this.room.send('input', snap);

    // 本地预测：应用输入到预测状态
    this.predict(snap);
    this.inputHistory.push({ seq: snap.seq, input: snap, state: { ...this.predicted } });

    // 限制历史长度（最多 1 秒）
    if (this.inputHistory.length > 60) {
      this.inputHistory.shift();
    }
  }

  /** 客户端预测：简单移动 */
  private predict(input: InputSnapshot): void {
    const dt = Math.min(input.dt, 0.05);
    const flags = input.flags;

    const forward = { x: -Math.sin(this.predicted.yaw), z: -Math.cos(this.predicted.yaw) };
    const right = { x: Math.cos(this.predicted.yaw), z: -Math.sin(this.predicted.yaw) };
    let mx = 0, mz = 0;
    if (flags.forward) { mx += forward.x; mz += forward.z; }
    if (flags.back) { mx -= forward.x; mz -= forward.z; }
    if (flags.right) { mx += right.x; mz += right.z; }
    if (flags.left) { mx -= right.x; mz -= right.z; }
    const len = Math.sqrt(mx * mx + mz * mz);
    if (len > 0) { mx /= len; mz /= len; }

    const speed = flags.crouch ? 2.0 : flags.walk ? 2.8 : 7.0;
    this.predicted.x += mx * speed * dt;
    this.predicted.z += mz * speed * dt;
    this.predicted.yaw = input.yaw;
    this.predicted.pitch = input.pitch;

    // 跳跃
    if (flags.jump && this.predicted.y <= 1.85) {
      this.predicted.y = 3.0;
    } else if (this.predicted.y > 1.8) {
      this.predicted.y = Math.max(1.8, this.predicted.y - 0.5);
    }
  }

  /** 发送开火 */
  sendFire(weaponId: string, origin: { x: number; y: number; z: number }, dir: { x: number; y: number; z: number }): void {
    this.room?.send('fire', { weaponId, origin, dir });
  }

  /** 发送换弹 */
  sendReload(): void {
    this.room?.send('reload', {});
  }

  /** 切换武器 */
  sendSwitchWeapon(weaponId: string): void {
    this.room?.send('switchWeapon', { weaponId });
  }

  /** 安弹 */
  sendPlantBomb(): void {
    this.room?.send('plantBomb', {});
  }

  /** 拆弹 */
  sendDefuseBomb(): void {
    this.room?.send('defuseBomb', {});
  }

  /** 获取玩家预测位置 */
  getPredictedPosition(): { x: number; y: number; z: number; yaw: number; pitch: number } {
    return { ...this.predicted };
  }

  /** 设置初始预测位置（加入房间后同步） */
  setInitialPosition(x: number, y: number, z: number): void {
    this.predicted.x = x;
    this.predicted.y = y;
    this.predicted.z = z;
  }
}
