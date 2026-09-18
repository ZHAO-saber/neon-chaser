/**
 * 多人游戏主类：在单玩家 Game 基础上叠加网络同步
 * - 玩家输入发送到服务器，本地预测位置
 * - 远程玩家从服务器快照同步
 * - 开火、换弹、炸弹等操作走服务器权威
 */
import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { InputManager } from './InputManager';
import { WeaponSystem } from '../systems/WeaponSystem';
import { BulletSystem, type Target } from '../systems/BulletSystem';
import { UISystem } from '../systems/UISystem';
import { WeaponView } from '../render/WeaponView';
import { buildMapGeometry } from '../map/MapGeometry';
import { DE_MINE_MAP } from '../map/DeMineMap';
import { NetworkClient, type RemotePlayer } from '../network/NetworkClient';


const PLAYER_HEIGHT = 1.8;
const EYE_HEIGHT = 1.6;

export class MultiplayerGame {
  private renderer: Renderer;
  private input: InputManager;
  private weapon: WeaponSystem;
  private bullets: BulletSystem;
  private ui: UISystem;
  private weaponView: WeaponView;
  private network: NetworkClient;

  private clock = new THREE.Clock();
  private running = false;
  private fovSetting = 90;
  private wasScoped = false;
  private tracerLines: THREE.Line[] = [];

  /** 远程玩家 mesh 缓存 */
  private remoteMeshes = new Map<string, THREE.Group>();

  constructor(container: HTMLElement, serverUrl?: string) {
    this.renderer = new Renderer(container);
    this.input = new InputManager(container);
    this.weapon = new WeaponSystem();
    this.bullets = new BulletSystem(this.renderer.scene);
    this.ui = new UISystem();
    this.weaponView = new WeaponView(this.renderer.camera);
    this.network = new NetworkClient(serverUrl);

    this.ui.onSettingsChange = (s) => {
      this.input.sensitivity = s.sensitivity;
      this.fovSetting = s.fov;
    };
    this.input.sensitivity = this.ui.settings.sensitivity;
    this.fovSetting = this.ui.settings.fov;

    buildMapGeometry(this.renderer.scene, DE_MINE_MAP);
  }

  async start(): Promise<void> {
    await this.network.join('Player');
    // 同步初始位置
    const me = this.network.remotePlayers.get(this.network['myId']);
    if (me) {
      this.network.setInitialPosition(me.x, me.y, me.z);
    }

    // 注册远程玩家为子弹目标
    this.setupNetworkCallbacks();

    this.running = true;
    this.clock.start();
    this.loop();
  }

  private setupNetworkCallbacks(): void {
    this.network.onKill = (killerId, victimId) => {
      if (killerId === this.network['myId']) {
        // 玩家击杀反馈
      }
      if (victimId === this.network['myId']) {
        // 玩家死亡
      }
    };
  }

  private loop = (): void => {
    if (!this.running) return;
    if (this.ui.settingsOpen) {
      this.renderer.render();
      requestAnimationFrame(this.loop);
      return;
    }
    requestAnimationFrame(this.loop);

    const dt = Math.min(this.clock.getDelta(), 0.05);
    const now = performance.now();
    const input = this.input.getInput();

    // 发送输入到服务器（带本地预测）
    this.network.sendInput({
      dt,
      yaw: this.input.yaw,
      pitch: this.input.pitch,
      flags: input,
    });

    // 使用预测位置更新相机
    const pred = this.network.getPredictedPosition();
    const eye = new THREE.Vector3(pred.x, pred.y - PLAYER_HEIGHT + EYE_HEIGHT, pred.z);
    this.renderer.camera.position.copy(eye);
    this.renderer.camera.rotation.y = pred.yaw + this.weapon.recoilYawOffset;
    this.renderer.camera.rotation.x = pred.pitch - this.weapon.recoilPitchOffset;

    // 开镜
    if (input.scope && !this.wasScoped) this.weapon.toggleScope();
    this.wasScoped = input.scope;
    const w = this.weapon.getCurrent();
    this.ui.setScoped(w.scoped);
    const targetFOV = w.scoped ? 90 / w.config.scopeZoom : this.fovSetting;
    this.renderer.setFOV(this.renderer.camera.fov + (targetFOV - this.renderer.camera.fov) * Math.min(1, dt * 10));

    this.weapon.update(now, dt);
    this.weaponView.update(dt);

    // 开火：发送到服务器
    if (input.fire && this.weapon.tryFire(now, false, false)) {
      const origin = this.renderer.camera.position.clone();
      const dir = new THREE.Vector3();
      this.renderer.camera.getWorldDirection(dir);
      const spread = this.weapon.getSpread();
      dir.x += (Math.random() - 0.5) * spread;
      dir.y += (Math.random() - 0.5) * spread;
      dir.z += (Math.random() - 0.5) * spread;
      dir.normalize();
      this.network.sendFire(w.config.id, { x: origin.x, y: origin.y, z: origin.z }, { x: dir.x, y: dir.y, z: dir.z });
      this.weaponView.fire();
    }

    // 切枪 / 换弹
    if (this.input.consumeKey('Digit1')) { this.weapon.switchWeapon('rifle'); this.network.sendSwitchWeapon('rifle'); }
    if (this.input.consumeKey('Digit2')) { this.weapon.switchWeapon('pistol'); this.network.sendSwitchWeapon('pistol'); }
    if (this.input.consumeKey('Digit3')) { this.weapon.switchWeapon('sniper'); this.network.sendSwitchWeapon('sniper'); }
    if (input.reload) { this.weapon.reload(); this.network.sendReload(); }

    // UI
    this.ui.setAmmo(this.network.myAmmoInMag, this.network.myAmmoReserve, this.network.myReloading);
    this.ui.setHP(this.network.myHp);
    this.ui.update(dt);
    this.weaponView.reload(this.network.myReloading);

    // 更新远程玩家 mesh
    this.updateRemotePlayers();

    // 子弹特效
    this.bullets.update(dt);
    this.updateTracers();

    this.renderer.render();
  };

  private updateRemotePlayers(): void {
    for (const [id, rp] of this.network.remotePlayers) {
      let mesh = this.remoteMeshes.get(id);
      if (!mesh) {
        mesh = this.createRemoteMesh(rp);
        this.remoteMeshes.set(id, mesh);
        this.renderer.scene.add(mesh);
        const target: Target = {
          id,
          mesh,
          hp: rp.hp,
          headMesh: mesh.children[1] as THREE.Mesh,
        };
        this.bullets.registerTarget(target);
      }
      mesh.position.set(rp.x, rp.y - PLAYER_HEIGHT, rp.z);
      mesh.rotation.y = rp.yaw;
      mesh.visible = rp.alive;
    }
    // 清理离线玩家
    for (const [id, mesh] of this.remoteMeshes) {
      if (!this.network.remotePlayers.has(id)) {
        this.renderer.scene.remove(mesh);
        this.remoteMeshes.delete(id);
        this.bullets.unregisterTarget(id);
      }
    }
  }

  private createRemoteMesh(rp: RemotePlayer): THREE.Group {
    const group = new THREE.Group();
    const color = rp.team === 'ATK' ? 0xcc4444 : 0x4488ff;
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.4, 1.0, 4, 8),
      new THREE.MeshStandardMaterial({ color }),
    );
    body.position.y = 0.5;
    group.add(body);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xffccaa }),
    );
    head.position.y = 1.5;
    group.add(head);
    return group;
  }

  private updateTracers(): void {
    this.tracerLines.forEach(l => this.renderer.scene.remove(l));
    this.tracerLines = [];
    for (const t of this.bullets.tracers) {
      const geo = new THREE.BufferGeometry().setFromPoints([t.from, t.to]);
      const mat = new THREE.LineBasicMaterial({ color: 0xffff00, transparent: true, opacity: t.life * 10 });
      const line = new THREE.Line(geo, mat);
      this.renderer.scene.add(line);
      this.tracerLines.push(line);
    }
  }
}
