/** 经济系统：管理玩家金钱与护甲 */
import { WEAPON_PRESETS, type WeaponId } from '../types/weapon';
import { MONEY_MAX } from '../types/round';

/** 初始金钱 */
const START_MONEY = 800;
/** 护甲价格 */
const ARMOR_PRICE = 650;
/** 头盔价格 */
const HELMET_PRICE = 350;
/** 护甲最大值 */
const ARMOR_MAX = 100;

export class EconomySystem {
  /** 当前金钱（私有，通过方法操作） */
  private _money = START_MONEY;
  /** 护甲值 0-100 */
  armor = 0;
  /** 是否拥有头盔 */
  hasHelmet = false;

  /** 获取当前金钱 */
  get money(): number {
    return this._money;
  }

  /** 购买武器：扣钱成功返回 true，失败返回 false */
  buyWeapon(weaponId: WeaponId): boolean {
    const price = WEAPON_PRESETS[weaponId].price;
    if (this._money < price) return false;
    this._money -= price;
    return true;
  }

  /** 购买护甲：扣 650，设置 armor=100 */
  buyArmor(): boolean {
    if (this._money < ARMOR_PRICE) return false;
    this._money -= ARMOR_PRICE;
    this.armor = ARMOR_MAX;
    return true;
  }

  /** 购买头盔：扣 350，设置 hasHelmet=true */
  buyHelmet(): boolean {
    if (this._money < HELMET_PRICE) return false;
    this._money -= HELMET_PRICE;
    this.hasHelmet = true;
    return true;
  }

  /** 加钱，上限 16000，下限 0 */
  addMoney(amount: number): void {
    this._money = Math.max(0, Math.min(MONEY_MAX, this._money + amount));
  }

  /** 重置到初始状态：金钱 800，无护甲无头盔 */
  reset(): void {
    this._money = START_MONEY;
    this.armor = 0;
    this.hasHelmet = false;
  }
}
