/**
 * 游戏主类：串联所有系统，运行主循环
 * 阶段1 FPS 控制 + HUD
 * 阶段2 武器/经济/回合/炸弹
 * 阶段3 完整地图 + Bot AI + 音频 + 雷达 + 计分板
 */
import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { InputManager } from './InputManager';
import { PlayerSystem } from '../systems/PlayerSystem';
import { WeaponSystem } from '../systems/WeaponSystem';
import { BulletSystem, type Target } from '../systems/BulletSystem';
import { UISystem } from '../systems/UISystem';
import { WeaponView } from '../render/WeaponView';
import { buildMapGeometry } from '../map/MapGeometry';
import { DE_MINE_MAP } from '../map/DeMineMap';
import { RoundSystem } from '../systems/RoundSystem';
import { EconomySystem } from '../systems/EconomySystem';
import { BuyMenu } from '../systems/BuyMenu';
import { AISystem, type Bot, type EnemyInfo } from '../systems/AISystem';
import { AudioSystem } from '../systems/AudioSystem';
import { RadarSystem } from '../systems/RadarSystem';
import { Scoreboard, type ScoreRow, type ScoreData } from '../systems/Scoreboard';
import type { WeaponState, WeaponId } from '../types/weapon';

/** 玩家阵营（阶段3固定 ATK，阶段4由房间分配） */
const PLAYER_TEAM: 'ATK' | 'DEF' = 'ATK';
/** 每队 Bot 数量 */
const BOTS_PER_TEAM = 4;
/** 最大回合数（与 RoundSystem 一致） */
const MAX_ROUNDS = 30;
/** 玩家受击后无敌时间（秒） */
const PLAYER_INVULN_TIME = 0.05;

export class Game {
  private renderer: Renderer;
  private input: InputManager;
  private player: PlayerSystem;
  private weapon: WeaponSystem;
  private bullets: BulletSystem;
  private ui: UISystem;
  private weaponView: WeaponView;

  // === 阶段2/3 系统 ===
  private roundSystem: RoundSystem;
  private economy: EconomySystem;
  private buyMenu: BuyMenu;
  private aiSystem: AISystem;
  private audio: AudioSystem;
  private radar: RadarSystem;
  private scoreboard: Scoreboard;

  private clock = new THREE.Clock();
  private running = false;

  /** 玩家当前 HP（独立于 PlayerSystem，用于回合重置） */
  private playerHP = 100;
  /** 玩家是否存活 */
  private playerAlive = true;
  /** 玩家无敌计时 */
  private playerInvuln = 0;
  /** 玩家累计击杀数 */
  private playerKills = 0;
  /** 玩家累计死亡数 */
  private playerDeaths = 0;
  /** 玩家累计爆头数 */
  private playerHeadshots = 0;
  /** 玩家阵营 */
  private readonly playerTeam: 'ATK' | 'DEF' = PLAYER_TEAM;

  /** FOV 基准（由设置面板控制） */
  private fovSetting = 90;
  /** 上一帧是否开镜状态 */
  private wasScoped = false;
  /** 脚步声累积计时 */
  private footstepDistance = 0;
  /** 当前是否在安弹 */
  private planting = false;
  /** 当前是否在拆弹 */
  private defusing = false;
  /** 当前是否在购买菜单暂停 */
  private buyMenuPaused = false;
  /** 弹道线渲染缓存 */
  private tracerLines: THREE.Line[] = [];
  /** Bot 弹道线渲染缓存 */
  private botTracerLines: THREE.Line[] = [];
  /** 已生成 Bot 的 Target 注册表（用于 BulletSystem 命中） */
  private botTargets = new Map<string, Target>();
  /** 玩家受击回调（Bot 调用） */
  private playerOnHit?: (damage: number, headshot: boolean) => void;
  /** 雷达可见性缓存 */
  private radarVisible = true;

  constructor(container: HTMLElement) {
    this.renderer = new Renderer(container);
    this.input = new InputManager(container);
    this.player = new PlayerSystem();
    this.weapon = new WeaponSystem();
    this.bullets = new BulletSystem(this.renderer.scene);
    this.ui = new UISystem();
    this.weaponView = new WeaponView(this.renderer.camera);

    // 阶段2/3 系统
    this.roundSystem = new RoundSystem();
    this.economy = new EconomySystem();
    this.buyMenu = new BuyMenu(this.economy, this.roundSystem);
    this.aiSystem = new AISystem(this.renderer.scene, DE_MINE_MAP);
    this.audio = new AudioSystem();
    this.radar = new RadarSystem();
    this.scoreboard = new Scoreboard();

    // 设置面板回调
    this.ui.onSettingsChange = (s) => {
      this.input.sensitivity = s.sensitivity;
      this.fovSetting = s.fov;
      this.audio.setVolume(s.volume);
      this.renderer.setQuality(s.quality);
    };
    this.input.sensitivity = this.ui.settings.sensitivity;
    this.fovSetting = this.ui.settings.fov;
    this.audio.setVolume(this.ui.settings.volume);
    this.renderer.setQuality(this.ui.settings.quality);

    this.setupCallbacks();
    this.setup();
  }

  // =========================
  //  初始化与回调绑定
  // =========================

  private setupCallbacks(): void {
    // === 回合系统回调 ===
    // 回合开始：重置玩家、生成 Bot、恢复经济
    this.aiSystem.onBotDied = (bot) => this.handleBotDeath(bot);

    // Bot 开火：播放音效 + 生成弹道
    this.aiSystem.onBotFire = (bot, targetPos, _hit) => {
      this.audio.playShoot(bot.currentWeapon);
      // 生成 Bot 弹道线
      const from = bot.position.clone();
      from.y += 1.2; // 枪口高度
      const to = targetPos.clone();
      const geo = new THREE.BufferGeometry().setFromPoints([from, to]);
      const mat = new THREE.LineBasicMaterial({
        color: 0xff5500,
        transparent: true,
        opacity: 0.8,
      });
      const line = new THREE.Line(geo, mat);
      this.renderer.scene.add(line);
      this.botTracerLines.push(line);
    };

    // Bot 安放炸弹完成
    this.aiSystem.onBombPlanted = (site, position) => {
      this.roundSystem.startPlanting(site); // 让 RoundSystem 处理状态转移
      void position; // 状态由 RoundSystem 维护
    };

    // Bot 拆除炸弹完成
    this.aiSystem.onBombDefused = () => {
      this.roundSystem.startDefusing();
    };

    // === 购买菜单回调 ===
    this.buyMenu.onBuy = (itemId) => {
      const validWeapons: WeaponId[] = ['pistol', 'rifle', 'sniper', 'knife', 'grenade'];
      if (validWeapons.includes(itemId as WeaponId)) {
        this.weapon.addWeapon(itemId as WeaponId);
        this.weapon.switchWeapon(itemId as WeaponId);
        this.audio.playReload();
      }
    };
    this.buyMenu.onVisibilityChange = (visible) => {
      this.buyMenuPaused = visible;
      if (visible) {
        this.audio.suspend();
      } else {
        this.audio.resume();
      }
    };
  }

  private setup(): void {
    // 构建完整地图
    buildMapGeometry(this.renderer.scene, DE_MINE_MAP);
    this.player.setMap(DE_MINE_MAP.blocks);

    // 玩家出生在 ATK 出生点
    const spawn = DE_MINE_MAP.spawns.ATK[0].position;
    this.player.position.set(spawn.x, 1.8, spawn.z);

    // 设置玩家受击回调
    this.playerOnHit = (damage: number, headshot: boolean) => {
      if (!this.playerAlive || this.playerInvuln > 0) return;
      const realDamage = headshot ? damage * 2 : damage;
      this.playerHP = Math.max(0, this.playerHP - realDamage);
      this.audio.playHit();
      this.playerInvuln = PLAYER_INVULN_TIME;
      if (this.playerHP <= 0) {
        this.handlePlayerDeath();
      }
      void headshot; // 此处不使用 headshot 标记
    };

    // 启动 BGM
    this.audio.startBGM('combat');

    // 手动触发第一回合（WARMUP → BUY → LIVE）
    // RoundSystem 构造时已处于 WARMUP，update 会自动推进

    // 监听用户交互恢复 AudioContext
    const resumeAudio = () => {
      this.audio.resume();
      document.removeEventListener('click', resumeAudio);
    };
    document.addEventListener('click', resumeAudio);
  }

  // =========================
  //  回合系统驱动
  // =========================

  /** 检测回合阶段变化并触发回调 */
  private prevPhase: string = 'WARMUP';
  private updateRoundFlow(dt: number, now: number): void {
    if (this.roundSystem.isGameOver) return;

    this.roundSystem.update(dt, now);

    const state = this.roundSystem.getRoundState();
    if (state.phase !== this.prevPhase) {
      this.onPhaseChange(this.prevPhase, state.phase);
      this.prevPhase = state.phase;
    }

    // 同步炸弹状态给 AISystem
    const bombPos = state.bombSite
      ? new THREE.Vector3(
          state.bombSite === 'A' ? -25 : 25,
          0,
          state.bombSite === 'A' ? -25 : 25,
        )
      : null;
    this.aiSystem.setBombState(state.bombPlanted, state.bombSite, bombPos);

    // 购买菜单刷新
    if (this.buyMenu.isVisible) this.buyMenu.refresh();
  }

  /** 阶段切换回调 */
  private onPhaseChange(_from: string, to: string): void {
    // 进入 BUY：重置玩家、生成 Bot、恢复经济
    if (to === 'BUY') {
      this.resetRound();
      this.spawnBots();
      this.economy.reset();
      this.economy.addMoney(800); // 起始金钱
    }

    // 进入 LIVE：关闭购买菜单
    if (to === 'LIVE' && this.buyMenu.isVisible) {
      this.buyMenu.close();
    }

    // 进入 POST：回合结算
    // 胜负判定在 RoundSystem 内部处理，这里仅做反馈
  }

  /** 回合重置：复活玩家、重置位置和HP */
  private resetRound(): void {
    const spawn = DE_MINE_MAP.spawns.ATK[0].position;
    this.player.position.set(spawn.x, 1.8, spawn.z);
    this.player.velocity.set(0, 0, 0);
    this.playerHP = 100;
    this.playerAlive = true;
    this.playerInvuln = 0;
    this.planting = false;
    this.defusing = false;
    this.spectatorTarget = null;
    this.freeSpectatorInit = false;
    // 重置武器弹药
    this.weapon.addWeapon('rifle');
    this.weapon.switchWeapon('rifle');
  }

  /** 生成双方 Bot */
  private spawnBots(): void {
    // 清空旧 Bot
    this.aiSystem.reset();
    this.botTargets.clear();

    // ATK Bot（玩家队友）
    const atkSpawns = DE_MINE_MAP.spawns.ATK;
    for (let i = 1; i <= BOTS_PER_TEAM; i++) {
      const sp = atkSpawns[i % atkSpawns.length].position;
      this.aiSystem.spawnBot('ATK', new THREE.Vector3(sp.x + i * 0.5, 0, sp.z));
    }

    // DEF Bot（敌方）
    const defSpawns = DE_MINE_MAP.spawns.DEF;
    for (let i = 0; i < BOTS_PER_TEAM; i++) {
      const sp = defSpawns[i % defSpawns.length].position;
      const bot = this.aiSystem.spawnBot('DEF', new THREE.Vector3(sp.x + i * 0.5, 0, sp.z));
      // 注册为子弹目标
      const target: Target = {
        id: bot.id,
        mesh: bot.mesh,
        hp: 100,
        headMesh: bot.headMesh,
        onHit: (damage: number, headshot: boolean) => {
          if (bot.onHit) bot.onHit(damage, headshot);
        },
      };
      this.botTargets.set(bot.id, target);
      this.bullets.registerTarget(target);
    }
  }

  // =========================
  //  死亡处理
  // =========================

  /** 玩家死亡 */
  private handlePlayerDeath(): void {
    this.playerAlive = false;
    this.playerDeaths++;
    this.audio.playHit();
    // 退出鼠标锁定，方便观战操作
    document.exitPointerLock();
  }

  /** 观战目标（存活的队友 Bot） */
  private spectatorTarget: Bot | null = null;

  /** 切换观战目标 */
  private cycleSpectatorTarget(): void {
    const teammates = this.aiSystem.getAllBots().filter(b => b.alive && b.team === this.playerTeam);
    if (teammates.length === 0) {
      this.spectatorTarget = null;
      return;
    }
    if (!this.spectatorTarget || !this.spectatorTarget.alive) {
      this.spectatorTarget = teammates[0];
      return;
    }
    const idx = teammates.indexOf(this.spectatorTarget);
    this.spectatorTarget = teammates[(idx + 1) % teammates.length];
  }

  /** 更新观战相机 */
  private updateSpectatorCamera(dt: number): void {
    // 鼠标控制观战视角旋转
    const yaw = this.input.yaw;
    const target = this.spectatorTarget;

    if (target && target.alive) {
      // 第三人称跟随目标
      const offset = new THREE.Vector3(
        Math.sin(yaw) * 4,
        2.5,
        Math.cos(yaw) * 4,
      );
      const camPos = new THREE.Vector3().copy(target.position).add(offset);
      this.renderer.camera.position.lerp(camPos, Math.min(1, dt * 8));
      this.renderer.camera.lookAt(target.position.x, target.position.y + 1, target.position.z);
    } else {
      // 无目标：自由飞行观战
      this.updateFreeSpectator(dt);
    }
  }

  /** 自由观战：WASD 飞行 */
  private freeSpectatorPos: THREE.Vector3 = new THREE.Vector3();
  private freeSpectatorInit = false;
  private updateFreeSpectator(dt: number): void {
    if (!this.freeSpectatorInit) {
      this.freeSpectatorPos.copy(this.player.position);
      this.freeSpectatorInit = true;
    }
    const yaw = this.input.yaw;
    const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
    const speed = 15;
    const input = this.input.getInput();
    if (input.forward) this.freeSpectatorPos.addScaledVector(forward, speed * dt);
    if (input.back) this.freeSpectatorPos.addScaledVector(forward, -speed * dt);
    if (input.right) this.freeSpectatorPos.addScaledVector(right, speed * dt);
    if (input.left) this.freeSpectatorPos.addScaledVector(right, -speed * dt);
    if (input.jump) this.freeSpectatorPos.y += speed * dt;
    if (input.crouch) this.freeSpectatorPos.y -= speed * dt;

    this.renderer.camera.position.copy(this.freeSpectatorPos);
    this.renderer.camera.rotation.y = yaw;
    this.renderer.camera.rotation.x = this.input.pitch;
  }

  /** Bot 死亡：奖励金钱、计分 */
  private handleBotDeath(bot: Bot): void {
    // 解除目标注册
    this.bullets.unregisterTarget(bot.id);
    this.botTargets.delete(bot.id);

    // 只有玩家击杀才给奖励（这里简化：任何 ATK 击杀 DEF 都算玩家奖励）
    // 实际上应该判断击杀者，阶段3简化处理
    if (bot.team === 'DEF') {
      const reward = this.roundSystem.onKill('ATK', false, 'rifle');
      this.economy.addMoney(reward);
      this.playerKills++;
    }
  }

  // =========================
  //  炸弹交互
  // =========================

  private updateBombInteraction(): void {
    if (!this.playerAlive) return;
    const state = this.roundSystem.getRoundState();
    const playerPos = this.player.position;

    // 安弹：ATK 玩家在 LIVE 阶段且未安弹，按 E 在 A/B 点附近
    if (this.playerTeam === 'ATK' && state.phase === 'LIVE' && !state.bombPlanted) {
      const nearSite = this.getNearbyBombSite(playerPos, 4);
      const pressingE = this.input.consumeKey('KeyE');
      if (pressingE && nearSite) {
        this.planting = true;
        this.roundSystem.startPlanting(nearSite);
      } else if (!pressingE && this.planting) {
        this.planting = false;
        this.roundSystem.cancelPlanting();
      }
    }

    // 拆弹：DEF 玩家在 BOMB_PLANTED 阶段，按 E 在炸弹附近
    if (this.playerTeam === 'DEF' && state.phase === 'BOMB_PLANTED' && state.bombSite) {
      const bombPos =
        state.bombSite === 'A'
          ? new THREE.Vector3(-25, 0, -25)
          : new THREE.Vector3(25, 0, 25);
      const dist = playerPos.distanceTo(bombPos);
      const pressingE = this.input.consumeKey('KeyE');
      if (pressingE && dist < 4) {
        this.defusing = true;
        this.roundSystem.startDefusing();
      } else if (!pressingE && this.defusing) {
        this.defusing = false;
        this.roundSystem.cancelDefusing();
      }
    }
  }

  /** 获取玩家附近的炸弹点 */
  private getNearbyBombSite(pos: THREE.Vector3, radius: number): 'A' | 'B' | null {
    const aPos = new THREE.Vector3(-25, 0, -25);
    const bPos = new THREE.Vector3(25, 0, 25);
    if (pos.distanceTo(aPos) < radius) return 'A';
    if (pos.distanceTo(bPos) < radius) return 'B';
    return null;
  }

  // =========================
  //  雷达与计分板数据
  // =========================

  private updateRadar(): void {
    const state = this.roundSystem.getRoundState();
    const enemies: EnemyInfo[] = [];
    const teammates: EnemyInfo[] = [];

    // 收集所有存活 Bot
    for (const bot of this.aiSystem.getAllBots()) {
      if (!bot.alive) continue;
      const info: EnemyInfo = {
        id: bot.id,
        position: bot.position.clone(),
        team: bot.team,
        alive: bot.alive,
        firing: bot.fireTimer > 0.4, // 简化：开火计时器小于阈值视为正在开火
      };
      if (bot.team === this.playerTeam) {
        teammates.push(info);
      } else {
        enemies.push(info);
      }
    }

    // 玩家自身（仅在队友列表中显示给雷达中心）
    const playerPos = this.player.position;
    const bombPos = state.bombSite
      ? state.bombSite === 'A'
        ? { x: -25, y: 0, z: -25 }
        : { x: 25, y: 0, z: 25 }
      : null;

    this.radar.update({
      playerPosition: { x: playerPos.x, y: playerPos.y, z: playerPos.z },
      playerYaw: this.input.yaw,
      enemies: enemies.map(e => ({
        position: { x: e.position.x, y: e.position.y, z: e.position.z },
        alive: e.alive,
        firing: e.firing,
        visible: this.isPlayerVisibleToBot(e.position), // 简化：敌人是否在玩家视线内
      })),
      teammates: teammates.map(t => ({
        position: { x: t.position.x, y: t.position.y, z: t.position.z },
        alive: t.alive,
      })),
      bomb: {
        planted: state.bombPlanted,
        position: bombPos,
      },
      bombSites: [
        { id: 'A', position: { x: -25, y: 0, z: -25 } },
        { id: 'B', position: { x: 25, y: 0, z: 25 } },
      ],
    });
  }

  /** 简化：判断敌人位置是否在玩家前方扇形视野内（用于雷达显示） */
  private isPlayerVisibleToBot(enemyPos: THREE.Vector3): boolean {
    const toEnemy = new THREE.Vector3().subVectors(enemyPos, this.player.position);
    const dist = toEnemy.length();
    if (dist > 40) return false;
    toEnemy.normalize();
    const facing = new THREE.Vector3(-Math.sin(this.input.yaw), 0, -Math.cos(this.input.yaw));
    const dot = facing.dot(toEnemy);
    return dot > 0.5; // 视野半角约 60°
  }

  private updateScoreboard(): void {
    const state = this.roundSystem.getRoundState();
    const rows: ScoreRow[] = [];

    // 玩家行
    rows.push({
      name: 'YOU',
      team: this.playerTeam,
      kills: this.playerKills,
      deaths: this.playerDeaths,
      headshots: this.playerHeadshots,
      money: this.economy.money,
      hp: this.playerHP,
      alive: this.playerAlive,
    });

    // Bot 行
    for (const bot of this.aiSystem.getAllBots()) {
      rows.push({
        name: bot.id.replace('bot_', 'Bot'),
        team: bot.team,
        kills: 0,
        deaths: bot.alive ? 0 : 1,
        headshots: 0,
        money: 0,
        hp: bot.hp,
        alive: bot.alive,
      });
    }

    const data: ScoreData = {
      rows,
      atkScore: state.atkScore,
      defScore: state.defScore,
      roundNumber: state.roundNumber,
      halfTime: state.halfTime,
      maxRounds: MAX_ROUNDS,
    };
    this.scoreboard.update(data);
  }

  // =========================
  //  主循环
  // =========================

  start(): void {
    this.running = true;
    this.clock.start();
    this.loop();
  }

  private loop = (): void => {
    if (!this.running) return;

    // 设置面板或购买菜单打开时暂停游戏（但仍渲染）
    if (this.ui.settingsOpen || this.buyMenuPaused) {
      this.renderer.render();
      requestAnimationFrame(this.loop);
      return;
    }
    requestAnimationFrame(this.loop);

    const dt = Math.min(this.clock.getDelta(), 0.05);
    const now = performance.now();
    const input = this.input.getInput();

    // 回合系统驱动
    this.updateRoundFlow(dt, now);

    // 玩家存活时才接受输入
    if (this.playerAlive) {
      this.player.update(dt, input, this.input.yaw, this.input.pitch);

      // 武器后坐力影响视角
      const effectiveYaw = this.input.yaw + this.weapon.recoilYawOffset;
      const effectivePitch = this.input.pitch - this.weapon.recoilPitchOffset;

      // 更新相机（应用头部摆动偏移）
      const eye = this.player.getEyePosition();
      const rightVec = new THREE.Vector3(Math.cos(effectiveYaw), 0, -Math.sin(effectiveYaw));
      eye.add(rightVec.multiplyScalar(this.player.bobOffsetX));
      eye.y += this.player.bobOffsetY;
      this.renderer.camera.position.copy(eye);
      this.renderer.camera.rotation.y = effectiveYaw;
      this.renderer.camera.rotation.x = effectivePitch;

      // 开镜切换（右键边沿触发）
      if (input.scope && !this.wasScoped) {
        this.weapon.toggleScope();
      }
      this.wasScoped = input.scope;

      const w = this.weapon.getCurrent();
      this.ui.setScoped(w.scoped);
      const targetFOV = w.scoped ? 90 / w.config.scopeZoom : this.fovSetting;
      const curFOV = this.renderer.camera.fov;
      this.renderer.setFOV(curFOV + (targetFOV - curFOV) * Math.min(1, dt * 10));

      // 武器系统更新
      this.weapon.update(now, dt);
      this.weaponView.update(dt);

      // 开火
      if (input.fire) {
        const moving = input.forward || input.back || input.left || input.right;
        const jumping = !this.player.onGround;
        if (this.weapon.tryFire(now, moving, jumping)) {
          this.fireWeapon();
        }
      }

      // 切枪（1=步枪, 2=手枪, 3=狙击, 4=刀）
      if (this.input.consumeKey('Digit1')) this.weapon.switchWeapon('rifle');
      if (this.input.consumeKey('Digit2')) this.weapon.switchWeapon('pistol');
      if (this.input.consumeKey('Digit3')) this.weapon.switchWeapon('sniper');
      if (this.input.consumeKey('Digit4')) this.weapon.switchWeapon('knife');

      // 换弹
      if (input.reload) this.weapon.reload();

      // 炸弹交互
      this.updateBombInteraction();

      // 脚步声
      this.updateFootstep(dt);
    } else {
      // 玩家死亡：观战模式
      this.updateSpectatorCamera(dt);
      this.weaponView.update(dt);
      // C 键切换观战目标
      if (this.input.consumeKey('KeyC')) this.cycleSpectatorTarget();
    }

    // Bot AI 更新
    const playerPos = this.player.position;
    const allBots = this.aiSystem.getAllBots();
    const enemies: EnemyInfo[] = allBots
      .filter(b => b.alive)
      .map(b => ({
        id: b.id,
        position: b.position.clone(),
        team: b.team,
        alive: b.alive,
        firing: b.fireTimer > 0.4,
        onHit: this.playerTeam !== b.team ? this.playerOnHit : undefined,
      }));
    this.aiSystem.update(dt, playerPos, enemies);

    // 无敌计时
    if (this.playerInvuln > 0) this.playerInvuln -= dt;

    // UI 更新
    const ammo = this.weapon.ammoInfo;
    this.ui.setAmmo(ammo.inMag, ammo.reserve, ammo.reloading);
    this.ui.setHP(this.playerHP);
    this.ui.update(dt);
    this.weaponView.reload(ammo.reloading);

    // 子弹系统更新
    this.bullets.update(dt);
    this.updateTracers();
    this.updateBotTracers();

    // 雷达与计分板
    if (this.radarVisible) this.updateRadar();
    this.updateScoreboard();

    // 标签页可见性处理
    this.handleVisibilityChange();

    this.renderer.render();
  };

  /** 玩家开火 */
  private fireWeapon(): void {
    const w: WeaponState = this.weapon.getCurrent();
    const origin = this.renderer.camera.position.clone();
    const dir = new THREE.Vector3();
    this.renderer.camera.getWorldDirection(dir);

    // 应用扩散
    const spread = this.weapon.getSpread();
    dir.x += (Math.random() - 0.5) * spread;
    dir.y += (Math.random() - 0.5) * spread;
    dir.z += (Math.random() - 0.5) * spread;
    dir.normalize();

    this.bullets.fire(origin, dir, w);
    this.weaponView.fire();
    this.audio.playShoot(w.config.id);
  }

  /** 脚步声：基于移动距离触发 */
  private updateFootstep(dt: number): void {
    const horizSpeed = Math.sqrt(
      this.player.velocity.x ** 2 + this.player.velocity.z ** 2,
    );
    if (!this.player.onGround || horizSpeed < 0.5) return;

    this.footstepDistance += horizSpeed * dt;
    if (this.footstepDistance > 2.5) {
      this.footstepDistance = 0;
      this.audio.playFootstep(horizSpeed);
    }
  }

  /** 弹道线渲染更新 */
  private updateTracers(): void {
    this.tracerLines.forEach(l => this.renderer.scene.remove(l));
    this.tracerLines = [];
    for (const t of this.bullets.tracers) {
      const geo = new THREE.BufferGeometry().setFromPoints([t.from, t.to]);
      const mat = new THREE.LineBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: t.life * 10,
      });
      const line = new THREE.Line(geo, mat);
      this.renderer.scene.add(line);
      this.tracerLines.push(line);
    }
  }

  /** Bot 弹道线渲染（独立管理，因为 BulletSystem 只管玩家） */
  private updateBotTracers(): void {
    // 清理超过 0.1 秒的线
    const now = performance.now();
    this.botTracerLines = this.botTracerLines.filter(line => {
      const mat = line.material as THREE.LineBasicMaterial;
      // 通过 opacity 衰减判断是否需要移除
      if (mat.opacity < 0.05) {
        this.renderer.scene.remove(line);
        return false;
      }
      mat.opacity *= 0.85;
      void now; // 占位避免 unused
      return true;
    });
  }

  /** 标签页可见性变化时暂停/恢复音频 */
  private handleVisibilityChange(): void {
    document.onvisibilitychange = () => {
      if (document.hidden) {
        this.audio.suspend();
      } else {
        this.audio.resume();
      }
    };
  }
}
