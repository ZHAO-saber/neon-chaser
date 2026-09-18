/**
 * 计分板系统：Tab 键按住显示
 * 顶部显示比分、回合数、半场状态
 * 表格显示双方队伍成员：玩家名 | K | D | HS | 金钱 | HP
 */

export interface ScoreRow {
  name: string;
  team: 'ATK' | 'DEF';
  kills: number;
  deaths: number;
  headshots: number;
  money: number;
  hp: number;
  alive: boolean;
}

export interface ScoreData {
  rows: ScoreRow[];
  atkScore: number;
  defScore: number;
  roundNumber: number;
  halfTime: boolean;
  /** 最大回合数（如 30） */
  maxRounds: number;
}

export class Scoreboard {
  private container: HTMLDivElement;
  private visible = false;

  constructor() {
    this.container = document.createElement('div');
    this.container.style.cssText =
      'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);' +
      'width:640px;background:rgba(0,0,0,0.88);border:2px solid #444;padding:20px;' +
      'font-family:monospace;color:#fff;z-index:25;display:none;pointer-events:none;border-radius:6px;';
    document.body.appendChild(this.container);

    // 按住 Tab 显示，松开隐藏
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') {
        e.preventDefault();
        this.show();
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Tab') {
        e.preventDefault();
        this.hide();
      }
    });
  }

  /** 显示计分板 */
  show(): void {
    this.visible = true;
    this.container.style.display = 'block';
  }

  /** 隐藏计分板 */
  hide(): void {
    this.visible = false;
    this.container.style.display = 'none';
  }

  /** 切换显示 */
  toggle(): void {
    if (this.visible) this.hide();
    else this.show();
  }

  get isVisible(): boolean {
    return this.visible;
  }

  /** 更新计分板数据（每帧或数据变化时调用） */
  update(data: ScoreData): void {
    const atkRows = data.rows.filter(r => r.team === 'ATK');
    const defRows = data.rows.filter(r => r.team === 'DEF');

    const headerHtml =
      `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid #444;">` +
      `<div style="font-size:22px;font-weight:bold;color:#cc4444;">ATK ${data.atkScore}</div>` +
      `<div style="text-align:center;">` +
      `<div style="font-size:16px;font-weight:bold;">回合 ${data.roundNumber} / ${data.maxRounds}</div>` +
      `<div style="font-size:12px;opacity:0.7;margin-top:2px;">${data.halfTime ? '下半场' : '上半场'}</div>` +
      `</div>` +
      `<div style="font-size:22px;font-weight:bold;color:#4488ff;">${data.defScore} DEF</div>` +
      `</div>`;

    this.container.innerHTML = headerHtml +
      this.renderTeamTable('ATK', atkRows) +
      this.renderTeamTable('DEF', defRows);
  }

  /** 渲染单个队伍表格 */
  private renderTeamTable(team: 'ATK' | 'DEF', rows: ScoreRow[]): string {
    const color = team === 'ATK' ? '#cc4444' : '#4488ff';
    const header =
      `<tr style="border-bottom:1px solid #555;color:#999;font-size:11px;">` +
      `<th style="text-align:left;padding:6px 14px;">玩家</th>` +
      `<th style="padding:6px 14px;">K</th>` +
      `<th style="padding:6px 14px;">D</th>` +
      `<th style="padding:6px 14px;">HS</th>` +
      `<th style="padding:6px 14px;">$</th>` +
      `<th style="padding:6px 14px;">HP</th>` +
      `</tr>`;

    const body = rows.map(r => {
      const hpColor = r.alive
        ? (r.hp > 50 ? '#00ff44' : r.hp > 25 ? '#ffaa00' : '#ff4444')
        : '#666';
      const opacity = r.alive ? '1' : '0.45';
      return (
        `<tr style="opacity:${opacity};">` +
        `<td style="padding:6px 14px;">${r.name}</td>` +
        `<td style="padding:6px 14px;text-align:center;">${r.kills}</td>` +
        `<td style="padding:6px 14px;text-align:center;">${r.deaths}</td>` +
        `<td style="padding:6px 14px;text-align:center;">${r.headshots}</td>` +
        `<td style="padding:6px 14px;text-align:center;">$${r.money}</td>` +
        `<td style="padding:6px 14px;text-align:center;color:${hpColor};">${r.alive ? Math.round(r.hp) : 'DEAD'}</td>` +
        `</tr>`
      );
    }).join('');

    return (
      `<table style="width:100%;border-collapse:collapse;margin-bottom:14px;">` +
      `<thead><tr><th colspan="6" style="text-align:center;padding:8px;color:${color};font-size:14px;font-weight:bold;letter-spacing:2px;">${team}</th></tr>${header}</thead>` +
      `<tbody>${body}</tbody>` +
      `</table>`
    );
  }

  /** 销毁计分板 */
  dispose(): void {
    if (this.container.parentElement) {
      this.container.parentElement.removeChild(this.container);
    }
  }
}
