/**
 * 雷达系统：左上角圆形小地图
 * - 玩家位于中心，朝向始终朝上
 * - 半径 40m 内显示实体
 * - 敌人仅当在视线内或开火时显示
 */

/** 雷达实体（玩家/敌人/队友） */
export interface RadarEntity {
  position: { x: number; y: number; z: number };
  alive: boolean;
  /** 是否正在开火（开火时显示在雷达上） */
  firing?: boolean;
  /** 是否在玩家视线内（用于敌人显示） */
  visible?: boolean;
}

/** 炸弹点（A/B） */
export interface RadarBombSite {
  id: 'A' | 'B';
  position: { x: number; y: number; z: number };
}

/** 雷达每帧输入数据 */
export interface RadarData {
  playerPosition: { x: number; y: number; z: number };
  playerYaw: number;
  enemies: RadarEntity[];
  teammates: RadarEntity[];
  bomb: { planted: boolean; position: { x: number; y: number; z: number } | null };
  bombSites: RadarBombSite[];
}

export class RadarSystem {
  private container: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx2d: CanvasRenderingContext2D;
  private readonly size = 200;
  private readonly radius = 100; // 像素半径
  private readonly worldRadius = 40; // 世界半径（米）

  constructor() {
    this.container = document.createElement('div');
    this.container.style.cssText = `position:fixed;top:20px;left:20px;width:${this.size}px;height:${this.size}px;pointer-events:none;z-index:15;`;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.canvas.style.cssText = 'width:100%;height:100%;display:block;';
    this.container.appendChild(this.canvas);
    document.body.appendChild(this.container);

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context unavailable');
    this.ctx2d = ctx;
  }

  /** 显示/隐藏雷达 */
  setVisible(visible: boolean): void {
    this.container.style.display = visible ? 'block' : 'none';
  }

  /** 每帧更新雷达 */
  update(data: RadarData): void {
    const ctx = this.ctx2d;
    const cx = this.size / 2;
    const cy = this.size / 2;
    const scale = this.radius / this.worldRadius;

    // 清空
    ctx.clearRect(0, 0, this.size, this.size);

    // 雷达圆背景
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(100,200,100,0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 十字准线
    ctx.strokeStyle = 'rgba(100,200,100,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, cy - this.radius);
    ctx.lineTo(cx, cy + this.radius);
    ctx.moveTo(cx - this.radius, cy);
    ctx.lineTo(cx + this.radius, cy);
    ctx.stroke();

    // 裁剪到圆形区域
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
    ctx.clip();

    const yaw = data.playerYaw;
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);

    // 世界坐标 → 雷达坐标
    // yaw=0 时玩家朝 -Z，localForward 朝 -Z 方向为正
    const worldToRadar = (wx: number, wz: number): { x: number; y: number; inRange: boolean } => {
      const dx = wx - data.playerPosition.x;
      const dz = wz - data.playerPosition.z;
      // 玩家右向量 (cos, -sin)，玩家前向量 (-sin, -cos)
      const localRight = dx * cosY - dz * sinY;
      const localForward = -dx * sinY - dz * cosY;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const inRange = dist <= this.worldRadius;
      const rx = cx + localRight * scale;
      const ry = cy - localForward * scale;
      return { x: rx, y: ry, inRange };
    };

    // A/B 炸弹点（白色字母标记）
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const site of data.bombSites) {
      const pos = worldToRadar(site.position.x, site.position.z);
      if (!pos.inRange) continue;
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(site.id, pos.x, pos.y);
    }

    // 队友（蓝色点）
    for (const t of data.teammates) {
      if (!t.alive) continue;
      const pos = worldToRadar(t.position.x, t.position.z);
      if (!pos.inRange) continue;
      ctx.fillStyle = '#3399ff';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 敌人（红色点，仅可见或开火时显示）
    for (const e of data.enemies) {
      if (!e.alive) continue;
      if (!e.visible && !e.firing) continue;
      const pos = worldToRadar(e.position.x, e.position.z);
      if (!pos.inRange) continue;
      ctx.fillStyle = e.firing ? '#ff3333' : '#cc4444';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 炸弹（黄色点，已安放）
    if (data.bomb.planted && data.bomb.position) {
      const pos = worldToRadar(data.bomb.position.x, data.bomb.position.z);
      if (pos.inRange) {
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();

    // 玩家三角（中心，绿色，朝上）
    ctx.fillStyle = '#00ff44';
    ctx.beginPath();
    ctx.moveTo(cx, cy - 8);
    ctx.lineTo(cx - 6, cy + 6);
    ctx.lineTo(cx + 6, cy + 6);
    ctx.closePath();
    ctx.fill();
  }

  /** 销毁雷达 DOM */
  dispose(): void {
    if (this.container.parentElement) {
      this.container.parentElement.removeChild(this.container);
    }
  }
}
