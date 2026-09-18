import { Game } from './core/Game';

const container = document.getElementById('app')!;
const game = new Game(container);
game.start();

// 提示信息
const hint = document.createElement('div');
hint.style.cssText = 'position:fixed;top:10px;left:50%;transform:translateX(-50%);color:#fff;font-family:monospace;font-size:14px;text-shadow:0 0 4px #000;z-index:20;';
hint.innerHTML = '点击屏幕锁定鼠标 | WASD移动 | 空格跳 | Ctrl蹲 | Shift走 | 左键射击 | R换弹 | 1/2切枪';
document.body.appendChild(hint);
