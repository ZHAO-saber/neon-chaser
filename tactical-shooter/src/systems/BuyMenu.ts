/** 购买菜单：纯 DOM 操作，B 键开关，仅 BUY 阶段可购买，打开时暂停游戏 */
import { WEAPON_PRESETS, type WeaponId } from '../types/weapon';
import type { EconomySystem } from './EconomySystem';
import type { RoundSystem } from './RoundSystem';

/** 购买菜单物品分类 */
type BuyCategory = 'pistol' | 'rifle' | 'sniper' | 'knife' | 'grenade' | 'armor' | 'helmet';

/** 购买菜单物品定义 */
interface BuyMenuItem {
  id: string;
  name: string;
  price: number;
  category: BuyCategory;
}

/** 购买菜单物品列表（武器价格取自 WEAPON_PRESETS） */
const BUY_MENU_ITEMS: BuyMenuItem[] = [
  { id: 'pistol', name: '手枪', price: WEAPON_PRESETS.pistol.price, category: 'pistol' },
  { id: 'rifle', name: '步枪', price: WEAPON_PRESETS.rifle.price, category: 'rifle' },
  { id: 'sniper', name: '狙击枪', price: WEAPON_PRESETS.sniper.price, category: 'sniper' },
  { id: 'knife', name: '刀', price: WEAPON_PRESETS.knife.price, category: 'knife' },
  { id: 'grenade', name: '手雷', price: WEAPON_PRESETS.grenade.price, category: 'grenade' },
  { id: 'armor', name: '护甲', price: 650, category: 'armor' },
  { id: 'helmet', name: '头盔', price: 350, category: 'helmet' },
];

/** 分类中文标签 */
const CATEGORY_LABELS: Record<BuyCategory, string> = {
  pistol: '手枪',
  rifle: '步枪',
  sniper: '狙击枪',
  knife: '近战',
  grenade: '投掷物',
  armor: '防护',
  helmet: '防护',
};

export class BuyMenu {
  /** 菜单面板根元素 */
  private panel: HTMLElement;
  /** 金钱显示元素 */
  private moneyDisplay: HTMLElement;
  /** 是否可见 */
  private visible = false;
  /** 经济系统引用 */
  private economy: EconomySystem;
  /** 回合系统引用 */
  private roundSystem: RoundSystem;
  /** B 键事件监听器引用（用于销毁） */
  private keyHandler: (e: KeyboardEvent) => void;

  /** 购买成功回调（通知外部添加武器到背包等） */
  onBuy?: (itemId: string) => void;
  /** 菜单可见性变化回调（用于暂停/恢复游戏） */
  onVisibilityChange?: (visible: boolean) => void;

  constructor(economy: EconomySystem, roundSystem: RoundSystem) {
    this.economy = economy;
    this.roundSystem = roundSystem;

    // 创建面板
    this.panel = document.createElement('div');
    this.panel.style.cssText = [
      'position:fixed',
      'top:50%',
      'left:50%',
      'transform:translate(-50%,-50%)',
      'width:420px',
      'max-height:80vh',
      'overflow-y:auto',
      'background:rgba(10,15,10,0.96)',
      'border:2px solid #00ff44',
      'padding:24px',
      'border-radius:6px',
      'font-family:monospace',
      'color:#00ff44',
      'z-index:40',
      'display:none',
      'pointer-events:auto',
      'box-shadow:0 0 24px rgba(0,255,68,0.25)',
    ].join(';');
    document.body.appendChild(this.panel);

    // 标题
    const title = document.createElement('div');
    title.style.cssText =
      'font-size:18px;font-weight:bold;margin-bottom:14px;text-align:center;border-bottom:1px solid #00ff44;padding-bottom:10px;';
    title.textContent = '购买菜单 (B 关闭)';
    this.panel.appendChild(title);

    // 金钱显示
    this.moneyDisplay = document.createElement('div');
    this.moneyDisplay.style.cssText =
      'font-size:16px;margin-bottom:16px;text-align:right;color:#ffff00;font-weight:bold;';
    this.panel.appendChild(this.moneyDisplay);

    // 物品列表
    const list = document.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
    for (const item of BUY_MENU_ITEMS) {
      list.appendChild(this.createItemRow(item));
    }
    this.panel.appendChild(list);

    // 关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '关闭 (B)';
    closeBtn.style.cssText = [
      'width:100%',
      'margin-top:16px',
      'padding:10px',
      'font-family:monospace',
      'font-size:14px',
      'background:#1a3a1a',
      'color:#00ff44',
      'border:1px solid #00ff44',
      'border-radius:4px',
      'cursor:pointer',
    ].join(';');
    closeBtn.addEventListener('click', () => this.close());
    this.panel.appendChild(closeBtn);

    // B 键开关
    this.keyHandler = (e: KeyboardEvent) => {
      if (e.code === 'KeyB') {
        e.preventDefault();
        this.toggle();
      }
    };
    document.addEventListener('keydown', this.keyHandler);

    this.updateMoneyDisplay();
  }

  /** 创建单个物品行 */
  private createItemRow(item: BuyMenuItem): HTMLElement {
    const row = document.createElement('div');
    row.style.cssText = [
      'display:flex',
      'align-items:center',
      'justify-content:space-between',
      'padding:10px 14px',
      'background:rgba(0,255,68,0.05)',
      'border:1px solid #2a5a2a',
      'border-radius:4px',
      'transition:background 0.15s',
    ].join(';');

    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(0,255,68,0.15)';
    });
    row.addEventListener('mouseleave', () => {
      row.style.background = 'rgba(0,255,68,0.05)';
    });

    // 左侧：名称 + 分类
    const info = document.createElement('div');
    info.style.cssText = 'display:flex;flex-direction:column;gap:2px;';
    const nameEl = document.createElement('span');
    nameEl.style.cssText = 'font-size:14px;font-weight:bold;';
    nameEl.textContent = item.name;
    const catEl = document.createElement('span');
    catEl.style.cssText = 'font-size:11px;color:#888;';
    catEl.textContent = CATEGORY_LABELS[item.category];
    info.appendChild(nameEl);
    info.appendChild(catEl);
    row.appendChild(info);

    // 右侧：价格 + 购买按钮
    const right = document.createElement('div');
    right.style.cssText = 'display:flex;align-items:center;gap:12px;';
    const priceEl = document.createElement('span');
    priceEl.style.cssText = 'font-size:14px;color:#ffff00;min-width:70px;text-align:right;';
    priceEl.textContent = `$${item.price}`;
    right.appendChild(priceEl);

    const btn = document.createElement('button');
    btn.textContent = '购买';
    btn.style.cssText = [
      'padding:6px 18px',
      'font-family:monospace',
      'font-size:13px',
      'background:#1a3a1a',
      'color:#00ff44',
      'border:1px solid #00ff44',
      'border-radius:3px',
      'cursor:pointer',
      'transition:all 0.15s',
    ].join(';');
    btn.addEventListener('mouseenter', () => {
      btn.style.background = '#00ff44';
      btn.style.color = '#000';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = '#1a3a1a';
      btn.style.color = '#00ff44';
    });
    btn.addEventListener('click', () => this.purchase(item));
    right.appendChild(btn);
    row.appendChild(right);

    return row;
  }

  /** 执行购买：只在 BUY 阶段可购买 */
  private purchase(item: BuyMenuItem): void {
    // 非 BUY 阶段禁止购买
    if (!this.roundSystem.isBuyPhase) return;

    let success = false;
    switch (item.category) {
      case 'armor':
        success = this.economy.buyArmor();
        break;
      case 'helmet':
        success = this.economy.buyHelmet();
        break;
      default:
        // 武器类：用 WeaponId 购买
        success = this.economy.buyWeapon(item.id as WeaponId);
        break;
    }

    if (success) {
      this.updateMoneyDisplay();
      // 通知外部（添加武器到背包、播放音效等）
      this.onBuy?.(item.id);
    }
  }

  /** 更新金钱显示 */
  private updateMoneyDisplay(): void {
    this.moneyDisplay.textContent = `金钱: $${this.economy.money}`;
  }

  /** 切换菜单显示（非 BUY 阶段不允许打开） */
  toggle(): void {
    if (!this.visible && !this.roundSystem.isBuyPhase) return;
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  /** 打开菜单 */
  open(): void {
    if (this.visible) return;
    if (!this.roundSystem.isBuyPhase) return;
    this.visible = true;
    this.panel.style.display = 'block';
    this.updateMoneyDisplay();
    // 释放鼠标锁定，让玩家用鼠标点击
    document.exitPointerLock();
    // 通知外部暂停游戏
    this.onVisibilityChange?.(true);
  }

  /** 关闭菜单 */
  close(): void {
    if (!this.visible) return;
    this.visible = false;
    this.panel.style.display = 'none';
    // 通知外部恢复游戏
    this.onVisibilityChange?.(false);
  }

  /** 菜单是否可见 */
  get isVisible(): boolean {
    return this.visible;
  }

  /** 刷新金钱显示（BUY 阶段每帧调用） */
  refresh(): void {
    if (this.visible) this.updateMoneyDisplay();
  }
}
