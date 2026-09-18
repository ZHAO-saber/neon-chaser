/** 子弹/射线系统：射线检测、命中判定、伤害结算 */
import * as THREE from 'three';
import type { WeaponState } from '../types/weapon';

export interface Target {
  id: string;
  mesh: THREE.Object3D;
  hp: number;
  /** 头部碰撞体（用于爆头检测） */
  headMesh?: THREE.Object3D;
  onHit?: (damage: number, headshot: boolean) => void;
}

export class BulletSystem {
  private scene: THREE.Scene;
  private targets = new Map<string, Target>();
  private raycaster = new THREE.Raycaster();
  /** 弹道轨迹（用于渲染 tracer） */
  tracers: Array<{ from: THREE.Vector3; to: THREE.Vector3; life: number }> = [];
  /** 命中点特效（弹孔/火花） */
  hitEffects: Array<{ point: THREE.Vector3; normal: THREE.Vector3; life: number }> = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  registerTarget(t: Target): void {
    this.targets.set(t.id, t);
  }

  unregisterTarget(id: string): void {
    this.targets.delete(id);
  }

  /**
   * 发射一次射线
   * @param origin 枪口位置
   * @param direction 射击方向（已包含扩散）
   * @param weapon 武器配置
   */
  fire(origin: THREE.Vector3, direction: THREE.Vector3, weapon: WeaponState): void {
    this.raycaster.set(origin, direction.clone().normalize());
    this.raycaster.far = weapon.config.range;

    // 收集所有可碰撞对象（靶子 + 场景障碍物）
    const collidables: THREE.Object3D[] = [];
    this.targets.forEach((t) => {
      collidables.push(t.mesh);
      if (t.headMesh) collidables.push(t.headMesh);
    });
    // 场景中标记为 collidable 的 mesh
    this.scene.traverse((obj) => {
      if ((obj as any).userData?.collidable) collidables.push(obj);
    });

    const hits = this.raycaster.intersectObjects(collidables, true);

    let hitPoint: THREE.Vector3 | null = null;
    let hitNormal = new THREE.Vector3(0, 1, 0);
    let hitTarget: Target | null = null;
    let headshot = false;

    if (hits.length > 0) {
      const hit = hits[0];
      hitPoint = hit.point.clone();
      if (hit.face) hitNormal = hit.face.normal.clone();

      // 找到命中的目标
      let obj: THREE.Object3D | null = hit.object;
      while (obj) {
        const target = this.findTargetByMesh(obj);
        if (target) {
          hitTarget = target;
          // 检测是否爆头
          headshot = obj === target.headMesh || hit.point.y > target.mesh.position.y + 1.4;
          break;
        }
        obj = obj.parent;
      }
    }

    // 计算伤害（含距离衰减）
    const dist = hitPoint ? origin.distanceTo(hitPoint) : weapon.config.range;
    let damage = weapon.config.damage * (1 - weapon.config.damageFalloff * dist);
    damage = Math.max(damage, weapon.config.damage * 0.3); // 最低伤害30%
    if (headshot) damage *= weapon.config.headshotMultiplier;

    // 应用伤害
    if (hitTarget) {
      hitTarget.hp -= damage;
      hitTarget.onHit?.(damage, headshot);
    }

    // 记录弹道特效
    const endPoint = hitPoint ?? origin.clone().add(direction.clone().multiplyScalar(weapon.config.range));
    this.tracers.push({ from: origin.clone(), to: endPoint, life: 0.08 });

    if (hitPoint) {
      this.hitEffects.push({ point: hitPoint, normal: hitNormal, life: 0.5 });
    }
  }

  private findTargetByMesh(mesh: THREE.Object3D): Target | null {
    for (const t of this.targets.values()) {
      if (t.mesh === mesh || t.headMesh === mesh) return t;
      // 检查 mesh 是否是 target 的子节点
      let p = mesh.parent;
      while (p) {
        if (p === t.mesh) return t;
        p = p.parent;
      }
    }
    return null;
  }

  update(dt: number): void {
    // 更新特效生命周期
    this.tracers = this.tracers.filter((t) => {
      t.life -= dt;
      return t.life > 0;
    });
    this.hitEffects = this.hitEffects.filter((e) => {
      e.life -= dt;
      return e.life > 0;
    });
  }
}
