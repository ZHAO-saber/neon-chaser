import { Game } from './core/Game';
import { MultiplayerGame } from './core/MultiplayerGame';

const container = document.getElementById('app')!;

// 模式选择：URL ?multiplayer 进入多人模式，否则单人模式
const params = new URLSearchParams(window.location.search);
const isMultiplayer = params.has('multiplayer');

if (isMultiplayer) {
  // 多人模式
  const mpGame = new MultiplayerGame(container);
  mpGame.start().then(() => {
    showHint(true);
  }).catch((err) => {
    console.error('Multiplayer connection failed:', err);
    showHint(false, '多人连接失败，请检查服务器是否启动 (npm run server)');
    // 回退到单人模式
    const game = new Game(container);
    game.start();
  });
} else {
  // 单人模式（含 Bot）
  const game = new Game(container);
  game.start();
  showHint(false);
}

function showHint(multiplayer: boolean, errMsg?: string): void {
  const hint = document.createElement('div');
  hint.style.cssText =
    'position:fixed;top:10px;left:50%;transform:translateX(-50%);' +
    'color:#fff;font-family:monospace;font-size:13px;text-shadow:0 0 4px #000;z-index:20;' +
    'max-width:90vw;text-align:center;line-height:1.5;';
  if (errMsg) {
    hint.innerHTML = `<span style="color:#ff6666;">${errMsg}</span><br>已自动回退到单人 Bot 模式`;
  } else if (multiplayer) {
    hint.innerHTML =
      '【多人模式】点击屏幕锁定鼠标 | WASD移动 | 空格跳 | Ctrl蹲 | Shift走 | 左键射击 | 右键开镜 | R换弹 | 1/2/3/4切枪 | ESC设置';
  } else {
    hint.innerHTML =
      '点击屏幕锁定鼠标 | WASD移动 | 空格跳 | Ctrl蹲 | Shift走 | 左键射击 | 右键开镜 | R换弹 | 1/2/3/4切枪 | B购买 | E安/拆弹 | Tab计分板 | ESC设置';
  }
  document.body.appendChild(hint);
}
