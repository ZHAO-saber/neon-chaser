/** 键鼠输入管理：指针锁定、按键状态、鼠标视角 */
import type { PlayerInputFlags } from '../types/player';

export class InputManager {
  private keys = new Set<string>();
  private mouseButtons = new Set<number>();
  private _yaw = 0;
  private _pitch = 0;
  private locked = false;
  private domElement: HTMLElement;
  sensitivity = 0.0022;

  constructor(domElement: HTMLElement) {
    this.domElement = domElement;
    this.bind();
  }

  private bind(): void {
    document.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
    });
    document.addEventListener('keyup', (e) => this.keys.delete(e.code));

    this.domElement.addEventListener('click', () => {
      if (!this.locked) this.domElement.requestPointerLock();
    });

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.domElement;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this._yaw -= e.movementX * this.sensitivity;
      this._pitch -= e.movementY * this.sensitivity;
      // 俯仰角限制：±85度
      const limit = Math.PI / 2 - 0.1;
      this._pitch = Math.max(-limit, Math.min(limit, this._pitch));
    });

    document.addEventListener('mousedown', (e) => {
      if (this.locked) this.mouseButtons.add(e.button);
    });
    document.addEventListener('mouseup', (e) => this.mouseButtons.delete(e.button));
  }

  /** 消费一帧的输入快照 */
  getInput(): PlayerInputFlags {
    return {
      forward: this.keys.has('KeyW'),
      back: this.keys.has('KeyS'),
      left: this.keys.has('KeyA'),
      right: this.keys.has('KeyD'),
      jump: this.keys.has('Space'),
      crouch: this.keys.has('ControlLeft') || this.keys.has('ControlRight'),
      walk: this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'),
      fire: this.mouseButtons.has(0),
      reload: this.keys.has('KeyR'),
      scope: this.mouseButtons.has(2),
    };
  }

  /** 单次触发检测（按住不重复） */
  consumeKey(code: string): boolean {
    if (this.keys.has(code)) {
      this.keys.delete(code);
      return true;
    }
    return false;
  }

  get yaw(): number { return this._yaw; }
  get pitch(): number { return this._pitch; }
  get isLocked(): boolean { return this.locked; }
}
