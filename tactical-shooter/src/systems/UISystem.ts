/** HUD：血量、弹药、准星、命中标记 */

export class UISystem {
  private container: HTMLElement;
  private hpBar: HTMLElement;
  private ammoText: HTMLElement;
  private crosshair: HTMLElement;
  private hitMarker: HTMLElement;
  private hitMarkerTimer = 0;

  constructor() {
    this.container = document.createElement('div');
    this.container.style.cssText = 'position:fixed;inset:0;pointer-events:none;font-family:monospace;color:#fff;z-index:10;';

    // 血量条
    this.hpBar = document.createElement('div');
    this.hpBar.style.cssText = 'position:absolute;bottom:30px;left:30px;width:200px;height:24px;background:rgba(0,0,0,0.5);border:2px solid #fff;';
    const hpFill = document.createElement('div');
    hpFill.id = 'hp-fill';
    hpFill.style.cssText = 'width:100%;height:100%;background:#00ff44;transition:width 0.2s;';
    this.hpBar.appendChild(hpFill);
    const hpLabel = document.createElement('div');
    hpLabel.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:bold;text-shadow:0 0 3px #000;';
    hpLabel.id = 'hp-label';
    hpLabel.textContent = '100';
    this.hpBar.appendChild(hpLabel);
    this.container.appendChild(this.hpBar);

    // 弹药
    this.ammoText = document.createElement('div');
    this.ammoText.style.cssText = 'position:absolute;bottom:30px;right:30px;font-size:32px;font-weight:bold;text-shadow:0 0 6px #000;';
    this.container.appendChild(this.ammoText);

    // 准星
    this.crosshair = document.createElement('div');
    this.crosshair.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20px;height:20px;';
    this.crosshair.innerHTML = `
      <div style="position:absolute;top:0;left:50%;width:2px;height:6px;background:#0f0;transform:translateX(-50%);"></div>
      <div style="position:absolute;bottom:0;left:50%;width:2px;height:6px;background:#0f0;transform:translateX(-50%);"></div>
      <div style="position:absolute;left:0;top:50%;width:6px;height:2px;background:#0f0;transform:translateY(-50%);"></div>
      <div style="position:absolute;right:0;top:50%;width:6px;height:2px;background:#0f0;transform:translateY(-50%);"></div>
    `;
    this.container.appendChild(this.crosshair);

    // 命中标记
    this.hitMarker = document.createElement('div');
    this.hitMarker.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:30px;height:30px;opacity:0;transition:opacity 0.1s;';
    this.hitMarker.innerHTML = `
      <div style="position:absolute;top:0;left:0;width:2px;height:8px;background:#fff;transform:rotate(45deg);transform-origin:top left;"></div>
      <div style="position:absolute;top:0;right:0;width:2px;height:8px;background:#fff;transform:rotate(-45deg);transform-origin:top right;"></div>
      <div style="position:absolute;bottom:0;left:0;width:2px;height:8px;background:#fff;transform:rotate(-45deg);transform-origin:bottom left;"></div>
      <div style="position:absolute;bottom:0;right:0;width:2px;height:8px;background:#fff;transform:rotate(45deg);transform-origin:bottom right;"></div>
    `;
    this.container.appendChild(this.hitMarker);

    document.body.appendChild(this.container);
  }

  setHP(hp: number): void {
    const pct = Math.max(0, hp);
    (document.getElementById('hp-fill') as HTMLElement).style.width = pct + '%';
    document.getElementById('hp-label')!.textContent = Math.round(pct).toString();
  }

  setAmmo(inMag: number, reserve: number, reloading: boolean): void {
    this.ammoText.textContent = reloading ? 'RELOADING...' : `${inMag} / ${reserve}`;
  }

  showHitMarker(): void {
    this.hitMarker.style.opacity = '1';
    this.hitMarkerTimer = 0.15;
  }

  update(dt: number): void {
    if (this.hitMarkerTimer > 0) {
      this.hitMarkerTimer -= dt;
      if (this.hitMarkerTimer <= 0) this.hitMarker.style.opacity = '0';
    }
  }
}
