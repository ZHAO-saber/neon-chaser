/**
 * Colyseus 游戏房间：服务器权威
 * - 接收客户端输入，权威计算玩家移动（简单 AABB）
 * - 接收开火指令，权威射线命中判定
 * - 驱动回合状态机
 * - 广播快照给所有客户端
 */
import Colyseus from 'colyseus';
import { GameRoomState, PlayerState } from './schema';
import type { InputSnapshot } from '../src/types/player';

const { Room } = Colyseus as any;
type Client = any;

/** 回合时长（秒） */
const WARMUP_DURATION = 5;
const BUY_DURATION = 15;
const LIVE_DURATION = 100;
const POST_DURATION = 5;
const BOMB_TIMER = 40;

/** 玩家常量 */
const PLAYER_HEIGHT = 1.8;
const PLAYER_RADIUS = 0.35;
const MOVE_SPEED = 7.0;
const WALK_SPEED = 2.8;
const CROUCH_SPEED = 2.0;
const JUMP_VELOCITY = 8.5;
const GRAVITY = -22;

/** 地图 AABB 数据（与 DeMineMap 同步，简化版） */
const BLOCKS = [
  { x: 0, y: 3, z: -40, sx: 40, sy: 3, sz: 0.25 },
  { x: 0, y: 3, z: 40, sx: 40, sy: 3, sz: 0.25 },
  { x: -40, y: 3, z: 0, sx: 0.25, sy: 3, sz: 40 },
  { x: 40, y: 3, z: 0, sx: 0.25, sy: 3, sz: 40 },
  { x: -6, y: 3, z: 30, sx: 0.25, sy: 3, sz: 6 },
  { x: 6, y: 3, z: 30, sx: 0.25, sy: 3, sz: 6 },
  { x: -6, y: 3, z: -30, sx: 0.25, sy: 3, sz: 6 },
  { x: 6, y: 3, z: -30, sx: 0.25, sy: 3, sz: 6 },
  { x: -10, y: 1, z: 5, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 10, y: 1, z: -5, sx: 1.5, sy: 1, sz: 1.5 },
  { x: -5, y: 1, z: 0, sx: 1, sy: 1, sz: 1 },
  { x: 5, y: 1, z: 0, sx: 1, sy: 1, sz: 1 },
  { x: 0, y: 1, z: 25, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 0, y: 1, z: -25, sx: 1.5, sy: 1, sz: 1.5 },
  { x: -25, y: 1, z: -20, sx: 1.5, sy: 1, sz: 1.5 },
  { x: -30, y: 1, z: -25, sx: 1.5, sy: 1, sz: 1.5 },
  { x: -20, y: 1, z: -30, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 25, y: 1, z: 20, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 30, y: 1, z: 25, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 20, y: 1, z: 30, sx: 1.5, sy: 1, sz: 1.5 },
  { x: -15, y: 1, z: 15, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 15, y: 1, z: 15, sx: 1.5, sy: 1, sz: 1.5 },
  { x: -15, y: 1, z: -15, sx: 1.5, sy: 1, sz: 1.5 },
  { x: 15, y: 1, z: -15, sx: 1.5, sy: 1, sz: 1.5 },
];

const WEAPON_DAMAGE: Record<string, number> = {
  pistol: 25, rifle: 33, sniper: 115, knife: 55, grenade: 80,
};
const WEAPON_HEADSHOT_MULT: Record<string, number> = {
  pistol: 2.0, rifle: 4.0, sniper: 3.0, knife: 2.0, grenade: 1,
};
const WEAPON_FIRE_RATE: Record<string, number> = {
  pistol: 300, rifle: 600, sniper: 50, knife: 120, grenade: 60,
};

interface FireMessage {
  weaponId: string;
  origin: { x: number; y: number; z: number };
  dir: { x: number; y: number; z: number };
}

export class GameRoom extends Room<GameRoomState> {
  private tickRate = 30; // Hz
  private tickCount = 0;

  onCreate() {
    this.setState(new GameRoomState());
    this.setSimulationInterval(() => this.simulate(), 1000 / this.tickRate);

    // 客户端消息处理
    this.onMessage('input', (client: any, input: InputSnapshot) => {
      this.handleInput(client, input);
    });

    this.onMessage('fire', (client: any, msg: FireMessage) => {
      this.handleFire(client, msg);
    });

    this.onMessage('reload', (client: any) => {
      this.handleReload(client);
    });

    this.onMessage('switchWeapon', (client: any, msg: { weaponId: string }) => {
      this.handleSwitchWeapon(client, msg.weaponId);
    });

    this.onMessage('plantBomb', (client: any) => {
      this.handlePlantBomb(client);
    });

    this.onMessage('defuseBomb', (client: any) => {
      this.handleDefuseBomb(client);
    });
  }

  onJoin(client: Client, options: { name: string; team?: 'ATK' | 'DEF' }) {
    const team = options.team || this.pickTeam();
    const spawn = team === 'ATK'
      ? { x: 0, z: 35 }
      : { x: 0, z: -35 };

    const player = new PlayerState();
    player.id = client.sessionId;
    player.name = options.name || `Player_${client.sessionId.slice(0, 4)}`;
    player.team = team;
    player.x = spawn.x;
    player.y = PLAYER_HEIGHT;
    player.z = spawn.z;
    player.currentWeapon = team === 'ATK' ? 'rifle' : 'pistol';
    player.ammoInMag = team === 'ATK' ? 30 : 12;
    player.ammoReserve = team === 'ATK' ? 90 : 48;

    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
  }

  private pickTeam(): 'ATK' | 'DEF' {
    let atk = 0, def = 0;
    for (const p of this.state.players.values()) {
      if (p.team === 'ATK') atk++;
      else def++;
    }
    return atk <= def ? 'ATK' : 'DEF';
  }

  // =========================
  //  输入处理（客户端预测校验）
  // =========================

  private handleInput(client: Client, input: InputSnapshot) {
    const player = this.state.players.get(client.sessionId);
    if (!player || !player.alive) return;

    const dt = Math.min(input.dt, 0.05);
    const flags = input.flags;

    // 移动方向
    const forward = { x: -Math.sin(player.yaw), z: -Math.cos(player.yaw) };
    const right = { x: Math.cos(player.yaw), z: -Math.sin(player.yaw) };
    let mx = 0, mz = 0;
    if (flags.forward) { mx += forward.x; mz += forward.z; }
    if (flags.back) { mx -= forward.x; mz -= forward.z; }
    if (flags.right) { mx += right.x; mz += right.z; }
    if (flags.left) { mx -= right.x; mz -= right.z; }
    const len = Math.sqrt(mx * mx + mz * mz);
    if (len > 0) { mx /= len; mz /= len; }

    let speed = MOVE_SPEED;
    if (flags.walk) speed = WALK_SPEED;
    if (flags.crouch) speed = CROUCH_SPEED;

    player.x += mx * speed * dt;
    player.z += mz * speed * dt;
    player.yaw = input.yaw;
    player.pitch = input.pitch;

    // 跳跃（简化：直接设 y）
    if (flags.jump && player.y <= PLAYER_HEIGHT + 0.1) {
      // 简化版：直接跳（服务器不模拟重力，每帧复位）
      player.y = PLAYER_HEIGHT + 1.2;
    } else if (player.y > PLAYER_HEIGHT) {
      player.y = Math.max(PLAYER_HEIGHT, player.y - 0.5);
    }

    // AABB 碰撞回退
    this.resolveCollisions(player);
  }

  private resolveCollisions(p: PlayerState) {
    for (const b of BLOCKS) {
      const dx = p.x - b.x;
      const dz = p.z - b.z;
      const overlapX = b.sx + PLAYER_RADIUS - Math.abs(dx);
      const overlapZ = b.sz + PLAYER_RADIUS - Math.abs(dz);
      if (overlapX > 0 && overlapZ > 0) {
        if (overlapX < overlapZ) {
          p.x += overlapX * Math.sign(dx);
        } else {
          p.z += overlapZ * Math.sign(dz);
        }
      }
    }
    // 边界
    p.x = Math.max(-39, Math.min(39, p.x));
    p.z = Math.max(-39, Math.min(39, p.z));
  }

  // =========================
  //  开火（服务器权威命中判定）
  // =========================

  private handleFire(client: Client, msg: FireMessage) {
    const player = this.state.players.get(client.sessionId);
    if (!player || !player.alive) return;

    const now = this.tickCount;
    if (now < player.lastFireTick + (60 / WEAPON_FIRE_RATE[msg.weaponId] || 0.1) * 30) return;
    if (player.reloading) return;
    if (player.ammoInMag <= 0) return;

    player.lastFireTick = now;
    player.ammoInMag--;

    const damage = WEAPON_DAMAGE[msg.weaponId] || 25;
    const headMult = WEAPON_HEADSHOT_MULT[msg.weaponId] || 1;

    // 服务器权威射线判定：用客户端给的 origin/dir，
    // 但对距离做合理性校验（防止作弊）
    const origin = msg.origin;
    const dist = Math.sqrt(
      (origin.x - player.x) ** 2 +
      (origin.z - player.z) ** 2,
    );
    if (dist > 3) return; // origin 离玩家太远，作弊

    const dir = msg.dir;
    // 简化射线：找最近的玩家命中
    let bestTarget: PlayerState | null = null;
    let bestT = Infinity;
    let bestHeadshot = false;

    for (const target of this.state.players.values()) {
      if (target.id === player.id || !target.alive) continue;
      if (target.team === player.team) continue;

      // 球线相交：目标身体半径 0.4，头半径 0.3
      const oc = { x: target.x - origin.x, y: target.y - origin.y, z: target.z - origin.z };
      // 身体球（中心 y = target.y - 0.5，半径 0.5）
      const bodyCenterY = target.y - 0.5;
      const bodyR = 0.5;
      const ocBody = { x: oc.x, y: bodyCenterY - origin.y, z: oc.z };
      const bdot = ocBody.x * dir.x + ocBody.y * dir.y + ocBody.z * dir.z;
      const bhit = this.raySphere(ocBody, dir, bodyR);
      if (bhit !== null && bhit < bestT && bhit >= 0) {
        bestT = bhit;
        bestTarget = target;
        bestHeadshot = false;
      }
      // 头球（中心 y = target.y - 0.1，半径 0.25）
      const headCenterY = target.y - 0.1;
      const ocHead = { x: oc.x, y: headCenterY - origin.y, z: oc.z };
      const hhit = this.raySphere(ocHead, dir, 0.25);
      if (hhit !== null && hhit < bestT && hhit >= 0) {
        bestT = hhit;
        bestTarget = target;
        bestHeadshot = true;
      }
    }

    if (bestTarget) {
      const finalDamage = bestHeadshot ? damage * headMult : damage;
      bestTarget.hp = Math.max(0, bestTarget.hp - finalDamage);
      if (bestTarget.hp <= 0) {
        bestTarget.alive = false;
        player.kills++;
        bestTarget.deaths++;
        if (bestHeadshot) player.headshots++;
        // 击杀奖励
        player.money = Math.min(16000, player.money + 300);
        this.broadcast('kill', {
          killerId: player.id,
          victimId: bestTarget.id,
          weaponId: msg.weaponId,
          headshot: bestHeadshot,
        });
      }
      this.broadcast('hit', {
        shooterId: player.id,
        targetId: bestTarget.id,
        damage: finalDamage,
        headshot: bestHeadshot,
      });
    }
  }

  private raySphere(oc: { x: number; y: number; z: number }, dir: { x: number; y: number; z: number }, r: number): number | null {
    const b = oc.x * dir.x + oc.y * dir.y + oc.z * dir.z;
    const c = oc.x * oc.x + oc.y * oc.y + oc.z * oc.z - r * r;
    const disc = b * b - c;
    if (disc < 0) return null;
    const t = -b - Math.sqrt(disc);
    return t >= 0 ? t : null;
  }

  private handleReload(client: Client) {
    const player = this.state.players.get(client.sessionId);
    if (!player || player.reloading) return;
    if (player.ammoInMag >= 30) return; // 满弹不换
    if (player.ammoReserve <= 0) return;
    player.reloading = true;
    player.reloadEndTick = this.tickCount + 30 * 2.5; // 2.5s
  }

  private handleSwitchWeapon(client: Client, weaponId: string) {
    const player = this.state.players.get(client.sessionId);
    if (!player) return;
    player.currentWeapon = weaponId;
    player.reloading = false;
  }

  private handlePlantBomb(client: Client) {
    const player = this.state.players.get(client.sessionId);
    if (!player || player.team !== 'ATK' || !player.hasBomb) return;
    if (this.state.phase !== 'LIVE' || this.state.bombPlanted) return;
    const site = this.nearbyBombSite(player.x, player.z);
    if (!site) return;
    this.state.bombPlanted = true;
    this.state.bombSite = site;
    this.state.bombTimer = BOMB_TIMER;
    this.state.phase = 'BOMB_PLANTED';
    this.broadcast('bombPlanted', { site, planterId: player.id });
  }

  private handleDefuseBomb(client: Client) {
    const player = this.state.players.get(client.sessionId);
    if (!player || player.team !== 'DEF') return;
    if (this.state.phase !== 'BOMB_PLANTED') return;
    // 简化：瞬间拆弹（实际应有进度条，阶段5完善）
    this.state.bombPlanted = false;
    this.state.bombSite = null;
    this.state.phase = 'LIVE';
    this.broadcast('bombDefused', { defuserId: player.id });
  }

  private nearbyBombSite(x: number, z: number): 'A' | 'B' | null {
    const aDist = Math.sqrt((x + 25) ** 2 + (z + 25) ** 2);
    const bDist = Math.sqrt((x - 25) ** 2 + (z - 25) ** 2);
    if (aDist < 4) return 'A';
    if (bDist < 4) return 'B';
    return null;
  }

  // =========================
  //  回合状态机驱动
  // =========================

  private simulate() {
    this.tickCount++;
    this.state.tick = this.tickCount;

    // 换弹完成
    for (const p of this.state.players.values()) {
      if (p.reloading && this.tickCount >= p.reloadEndTick) {
        const magSize = p.currentWeapon === 'pistol' ? 12 : p.currentWeapon === 'sniper' ? 5 : 30;
        const need = magSize - p.ammoInMag;
        const take = Math.min(need, p.ammoReserve);
        p.ammoInMag += take;
        p.ammoReserve -= take;
        p.reloading = false;
      }
    }

    const now = Date.now();
    const elapsed = (now - this.state.phaseStartTime) / 1000;

    switch (this.state.phase) {
      case 'WARMUP':
        if (elapsed >= WARMUP_DURATION) this.startNewRound();
        break;
      case 'BUY':
        if (elapsed >= BUY_DURATION) {
          this.state.phase = 'LIVE';
          this.state.phaseStartTime = now;
          // 安弹者分配
          this.assignBombCarrier();
        }
        break;
      case 'LIVE':
        if (elapsed >= LIVE_DURATION && !this.state.bombPlanted) {
          this.endRound('DEF', 'TIME');
        }
        break;
      case 'BOMB_PLANTED':
        this.state.bombTimer -= 1 / 30;
        if (this.state.bombTimer <= 0) {
          this.endRound('ATK', 'BOMB');
        }
        break;
      case 'POST':
        if (elapsed >= POST_DURATION) {
          this.startNewRound();
        }
        break;
    }
  }

  private startNewRound() {
    this.state.roundNumber++;
    this.state.winner = null;
    this.state.bombPlanted = false;
    this.state.bombSite = null;
    this.state.bombTimer = 0;
    this.state.phase = 'BUY';
    this.state.phaseStartTime = Date.now();
    this.state.phaseDuration = BUY_DURATION;

    // 重置所有玩家
    for (const p of this.state.players.values()) {
      const spawn = p.team === 'ATK' ? { x: 0, z: 35 } : { x: 0, z: -35 };
      p.x = spawn.x;
      p.y = PLAYER_HEIGHT;
      p.z = spawn.z;
      p.hp = 100;
      p.alive = true;
      p.hasBomb = false;
      p.ammoInMag = p.team === 'ATK' ? 30 : 12;
      p.ammoReserve = p.team === 'ATK' ? 90 : 48;
      p.money = Math.min(16000, p.money + (p.team === 'ATK' ? 1400 : 1400));
    }
  }

  private assignBombCarrier() {
    const atkPlayers = [...this.state.players.values()].filter(p => p.team === 'ATK' && p.alive);
    if (atkPlayers.length > 0) {
      atkPlayers[0].hasBomb = true;
    }
  }

  private endRound(winner: 'ATK' | 'DEF', reason: string) {
    if (this.state.phase === 'POST') return;
    if (winner === 'ATK') this.state.atkScore++;
    else this.state.defScore++;
    this.state.winner = winner;
    this.state.phase = 'POST';
    this.state.phaseStartTime = Date.now();
    this.broadcast('roundEnd', { winner, reason });
  }
}
