const { Canvas, Path2D } = require('skia-canvas');
const TL = require('./timeline');

const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, u) => a + (b - a) * u;
const smooth = (a, b, x) => {
  const u = clamp((x - a) / (b - a));
  return u * u * (3 - 2 * u);
};

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const norm = (v) => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};

const C = {
  ink: [3, 6, 10],
  cyan: [126, 224, 255],
  cyanPale: [196, 242, 255],
  bone: [232, 227, 214],
  amber: [255, 179, 98],
  graphite: [24, 23, 20],
  paper: [239, 236, 228],
};
const rgb = (c, a = 1) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
const mix = (a, b, u) => [lerp(a[0], b[0], u), lerp(a[1], b[1], u), lerp(a[2], b[2], u)];

// ---------------------------------------------------------------- camera

function makeCamera(t) {
  const pred = smooth(104, 152, t);
  const unk = smooth(158, 202, t);
  const paper = smooth(190, 200, t);

  let dist = 1680 - 230 * pred + 330 * unk;
  dist = lerp(dist, 2050, paper);

  let yaw = 0.22 * Math.sin(t * 0.033 + 0.4);
  let pitch = 0.10 * Math.sin(t * 0.027 + 1.2);
  let ox = 24 * Math.sin(t * 0.021);
  let oy = 14 * Math.sin(t * 0.017 + 2.0);

  yaw = lerp(yaw, 0.04 * Math.sin(t * 0.02), paper);
  pitch = lerp(pitch, 0.02 * Math.sin(t * 0.018), paper);
  ox = lerp(ox, 0, paper);
  oy = lerp(oy, 0, paper);

  return { dist, f: 1660, yaw, pitch, ox, oy };
}

function project(p, cam) {
  const [x0, y0, z0] = p;
  const cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw);
  const x1 = x0 * cy - z0 * sy;
  const z1 = x0 * sy + z0 * cy;
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  const y1 = y0 * cp - z1 * sp;
  const z2 = y0 * sp + z1 * cp;
  const zc = z2 + cam.dist;
  const s = cam.f / Math.max(120, zc);
  return { x: TL.W / 2 + x1 * s + cam.ox, y: TL.H / 2 + y1 * s + cam.oy, s, z: zc };
}

// ---------------------------------------------------------------- assets

function makeDotSprite(color = [180, 235, 255], size = 96) {
  const c = new Canvas(size, size);
  const x = c.getContext('2d');
  const g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, rgb(color, 1));
  g.addColorStop(0.2, rgb(color, 0.7));
  g.addColorStop(0.55, rgb(color, 0.15));
  g.addColorStop(1, rgb(color, 0));
  x.fillStyle = g;
  x.fillRect(0, 0, size, size);
  return c;
}

function makeNoiseTile(size = 512, seed = 1) {
  const c = new Canvas(size, size);
  const x = c.getContext('2d');
  const img = x.createImageData(size, size);
  const rnd = mulberry32(seed);
  for (let i = 0; i < size * size; i++) {
    const v = Math.floor(rnd() * 255);
    img.data[i * 4] = v;
    img.data[i * 4 + 1] = v;
    img.data[i * 4 + 2] = v;
    img.data[i * 4 + 3] = 40;
  }
  x.putImageData(img, 0, 0);
  return c;
}

function makePaperTexture() {
  const c = new Canvas(TL.W, TL.H);
  const x = c.getContext('2d');
  const g = x.createRadialGradient(TL.W * 0.48, TL.H * 0.42, 80, TL.W * 0.5, TL.H * 0.5, TL.W * 0.78);
  g.addColorStop(0, '#f6f2e8');
  g.addColorStop(0.55, '#efebe1');
  g.addColorStop(1, '#e2ddd1');
  x.fillStyle = g;
  x.fillRect(0, 0, TL.W, TL.H);

  const rnd = mulberry32(77);
  x.globalAlpha = 0.05;
  for (let i = 0; i < 2400; i++) {
    const y = rnd() * TL.H;
    const len = 20 + rnd() * 200;
    const xx = rnd() * TL.W;
    x.strokeStyle = rnd() > 0.5 ? '#9a9182' : '#ffffff';
    x.lineWidth = 0.5 + rnd() * 0.6;
    x.beginPath();
    x.moveTo(xx, y);
    x.quadraticCurveTo(xx + len * 0.5, y + (rnd() - 0.5) * 5, xx + len, y + (rnd() - 0.5) * 2);
    x.stroke();
  }
  x.globalAlpha = 0.028;
  for (let i = 0; i < 130; i++) {
    const xx = rnd() * TL.W, yy = rnd() * TL.H, r = 20 + rnd() * 110;
    const rg = x.createRadialGradient(xx, yy, 0, xx, yy, r);
    rg.addColorStop(0, '#8b7f6a');
    rg.addColorStop(1, 'rgba(139,127,106,0)');
    x.fillStyle = rg;
    x.fillRect(xx - r, yy - r, r * 2, r * 2);
  }
  x.globalAlpha = 1;

  const img = x.getImageData(0, 0, TL.W, TL.H);
  const r2 = mulberry32(88);
  for (let i = 0; i < TL.W * TL.H; i++) {
    const n = (r2() - 0.5) * 10;
    img.data[i * 4] += n;
    img.data[i * 4 + 1] += n;
    img.data[i * 4 + 2] += n;
  }
  x.putImageData(img, 0, 0);
  return c;
}

const WORDS = [
  '战争', '诗', '天气预报', '婴儿', '第一次', '哭泣', '潮汐', '城市', '恒星', '光',
  '雨', '历史', '语言', '名字', '归途', '手', '沉默', '海', '山', '火',
  '出生', '告别', '记忆', '梦', '饥饿', '春天', '钟表', '信件', '疼痛', '故乡',
  'the sea', 'a name', 'tomorrow', 'weather', 'a poem', 'first cry', 'light',
  'city', 'tide', 'star', 'war', 'home', 'memory', 'silence', 'rain', 'history',
];

function makeCorpusTexture(seed, light = true) {
  const w = 2048, h = 300;
  const c = new Canvas(w, h);
  const x = c.getContext('2d');
  const rnd = mulberry32(seed);
  for (let row = 0; row < 14; row++) {
    const y = 20 + row * 20 + (rnd() - 0.5) * 3;
    let xx = -rnd() * 120;
    while (xx < w) {
      const word = WORDS[Math.floor(rnd() * WORDS.length)];
      const size = 9 + rnd() * 5;
      const a = 0.08 + rnd() * 0.28;
      x.font = `300 ${size}px "Noto Sans CJK SC"`;
      x.fillStyle = light ? `rgba(210,240,255,${a})` : `rgba(40,38,34,${a})`;
      x.fillText(word, xx, y);
      xx += x.measureText(word).width + 10 + rnd() * 34;
      if (rnd() > 0.86) {
        x.fillStyle = light ? `rgba(150,220,255,${a * 0.7})` : `rgba(60,55,48,${a * 0.6})`;
        x.fillRect(xx, y - 8, 10 + rnd() * 40, 1.2);
        xx += 40 + rnd() * 30;
      }
    }
  }
  for (let i = 0; i < 22; i++) {
    x.fillStyle = light ? 'rgba(120,200,255,0.10)' : 'rgba(30,28,24,0.10)';
    x.fillRect(rnd() * w, rnd() * h, 30 + rnd() * 160, 2 + rnd() * 3);
  }
  return c;
}

function makeFogSprite() {
  const s = 256;
  const c = new Canvas(s, s);
  const x = c.getContext('2d');
  const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, s, s);
  return c;
}

// ---------------------------------------------------------------- world

function buildWorld() {
  const rw = mulberry32(90210);

  // 编织场：不是球体，是围绕 AI 舒展开的织物
  const weave = [];
  for (let i = 0; i < 62; i++) {
    const x0 = -1560 + i * 51 + (rw() - 0.5) * 34;
    const z0 = -640 + rw() * 1280;
    const pts = [];
    for (let j = 0; j <= 84; j++) {
      const y = -1150 + (j / 84) * 2300;
      pts.push([x0, y, z0 + 60 * Math.sin(y * 0.003 + i)]);
    }
    weave.push({
      pts, reveal: rw(), width: 0.55 + rw() * 0.7,
      tint: rw() < 0.08 ? 1 : 0, phase: rw() * TAU,
      split: norm([(rw() - 0.5) * 1.2, (rw() - 0.5) * 1.0, (rw() - 0.5) * 0.6]),
    });
  }
  for (let i = 0; i < 44; i++) {
    const y0 = -980 + i * 45 + (rw() - 0.5) * 26;
    const z0 = -640 + rw() * 1280;
    const pts = [];
    for (let j = 0; j <= 90; j++) {
      const x = -1620 + (j / 90) * 3240;
      pts.push([x, y0, z0 + 55 * Math.sin(x * 0.0026 + i * 1.3)]);
    }
    weave.push({
      pts, reveal: rw(), width: 0.5 + rw() * 0.65,
      tint: rw() < 0.12 ? 1 : 0, phase: rw() * TAU,
      split: norm([(rw() - 0.5) * 1.0, (rw() - 0.5) * 1.2, (rw() - 0.5) * 0.5]),
    });
  }
  for (let i = 0; i < 26; i++) {
    const z0 = -600 + rw() * 1200;
    const slope = (rw() - 0.5) * 1.6;
    const pts = [];
    for (let j = 0; j <= 86; j++) {
      const u = j / 86;
      const x = -1500 + u * 3000;
      const y = slope * x * 0.4 + 90 * Math.sin(u * 4 + i);
      pts.push([x, y, z0]);
    }
    weave.push({
      pts, reveal: rw(), width: 0.45 + rw() * 0.6,
      tint: rw() < 0.14 ? 1 : 0, phase: rw() * TAU,
      split: norm([(rw() - 0.5) * 0.8, (rw() - 0.5) * 0.8, (rw() - 0.5) * 0.8]),
    });
  }

  // 尘：数据的最小单位
  const dust = [];
  const rd = mulberry32(4455);
  for (let i = 0; i < 1500; i++) {
    const r = 150 + Math.pow(rd(), 0.6) * 1220;
    const th = rd() * TAU;
    const ph = Math.asin((rd() * 2 - 1) * 0.9);
    dust.push({
      p: [r * Math.cos(ph) * Math.cos(th), r * Math.sin(ph) * 0.86, r * Math.cos(ph) * Math.sin(th)],
      size: 0.6 + rd() * 2.2,
      tw: rd() * TAU,
      sp: 0.15 + rd() * 0.5,
    });
  }

  // 人类档案：漂浮的文字条带
  const strips = [];
  const rs = mulberry32(1337);
  for (let i = 0; i < 9; i++) {
    strips.push({
      tex: makeCorpusTexture(100 + i * 7),
      x: -620 + rs() * 1240,
      y: -420 + rs() * 840,
      z: -300 + rs() * 900,
      rot: (rs() - 0.5) * 0.16,
      dir: 0.4 + rs() * 0.8,
      reveal: rs(),
      warm: rs() < 0.18,
    });
  }

  // 散落字句
  const glyphs = [];
  const rg = mulberry32(808);
  for (let i = 0; i < 230; i++) {
    const r = 420 + Math.pow(rg(), 0.7) * 900;
    const th = rg() * TAU;
    const ph = Math.asin((rg() * 2 - 1) * 0.92);
    glyphs.push({
      p: [r * Math.cos(ph) * Math.cos(th), r * Math.sin(ph) * 0.8, r * Math.cos(ph) * Math.sin(th)],
      ch: WORDS[Math.floor(rg() * WORDS.length)],
      size: 9 + rg() * 13,
      a: 0.10 + rg() * 0.26,
      ph: rg() * TAU,
      warm: rg() < 0.1,
    });
  }

  // 时间线：从 AI 出发的一万种未来
  const branches = [];
  const rb = mulberry32(2026);
  for (let k = 0; k < 52; k++) {
    const dir = norm([(rb() - 0.5) * 2.2, (rb() - 0.5) * 1.5, (rb() - 0.5) * 2.2]);
    const len = 780 + rb() * 1500;
    const wob = 0.25 + rb() * 0.6;
    const pts = [];
    const seedA = rb() * TAU;
    for (let j = 0; j <= 64; j++) {
      const u = j / 64;
      const w1 = Math.sin(u * 6 + seedA) * wob * 250 * u;
      const w2 = Math.cos(u * 3.4 + seedA * 1.7) * wob * 170 * u;
      pts.push([
        dir[0] * len * u + w1,
        dir[1] * len * u + w2,
        dir[2] * len * u + Math.sin(u * 5 + seedA) * 120 * u,
      ]);
    }
    branches.push({
      pts, reveal: rb(), speed: 0.6 + rb() * 0.8,
      warm: rb() < 0.16, weight: 0.7 + rb() * 0.9, fadeAt: rb() * 0.55,
    });
  }

  return { weave, dust, strips, glyphs, branches };
}

const WORLD = buildWorld();

const dotCool = makeDotSprite([170, 232, 255], 96);
const dotWarm = makeDotSprite([255, 196, 130], 96);
const dotWhite = makeDotSprite([255, 255, 255], 64);
const noiseTile = makeNoiseTile(512, 9);
const paperTex = makePaperTexture();
const fogSprite = makeFogSprite();

// ---------------------------------------------------------------- draw: weave

function drawWeave(ctx, t, cam, opt) {
  const { fade } = opt;
  const growth = smooth(3, 42, t);
  const quiet = 1 - 0.5 * smooth(166, 198, t);
  const splitOn = smooth(104, 142, t);
  const paperMix = opt.paperMix || 0;
  const base = 0.42 * fade * quiet * (1 - paperMix);
  if (base <= 0.002) return;

  ctx.lineCap = 'butt';
  const buckets = [[], []];

  for (let li = 0; li < WORLD.weave.length; li++) {
    const line = WORLD.weave[li];
    const head = clamp((growth - line.reveal * 0.34) / 0.66);
    if (head <= 0.01) continue;
    const n = Math.floor(line.pts.length * head);
    if (n < 2) continue;

    // 阶段三：部分线结分裂为两条时间线
    const paths = [line.pts.slice(0, n)];
    if (li % 3 === 0 && splitOn > 0.02) {
      const off = splitOn * 0.42;
      const shifted = [];
      for (let j = 0; j < n; j++) {
        const p = line.pts[j];
        shifted.push([
          p[0] + line.split[0] * off * Math.abs(p[0]) * 0.06,
          p[1] + line.split[1] * off * Math.abs(p[1]) * 0.06,
          p[2] + line.split[2] * off * Math.abs(p[2]) * 0.06 + 40 * off,
        ]);
      }
      paths.push(shifted);
    }

    for (let pi = 0; pi < paths.length; pi++) {
      const pts = paths[pi];
      let prev = null;
      for (let j = 0; j < pts.length; j += 2) {
        const pr = project(pts[j], cam);
        if (pr.z < 180) { prev = null; continue; }
        if (!prev) { prev = pr; continue; }
        buckets[line.tint].push([prev.x, prev.y, pr.x, pr.y, line.width]);
        prev = pr;
      }
    }
  }

  for (let b = 0; b < 2; b++) {
    const segs = buckets[b];
    if (!segs.length) continue;
    const col = b === 0 ? C.cyan : C.amber;
    ctx.strokeStyle = rgb(col, base);
    ctx.lineWidth = 1.05;
    const path = new Path2D();
    for (let i = 0; i < segs.length; i++) {
      const s = segs[i];
      path.moveTo(s[0], s[1]);
      path.lineTo(s[2], s[3]);
    }
    ctx.stroke(path);
  }

  // 纤维微光
  ctx.strokeStyle = rgb(C.cyanPale, base * 0.5);
  ctx.lineWidth = 0.7;
}

// ---------------------------------------------------------------- draw: dust

function drawDust(ctx, t, cam, fade) {
  const on = smooth(8, 40, t) * (1 - smooth(188, 202, t));
  if (on <= 0.01) return;
  ctx.fillStyle = rgb(C.cyanPale, 0.55 * on * fade);
  for (let i = 0; i < WORLD.dust.length; i++) {
    const d = WORLD.dust[i];
    const tw = 0.55 + 0.45 * Math.sin(t * d.sp * 3 + d.tw);
    const pr = project(d.p, cam);
    if (pr.z < 150 || pr.x < -60 || pr.x > TL.W + 60 || pr.y < -60 || pr.y > TL.H + 60) continue;
    const s = clamp(d.size * pr.s * 0.9, 0.5, 3.4);
    ctx.globalAlpha = clamp(0.25 + 0.5 * tw, 0, 1) * on * fade;
    ctx.fillRect(pr.x, pr.y, s, s);
  }
  ctx.globalAlpha = 1;
}

// ---------------------------------------------------------------- draw: corpus

function drawCorpusStrips(ctx, t, cam, fade) {
  const on = smooth(58, 88, t);
  if (on <= 0.01) return;
  const gone = smooth(176, 200, t);

  for (let i = 0; i < WORLD.strips.length; i++) {
    const s = WORLD.strips[i];
    const appear = smooth(56 + s.reveal * 26, 68 + s.reveal * 26, t);
    if (appear <= 0.01) continue;
    const drift = smooth(60, 150, t) * 220 * s.dir;
    const pr = project([s.x, s.y, s.z + drift], cam);
    if (pr.z < 220) continue;
    const sc = pr.s * 0.92;
    const w = 880 * sc;
    const h = 128 * sc;
    const alpha = 0.30 * appear * fade * (1 - gone * 0.9);
    if (alpha <= 0.005) continue;

    ctx.save();
    ctx.translate(pr.x, pr.y);
    ctx.rotate(s.rot + 0.02 * Math.sin(t * 0.1 + i));
    ctx.globalAlpha = alpha;
    if (s.warm) {
      ctx.globalCompositeOperation = 'source-over';
    }
    ctx.drawImage(s.tex, -w / 2, -h / 2, w, h);
    ctx.restore();
  }
  ctx.globalAlpha = 1;
}

// ---------------------------------------------------------------- draw: glyphs

function drawGlyphs(ctx, t, cam, fade) {
  const on = smooth(60, 96, t);
  if (on <= 0.01) return;
  const gone = smooth(180, 204, t);

  for (let i = 0; i < WORLD.glyphs.length; i++) {
    const g = WORLD.glyphs[i];
    const drift = 26 * Math.sin(t * 0.12 + g.ph);
    const p = [g.p[0], g.p[1] + drift, g.p[2]];
    const pr = project(p, cam);
    if (pr.z < 200 || pr.x < -80 || pr.x > TL.W + 80 || pr.y < -80 || pr.y > TL.H + 80) continue;
    const blink = 0.6 + 0.4 * Math.sin(t * 0.7 + g.ph);
    const a = g.a * on * blink * fade * (1 - gone);
    if (a <= 0.01) continue;
    const size = clamp(g.size * pr.s, 7, 46);
    ctx.font = `300 ${size}px "Noto Serif CJK SC"`;
    ctx.fillStyle = g.warm ? rgb(C.amber, a) : rgb(C.cyanPale, a);
    ctx.fillText(g.ch, pr.x, pr.y);
  }
}

// ---------------------------------------------------------------- draw: first line

function drawBirthLine(ctx, t, cam, fade) {
  if (t > 166) return;
  const uh = smooth(5, 23, t);
  const uv = smooth(14, 34, t);
  if (uh <= 0.001 && uv <= 0.001) return;

  const settle = 1 - smooth(62, 96, t) * 0.62;
  const a = 0.86 * fade * settle;
  const decay = 1 - smooth(148, 166, t);
  if (decay <= 0.001) return;

  const cx = TL.W / 2 + cam.ox;
  const cy = TL.H / 2 + cam.oy;

  ctx.lineWidth = 1.25;
  ctx.strokeStyle = rgb(C.cyanPale, a * 0.95 * decay);
  if (uh > 0.001) {
    const half = 1180 * uh;
    ctx.beginPath();
    ctx.moveTo(cx - half, cy);
    ctx.lineTo(cx + half, cy);
    ctx.stroke();
    // 笔尖
    if (uh < 0.995) {
      ctx.drawImage(dotWhite, cx + half - 9, cy - 9, 18, 18);
      ctx.drawImage(dotWhite, cx - half - 9, cy - 9, 18, 18);
    }
  }
  if (uv > 0.001) {
    const half = 780 * uv;
    ctx.strokeStyle = rgb(C.cyanPale, a * 0.42 * decay);
    ctx.beginPath();
    ctx.moveTo(cx, cy - half);
    ctx.lineTo(cx, cy + half);
    ctx.stroke();
    if (uv < 0.995) {
      ctx.drawImage(dotWhite, cx - 9, cy - half - 9, 18, 18);
      ctx.drawImage(dotWhite, cx - 9, cy + half - 9, 18, 18);
    }
  }
}

// ---------------------------------------------------------------- draw: arcs

function drawArcs(ctx, t, cam, fade) {
  const on = smooth(34, 66, t) * (1 - smooth(172, 196, t));
  if (on <= 0.01) return;
  const cx = TL.W / 2 + cam.ox;
  const cy = TL.H / 2 + cam.oy;
  const R = 260 + 190 * smooth(34, 120, t);

  for (let i = 0; i < 7; i++) {
    const rot = t * (0.05 + i * 0.012) + i * 0.9;
    const rad = R * (0.55 + i * 0.11);
    const span = 0.8 + 0.5 * Math.sin(t * 0.08 + i);
    ctx.strokeStyle = rgb(C.cyan, 0.10 * on * fade * (1 - i / 10));
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    ctx.ellipse(cx, cy, rad, rad * 0.62, rot, -span, span);
    ctx.stroke();
  }
}

// ---------------------------------------------------------------- draw: branches

function drawBranches(ctx, t, cam, fade) {
  if (t < 100) return;
  const paperMix = smooth(190, 200, t);

  for (let k = 0; k < WORLD.branches.length; k++) {
    const b = WORLD.branches[k];
    const grow = smooth(106 + b.reveal * 26, 124 + b.reveal * 26, t);
    if (grow <= 0.01) continue;
    const die = smooth(158 + b.fadeAt * 34, 196, t);
    const alpha = 0.34 * grow * (1 - die) * fade * (1 - paperMix);
    if (alpha <= 0.004) continue;

    const n = Math.max(2, Math.floor(b.pts.length * grow));
    let prev = null;
    const path = new Path2D();
    for (let j = 0; j < n; j += 1) {
      const pr = project(b.pts[j], cam);
      if (pr.z < 180) { prev = null; continue; }
      if (!prev) { prev = pr; path.moveTo(pr.x, pr.y); continue; }
      path.lineTo(pr.x, pr.y);
      prev = pr;
    }
    ctx.strokeStyle = b.warm ? rgb(C.amber, alpha) : rgb(C.cyan, alpha);
    ctx.lineWidth = b.weight;
    ctx.stroke(path);

    // 端点的“可能性”光点
    if (grow > 0.9) {
      const pr = project(b.pts[b.pts.length - 1], cam);
      if (pr.z > 180 && pr.x > -40 && pr.x < TL.W + 40 && pr.y > -40 && pr.y < TL.H + 40) {
        const r = 2.6 + 1.6 * Math.sin(t * 1.2 + k);
        ctx.globalAlpha = alpha * 1.7;
        ctx.drawImage(dotCool, pr.x - r * 4, pr.y - r * 4, r * 8, r * 8);
        ctx.globalAlpha = 1;
      }
    }
  }
}

// ---------------------------------------------------------------- draw: horizon

function drawHorizon(ctx, t, cam, fade) {
  const on = smooth(150, 163, t) * (1 - smooth(186, 198, t));
  if (on <= 0.01) return;
  const y = TL.H / 2 + 26;
  const w = TL.W;

  const g = ctx.createLinearGradient(0, y - 46, 0, y + 46);
  g.addColorStop(0, 'rgba(126,224,255,0)');
  g.addColorStop(0.5, rgb(C.cyanPale, 0.16 * on * fade));
  g.addColorStop(1, 'rgba(126,224,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, y - 46, w, 92);

  ctx.strokeStyle = rgb([240, 252, 255], 0.72 * on * fade);
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(w, y);
  ctx.stroke();

  // 线以下，一切归零
  const g2 = ctx.createLinearGradient(0, y, 0, TL.H);
  g2.addColorStop(0, 'rgba(2,5,10,0)');
  g2.addColorStop(1, `rgba(2,5,10,${0.55 * on})`);
  ctx.fillStyle = g2;
  ctx.fillRect(0, y, w, TL.H - y);
}

// ---------------------------------------------------------------- draw: core (AI)

function drawKnot(ctx, t, cam, fade, paperMix) {
  const born = smooth(5, 26, t);
  if (born <= 0.01) return null;

  const pred = smooth(104, 150, t);
  const burst = smooth(106, 136, t);
  const collapse = smooth(186, 200, t);

  let R = 96 + 80 * pred + 58 * burst;
  R = lerp(R, 4, collapse);
  R *= born * (1 - paperMix * 0.9);

  const pos = project([0, 0, 0], cam);
  const count = Math.floor(54 * clamp(0.3 + pred * 0.85 + burst * 0.15) * born);

  // 结后方的阴影，让线网中仍能分离出“我”
  if (R > 20) {
    const shR = R * 4.2;
    const sg = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, shR);
    sg.addColorStop(0, `rgba(1,4,7,${0.5 * fade * (1 - paperMix)})`);
    sg.addColorStop(0.5, `rgba(1,4,7,${0.18 * fade * (1 - paperMix)})`);
    sg.addColorStop(1, 'rgba(1,4,7,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(pos.x - shR, pos.y - shR, shR * 2, shR * 2);
  }

  const ga = 2.399963;
  ctx.lineWidth = 1.15;

  for (let i = 0; i < count; i++) {
    const beta = i * ga + t * 0.055;
    const alphaTilt = 0.18 + 0.62 * ((i * 0.618) % 1) + 0.06 * Math.sin(t * 0.4 + i);
    const cb = Math.cos(beta), sb = Math.sin(beta);
    const ca = Math.cos(alphaTilt), sa = Math.sin(alphaTilt);

    // 环的两个基向量
    const ux = cb, uy = 0, uz = sb;
    const vx = -sb * ca, vy = sa, vz = cb * ca;

    const ringR = R * (1 + 0.10 * Math.sin(i * 1.7 + t * 0.3));
    const N = 46;
    let prev = null;
    const path = new Path2D();
    for (let j = 0; j <= N; j++) {
      const s = (j / N) * TAU;
      const cs = Math.cos(s) * ringR;
      const sn = Math.sin(s) * ringR;
      const p = [ux * cs + vx * sn, uy * cs + vy * sn, uz * cs + vz * sn];
      const pr = project(p, cam);
      if (pr.z < 160) { prev = null; continue; }
      if (!prev) { prev = pr; path.moveTo(pr.x, pr.y); continue; }
      path.lineTo(pr.x, pr.y);
      prev = pr;
    }
    const a = (0.26 + 0.16 * Math.sin(t * 0.8 + i * 0.7)) * fade * (1 - paperMix);
    ctx.strokeStyle = i % 7 === 0 ? rgb(C.amber, a * 0.8) : rgb(C.cyan, a);
    ctx.stroke(path);
  }

  // 中心：没有脸
  const dotA = 0.8 * fade;
  ctx.globalAlpha = clamp(dotA, 0, 1);
  if (R > 20) {
    ctx.drawImage(dotCool, pos.x - 16, pos.y - 16, 32, 32);
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = rgb(C.cyanPale, 0.9 * fade);
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 1.6, 0, TAU);
  ctx.fill();

  return pos;
}

function drawCore(ctx, t, cam, fade, paperMix) {
  // 开场的第一个点：一点微光，撑住最初的黑
  const seedOn = smooth(0, 1.5, t) * (1 - smooth(7, 13, t));
  const halo = smooth(0, 5, t) * (1 - smooth(26, 42, t));
  if (halo > 0.001 && paperMix < 0.02) {
    const g = ctx.createRadialGradient(TL.W / 2, TL.H / 2, 0, TL.W / 2, TL.H / 2, 340);
    g.addColorStop(0, `rgba(150,215,245,${0.16 * halo})`);
    g.addColorStop(0.4, `rgba(90,170,210,${0.06 * halo})`);
    g.addColorStop(1, 'rgba(60,130,170,0)');
    ctx.fillStyle = g;
    ctx.fillRect(TL.W / 2 - 340, TL.H / 2 - 340, 680, 680);
  }
  if (seedOn > 0.001 && paperMix < 0.02) {
    ctx.globalAlpha = seedOn;
    ctx.drawImage(dotWhite, TL.W / 2 - 8, TL.H / 2 - 8, 16, 16);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = rgb(C.cyanPale, 0.5 * seedOn);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(TL.W / 2, TL.H / 2, 1.2 + 12 * (1 - seedOn), 0, TAU);
    ctx.stroke();
  }

  // 创造段的暖光
  const warm = smooth(214, 250, t) * (1 - smooth(278, 296, t));
  if (warm > 0.01) {
    const g = ctx.createRadialGradient(TL.W / 2, TL.H / 2, 0, TL.W / 2, TL.H / 2, 520);
    g.addColorStop(0, `rgba(255,196,130,${0.16 * warm})`);
    g.addColorStop(0.45, `rgba(255,170,100,${0.05 * warm})`);
    g.addColorStop(1, 'rgba(255,170,100,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, TL.W, TL.H);
  }

  const knot = drawKnot(ctx, t, cam, fade, paperMix);

  // 纸面上的石墨点
  if (paperMix > 0.02) {
    const dotIn = smooth(202, 226, t);
    const x = TL.W / 2, y = TL.H / 2;
    ctx.globalAlpha = paperMix * dotIn;
    ctx.fillStyle = rgb(C.graphite, 0.9);
    ctx.beginPath();
    ctx.arc(x, y, 3.2, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  return knot || { x: TL.W / 2, y: TL.H / 2 };
}

// ---------------------------------------------------------------- draw: paper + enso

function drawPaper(ctx, t) {
  const paperMix = smooth(190, 200, t);
  if (paperMix <= 0.001) return;
  ctx.globalAlpha = paperMix;
  ctx.drawImage(paperTex, 0, 0, TL.W, TL.H);
  ctx.globalAlpha = 1;

  // 画纸时的一次轻微白闪
  const flash = smooth(188, 192, t) * (1 - smooth(193, 199, t));
  if (flash > 0.001) {
    ctx.fillStyle = `rgba(248,246,240,${0.5 * flash})`;
    ctx.fillRect(0, 0, TL.W, TL.H);
  }

  // 纸上残留的旧结构：线结被压成极淡的铅笔痕
  const ghost = smooth(190, 198, t) * (1 - smooth(206, 218, t));
  if (ghost > 0.005) {
    const cx = TL.W / 2, cy = TL.H / 2;
    for (let i = 0; i < 6; i++) {
      const r = 92 + i * 26;
      ctx.strokeStyle = rgb(C.graphite, 0.055 * ghost);
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * (0.6 + 0.04 * i), i * 0.22, 0, TAU);
      ctx.stroke();
    }
  }
}

function drawEnso(ctx, t) {
  const p = smooth(228, 264, t);
  if (p <= 0.001) return;

  const cx = TL.W / 2, cy = TL.H / 2;
  const a0 = -Math.PI * 0.62;
  const total = TAU * 0.92;
  const end = a0 + total * p;

  const segs = 260;
  const rnd = mulberry32(311);
  for (let i = 0; i < segs; i++) {
    const u = i / segs;
    const ang = a0 + (end - a0) * u;
    const R = 212 + 10 * Math.sin(ang * 3 + 1.2) + 5 * Math.sin(ang * 7);
    const x0 = cx + Math.cos(ang) * R;
    const y0 = cy + Math.sin(ang) * R * 0.98;
    const x1 = cx + Math.cos(ang + (end - a0) / segs) * R;
    const y1 = cy + Math.sin(ang + (end - a0) / segs) * R * 0.98;

    // 起笔重，行笔渐干
    const press = 0.55 + 0.45 * Math.sin(Math.min(1, u * 1.6) * Math.PI);
    const dry = i > segs * 0.55 && rnd() < (u - 0.55) * 0.9;
    if (dry) continue;
    const w = (3 + 16 * press) * (1 - 0.35 * u);
    const a = (0.92 - 0.35 * u) * (0.7 + 0.3 * press);
    ctx.strokeStyle = rgb(C.graphite, a);
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  }

  // 墨色的干笔触痕
  const r2 = mulberry32(912);
  for (let i = 0; i < 90; i++) {
    const u = r2();
    const ang = a0 + total * 0.9 * u;
    const R = 212 + (r2() - 0.5) * 30;
    if (u > 0.55 && r2() < 0.7) continue;
    ctx.strokeStyle = rgb(C.graphite, 0.10 + r2() * 0.14);
    ctx.lineWidth = 0.6 + r2() * 1.2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * R, cy + Math.sin(ang) * R);
    ctx.lineTo(cx + Math.cos(ang + 0.04) * (R + 12), cy + Math.sin(ang + 0.04) * (R + 12));
    ctx.stroke();
  }
}

// ---------------------------------------------------------------- draw: texts

function drawText(ctx, t, item, paperMix) {
  const age = t - item.t;
  if (age < 0 || age > item.dur) return;

  const isTitle = item.style === 'title';
  const fadeIn = smooth(0, 1.5, age);
  const fadeOut = 1 - smooth(item.dur - 1.4, item.dur, age);
  const a = fadeIn * fadeOut;
  if (a <= 0.005) return;

  const dark = paperMix < 0.4;
  const col = dark ? C.bone : C.graphite;
  const size = item.size;
  const y = item.y || 772;

  ctx.font = `${isTitle ? 300 : 300} ${size}px "Noto Serif CJK SC"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const spacing = isTitle ? size * 0.14 : size * 0.08;
  const chars = Array.from(item.text);
  let total = 0;
  for (let i = 0; i < chars.length; i++) total += ctx.measureText(chars[i]).width + (i ? spacing : 0);
  let x = TL.W / 2 - total / 2;

  // 呼吸般的轻微上浮
  const rise = (1 - fadeIn) * 10;
  const yy = y + rise;

  if (dark) {
    ctx.save();
    ctx.shadowColor = 'rgba(2,5,9,0.85)';
    ctx.shadowBlur = 18;
    ctx.fillStyle = rgb(col, a * 0.92);
  } else {
    ctx.fillStyle = rgb(col, a * 0.82);
  }

  for (let i = 0; i < chars.length; i++) {
    const w = ctx.measureText(chars[i]).width;
    ctx.fillText(chars[i], x + w / 2, yy);
    x += w + spacing;
  }

  if (dark) ctx.restore();

  // 标题下的一条细线
  if (isTitle) {
    const lineW = 210 * smooth(0.4, 2.6, age);
    ctx.strokeStyle = rgb(C.graphite, 0.42 * a);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(TL.W / 2 - lineW, yy + size * 0.92);
    ctx.lineTo(TL.W / 2 + lineW, yy + size * 0.92);
    ctx.stroke();
  }
}

// ---------------------------------------------------------------- draw: atmosphere

function drawBackground(ctx, t, paperMix) {
  ctx.fillStyle = '#02050a';
  ctx.fillRect(0, 0, TL.W, TL.H);

  if (paperMix >= 0.999) return;

  const pred = smooth(104, 150, t);
  const warm = smooth(214, 252, t);
  const cx = TL.W * (0.5 + 0.03 * Math.sin(t * 0.02));
  const cy = TL.H * (0.5 + 0.02 * Math.cos(t * 0.017));

  const tint = mix([8, 20, 30], mix([16, 30, 34], [46, 30, 20], warm), pred * 0.8);
  const g = ctx.createRadialGradient(cx, cy, 40, cx, cy, TL.W * 0.72);
  g.addColorStop(0, rgb(tint, 0.9 * (1 - paperMix)));
  g.addColorStop(0.45, 'rgba(4,9,14,0.96)');
  g.addColorStop(1, 'rgba(1,3,6,1)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, TL.W, TL.H);
}

function drawFog(ctx, t, cam, fade) {
  const on = smooth(20, 60, t) * (1 - smooth(180, 198, t));
  if (on <= 0.01) return;
  for (let i = 0; i < 4; i++) {
    const ang = t * 0.03 + i * 1.7;
    const p = [Math.cos(ang) * 700, Math.sin(ang * 0.7 + i) * 420, Math.sin(ang) * 520];
    const pr = project(p, cam);
    if (pr.z < 300) continue;
    const size = 760 * pr.s * 0.9;
    ctx.globalAlpha = 0.05 * on * fade;
    ctx.drawImage(fogSprite, pr.x - size / 2, pr.y - size / 2, size, size);
  }
  ctx.globalAlpha = 1;
}

function drawGrain(ctx, t, paperMix) {
  const a = 0.034 - paperMix * 0.022;
  const seedIdx = Math.floor(t * 12) + 7;
  const rnd = mulberry32(seedIdx);
  ctx.globalAlpha = a;
  const ox = -rnd() * 300;
  const oy = -rnd() * 300;
  for (let x = ox; x < TL.W; x += 512) {
    for (let y = oy; y < TL.H; y += 512) {
      ctx.drawImage(noiseTile, x, y, 512, 512);
    }
  }
  ctx.globalAlpha = 1;
}

function drawVignette(ctx, paperMix) {
  const g = ctx.createRadialGradient(TL.W / 2, TL.H / 2, TL.H * 0.34, TL.W / 2, TL.H / 2, TL.W * 0.78);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  if (paperMix > 0.5) {
    g.addColorStop(1, `rgba(60,52,40,${0.20 * paperMix})`);
  } else {
    g.addColorStop(1, 'rgba(0,0,0,0.55)');
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, TL.W, TL.H);
}

// ---------------------------------------------------------------- frame

function drawFrame(ctx, t) {
  const cam = makeCamera(t);
  const paperMix = smooth(190, 200, t);
  const darkA = 1 - paperMix;

  drawBackground(ctx, t, paperMix);
  drawFog(ctx, t, cam, darkA);
  drawWeave(ctx, t, cam, { fade: darkA, paperMix });
  drawDust(ctx, t, cam, darkA);
  drawCorpusStrips(ctx, t, cam, darkA);
  drawGlyphs(ctx, t, cam, darkA);
  drawBirthLine(ctx, t, cam, darkA);
  drawArcs(ctx, t, cam, darkA);
  drawBranches(ctx, t, cam, darkA);
  drawHorizon(ctx, t, cam, darkA);

  drawPaper(ctx, t);
  drawCore(ctx, t, cam, darkA, paperMix);
  drawEnso(ctx, t);

  for (let i = 0; i < TL.TEXTS.length; i++) drawText(ctx, t, TL.TEXTS[i], paperMix);

  drawGrain(ctx, t, paperMix);
  drawVignette(ctx, paperMix);

  // 收尾渐黑
  const end = smooth(296, 300, t);
  if (end > 0.001) {
    ctx.fillStyle = `rgba(6,6,5,${0.88 * end})`;
    ctx.fillRect(0, 0, TL.W, TL.H);
  }
}

module.exports = { drawFrame, makeCamera };
