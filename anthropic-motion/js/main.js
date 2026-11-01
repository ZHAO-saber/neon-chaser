/* ============ 引擎：确定性时间轴 + 在线播放 + 采集/渲染接口 ============ */
(function () {
  'use strict';

  const params = new URLSearchParams(location.search);
  const MODE_CAPTURE = params.get('capture') === '1';
  const MODE_AUDIO = params.get('render') === 'audio';
  const TOTAL = 78.5;

  let sceneEls = [];
  let audioEnv = null;
  let liveT0 = 0;
  let rafId = 0;

  /* ---------- 帧查找：把全局时间映射到各场景 ---------- */
  function seek(t) {
    for (let i = 0; i < SCENES.length; i++) {
      const sc = SCENES[i];
      const node = sceneEls[i];
      if (t < sc.start - 0.001 || t > sc.end + 0.45) {
        node.style.opacity = '0';
        node.style.visibility = 'hidden';
        continue;
      }
      node.style.visibility = 'visible';
      const dur = sc.end - sc.start;
      const local = t - sc.start;
      let op = 1;

      if (sc.enter && sc.enter.type === 'wipe') {
        const p = U.ease.out(U.prog(local, 0, sc.enter.dur));
        node.style.clipPath = `inset(0 ${((1 - p) * 100).toFixed(2)}% 0 0)`;
        node.style.opacity = '1';
      } else {
        node.style.clipPath = 'none';
        if (sc.enter && sc.enter.type === 'fade') {
          op = U.ease.inOut(U.prog(local, 0, sc.enter.dur));
        }
        if (sc.exit) {
          const pe = U.ease.inOut(U.prog(local, dur - sc.exit.dur, sc.exit.dur));
          op *= 1 - pe;
        }
        node.style.opacity = op.toFixed(4);
      }
      RENDERERS[sc.id](local, t);
    }
  }

  /* ---------- 在线播放 ---------- */
  function startLive() {
    document.getElementById('poster').classList.add('hidden');
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    ctx.resume();
    audioEnv = A.playLive(ctx);
    liveT0 = ctx.currentTime + 0.12;
    const loop = () => {
      const t = ctx.currentTime - liveT0;
      seek(t);
      if (t < TOTAL + 0.5) rafId = requestAnimationFrame(loop);
      else document.getElementById('poster').classList.remove('hidden');
    };
    loop();
  }

  /* ---------- 启动 ---------- */
  async function boot() {
    SCENES_INIT();
    sceneEls = SCENES.map(sc => document.getElementById(sc.id));
    seek(0);

    /* 等字体就绪 */
    try {
      await document.fonts.load('700 74px "Noto Serif SC"');
      await document.fonts.load('600 34px "Noto Serif SC"');
      await document.fonts.load('500 17px "IBM Plex Mono"');
      await document.fonts.ready;
    } catch (e) { /* ignore */ }

    if (MODE_AUDIO || MODE_CAPTURE) {
      document.getElementById('poster').classList.add('hidden');
    }

    if (MODE_AUDIO) {
      /* 离线渲染配乐 → WAV → 上传给本地渲染服务 */
      const buf = await A.renderOffline();
      const wav = A.encodeWAV(buf);
      const CH = 400000;
      for (let off = 0; off < wav.length; off += CH) {
        await fetch('http://127.0.0.1:8737/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream', 'X-Offset': String(off) },
          body: wav.slice(off, off + CH)
        });
      }
      await fetch('http://127.0.0.1:8737/done', { method: 'POST' });
      document.title = 'AUDIO_DONE';
    } else if (MODE_CAPTURE) {
      window.__seek = seek;
      window.__ready = true;
      document.title = 'READY';
    } else {
      document.getElementById('play-btn').addEventListener('click', startLive);
      document.title = 'READY';
    }
  }

  boot();
})();
