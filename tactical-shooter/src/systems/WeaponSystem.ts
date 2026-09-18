/** 武器系统：射击、换弹、后坐力、扩散 */
import { WEAPON_PRESETS, type WeaponId, type WeaponState } from '../types/weapon';

export class WeaponSystem {
  private weapons = new Map<WeaponId, WeaponState>();
  private current: WeaponId = 'rifle';
  /** 后坐力累积的 pitch 偏移 */
  recoilPitchOffset = 0;
  /** 后坐力累积的 yaw 偏移 */
  recoilYawOffset = 0;

  constructor() {
    // 初始给一把步枪
    this.addWeapon('rifle');
    this.addWeapon('pistol');
  }

  addWeapon(id: WeaponId): void {
    const config = WEAPON_PRESETS[id];
    this.weapons.set(id, {
      config,
      ammoInMag: config.magSize,
      ammoReserve: config.reserveMax,
      nextFireTime: 0,
      reloading: false,
      reloadEndTime: 0,
      scoped: false,
      recoilOffset: 0,
    });
  }

  getCurrent(): WeaponState {
    return this.weapons.get(this.current)!;
  }

  switchWeapon(id: WeaponId): void {
    if (!this.weapons.has(id)) return;
    this.current = id;
  }

  /** 尝试开火，返回是否成功发射 */
  tryFire(now: number, _moving: boolean, _jumping: boolean): boolean {
    const w = this.getCurrent();
    if (w.config.id === 'knife' || w.config.id === 'grenade') return false; // 阶段1只做枪械
    if (w.reloading) return false;
    if (w.ammoInMag <= 0) return false;
    if (now < w.nextFireTime) return false;

    w.ammoInMag--;
    w.nextFireTime = now + (60000 / w.config.fireRate);
    this.applyRecoil(w);
    return true;
  }

  private applyRecoil(w: WeaponState): void {
    // 垂直后坐力
    this.recoilPitchOffset += w.config.recoilVertical * (Math.PI / 180);
    // 水平后坐力（随机左右）
    this.recoilYawOffset += (Math.random() - 0.5) * w.config.recoilHorizontal * 2 * (Math.PI / 180);
    // 防止后坐力无限累积，限制上限
    this.recoilPitchOffset = Math.min(this.recoilPitchOffset, 0.15);
  }

  /** 计算当前扩散（弧度） */
  getSpread(): number {
    const w = this.getCurrent();
    let spread = w.config.spreadBase;
    if (w.scoped) spread *= w.config.scopeSpreadMultiplier;
    return spread;
  }

  reload(): void {
    const w = this.getCurrent();
    if (w.reloading) return;
    if (w.ammoInMag >= w.config.magSize) return;
    if (w.ammoReserve <= 0) return;
    w.reloading = true;
    w.reloadEndTime = performance.now() + w.config.reloadTime * 1000;
  }

  /** 每帧更新：处理换弹完成、后坐力回弹 */
  update(now: number, dt: number): void {
    const w = this.getCurrent();
    if (w.reloading && now >= w.reloadEndTime) {
      const need = w.config.magSize - w.ammoInMag;
      const take = Math.min(need, w.ammoReserve);
      w.ammoInMag += take;
      w.ammoReserve -= take;
      w.reloading = false;
    }
    // 后坐力回弹
    const recover = 6 * dt;
    this.recoilPitchOffset = Math.max(0, this.recoilPitchOffset - recover);
    this.recoilYawOffset *= Math.max(0, 1 - recover * 2);
  }

  toggleScope(): void {
    const w = this.getCurrent();
    if (w.config.canScope) w.scoped = !w.scoped;
  }

  get ammoInfo(): { inMag: number; reserve: number; reloading: boolean } {
    const w = this.getCurrent();
    return { inMag: w.ammoInMag, reserve: w.ammoReserve, reloading: w.reloading };
  }
}
