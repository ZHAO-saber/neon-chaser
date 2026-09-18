/** 第一人称武器视图：程序化生成枪械模型 + 后坐力动画 */
import * as THREE from 'three';

export class WeaponView {
  group: THREE.Group;
  private muzzleFlash: THREE.PointLight;
  private muzzleFlashMesh: THREE.Mesh;
  private flashTimer = 0;

  constructor(camera: THREE.Camera) {
    this.group = new THREE.Group();

    // 枪身（长方体）
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.6, metalness: 0.8 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.6), bodyMat);
    body.position.set(0, 0, -0.3);
    this.group.add(body);

    // 枪管
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8), bodyMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.6);
    this.group.add(barrel);

    // 握把
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.2, 0.1), bodyMat);
    grip.position.set(0, -0.15, -0.15);
    grip.rotation.x = 0.3;
    this.group.add(grip);

    // 弹匣
    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.18, 0.08), new THREE.MeshStandardMaterial({ color: 0x444444 }));
    mag.position.set(0, -0.18, -0.25);
    this.group.add(mag);

    // 瞄具
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.08), bodyMat);
    sight.position.set(0, 0.12, -0.2);
    this.group.add(sight);

    // 枪口火焰
    this.muzzleFlash = new THREE.PointLight(0xffaa00, 0, 5);
    this.muzzleFlash.position.set(0, 0.02, -0.85);
    this.group.add(this.muzzleFlash);

    this.muzzleFlashMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0 }),
    );
    this.muzzleFlashMesh.position.set(0, 0.02, -0.85);
    this.group.add(this.muzzleFlashMesh);

    // 挂载到相机
    this.group.position.set(0.25, -0.25, -0.5);
    camera.add(this.group);
  }

  /** 开火动画：枪口火焰 + 后坐力位移 */
  fire(): void {
    this.flashTimer = 0.05;
    this.muzzleFlash.intensity = 3;
    (this.muzzleFlashMesh.material as THREE.MeshBasicMaterial).opacity = 1;
    // 后坐力位移
    this.group.position.z = -0.4;
  }

  /** 换弹动画：下沉 */
  reload(active: boolean): void {
    this.group.rotation.x = active ? 0.5 : 0;
    this.group.position.y = active ? -0.4 : -0.25;
  }

  update(dt: number): void {
    // 火焰消退
    if (this.flashTimer > 0) {
      this.flashTimer -= dt;
      if (this.flashTimer <= 0) {
        this.muzzleFlash.intensity = 0;
        (this.muzzleFlashMesh.material as THREE.MeshBasicMaterial).opacity = 0;
      }
    }
    // 后坐力回弹
    this.group.position.z += (-0.5 - this.group.position.z) * Math.min(1, dt * 15);
  }
}
