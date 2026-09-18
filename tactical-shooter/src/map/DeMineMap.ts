/**
 * De_Mine：拆弹模式地图
 * - 80x80 地面
 * - A 点位于 (-25, 0, -25)，B 点位于 (25, 0, 25)
 * - ATK 出生在 z=+35 附近，DEF 出生在 z=-35 附近
 * - 中路贯穿地图中心，连接两个炸弹点
 */

import type { MapData } from '../types/map';

/** De_Mine 完整地图数据 */
export const DE_MINE_MAP: MapData = {
  id: 'de_mine',
  name: 'De_Mine',
  groundSize: { x: 80, z: 80 },

  blocks: [
    // === 四周围墙 ===
    { position: { x: 0, y: 3, z: -40 }, size: { x: 80, y: 6, z: 0.5 }, material: 'wall', penetrable: false },
    { position: { x: 0, y: 3, z: 40 }, size: { x: 80, y: 6, z: 0.5 }, material: 'wall', penetrable: false },
    { position: { x: -40, y: 3, z: 0 }, size: { x: 0.5, y: 6, z: 80 }, material: 'wall', penetrable: false },
    { position: { x: 40, y: 3, z: 0 }, size: { x: 0.5, y: 6, z: 80 }, material: 'wall', penetrable: false },

    // === 中路入口侧墙（限定通道宽度） ===
    { position: { x: -6, y: 3, z: 30 }, size: { x: 0.5, y: 6, z: 12 }, material: 'wall', penetrable: false },
    { position: { x: 6, y: 3, z: 30 }, size: { x: 0.5, y: 6, z: 12 }, material: 'wall', penetrable: false },
    { position: { x: -6, y: 3, z: -30 }, size: { x: 0.5, y: 6, z: 12 }, material: 'wall', penetrable: false },
    { position: { x: 6, y: 3, z: -30 }, size: { x: 0.5, y: 6, z: 12 }, material: 'wall', penetrable: false },

    // === A 点平台标记（红色金属台） ===
    { position: { x: -25, y: 0.1, z: -25 }, size: { x: 6, y: 0.2, z: 6 }, material: 'metal', penetrable: false },

    // === B 点平台标记（红色金属台） ===
    { position: { x: 25, y: 0.1, z: 25 }, size: { x: 6, y: 0.2, z: 6 }, material: 'metal', penetrable: false },

    // === 掩体箱子（14个，分布合理） ===
    // 中路
    { position: { x: -10, y: 1, z: 5 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 10, y: 1, z: -5 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: -5, y: 1, z: 0 }, size: { x: 2, y: 2, z: 2 }, material: 'crate', penetrable: false },
    { position: { x: 5, y: 1, z: 0 }, size: { x: 2, y: 2, z: 2 }, material: 'crate', penetrable: false },
    { position: { x: 0, y: 1, z: 25 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 0, y: 1, z: -25 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },

    // A 点附近掩体
    { position: { x: -25, y: 1, z: -20 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: -30, y: 1, z: -25 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: -20, y: 1, z: -30 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },

    // B 点附近掩体
    { position: { x: 25, y: 1, z: 20 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 30, y: 1, z: 25 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 20, y: 1, z: 30 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },

    // A/B 路径掩体
    { position: { x: -15, y: 1, z: 15 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 15, y: 1, z: 15 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: -15, y: 1, z: -15 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
    { position: { x: 15, y: 1, z: -15 }, size: { x: 3, y: 2, z: 3 }, material: 'crate', penetrable: false },
  ],

  bombSites: [
    { id: 'A', position: { x: -25, y: 0, z: -25 }, radius: 3 },
    { id: 'B', position: { x: 25, y: 0, z: 25 }, radius: 3 },
  ],

  spawns: {
    ATK: [
      { position: { x: -2, y: 0, z: 35 }, team: 'ATK' },
      { position: { x: 0, y: 0, z: 35 }, team: 'ATK' },
      { position: { x: 2, y: 0, z: 35 }, team: 'ATK' },
    ],
    DEF: [
      { position: { x: -2, y: 0, z: -35 }, team: 'DEF' },
      { position: { x: 0, y: 0, z: -35 }, team: 'DEF' },
      { position: { x: 2, y: 0, z: -35 }, team: 'DEF' },
    ],
  },

  // 导航点：ATK 出生 → 中路 / A 路 / B 路 → A 点 / B 点 → DEF 出生
  navPoints: [
    // ATK 出生区域
    { id: 'n_atk_spawn', position: { x: 0, y: 0, z: 35 }, neighbors: ['n_atk_mid', 'n_a_1', 'n_b_1'] },
    { id: 'n_atk_mid', position: { x: 0, y: 0, z: 28 }, neighbors: ['n_atk_spawn', 'n_mid_1'] },

    // 中路
    { id: 'n_mid_1', position: { x: 0, y: 0, z: 18 }, neighbors: ['n_atk_mid', 'n_mid_2'] },
    { id: 'n_mid_2', position: { x: 0, y: 0, z: 8 }, neighbors: ['n_mid_1', 'n_mid_3'] },
    { id: 'n_mid_3', position: { x: 0, y: 0, z: -2 }, neighbors: ['n_mid_2', 'n_mid_4'] },
    { id: 'n_mid_4', position: { x: 0, y: 0, z: -12 }, neighbors: ['n_mid_3', 'n_mid_5'] },
    { id: 'n_mid_5', position: { x: 0, y: 0, z: -22 }, neighbors: ['n_mid_4', 'n_def_spawn'] },

    // DEF 出生
    { id: 'n_def_spawn', position: { x: 0, y: 0, z: -32 }, neighbors: ['n_mid_5', 'n_a_site', 'n_b_site'] },

    // A 路径
    { id: 'n_a_1', position: { x: -10, y: 0, z: 22 }, neighbors: ['n_atk_spawn', 'n_a_2'] },
    { id: 'n_a_2', position: { x: -18, y: 0, z: 12 }, neighbors: ['n_a_1', 'n_a_3'] },
    { id: 'n_a_3', position: { x: -25, y: 0, z: 0 }, neighbors: ['n_a_2', 'n_a_4'] },
    { id: 'n_a_4', position: { x: -25, y: 0, z: -15 }, neighbors: ['n_a_3', 'n_a_site'] },
    { id: 'n_a_site', position: { x: -25, y: 0, z: -25 }, neighbors: ['n_a_4', 'n_def_spawn'] },

    // B 路径
    { id: 'n_b_1', position: { x: 10, y: 0, z: 28 }, neighbors: ['n_atk_spawn', 'n_b_2'] },
    { id: 'n_b_2', position: { x: 18, y: 0, z: 18 }, neighbors: ['n_b_1', 'n_b_3'] },
    { id: 'n_b_3', position: { x: 25, y: 0, z: 8 }, neighbors: ['n_b_2', 'n_b_4'] },
    { id: 'n_b_4', position: { x: 25, y: 0, z: 18 }, neighbors: ['n_b_3', 'n_b_site'] },
    { id: 'n_b_site', position: { x: 25, y: 0, z: 25 }, neighbors: ['n_b_4'] },
  ],
};
