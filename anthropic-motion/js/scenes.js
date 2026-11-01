/* ============ 六幕场景渲染（全部由 local time 确定性驱动） ============ */
(function () {
  'use strict';

  const W = 1920, H = 1080;

  /* ---------- 画布工具 ---------- */
  function fitCanvas(cv) {
    cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    return g;
  }

  /* 背景点阵（S1 / S6 共用母题） */
  function makeLattice(count) {
    const rand = U.rng(20211101);
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({
        bx: rand() * W, by: rand() * H,
        ph: rand() * Math.PI * 2,
        r: 1.6 + rand() * 1.4
      });
    }
    return pts;
  }
  const bgLattice = makeLattice(420);

  function drawLattice(g, t, alpha) {
    g.clearRect(0, 0, W, H);
    for (const p of bgLattice) {
      const x = p.bx + Math.sin(t * 0.32 + p.ph) * 5;
      const y = p.by + Math.cos(t * 0.26 + p.ph * 1.3) * 4;
      const a = alpha * (0.55 + 0.45 * Math.sin(t * 0.5 + p.ph * 2));
      g.fillStyle = `rgba(28,27,23,${Math.max(0, a).toFixed(3)})`;
      g.beginPath(); g.arc(x, y, p.r, 0, 6.2832); g.fill();
    }
  }

  /* ---------- 场景元数据 ---------- */
  const SCENES = [
    { id: 's1', start: 0.0,  end: 8.2 },
    { id: 's2', start: 8.2,  end: 17.5, enter: { type: 'wipe', dur: 0.55 } },
    { id: 's3', start: 17.5, end: 30.5, enter: { type: 'wipe', dur: 0.55 } },
    { id: 's4', start: 30.5, end: 47.5, enter: { type: 'fade', dur: 0.45 }, exit: { type: 'fade', dur: 0.6 } },
    { id: 's5', start: 47.5, end: 60.5, enter: { type: 'fade', dur: 0.45 }, exit: { type: 'fade', dur: 0.6 } },
    { id: 's6', start: 60.5, end: 78.5, enter: { type: 'fade', dur: 0.7 }, exit: { type: 'fade', dur: 1.0 } }
  ];

  /* ---------- DOM 引用 ---------- */
  const $ = id => document.getElementById(id);
  let el = {};
  let gBg = null, gChaos = null, gS6 = null;
  let chaosPts = [];
  const tlMilestones = [];
  const chartPts = [];
  const fundItems = [];

  /* ---------- 初始化（构建动态 DOM） ---------- */
  function init() {
    el = {
      s1l1: $('s1-l1'), s1l2: $('s1-l2'), s1sub: $('s1-sub'), s1center: document.querySelector('.s1-center'),
      s2h: $('s2-h'), s2names: $('s2-names'), s2p1: $('s2-p1'), s2p2: $('s2-p2'), s2big: $('s2-big'),
      forkMain: $('fork-main'), forkUp: $('fork-up'), forkFlat: $('fork-flat'),
      forkTUp: $('fork-t-up'), forkTFlat: $('fork-t-flat'),
      s3h: $('s3-h'), s3body: $('s3-body'), s3src: $('s3-src'), s3doc: $('s3-doc'), s3cap: $('s3-cap'),
      docRows: [$('doc-r1'), $('doc-r2'), $('doc-r3')],
      s4h: $('s4-h'), s4cap: $('s4-cap'), tlAxis: $('tl-axis'),
      s5h: $('s5-h'), s5num: $('s5-num'), chartLine: $('chart-line'), chartArea: $('chart-area'),
      chartGrid: $('chart-grid'), chartPoints: $('chart-points'), chartLabels: $('chart-labels'),
      s5funding: $('s5-funding'),
      s6l1: $('s6-l1'), s6l2: $('s6-l2'), s6mission: $('s6-mission'),
      s6card: $('s6-endcard'), s6name: $('s6-name'), s6tag: $('s6-tag'), s6credits: $('s6-credits'),
      markStrokes: document.querySelectorAll('#mark-strokes line')
    };

    gBg = fitCanvas($('cv-lattice-bg'));

    /* S3 混沌→秩序粒子 */
    gChaos = fitCanvas($('cv-chaos'));
    const rand = U.rng(7);
    const cols = 34, rows = 18;
    for (let i = 0; i < 300; i++) {
      const gi = i % (cols * rows);
      const gx = 60 + (gi % cols) * ((W - 120) / (cols - 1));
      const gy = 70 + Math.floor(gi / cols) * ((H - 140) / (rows - 1));
      chaosPts.push({ x0: rand() * W, y0: rand() * H, gx, gy, ph: rand() * 6.28 });
    }

    /* S4 时间轴节点 */
    const MS = [
      { d: '2023.03', n: ['Claude 初代'] },
      { d: '2023.07', n: ['Claude 2', '100K 上下文'] },
      { d: '2024.03', n: ['Claude 3 家族'] },
      { d: '2024.06', n: ['Claude 3.5 Sonnet'] },
      { d: '2024.11', n: ['MCP 开源'] },
      { d: '2025.05', n: ['Claude 4'] },
      { d: '2025.11', n: ['Opus 4.5'] },
      { d: '2026.06', n: ['Claude 5 · Mythos 级'], hot: true }
    ];
    const svg = $('s4-timeline');
    const NS = 'http://www.w3.org/2000/svg';
    MS.forEach((m, i) => {
      const x = i * (1440 / 7);
      const up = i % 2 === 0;
      const g = document.createElementNS(NS, 'g');
      g.style.opacity = '0';

      const tick = document.createElementNS(NS, 'line');
      tick.setAttribute('x1', x); tick.setAttribute('x2', x);
      tick.setAttribute('y1', 170); tick.setAttribute('y2', up ? 148 : 192);
      tick.setAttribute('class', 'tl-tick');

      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', 170); dot.setAttribute('r', 0);
      dot.setAttribute('class', 'tl-dot' + (m.hot ? ' hot' : ''));

      const date = document.createElementNS(NS, 'text');
      date.setAttribute('x', x); date.setAttribute('y', up ? 128 : 224);
      date.setAttribute('text-anchor', i === 0 ? 'start' : (i === MS.length - 1 ? 'end' : 'middle'));
      date.setAttribute('class', 'tl-date');
      date.textContent = m.d;

      const name = document.createElementNS(NS, 'text');
      name.setAttribute('x', x); name.setAttribute('y', up ? 76 : 264);
      name.setAttribute('text-anchor', i === 0 ? 'start' : (i === MS.length - 1 ? 'end' : 'middle'));
      name.setAttribute('class', 'tl-name' + (m.hot ? ' hot' : ''));
      m.n.forEach((line, li) => {
        const ts = document.createElementNS(NS, 'tspan');
        ts.setAttribute('x', x);
        ts.setAttribute('dy', li === 0 ? 0 : 30);
        ts.textContent = line;
        name.appendChild(ts);
      });

      g.append(tick, dot, date, name);
      svg.appendChild(g);
      tlMilestones.push({ g, dot, t: 4.5 + i * 1.6 });
    });

    /* S5 图表 */
    const VALS = [9, 14, 30, 47, 65];
    const XLAB = ['2025 底', '2026.02', '2026.04', '2026.05', '2026.07'];
    const VMAX = 70, X0 = 92, X1 = 985, Y0 = 36, Y1 = 396;
    const px = i => X0 + i * ((X1 - X0) / (VALS.length - 1));
    const py = v => Y1 - (v / VMAX) * (Y1 - Y0);
    [0, 20, 40, 60].forEach(v => {
      const ln = document.createElementNS(NS, 'line');
      ln.setAttribute('x1', X0 - 14); ln.setAttribute('x2', X1);
      ln.setAttribute('y1', py(v)); ln.setAttribute('y2', py(v));
      el.chartGrid.appendChild(ln);
      const tx = document.createElementNS(NS, 'text');
      tx.setAttribute('x', X0 - 26); tx.setAttribute('y', py(v) + 5);
      tx.setAttribute('text-anchor', 'end');
      tx.setAttribute('class', 'chart-ylab');
      tx.textContent = '$' + v + 'B';
      el.chartLabels.appendChild(tx);
    });
    let dLine = '', dArea = 'M' + px(0) + ',' + Y1 + ' ';
    VALS.forEach((v, i) => {
      dLine += (i ? ' L' : 'M') + px(i) + ',' + py(v);
      dArea += 'L' + px(i) + ',' + py(v) + ' ';
    });
    dArea += 'L' + px(VALS.length - 1) + ',' + Y1 + ' Z';
    el.chartLine.setAttribute('d', dLine);
    el.chartArea.setAttribute('d', dArea);
    VALS.forEach((v, i) => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', px(i)); c.setAttribute('cy', py(v)); c.setAttribute('r', 0);
      c.setAttribute('class', 'chart-pt');
      el.chartPoints.appendChild(c);
      const vt = document.createElementNS(NS, 'text');
      vt.setAttribute('x', px(i)); vt.setAttribute('y', py(v) - 20);
      vt.setAttribute('text-anchor', 'middle');
      vt.setAttribute('class', 'chart-vlab');
      vt.textContent = '$' + v + 'B';
      vt.style.opacity = '0';
      el.chartLabels.appendChild(vt);
      const xt = document.createElementNS(NS, 'text');
      xt.setAttribute('x', px(i)); xt.setAttribute('y', Y1 + 34);
      xt.setAttribute('text-anchor', 'middle');
      xt.setAttribute('class', 'chart-xlab');
      xt.textContent = XLAB[i];
      el.chartLabels.appendChild(xt);
      chartPts.push({ c, vt, t: 3.5 + i * 0.95 });
    });

    /* S5 融资条 */
    const FUND = [
      { amt: '$4.5亿', val: 'C 轮 · 2023.05', date: 'SPARK 领投' },
      { amt: '$80亿', val: 'AMAZON · 2023–24', date: '累计战略投资' },
      { amt: '$35亿', val: 'E 轮 @ $615亿 · 2025.03', date: 'LIGHTSPEED 领投' },
      { amt: '$130亿', val: 'F 轮 @ $1830亿 · 2025.09', date: 'ICONIQ 领投' },
      { amt: '$300亿', val: 'G 轮 @ $3800亿 · 2026.02', date: 'GIC / COATUE' },
      { amt: '$650亿', val: 'H 轮 @ $9650亿 · 2026.05', date: 'ALTIMETER 等' }
    ];
    FUND.forEach((f, i) => {
      const d = document.createElement('div');
      d.className = 'fund-item';
      d.innerHTML = `<div class="f-amt">${f.amt}</div><div class="f-val">${f.val}</div><div class="f-date">${f.date}</div>`;
      el.s5funding.appendChild(d);
      fundItems.push({ d, t: 5.4 + i * 0.55 });
    });

    /* S6 背景点阵（呼应开头） */
    const cv = document.createElement('canvas');
    cv.id = 'cv-s6';
    $('s6').insertBefore(cv, $('s6').firstChild);
    gS6 = fitCanvas(cv);

    U.splitChars(el.s2big);
  }

  /* ================= 渲染器 ================= */
  const R = {

    s1(t) {
      drawLattice(gBg, t, 0.115);
      U.wipeUp(el.s1l1, t, 0.7, 1.15);
      U.wipeUp(el.s1l2, t, 2.35, 1.15);
      U.fadeIn(el.s1sub, t, 4.7, 1.3);
      const lift = U.prog(t, 6.6, 1.4);
      el.s1center.style.transform = `translateY(${-14 * U.ease.inOut(lift)}px)`;
    },

    s2(t) {
      U.wipeUp(el.s2h, t, 1.1, 1.05);
      U.fadeIn(el.s2names, t, 2.5, 1.0);
      U.riseIn(el.s2p1, t, 3.7, 0.9);
      U.riseIn(el.s2p2, t, 4.5, 0.9);
      U.charsIn(el.s2big, t, 6.05, 0.13);
      U.drawPath(el.forkMain, t, 1.3, 0.8);
      U.drawPath(el.forkFlat, t, 2.3, 1.1);
      U.fadeIn(el.forkTFlat, t, 3.4, 0.8);
      U.drawPath(el.forkUp, t, 6.4, 1.5);
      U.fadeIn(el.forkTUp, t, 7.3, 0.9);
    },

    s3(t) {
      /* 混沌 → 秩序 */
      const p = U.ease.inOut(U.prog(t, 2.0, 5.2));
      gChaos.clearRect(0, 0, W, H);
      for (const q of chaosPts) {
        const jx = (1 - p) * Math.sin(t * 2.2 + q.ph) * 16;
        const jy = (1 - p) * Math.cos(t * 1.9 + q.ph * 1.7) * 16;
        const x = U.lerp(q.x0, q.gx, p) + jx;
        const y = U.lerp(q.y0, q.gy, p) + jy;
        if (p < 0.98) {
          gChaos.strokeStyle = `rgba(188,90,54,${(0.1 * (1 - p)).toFixed(3)})`;
          gChaos.lineWidth = 1;
          gChaos.beginPath(); gChaos.moveTo(q.x0, q.y0); gChaos.lineTo(x, y); gChaos.stroke();
        }
        gChaos.fillStyle = `rgba(28,27,23,${(0.16 + 0.22 * p).toFixed(3)})`;
        gChaos.beginPath(); gChaos.arc(x, y, 2.1 + p * 1.1, 0, 6.2832); gChaos.fill();
      }
      U.wipeRight(el.s3h, t, 1.0, 1.05);
      U.riseIn(el.s3body, t, 2.3, 1.0);
      U.fadeIn(el.s3src, t, 3.8, 1.0);
      U.riseIn(el.s3doc, t, 1.5, 1.1, 30);
      el.docRows.forEach((r, i) => U.riseIn(r, t, 3.1 + i * 0.75, 0.8, 16));
      U.fadeIn(el.s3cap, t, 8.2, 1.2);
    },

    s4(t) {
      U.wipeUp(el.s4h, t, 0.8, 1.0);
      U.drawPath(el.tlAxis, t, 1.6, 1.7);
      tlMilestones.forEach(m => {
        const p = U.ease.outBack(U.prog(t, m.t, 0.55));
        m.g.style.opacity = String(U.clamp(U.prog(t, m.t, 0.35), 0, 1));
        m.dot.setAttribute('r', (7 * p).toFixed(2));
      });
      U.fadeIn(el.s4cap, t, 16.3, 1.0);
    },

    s5(t) {
      U.wipeUp(el.s5h, t, 0.7, 1.0);
      U.drawPath(el.chartLine, t, 3.4, 3.8);
      U.fadeIn(el.chartArea, t, 3.4, 3.8);
      chartPts.forEach(pt => {
        const p = U.ease.outBack(U.prog(t, pt.t, 0.5));
        pt.c.setAttribute('r', (5.5 * p).toFixed(2));
        U.fadeIn(pt.vt, t, pt.t, 0.5);
      });
      U.countUp(el.s5num, t, 7.4, 2.6, 9, 65, v => '$' + Math.round(v) + 'B');
      fundItems.forEach(f => U.riseIn(f.d, t, f.t, 0.7, 18));
    },

    s6(t) {
      drawLattice(gS6, t, 0.09);
      U.wipeUp(el.s6l1, t, 1.2, 1.05);
      U.wipeUp(el.s6l2, t, 2.7, 1.05);
      U.riseIn(el.s6mission, t, 4.5, 1.1);
      el.markStrokes.forEach((ln, i) => U.drawPath(ln, t, 7.1 + i * 0.16, 0.6));
      U.riseIn(el.s6name, t, 8.3, 0.9);
      U.fadeIn(el.s6tag, t, 9.3, 0.9);
      U.riseIn(el.s6card, t, 7.0, 1.0, 16);
      U.fadeIn(el.s6credits, t, 12.6, 1.2);
    }
  };

  window.SCENES = SCENES;
  window.RENDERERS = R;
  window.SCENES_INIT = init;
})();
