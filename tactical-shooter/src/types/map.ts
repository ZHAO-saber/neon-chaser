/** 地图定义 */

/** 地图中一个障碍物（墙/箱） */
export interface MapBlock {
  /** 中心位置 */
  position: { x: number; y: number; z: number };
  /** 尺寸 */
  size: { x: number; y: number; z: number };
  /** 材质类型 */
  material: 'wall' | 'crate' | 'metal' | 'ground';
  /** 是否可穿透 */
  penetrable: boolean;
}

/** 炸弹点 */
export interface BombSite {
  id: 'A' | 'B';
  position: { x: number; y: number; z: number };
  radius: number;
}

/** 出生点 */
export interface SpawnPoint {
  position: { x: number; y: number; z: number };
  team: 'ATK' | 'DEF';
}

/** 导航点（Bot 用） */
export interface NavPoint {
  id: string;
  position: { x: number; y: number; z: number };
  /** 相邻点 ID */
  neighbors: string[];
}

/** 完整地图数据 */
export interface MapData {
  id: string;
  name: string;
  /** 地面尺寸 */
  groundSize: { x: number; z: number };
  blocks: MapBlock[];
  bombSites: BombSite[];
  spawns: { ATK: SpawnPoint[]; DEF: SpawnPoint[] };
  navPoints: NavPoint[];
}

/** 阶段1测试地图：简单训练场 */
export const TRAINING_MAP: MapData = {
  id: 'training',
  name: 'Training Range',
  groundSize: { x: 60, z: 60 },
  blocks: [
    // 四周墙壁
    { position: { x: 0, y: 3, z: -30 }, size: { x: 60, y: 6, z: 0.5 }, material: 'wall', penetrable: false },
    { position: { x: 0, y: 3, z: 30 }, size: { x: 60, y: 6, z: 0.5 }, material: 'wall', penetrable: false },
    { position: { x: -30, y: 3, z: 0 }, size: { x: 0.5, y: 6, z: 60 }, material: 'wall', penetrable: false },
    { position: { x: 30, y: 3, z: 0 }, size: { x: 0.5, y: 6, z: 60 }, material: 'wall', penetrable: false },
    // 几个掩体箱
    { position: { x: -10, y: 1, z: 0 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 10, y: 1, z: 5 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 0, y: 1, z: -15 }, size: { x: 6, y: 2, z: 3 }, material: 'crate', penetrable: false },
  ],
  bombSites: [],
  spawns: { ATK: [], DEF: [] },
  navPoints: [],
};
