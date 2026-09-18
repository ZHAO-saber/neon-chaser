/** 武器类型定义 */

export type WeaponId = 'pistol' | 'rifle' | 'sniper' | 'knife' | 'grenade';

export type FireMode = 'semi' | 'auto' | 'bolt';

/** 武器静态配置（平衡用，不随玩家状态变化） */
export interface WeaponConfig {
  id: WeaponId;
  name: string;
  price: number;
  /** 弹匣容量 */
  magSize: number;
  /** 备弹上限 */
  reserveMax: number;
  /** 射速：发/分钟 */
  fireRate: number;
  /** 单发伤害（身体） */
  damage: number;
  /** 爆头伤害倍率 */
  headshotMultiplier: number;
  /** 射程（米） */
  range: number;
  /** 伤害衰减：每米损失百分比 */
  damageFalloff: number;
  /** 后坐力：每发垂直上跳（度） */
  recoilVertical: number;
  /** 后坐力：水平随机范围（度） */
  recoilHorizontal: number;
  /** 静止扩散（弧度） */
  spreadBase: number;
  /** 移动扩散加成 */
  spreadMove: number;
  /** 跳跃扩散加成 */
  spreadJump: number;
  /** 换弹时间（秒） */
  reloadTime: number;
  /** 切枪时间（秒） */
  deployTime: number;
  /** 穿透层数（穿墙） */
  penetration: number;
  /** 射击模式 */
  fireMode: FireMode;
  /** 是否可开镜 */
  canScope: boolean;
  /** 开镜倍率 */
  scopeZoom: number;
  /** 开镜时扩散倍率 */
  scopeSpreadMultiplier: number;
}

/** 武器运行时状态 */
export interface WeaponState {
  config: WeaponConfig;
  /** 当前弹匣子弹 */
  ammoInMag: number;
  /** 备弹 */
  ammoReserve: number;
  /** 下次可开火时间戳（ms） */
  nextFireTime: number;
  /** 是否正在换弹 */
  reloading: boolean;
  /** 换弹完成时间戳 */
  reloadEndTime: number;
  /** 是否开镜 */
  scoped: boolean;
  /** 当前后坐力累积（用于回弹） */
  recoilOffset: number;
}

/** 一次射击的命中结果 */
export interface HitResult {
  hit: boolean;
  /** 命中点世界坐标 */
  point: { x: number; y: number; z: number };
  /** 命中的法线 */
  normal: { x: number; y: number; z: number };
  /** 命中目标 ID */
  targetId: string | null;
  /** 是否爆头 */
  headshot: boolean;
  /** 实际伤害（含衰减） */
  damage: number;
  /** 穿透剩余层数 */
  penetrationLeft: number;
}

/** 预设武器表 */
export const WEAPON_PRESETS: Record<WeaponId, WeaponConfig> = {
  pistol: {
    id: 'pistol', name: 'Pistol', price: 200,
    magSize: 12, reserveMax: 48, fireRate: 300, damage: 25,
    headshotMultiplier: 2.0, range: 40, damageFalloff: 0.01,
    recoilVertical: 1.5, recoilHorizontal: 0.5,
    spreadBase: 0.005, spreadMove: 0.02, spreadJump: 0.06,
    reloadTime: 1.8, deployTime: 0.5, penetration: 1,
    fireMode: 'semi', canScope: false, scopeZoom: 1, scopeSpreadMultiplier: 1,
  },
  rifle: {
    id: 'rifle', name: 'Rifle', price: 2700,
    magSize: 30, reserveMax: 90, fireRate: 600, damage: 33,
    headshotMultiplier: 4.0, range: 80, damageFalloff: 0.008,
    recoilVertical: 2.0, recoilHorizontal: 0.8,
    spreadBase: 0.004, spreadMove: 0.03, spreadJump: 0.08,
    reloadTime: 2.5, deployTime: 0.8, penetration: 2,
    fireMode: 'auto', canScope: true, scopeZoom: 1.4, scopeSpreadMultiplier: 0.3,
  },
  sniper: {
    id: 'sniper', name: 'Sniper', price: 4750,
    magSize: 5, reserveMax: 30, fireRate: 50, damage: 115,
    headshotMultiplier: 3.0, range: 200, damageFalloff: 0.001,
    recoilVertical: 8.0, recoilHorizontal: 1.0,
    spreadBase: 0.001, spreadMove: 0.15, spreadJump: 0.2,
    reloadTime: 3.5, deployTime: 1.2, penetration: 5,
    fireMode: 'bolt', canScope: true, scopeZoom: 4.0, scopeSpreadMultiplier: 0.05,
  },
  knife: {
    id: 'knife', name: 'Knife', price: 0,
    magSize: 0, reserveMax: 0, fireRate: 120, damage: 55,
    headshotMultiplier: 2.0, range: 2.5, damageFalloff: 0,
    recoilVertical: 0, recoilHorizontal: 0,
    spreadBase: 0, spreadMove: 0, spreadJump: 0,
    reloadTime: 0, deployTime: 0.3, penetration: 0,
    fireMode: 'semi', canScope: false, scopeZoom: 1, scopeSpreadMultiplier: 1,
  },
  grenade: {
    id: 'grenade', name: 'Grenade', price: 300,
    magSize: 1, reserveMax: 2, fireRate: 60, damage: 80,
    headshotMultiplier: 1, range: 30, damageFalloff: 0,
    recoilVertical: 0, recoilHorizontal: 0,
    spreadBase: 0, spreadMove: 0, spreadJump: 0,
    reloadTime: 0, deployTime: 0.6, penetration: 0,
    fireMode: 'semi', canScope: false, scopeZoom: 1, scopeSpreadMultiplier: 1,
  },
};
