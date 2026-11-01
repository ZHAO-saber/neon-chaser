const fs = require('fs');
const path = require('path');
const { once } = require('events');
const { spawn } = require('child_process');
const { Canvas } = require('skia-canvas');
const TL = require('./timeline');
const { drawFrame } = require('./engine');

const OUT = path.join(__dirname, '..', 'out');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

async function renderVideo({ start = 0, end = TL.DURATION, name = 'silent.mp4', crf = 18, preset = 'medium' } = {}) {
  const f0 = Math.floor(start * TL.FPS);
  const f1 = Math.floor(end * TL.FPS);
  const total = f1 - f0;
  const file = path.join(OUT, name);

  const ff = spawn('ffmpeg', [
    '-y',
    '-f', 'rawvideo', '-pix_fmt', 'rgba',
    '-s', `${TL.W}x${TL.H}`, '-r', String(TL.FPS),
    '-i', '-',
    '-an',
    '-c:v', 'libx264', '-preset', preset, '-crf', String(crf),
    '-profile:v', 'high', '-level', '4.1',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-threads', '2',
    file,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });

  const canvas = new Canvas(TL.W, TL.H);
  const ctx = canvas.getContext('2d');

  const t0 = Date.now();
  for (let f = f0; f < f1; f++) {
    const t = f / TL.FPS;
    ctx.save();
    drawFrame(ctx, t);
    ctx.restore();
    const buf = canvas.toBufferSync('raw');
    if (!ff.stdin.write(buf)) await once(ff.stdin, 'drain');
    const done = f - f0 + 1;
    if (done % 120 === 0 || done === total) {
      const el = (Date.now() - t0) / 1000;
      const fps = done / el;
      const eta = (total - done) / fps;
      process.stdout.write(`\r${name}  ${done}/${total}  ${fps.toFixed(2)} fps  eta ${eta.toFixed(0)}s   `);
    }
  }
  ff.stdin.end();
  await once(ff, 'close');
  process.stdout.write('\n');
  const st = fs.statSync(file);
  console.log(`${name}: ${(st.size / 1e6).toFixed(1)} MB`);
}

async function renderStills(times) {
  const canvas = new Canvas(TL.W, TL.H);
  const ctx = canvas.getContext('2d');
  for (const t of times) {
    ctx.save();
    drawFrame(ctx, t);
    ctx.restore();
    const p = path.join(OUT, `still_${String(t).padStart(5, '0')}.png`);
    await canvas.saveAs(p);
    console.log(p);
  }
}

(async () => {
  const args = process.argv.slice(2);
  if (args[0] === '--seg') {
    await renderVideo({
      start: Number(args[1] || 0),
      end: Number(args[2] || TL.DURATION),
      name: args[3] || 'seg.mp4',
      crf: Number(args[4] || 18),
      preset: args[5] || 'medium',
    });
  } else if (args[0] === '--stills') {
    await renderStills(args.slice(1).map(Number));
  } else {
    await renderVideo({});
  }
})();
