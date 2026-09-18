/** 网络消息协议 */
import type { InputSnapshot } from './player';

/** 客户端→服务器 消息类型 */
export type ClientMessage =
  | { type: 'join'; name: string; team?: 'ATK' | 'DEF' }
  | { type: 'input'; input: InputSnapshot }
  | { type: 'fire'; weaponId: string; origin: Vec3; dir: Vec3 }
  | { type: 'reload' }
  | { type: 'switchWeapon'; weaponId: string }
  | { type: 'buy'; itemId: string }
  | { type: 'plantBomb' }
  | { type: 'defuseBomb' };

/** 服务器→客户端 消息类型 */
export type ServerMessage =
  | { type: 'welcome'; yourId: string; state: GameSnapshot }
  | { type: 'snapshot'; state: GameSnapshot; ack: number }
  | { type: 'hit'; shooterId: string; targetId: string; damage: number; headshot: boolean }
  | { type: 'kill'; killerId: string; victimId: string; weaponId: string; headshot: boolean }
  | { type: 'phase'; phase: string; startTime: number; duration: number }
  | { type: 'roundEnd'; winner: 'ATK' | 'DEF'; reason: string }
  | { type: 'bombPlanted'; site: 'A' | 'B'; planterId: string }
  | { type: 'bombDefused'; defuserId: string }
  | { type: 'bombExploded' };

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/** 游戏快照（服务器权威状态） */
export interface GameSnapshot {
  tick: number;
  players: Array<{
    id: string;
    name: string;
    team: 'ATK' | 'DEF';
    position: Vec3;
    yaw: number;
    pitch: number;
    hp: number;
    armor: number;
    alive: boolean;
    money: number;
    currentWeapon: string;
    kills: number;
    deaths: number;
  }>;
  atkScore: number;
  defScore: number;
  phase: string;
  bombPlanted: boolean;
  bombSite: 'A' | 'B' | null;
}

/** 射击事件（客户端预测用） */
export interface ShotEvent {
  shooterId: string;
  weaponId: string;
  origin: Vec3;
  dir: Vec3;
  timestamp: number;
}
