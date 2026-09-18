/**
 * Colyseus Schema 定义
 * 服务器权威状态：玩家位置/血量/武器/弹药，回合阶段，炸弹
 */
import { Schema, type } from '@colyseus/schema';

export class PlayerState extends Schema {
  @type('string') id = '';
  @type('string') name = '';
  @type('string') team: 'ATK' | 'DEF' = 'ATK';
  @type('number') x = 0;
  @type('number') y = 0;
  @type('number') z = 0;
  @type('number') yaw = 0;
  @type('number') pitch = 0;
  @type('number') hp = 100;
  @type('number') armor = 0;
  @type('boolean') alive = true;
  @type('boolean') hasHelmet = false;
  @type('string') currentWeapon = 'rifle';
  @type('number') money = 800;
  @type('number') kills = 0;
  @type('number') deaths = 0;
  @type('number') headshots = 0;
  @type('boolean') hasBomb = false;
  @type('number') lastFireTick = 0;
  @type('number') ammoInMag = 30;
  @type('number') ammoReserve = 90;
  @type('boolean') reloading = false;
  @type('number') reloadEndTick = 0;
}

export class GameRoomState extends Schema {
  @type('string') phase: 'WARMUP' | 'BUY' | 'LIVE' | 'BOMB_PLANTED' | 'POST' = 'WARMUP';
  @type('number') roundNumber = 0;
  @type('number') phaseStartTime = 0;
  @type('number') phaseDuration = 5;
  @type('number') atkScore = 0;
  @type('number') defScore = 0;
  @type('string') winner: 'ATK' | 'DEF' | null = null;
  @type('boolean') halfTime = false;
  @type('boolean') bombPlanted = false;
  @type('string') bombSite: 'A' | 'B' | null = null;
  @type('number') bombTimer = 0;
  @type('number') tick = 0;
  @type({ map: PlayerState }) players = new Map<string, PlayerState>();
}
