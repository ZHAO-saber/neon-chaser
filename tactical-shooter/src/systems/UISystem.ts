/** HUD：血量、弹药、准星、命中标记、设置面板 */

export interface GameSettings {
  sensitivity: number;
  fov: number;
  volume: number;
}

export class UISystem {
  private container: HTMLElement;
  private hpBar: HTMLElement;
  private ammoText: HTMLElement;
  private crosshair: HTMLElement;
  private hitMarker: HTMLElement;
  private hitMarkerTimer = 0;
  private settingsPanel: HTMLElement;
  private settingsVisible = false;
  onSettingsChange?: (s: GameSettings) => void;

  settings: GameSettings = { sensitivity: 0.0022, fov: 90, volume: 0.7 };

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

    // 设置面板
    this.settingsPanel = this.createSettingsPanel();
    document.body.appendChild(this.settingsPanel);

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') this.toggleSettings();
    });
  }

  private createSettingsPanel(): HTMLElement {
    const panel = document.createElement('div');
    panel.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:360px;background:rgba(0,0,0,0.9);border:2px solid #444;padding:30px;border-radius:8px;font-family:monospace;color:#fff;z-index:30;display:none;pointer-events:auto;';

    const makeSlider = (label: string, min: number, max: number, step: number, val: number, onInput: (v: number) => void) => {
      const row = document.createElement('div');
      row.style.cssText = 'margin-bottom:20px;';
      const lbl = document.createElement('div');
      lbl.style.cssText = 'margin-bottom:6px;font-size:14px;';
      lbl.innerHTML = `${label}: `;
      const valSpan = document.createElement('span');
      valSpan.textContent = val.toFixed(4);
      lbl.appendChild(valSpan);
      row.appendChild(lbl);
      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = String(min);
      slider.max = String(max);
      slider.step = String(step);
      slider.value = String(val);
      slider.style.cssText = 'width:100%;';
      slider.addEventListener('input', () => {
        const v = parseFloat(slider.value);
        valSpan.textContent = v.toFixed(4);
        onInput(v);
      });
      row.appendChild(slider);
      return row;
    };

    const title = document.createElement('div');
    title.style.cssText = 'font-size:20px;font-weight:bold;margin-bottom:20px;text-align:center;';
    title.textContent = '设置';
    panel.appendChild(title);

    panel.appendChild(makeSlider('灵敏度', 0.0005, 0.01, 0.0001, this.settings.sensitivity, (v) => {
      this.settings.sensitivity = v;
      this.onSettingsChange?.(this.settings);
    }));
    panel.appendChild(makeSlider('视野角度', 60, 120, 1, this.settings.fov, (v) => {
      this.settings.fov = v;
      this.onSettingsChange?.(this.settings);
    }));
    panel.appendChild(makeSlider('音量', 0, 1, 0.05, this.settings.volume, (v) => {
      this.settings.volume = v;
      this.onSettingsChange?.(this.settings);
    }));

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '关闭 (ESC)';
    closeBtn.style.cssText = 'width:100%;padding:10px;background:#333;color:#fff;border:1px solid #666;cursor:pointer;font-family:monospace;border-radius:4px;';
    closeBtn.addEventListener('click', () => this.toggleSettings());
    panel.appendChild(closeBtn);

    return panel;
  }

  toggleSettings(): void {
    this.settingsVisible = !this.settingsVisible;
    this.settingsPanel.style.display = this.settingsVisible ? 'block' : 'none';
    if (this.settingsVisible) {
      document.exitPointerLock();
    }
  }

  get settingsOpen(): boolean { return this.settingsVisible; }

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

  /** 开镜时隐藏准星 */
  setScoped(scoped: boolean): void {
    this.crosshair.style.display = scoped ? 'none' : 'block';
  }

  update(dt: number): void {
    if (this.hitMarkerTimer > 0) {
      this.hitMarkerTimer -= dt;
      if (this.hitMarkerTimer <= 0) this.hitMarker.style.opacity = '0';
    }
  }
}
