/* ============ 渲染管线：离线音频 + 逐帧截图 + ffmpeg 合成 ============ */
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = '/workspace/anthropic-motion';
const OUT = '/workspace/anthropic-motion/build';
const FPS = 30;
const DURATION = 78.5;
const W = 1920, H = 1080;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function launch() {
  return chromium.launch({
    args: [
      '--no-sandbox', '--disable-dev-shm-usage',
      '--force-color-profile=srgb', '--font-render-hinting=none',
      '--disable-gpu'
    ]
  });
}

/* ---------- 1. 音频渲染 ---------- */
async function renderAudio(browser) {
  fs.mkdirSync(OUT, { recursive: true });
  const wavPath = path.join(OUT, 'score.wav');
  let chunks = [];
  let total = 0;
  let doneResolve;
  const doneP = new Promise(r => (doneResolve = r));

  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Offset');
    if (req.method === 'OPTIONS') { res.end(); return; }
    if (req.method === 'POST' && req.url === '/upload') {
      const off = parseInt(req.headers['x-offset'], 10);
      const bufs = [];
      req.on('data', c => bufs.push(c));
      req.on('end', () => {
        const b = Buffer.concat(bufs);
        chunks.push({ off, b });
        total = Math.max(total, off + b.length);
        res.end('ok');
      });
    } else if (req.method === 'POST' && req.url === '/done') {
      res.end('ok');
      doneResolve();
    } else res.end('?');
  });
  await new Promise(r => server.listen(8737, '127.0.0.1', r));

  const page = await browser.newPage({ viewport: { width: W, height: H } });
  page.on('console', m => { if (m.type() === 'error') console.log('[page]', m.text()); });
  console.log('[audio] rendering offline score …');
  await page.goto('file://' + path.join(ROOT, 'index.html') + '?render=audio');
  await page.waitForFunction(() => document.title === 'AUDIO_DONE', { timeout: 150000, polling: 250 });
  await page.close();
  server.close();

  const buf = Buffer.alloc(total);
  for (const c of chunks) c.b.copy(buf, c.off);
  fs.writeFileSync(wavPath, buf);
  console.log(`[audio] score.wav written: ${(buf.length / 1024 / 1024).toFixed(1)} MB, ${(buf.length / 48000 / 4).toFixed(1)}s`);
}

/* ---------- 2. 逐帧截图（多页并行） ---------- */
async function renderFrames(browser) {
  const dir = path.join(OUT, 'frames');
  fs.mkdirSync(dir, { recursive: true });
  for (const f of fs.readdirSync(dir)) fs.unlinkSync(path.join(dir, f));

  const WORKERS = 3;
  const pages = [];
  for (let w = 0; w < WORKERS; w++) {
    pages.push(await browser.newPage({ viewport: { width: W, height: H } }));
  }
  const url = 'file://' + path.join(ROOT, 'index.html') + '?capture=1';
  await Promise.all(pages.map(p => p.goto(url)));
  await Promise.all(pages.map(p =>
    p.waitForFunction(() => window.__ready === true, { timeout: 60000, polling: 250 })));
  await sleep(300);

  const n = Math.ceil(DURATION * FPS);
  console.log(`[frames] capturing ${n} frames @ ${FPS}fps · ${WORKERS} workers …`);
  const t0 = Date.now();

  async function captureRange(page, a, b) {
    for (let i = a; i < b; i++) {
      await page.evaluate(tt => window.__seek(tt), i / FPS);
      await page.screenshot({
        type: 'jpeg', quality: 97, optimizeForSpeed: true,
        path: path.join(dir, 'f' + String(i).padStart(5, '0') + '.jpg'),
        clip: { x: 0, y: 0, width: W, height: H }
      });
    }
  }

  await Promise.all(pages.map((p, w) => {
    const a = Math.floor(n * w / WORKERS);
    const b = Math.floor(n * (w + 1) / WORKERS);
    return captureRange(p, a, b);
  }));

  for (const p of pages) await p.close();
  const files = fs.readdirSync(dir).length;
  console.log(`[frames] done: ${files} files in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  if (files !== n) throw new Error(`frame count mismatch: ${files} != ${n}`);
}

/* ---------- 3. 合成 MP4 ---------- */
function mux() {
  const out = '/workspace/对齐之路_Anthropic_2021-2026.mp4';
  const cmd = [
    'ffmpeg -y',
    `-framerate ${FPS} -i ${OUT}/frames/f%05d.jpg`,
    `-i ${OUT}/score.wav`,
    '-map 0:v -map 1:a',
    '-c:v libx264 -preset medium -crf 17 -pix_fmt yuv420p',
    '-color_primaries bt709 -color_trc bt709 -colorspace bt709',
    '-c:a aac -b:a 192k',
    '-movflags +faststart',
    `-t ${DURATION}`,
    `"${out}"`
  ].join(' ');
  console.log('[mux]', cmd);
  execSync(cmd, { stdio: 'inherit' });
  const sz = fs.statSync(out).size / 1024 / 1024;
  console.log(`[mux] -> ${out} (${sz.toFixed(1)} MB)`);
}

(async () => {
  const step = process.argv[2] || 'all';
  const browser = await launch();
  try {
    if (step === 'all' || step === 'audio') await renderAudio(browser);
    if (step === 'all' || step === 'frames') await renderFrames(browser);
  } finally {
    await browser.close();
  }
  if (step === 'all' || step === 'mux') mux();
})();
