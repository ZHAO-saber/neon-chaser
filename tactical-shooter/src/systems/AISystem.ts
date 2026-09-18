/**
 * Bot AI 系统：状态机驱动的电脑单位
 * 状态：IDLE(巡逻) → ENGAGE(交战) → SEARCH(搜索) → PLANT(安弹) → DEFUSE(拆弹)
 * 视线检测：距离 + 视野角度 + AABB 障碍物遮挡
 */

import * as THREE from 'three';
import type { MapBlock, MapData, NavPoint } from '../types/map';

type BotState = 'IDLE' | 'ENGAGE' | 'SEARCH' | 'PLANT' | 'DEFUSE';

/** 单个 Bot 实例（兼容 BulletSystem.Target 接口：mesh/headMesh/onHit） */
export interface Bot {
  id: string;
  team: 'ATK' | 'DEF';
  hp: number;
  currentWeapon: 'rifle';
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  yaw: number;
  state: BotState;
  mesh: THREE.Group;
  bodyMesh: THREE.Mesh;
  headMesh: THREE.Mesh;
  /** AI 内部状态 */
  navTargetId: string;
  fireTimer: number;
  plantTimer: number;
  defuseTimer: number;
  lastSeenEnemyPos: THREE.Vector3 | null;
  lowHpRetreat: boolean;
  alive: boolean;
  onHit?: (damage: number, headshot: boolean) => void;
}

/** 敌人信息（外部传入，用于 AI 决策） */
export interface EnemyInfo {
  id: string;
  position: THREE.Vector3;
  team: 'ATK' | 'DEF';
  alive: boolean;
  /** 是否正在开火（开火的敌人会被远处 Bot 听到） */
  firing: boolean;
  onHit?: (damage: number, headshot: boolean) => void;
}

/** 武器伤害配置（简化版） */
const RIFLE_DAMAGE = 33;
const BOT_SPEED = 4.5;
const BOT_RUN_SPEED = 6.0;
const VISION_RANGE = 30;
const VISION_FOV = Math.PI / 3; // 视野半角 60°
const FIRE_INTERVAL_MIN = 0.5;
const FIRE_INTERVAL_MAX = 1.0;
const FIRE_ACCURACY = 0.7;
const PLANT_DURATION = 3.0;
const DEFUSE_DURATION = 5.0;
const LOW_HP_THRESHOLD = 30;

export class AISystem {
  private bots: Bot[] = [];
  private scene: THREE.Scene;
  private navMap: Map<string, NavPoint>;
  private navPointList: NavPoint[];
  private blocks: MapBlock[];
  private bombPosition: THREE.Vector3 | null = null;
  private bombPlanted = false;
  private botCounter = 0;

  /** Bot 开火时触发（用于外部播放音效/生成弹道） */
  onBotFire?: (bot: Bot, targetPos: THREE.Vector3, hit: boolean) => void;
  /** 炸弹安放完成 */
  onBombPlanted?: (site: 'A' | 'B', position: THREE.Vector3) => void;
  /** 炸弹拆除完成 */
  onBombDefused?: () => void;
  /** Bot 死亡 */
  onBotDied?: (bot: Bot) => void;

  constructor(scene: THREE.Scene, map: MapData) {
    this.scene = scene;
    this.navPointList = map.navPoints;
    this.navMap = new Map(map.navPoints.map(p => [p.id, p]));
    this.blocks = map.blocks;
  }

  /** 设置炸弹状态（外部 RoundSystem 通知） */
  setBombState(planted: boolean, _site: 'A' | 'B' | null, position: THREE.Vector3 | null): void {
    this.bombPlanted = planted;
    this.bombPosition = position ? position.clone() : null;
  }

  /** 安放炸弹位置（A/B 点中心） */
  private getBombSitePosition(site: 'A' | 'B'): THREE.Vector3 {
    return site === 'A' ? new THREE.Vector3(-25, 0, -25) : new THREE.Vector3(25, 0, 25);
  }

  /** 生成一个 Bot */
  spawnBot(team: 'ATK' | 'DEF', position: THREE.Vector3): Bot {
    const id = `bot_${this.botCounter++}`;
    const group = new THREE.Group();
    group.position.copy(position);

    // 身体：CapsuleGeometry(0.4, 1.0)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: team === 'ATK' ? 0xcc4444 : 0x4488ff,
      roughness: 0.6,
    });
    const bodyMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.0, 8, 16), bodyMat);
    bodyMesh.position.y = 0.9;
    bodyMesh.castShadow = true;
    bodyMesh.userData.botId = id;
    bodyMesh.userData.collidable = true;
    group.add(bodyMesh);

    // 头部：SphereGeometry(0.25)
    const headMat = new THREE.MeshStandardMaterial({
      color: team === 'ATK' ? 0xff8888 : 0x88bbff,
      roughness: 0.5,
    });
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 12), headMat);
    headMesh.position.y = 1.7;
    headMesh.castShadow = true;
    headMesh.userData.botId = id;
    headMesh.userData.collidable = true;
    group.add(headMesh);

    // 起始导航点：离出生位置最近的
    const startNavId = this.findClosestNavPoint(position);

    const bot: Bot = {
      id,
      team,
      hp: 100,
      currentWeapon: 'rifle',
      position: position.clone(),
      velocity: new THREE.Vector3(),
      yaw: 0,
      state: 'IDLE',
      mesh: group,
      bodyMesh,
      headMesh,
      navTargetId: startNavId,
      fireTimer: 0,
      plantTimer: 0,
      defuseTimer: 0,
      lastSeenEnemyPos: null,
      lowHpRetreat: false,
      alive: true,
    };
    bot.onHit = (damage: number, headshot: boolean) => this.handleBotHit(bot, damage, headshot);

    this.bots.push(bot);
    this.scene.add(group);
    return bot;
  }

  /** 返回所有存活 Bot */
  getBots(): Bot[] {
    return this.bots.filter(b => b.alive);
  }

  /** 返回所有 Bot（含已死亡） */
  getAllBots(): Bot[] {
    return this.bots;
  }

  /** 按队伍筛选存活 Bot */
  getBotsByTeam(team: 'ATK' | 'DEF'): Bot[] {
    return this.bots.filter(b => b.alive && b.team === team);
  }

  /** 标记 Bot 死亡 */
  removeBot(id: string): void {
    const bot = this.bots.find(b => b.id === id);
    if (!bot) return;
    bot.alive = false;
    bot.mesh.visible = false;
  }

  /** 清空所有 Bot（释放几何体/材质） */
  reset(): void {
    for (const bot of this.bots) {
      this.scene.remove(bot.mesh);
      bot.bodyMesh.geometry.dispose();
      (bot.bodyMesh.material as THREE.Material).dispose();
      bot.headMesh.geometry.dispose();
      (bot.headMesh.material as THREE.Material).dispose();
    }
    this.bots = [];
    this.botCounter = 0;
  }

  /** 处理 Bot 被击中（外部直接调用形式） */
  onHit(botId: string, damage: number, headshot: boolean): void {
    const bot = this.bots.find(b => b.id === botId);
    if (bot?.onHit) bot.onHit(damage, headshot);
  }

  /** 内部：Bot 被击中的处理逻辑 */
  private handleBotHit(bot: Bot, damage: number, headshot: boolean): void {
    if (!bot.alive) return;
    // 爆头四倍伤害（与 WeaponSystem 配置一致）
    bot.hp -= headshot ? damage * 4 : damage;
    if (bot.hp <= 0) {
      bot.hp = 0;
      bot.alive = false;
      bot.mesh.visible = false;
      this.onBotDied?.(bot);
      return;
    }
    // 血量低于阈值触发撤退
    if (bot.hp < LOW_HP_THRESHOLD && !bot.lowHpRetreat) {
      bot.lowHpRetreat = true;
      bot.state = 'SEARCH';
      bot.lastSeenEnemyPos = null;
    }
  }

  /** 主更新入口：dt 秒，playerPosition 玩家位置，enemies 所有敌人 */
  update(dt: number, playerPosition: THREE.Vector3, enemies: EnemyInfo[]): void {
    for (const bot of this.bots) {
      if (!bot.alive) continue;
      this.updateBot(bot, dt, playerPosition, enemies);
    }
  }

  private updateBot(bot: Bot, dt: number, playerPosition: THREE.Vector3, enemies: EnemyInfo[]): void {
    const enemyTeam: 'ATK' | 'DEF' = bot.team === 'ATK' ? 'DEF' : 'ATK';
    let hostiles = enemies.filter(e => e.alive && e.team === enemyTeam);

    // 兜底：若玩家未在 enemies 列表中且距离够近，作为候选加入
    // Game 层通常会把玩家放入 enemies，这里仅作保险
    const playerListed = enemies.some(e => e.id === 'player');
    if (!playerListed) {
      const dist = bot.position.distanceTo(playerPosition);
      if (dist < VISION_RANGE) {
        hostiles = hostiles.concat([{
          id: 'player',
          position: playerPosition.clone(),
          team: enemyTeam,
          alive: true,
          firing: false,
        }]);
      }
    }

    const visibleTarget = this.findVisibleEnemy(bot, hostiles);

    switch (bot.state) {
      case 'IDLE':
        this.stateIdle(bot, dt, visibleTarget);
        break;
      case 'ENGAGE':
        this.stateEngage(bot, dt, visibleTarget);
        break;
      case 'SEARCH':
        this.stateSearch(bot, dt, visibleTarget);
        break;
      case 'PLANT':
        this.statePlant(bot, dt);
        break;
      case 'DEFUSE':
        this.stateDefuse(bot, dt);
        break;
    }

    // 同步 mesh 位置/朝向
    bot.mesh.position.copy(bot.position);
    bot.mesh.rotation.y = bot.yaw;
  }

  // === IDLE：巡逻 / 任务推进 ===
  private stateIdle(bot: Bot, dt: number, visibleTarget: EnemyInfo | null): void {
    // 发现敌人 → ENGAGE
    if (visibleTarget) {
      bot.lastSeenEnemyPos = visibleTarget.position.clone();
      bot.state = 'ENGAGE';
      bot.fireTimer = 0;
      return;
    }

    // ATK：若尚未安放炸弹，前往最近的炸弹点安放
    if (bot.team === 'ATK' && !this.bombPlanted) {
      const site = this.pickNearestBombSite(bot.position);
      const sitePos = this.getBombSitePosition(site);
      const dist = bot.position.distanceTo(sitePos);
      if (dist < 4) {
        bot.state = 'PLANT';
        bot.plantTimer = 0;
        return;
      }
      this.moveTowardsNavTarget(bot, dt, this.findClosestNavPoint(sitePos), BOT_RUN_SPEED);
      return;
    }

    // DEF：若炸弹已安放，前往拆除
    if (bot.team === 'DEF' && this.bombPlanted && this.bombPosition) {
      const dist = bot.position.distanceTo(this.bombPosition);
      if (dist < 3) {
        bot.state = 'DEFUSE';
        bot.defuseTimer = 0;
        return;
      }
      this.moveTowardsNavTarget(bot, dt, this.findClosestNavPoint(this.bombPosition), BOT_RUN_SPEED);
      return;
    }

    // 默认巡逻：沿导航点移动
    this.patrolAlongNav(bot, dt);
  }

  // === ENGAGE：交战 ===
  private stateEngage(bot: Bot, dt: number, visibleTarget: EnemyInfo | null): void {
    // 血量过低撤退
    if (bot.lowHpRetreat) {
      bot.state = 'SEARCH';
      return;
    }
    // 失去视野 → SEARCH
    if (!visibleTarget) {
      bot.state = 'SEARCH';
      return;
    }

    bot.lastSeenEnemyPos = visibleTarget.position.clone();

    // 瞄准敌人
    const dir = new THREE.Vector3().subVectors(visibleTarget.position, bot.position);
    const targetYaw = Math.atan2(dir.x, dir.z);
    bot.yaw = this.lerpAngle(bot.yaw, targetYaw, Math.min(1, dt * 8));

    // 距离过远拉近，过近后退
    const dist = dir.length();
    if (dist > 20) {
      this.moveTowardsPosition(bot, dt, visibleTarget.position, BOT_RUN_SPEED);
    } else if (dist < 6) {
      const back = dir.clone().setY(0).normalize().multiplyScalar(-1);
      const backPos = bot.position.clone().addScaledVector(back, 5);
      this.moveTowardsPosition(bot, dt, backPos, BOT_SPEED);
    }

    // 开火：每 0.5-1 秒一枪
    bot.fireTimer -= dt;
    if (bot.fireTimer <= 0) {
      bot.fireTimer = FIRE_INTERVAL_MIN + Math.random() * (FIRE_INTERVAL_MAX - FIRE_INTERVAL_MIN);
      this.botFire(bot, visibleTarget);
    }
  }

  // === SEARCH：搜索 ===
  private stateSearch(bot: Bot, dt: number, visibleTarget: EnemyInfo | null): void {
    // 重新发现敌人 → ENGAGE
    if (visibleTarget) {
      bot.lastSeenEnemyPos = visibleTarget.position.clone();
      bot.state = 'ENGAGE';
      bot.fireTimer = 0;
      return;
    }

    // 低血量撤退到最近掩体
    if (bot.lowHpRetreat) {
      const cover = this.findNearestCover(bot.position);
      if (cover) {
        const dist = bot.position.distanceTo(cover);
        if (dist < 1.5) {
          bot.lowHpRetreat = false;
          bot.state = 'IDLE';
          return;
        }
        this.moveTowardsPosition(bot, dt, cover, BOT_RUN_SPEED);
        return;
      }
      // 找不到掩体，恢复正常
      bot.lowHpRetreat = false;
    }

    // 走向最后看到敌人的位置
    if (bot.lastSeenEnemyPos) {
      const dist = bot.position.distanceTo(bot.lastSeenEnemyPos);
      if (dist < 2) {
        bot.lastSeenEnemyPos = null;
      } else {
        this.moveTowardsPosition(bot, dt, bot.lastSeenEnemyPos, BOT_RUN_SPEED);
        return;
      }
    }

    // 没有线索：恢复巡逻
    this.patrolAlongNav(bot, dt);
  }

  // === PLANT：安弹（原地停留3秒） ===
  private statePlant(bot: Bot, dt: number): void {
    bot.plantTimer += dt;
    if (bot.plantTimer >= PLANT_DURATION) {
      const site = this.pickNearestBombSite(bot.position);
      const sitePos = this.getBombSitePosition(site);
      this.bombPlanted = true;
      this.bombPosition = sitePos.clone();
      this.onBombPlanted?.(site, sitePos);
      bot.state = 'IDLE';
    }
  }

  // === DEFUSE：拆弹（原地停留5秒） ===
  private stateDefuse(bot: Bot, dt: number): void {
    bot.defuseTimer += dt;
    if (bot.defuseTimer >= DEFUSE_DURATION) {
      this.bombPlanted = false;
      this.bombPosition = null;
      this.onBombDefused?.();
      bot.state = 'IDLE';
    }
  }

  // === Bot 开火 ===
  private botFire(bot: Bot, target: EnemyInfo): void {
    // 命中概率带随机偏差
    const hit = Math.random() < FIRE_ACCURACY;
    const targetPos = target.position.clone();
    targetPos.y += 1.0; // 朝躯干高度射击

    if (hit && target.onHit) {
      // 爆头概率 25%
      const headshot = Math.random() < 0.25;
      target.onHit(RIFLE_DAMAGE, headshot);
    }

    this.onBotFire?.(bot, targetPos, hit);
  }

  // === 巡逻：沿导航点 ===
  private patrolAlongNav(bot: Bot, dt: number): void {
    const nav = this.navMap.get(bot.navTargetId);
    if (!nav) return;
    const target = new THREE.Vector3(nav.position.x, 0, nav.position.z);
    const dist = bot.position.distanceTo(target);
    if (dist < 1.5) {
      // 到达，随机选下一个邻居
      const neighbors = nav.neighbors;
      if (neighbors.length === 0) return;
      const nextId = neighbors[Math.floor(Math.random() * neighbors.length)];
      bot.navTargetId = nextId;
    } else {
      this.moveTowardsPosition(bot, dt, target, BOT_SPEED);
    }
  }

  // === 朝指定导航 ID 移动 ===
  private moveTowardsNavTarget(bot: Bot, dt: number, navId: string, speed: number): void {
    const nav = this.navMap.get(navId);
    if (!nav) {
      this.patrolAlongNav(bot, dt);
      return;
    }
    const target = new THREE.Vector3(nav.position.x, 0, nav.position.z);
    const dist = bot.position.distanceTo(target);
    if (dist < 1.5) {
      bot.navTargetId = navId;
      this.patrolAlongNav(bot, dt);
      return;
    }
    this.moveTowardsPosition(bot, dt, target, speed);
  }

  // === 朝指定位置移动（带朝向与碰撞） ===
  private moveTowardsPosition(bot: Bot, dt: number, target: THREE.Vector3, speed: number): void {
    const dir = new THREE.Vector3().subVectors(target, bot.position);
    dir.y = 0;
    const dist = dir.length();
    if (dist < 0.1) return;
    dir.normalize();

    // 朝目标方向旋转
    const targetYaw = Math.atan2(dir.x, dir.z);
    bot.yaw = this.lerpAngle(bot.yaw, targetYaw, Math.min(1, dt * 6));

    // 应用速度
    bot.velocity.x = dir.x * speed;
    bot.velocity.z = dir.z * speed;
    bot.position.x += bot.velocity.x * dt;
    bot.position.z += bot.velocity.z * dt;

    // 与障碍物碰撞回退
    this.resolveCollisions(bot);
  }

  // === AABB 碰撞回退（仅 XZ 平面） ===
  private resolveCollisions(bot: Bot): void {
    const radius = 0.4;
    for (const b of this.blocks) {
      const bx = b.position.x, bz = b.position.z;
      const bsx = b.size.x / 2, bsz = b.size.z / 2;
      const by = b.position.y, bsy = b.size.y / 2;
      // 跳过悬空障碍物
      if (by - bsy > 1.5) continue;
      const dx = bot.position.x - bx;
      const dz = bot.position.z - bz;
      // 快速排除：太远的跳过
      if (Math.abs(dx) > bsx + radius + 1) continue;
      if (Math.abs(dz) > bsz + radius + 1) continue;
      const overlapX = bsx + radius - Math.abs(dx);
      const overlapZ = bsz + radius - Math.abs(dz);
      if (overlapX > 0 && overlapZ > 0) {
        // 推开最短轴
        if (overlapX < overlapZ) {
          bot.position.x += overlapX * Math.sign(dx);
        } else {
          bot.position.z += overlapZ * Math.sign(dz);
        }
      }
    }
  }

  // === 找最近的导航点 ID ===
  private findClosestNavPoint(pos: THREE.Vector3): string {
    let closest = this.navPointList[0];
    let minDist = Infinity;
    for (const n of this.navPointList) {
      const d = (n.position.x - pos.x) ** 2 + (n.position.z - pos.z) ** 2;
      if (d < minDist) {
        minDist = d;
        closest = n;
      }
    }
    return closest.id;
  }

  // === 视野内最近敌方 ===
  private findVisibleEnemy(bot: Bot, hostiles: EnemyInfo[]): EnemyInfo | null {
    let best: EnemyInfo | null = null;
    let bestDist = VISION_RANGE;
    // Bot 朝向单位向量（XZ 平面）
    const facing = new THREE.Vector3(Math.sin(bot.yaw), 0, Math.cos(bot.yaw));
    for (const e of hostiles) {
      const to = new THREE.Vector3().subVectors(e.position, bot.position);
      const dist = to.length();
      if (dist > VISION_RANGE || dist < 0.01) continue;
      to.normalize();
      // 视野角度（与朝向夹角）
      const dot = facing.dot(to);
      const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
      // 开火的敌人扩大视野（听到枪声）
      if (!e.firing && angle > VISION_FOV) continue;
      // 视线遮挡检测
      if (this.isLineBlocked(bot.position, e.position)) continue;
      if (dist < bestDist) {
        bestDist = dist;
        best = e;
      }
    }
    return best;
  }

  // === 视线遮挡检测：2D slab 法（XZ 平面 + Y 校验） ===
  private isLineBlocked(from: THREE.Vector3, to: THREE.Vector3): boolean {
    const ox = from.x, oz = from.z;
    const tx = to.x, tz = to.z;
    const dx = tx - ox, dz = tz - oz;
    if (Math.abs(dx) < 1e-6 && Math.abs(dz) < 1e-6) return false;

    const originY = from.y + 1.0; // Bot 视点高度
    const targetY = to.y + 1.0;

    for (const b of this.blocks) {
      // 跳过薄平台（地面标记）
      if (b.size.y < 0.5) continue;
      const bx = b.position.x, by = b.position.y, bz = b.position.z;
      const bsx = b.size.x / 2, bsy = b.size.y / 2, bsz = b.size.z / 2;

      let tmin = -Infinity, tmax = Infinity;
      // X 轴 slab
      if (Math.abs(dx) < 1e-6) {
        if (ox < bx - bsx || ox > bx + bsx) continue;
      } else {
        const t1 = (bx - bsx - ox) / dx;
        const t2 = (bx + bsx - ox) / dx;
        tmin = Math.max(tmin, Math.min(t1, t2));
        tmax = Math.min(tmax, Math.max(t1, t2));
      }
      // Z 轴 slab
      if (Math.abs(dz) < 1e-6) {
        if (oz < bz - bsz || oz > bz + bsz) continue;
      } else {
        const t1 = (bz - bsz - oz) / dz;
        const t2 = (bz + bsz - oz) / dz;
        tmin = Math.max(tmin, Math.min(t1, t2));
        tmax = Math.min(tmax, Math.max(t1, t2));
      }
      // 不在 [0,1] 范围内 → 不相交
      if (tmax < 0 || tmin > 1 || tmin > tmax) continue;
      const enterT = Math.max(0, tmin);
      const enterY = originY + enterT * (targetY - originY);
      if (enterY > by - bsy && enterY < by + bsy) {
        return true;
      }
    }
    return false;
  }

  // === 找最近的掩体位置（箱子背面） ===
  private findNearestCover(pos: THREE.Vector3): THREE.Vector3 | null {
    let best: THREE.Vector3 | null = null;
    let bestScore = Infinity;
    for (const b of this.blocks) {
      if (b.material !== 'crate') continue;
      const dx = pos.x - b.position.x;
      const dz = pos.z - b.position.z;
      const d = Math.sqrt(dx * dx + dz * dz);
      if (d < 0.01) continue;
      // 掩体背面（远离 pos 一侧）
      const nx = dx / d;
      const nz = dz / d;
      const coverX = b.position.x - nx * (b.size.x / 2 + 0.5);
      const coverZ = b.position.z - nz * (b.size.z / 2 + 0.5);
      const dist = Math.sqrt((coverX - pos.x) ** 2 + (coverZ - pos.z) ** 2);
      if (dist < bestScore) {
        bestScore = dist;
        best = new THREE.Vector3(coverX, 0, coverZ);
      }
    }
    return best;
  }

  // === 选最近的炸弹点 ===
  private pickNearestBombSite(pos: THREE.Vector3): 'A' | 'B' {
    const aPos = new THREE.Vector3(-25, 0, -25);
    const bPos = new THREE.Vector3(25, 0, 25);
    return pos.distanceTo(aPos) < pos.distanceTo(bPos) ? 'A' : 'B';
  }

  // === 角度插值（处理 ±π 边界） ===
  private lerpAngle(a: number, b: number, t: number): number {
    let diff = b - a;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    return a + diff * t;
  }
}
