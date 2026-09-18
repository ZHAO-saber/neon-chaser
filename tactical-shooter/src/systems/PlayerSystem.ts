/** 第一人称控制器：WASD 移动、跳跃、蹲伏、AABB 碰撞 */
import * as THREE from 'three';
import type { PlayerInputFlags } from '../types/player';
import type { MapBlock } from '../types/map';

const PLAYER_HEIGHT = 1.8;
const PLAYER_RADIUS = 0.35;
const EYE_HEIGHT = 1.6;
const GRAVITY = -22;
const JUMP_VELOCITY = 8.5;
const MOVE_SPEED = 7.0;
const WALK_SPEED = 2.8;
const CROUCH_SPEED = 2.0;
const AIR_CONTROL = 0.3;
const FRICTION = 10;

export class PlayerSystem {
  position = new THREE.Vector3(0, PLAYER_HEIGHT, 0);
  velocity = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  onGround = false;
  crouching = false;

  private blocks: MapBlock[] = [];

  setMap(blocks: MapBlock[]): void {
    this.blocks = blocks;
  }

  update(dt: number, input: PlayerInputFlags, yaw: number, pitch: number): void {
    this.yaw = yaw;
    this.pitch = pitch;
    this.crouching = input.crouch && this.onGround;

    // 计算移动方向
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const moveDir = new THREE.Vector3();
    if (input.forward) moveDir.add(forward);
    if (input.back) moveDir.sub(forward);
    if (input.right) moveDir.add(right);
    if (input.left) moveDir.sub(right);
    moveDir.normalize();

    let speed = MOVE_SPEED;
    if (input.walk) speed = WALK_SPEED;
    if (this.crouching) speed = CROUCH_SPEED;

    if (this.onGround) {
      // 地面：直接设置水平速度
      this.velocity.x = moveDir.x * speed;
      this.velocity.z = moveDir.z * speed;
      // 摩擦（无输入时减速）
      if (moveDir.lengthSq() === 0) {
        this.velocity.x *= Math.max(0, 1 - FRICTION * dt);
        this.velocity.z *= Math.max(0, 1 - FRICTION * dt);
      }
    } else {
      // 空中：弱控制
      this.velocity.x += moveDir.x * speed * AIR_CONTROL * dt;
      this.velocity.z += moveDir.z * speed * AIR_CONTROL * dt;
    }

    // 跳跃
    if (input.jump && this.onGround) {
      this.velocity.y = JUMP_VELOCITY;
      this.onGround = false;
    }

    // 重力
    this.velocity.y += GRAVITY * dt;

    // 分轴移动 + 碰撞
    this.moveAxis('x', this.velocity.x * dt);
    this.moveAxis('z', this.velocity.z * dt);
    this.moveAxis('y', this.velocity.y * dt);

    // 地面检测
    if (this.position.y <= PLAYER_HEIGHT) {
      this.position.y = PLAYER_HEIGHT;
      this.velocity.y = 0;
      this.onGround = true;
    }
  }

  /** 单轴移动并检测 AABB 碰撞 */
  private moveAxis(axis: 'x' | 'y' | 'z', amount: number): void {
    if (amount === 0) return;
    (this.position as any)[axis] += amount;

    const h = this.crouching ? PLAYER_HEIGHT * 0.6 : PLAYER_HEIGHT;
    const px = this.position.x, py = this.position.y, pz = this.position.z;
    const min = { x: px - PLAYER_RADIUS, y: py - h, z: pz - PLAYER_RADIUS };
    const max = { x: px + PLAYER_RADIUS, y: py, z: pz + PLAYER_RADIUS };

    for (const b of this.blocks) {
      const bx = b.position.x, by = b.position.y, bz = b.position.z;
      const bsx = b.size.x / 2, bsy = b.size.y / 2, bsz = b.size.z / 2;
      const overlap =
        min.x < bx + bsx && max.x > bx - bsx &&
        min.y < by + bsy && max.y > by - bsy &&
        min.z < bz + bsz && max.z > bz - bsz;

      if (overlap) {
        // 回退到碰撞前
        (this.position as any)[axis] -= amount;
        if (axis === 'y') {
          if (amount < 0) { this.onGround = true; }
          this.velocity.y = 0;
        } else {
          this.velocity[axis] = 0;
        }
      }
    }
  }

  /** 获取眼睛位置（相机位置） */
  getEyePosition(): THREE.Vector3 {
    const h = this.crouching ? PLAYER_HEIGHT * 0.6 : PLAYER_HEIGHT;
    return new THREE.Vector3(this.position.x, this.position.y - h + EYE_HEIGHT, this.position.z);
  }
}
