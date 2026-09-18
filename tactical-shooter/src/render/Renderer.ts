/**
 * Three.js 渲染器封装
 * 支持画质设置：阴影开关、像素比限制、雾效
 */
import * as THREE from 'three';

export type QualityLevel = 'low' | 'medium' | 'high';

export interface RendererOptions {
  quality?: QualityLevel;
}

const QUALITY_CONFIG: Record<QualityLevel, { shadows: boolean; pixelRatio: number; fog: boolean }> = {
  low: { shadows: false, pixelRatio: 1.0, fog: false },
  medium: { shadows: true, pixelRatio: 1.25, fog: true },
  high: { shadows: true, pixelRatio: 1.5, fog: true },
};

export class Renderer {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  sun: THREE.DirectionalLight;
  private quality: QualityLevel;

  constructor(container: HTMLElement, options: RendererOptions = {}) {
    this.quality = options.quality || 'high';
    const cfg = QUALITY_CONFIG[this.quality];

    this.renderer = new THREE.WebGLRenderer({ antialias: this.quality !== 'low', powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, cfg.pixelRatio));
    this.renderer.shadowMap.enabled = cfg.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    if (cfg.fog) {
      this.scene.fog = new THREE.Fog(0x87ceeb, 50, 150);
    }

    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 500);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    // 光照
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    this.scene.add(hemi);

    this.sun = new THREE.DirectionalLight(0xffffff, 1.0);
    this.sun.position.set(50, 80, 30);
    this.sun.castShadow = cfg.shadows;
    if (cfg.shadows) {
      this.sun.shadow.mapSize.set(1024, 1024);
      this.sun.shadow.camera.left = -60;
      this.sun.shadow.camera.right = 60;
      this.sun.shadow.camera.top = 60;
      this.sun.shadow.camera.bottom = -60;
      this.sun.shadow.camera.far = 200;
    }
    this.scene.add(this.sun);

    window.addEventListener('resize', this.onResize);
  }

  /** 切换画质（运行时） */
  setQuality(quality: QualityLevel): void {
    this.quality = quality;
    const cfg = QUALITY_CONFIG[quality];
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, cfg.pixelRatio));
    this.renderer.shadowMap.enabled = cfg.shadows;
    this.sun.castShadow = cfg.shadows;
    this.scene.fog = cfg.fog ? new THREE.Fog(0x87ceeb, 50, 150) : null;
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
