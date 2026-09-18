/** 玩家与队伍定义 */

export type Team = 'ATK' | 'DEF' | 'SPECTATOR';

export type PlayerInputFlags = {
  forward: boolean;
  back: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
  crouch: boolean;
  walk: boolean;
  fire: boolean;
  reload: boolean;
  scope: boolean;
};

/** 玩家状态（服务器权威，客户端预测副本） */
export interface PlayerState {
  id: string;
  name: string;
  team: Team;
  /** 世界坐标 */
  position: { x: number; y: number; z: number };
  /** 朝向：yaw 偏航, pitch 俯仰（弧度） */
  yaw: number;
  pitch: number;
  /** 速度 */
  velocity: { x: number; y: number; z: number };
  /** 生命值 0-100 */
  hp: number;
  /** 护甲 0-100 */
  armor: number;
  /** 是否存活 */
  alive: boolean;
  /** 是否蹲伏 */
  crouching: boolean;
  /** 是否走路（静音） */
  walking: boolean;
  /** 金钱 */
  money: number;
  /** 当前装备武器 ID */
  currentWeapon: string;
  /** 背包武器 ID 列表 */
  weapons: string[];
  /** 杀敌数 */
  kills: number;
  /** 死亡数 */
  deaths: number;
  /** 爆头数 */
  headshots: number;
  /** 本回合是否安放/拆除过炸弹 */
  hasBomb: boolean;
}

/** 客户端输入快照（用于网络同步/预测） */
export interface InputSnapshot {
  seq: number;
  dt: number;
  yaw: number;
  pitch: number;
  flags: PlayerInputFlags;
}

/** 玩家配置（灵敏度等，本地存储） */
export interface PlayerSettings {
  mouseSensitivity: number;
  fov: number;
  invertY: boolean;
  volume: number;
  crosshairColor: string;
  crosshairSize: number;
}

export const DEFAULT_SETTINGS: PlayerSettings = {
  mouseSensitivity: 0.0022,
  fov: 90,
  invertY: false,
  volume: 0.7,
  crosshairColor: '#00ff00',
  crosshairSize: 6,
};
