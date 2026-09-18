/** 程序化地图几何体生成 */
import * as THREE from 'three';
import type { MapData } from '../types/map';

export function buildMapGeometry(scene: THREE.Scene, map: MapData): void {
  // 地面
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.9 });
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(map.groundSize.x, 0.2, map.groundSize.z),
    groundMat,
  );
  ground.position.y = -0.1;
  ground.receiveShadow = true;
  ground.userData.collidable = true;
  scene.add(ground);

  const materials: Record<string, THREE.MeshStandardMaterial> = {
    wall: new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.8 }),
    crate: new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.7 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.4, metalness: 0.6 }),
    ground: groundMat,
  };

  for (const block of map.blocks) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(block.size.x, block.size.y, block.size.z),
      materials[block.material] || materials.wall,
    );
    mesh.position.set(block.position.x, block.position.y, block.position.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.collidable = true;
    scene.add(mesh);
  }
}
