/** Three.js 渲染器封装 */
import * as THREE from 'three';

export class Renderer {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  sun: THREE.DirectionalLight;

  constructor(container: HTMLElement) {

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 50, 150);

    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 500);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    // 光照
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    this.scene.add(hemi);

    this.sun = new THREE.DirectionalLight(0xffffff, 1.0);
    this.sun.position.set(50, 80, 30);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.left = -60;
    this.sun.shadow.camera.right = 60;
    this.sun.shadow.camera.top = 60;
    this.sun.shadow.camera.bottom = -60;
    this.sun.shadow.camera.far = 200;
    this.scene.add(this.sun);

    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  setFOV(fov: number): void {
    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }
}
