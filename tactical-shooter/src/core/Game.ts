/** 游戏主类：串联所有系统，运行主循环 */
import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { InputManager } from './InputManager';
import { PlayerSystem } from '../systems/PlayerSystem';
import { WeaponSystem } from '../systems/WeaponSystem';
import { BulletSystem, type Target } from '../systems/BulletSystem';
import { UISystem } from '../systems/UISystem';
import { WeaponView } from '../render/WeaponView';
import { buildMapGeometry } from '../map/MapGeometry';
import { TRAINING_MAP } from '../types/map';
import type { WeaponState } from '../types/weapon';

export class Game {
  private renderer: Renderer;
  private input: InputManager;
  private player: PlayerSystem;
  private weapon: WeaponSystem;
  private bullets: BulletSystem;
  private ui: UISystem;
  private weaponView: WeaponView;
  private clock = new THREE.Clock();
  private running = false;
  private playerHP = 100;
  private fovSetting = 90;
  private wasScoped = false;

  // 弹道线渲染
  private tracerLines: THREE.Line[] = [];

  constructor(container: HTMLElement) {
    this.renderer = new Renderer(container);
    this.input = new InputManager(container);
    this.player = new PlayerSystem();
    this.weapon = new WeaponSystem();
    this.bullets = new BulletSystem(this.renderer.scene);
    this.ui = new UISystem();
    this.weaponView = new WeaponView(this.renderer.camera);

    // 设置面板回调
    this.ui.onSettingsChange = (s) => {
      this.input.sensitivity = s.sensitivity;
      this.fovSetting = s.fov;
    };
    // 初始同步
    this.input.sensitivity = this.ui.settings.sensitivity;
    this.fovSetting = this.ui.settings.fov;

    this.setup();
  }

  private setup(): void {
    // 构建地图
    buildMapGeometry(this.renderer.scene, TRAINING_MAP);
    this.player.setMap(TRAINING_MAP.blocks);

    // 创建靶子
    this.createDummy(new THREE.Vector3(0, 1, -15));
    this.createDummy(new THREE.Vector3(-12, 1, -20));
    this.createDummy(new THREE.Vector3(12, 1, -18));
    this.createDummy(new THREE.Vector3(-8, 1, -25));
    this.createDummy(new THREE.Vector3(8, 1, -25));
  }

  private createDummy(pos: THREE.Vector3): void {
    const group = new THREE.Group();
    group.position.copy(pos);

    // 身体
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.4, 1.0, 4, 8),
      new THREE.MeshStandardMaterial({ color: 0xcc3333 }),
    );
    body.position.y = 0.5;
    body.castShadow = true;
    group.add(body);

    // 头部
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xffccaa }),
    );
    head.position.y = 1.5;
    head.castShadow = true;
    group.add(head);

    this.renderer.scene.add(group);

    const target: Target = {
      id: 'dummy_' + Math.random().toString(36).slice(2),
      mesh: group,
      hp: 100,
      headMesh: head,
      onHit: (_damage: number, headshot: boolean) => {
        this.ui.showHitMarker();
        // 击中变色反馈
        const mat = (body.material as THREE.MeshStandardMaterial);
        mat.emissive = new THREE.Color(headshot ? 0xff0000 : 0xff8800);
        mat.emissiveIntensity = 1;
        setTimeout(() => { mat.emissiveIntensity = 0; }, 100);
        // 死亡重置
        if (target.hp <= 0) {
          target.hp = 100;
          group.position.y = 1; // 重置位置
        }
      },
    };
    this.bullets.registerTarget(target);
  }

  start(): void {
    this.running = true;
    this.clock.start();
    this.loop();
  }

  private loop = (): void => {
    if (!this.running) return;
    // 设置面板打开时暂停游戏
    if (this.ui.settingsOpen) {
      this.renderer.render();
      return;
    }
    requestAnimationFrame(this.loop);

    const dt = Math.min(this.clock.getDelta(), 0.05);
    const now = performance.now();
    const input = this.input.getInput();

    // 更新玩家
    this.player.update(dt, input, this.input.yaw, this.input.pitch);

    // 武器后坐力影响视角
    const effectiveYaw = this.input.yaw + this.weapon.recoilYawOffset;
    const effectivePitch = this.input.pitch - this.weapon.recoilPitchOffset;

    // 更新相机（应用头部摆动偏移）
    const eye = this.player.getEyePosition();
    // 摆动沿右方向偏移 X，沿上方向偏移 Y
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
    // 开镜时缩放 FOV + 准星隐藏
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

    // 切枪（1=步枪, 2=手枪）
    if (this.input.consumeKey('Digit1')) this.weapon.switchWeapon('rifle');
    if (this.input.consumeKey('Digit2')) this.weapon.switchWeapon('pistol');

    // 换弹
    if (input.reload) this.weapon.reload();

    // UI 更新
    const ammo = this.weapon.ammoInfo;
    this.ui.setAmmo(ammo.inMag, ammo.reserve, ammo.reloading);
    this.ui.setHP(this.playerHP);
    this.ui.update(dt);
    this.weaponView.reload(ammo.reloading);

    // 子弹系统更新（特效）
    this.bullets.update(dt);
    this.updateTracers();

    this.renderer.render();
  };

  private fireWeapon(): void {
    const w: WeaponState = this.weapon.getCurrent();
    // 枪口位置 = 相机前方偏移
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
  }

  private updateTracers(): void {
    // 清除旧的弹道线
    this.tracerLines.forEach((l) => this.renderer.scene.remove(l));
    this.tracerLines = [];

    // 渲染当前弹道
    for (const t of this.bullets.tracers) {
      const geo = new THREE.BufferGeometry().setFromPoints([t.from, t.to]);
      const mat = new THREE.LineBasicMaterial({ color: 0xffff00, transparent: true, opacity: t.life * 10 });
      const line = new THREE.Line(geo, mat);
      this.renderer.scene.add(line);
      this.tracerLines.push(line);
    }
  }
}
