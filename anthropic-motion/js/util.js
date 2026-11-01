/* ============ 工具：缓动 / 随机 / 确定性动画助手 ============ */
(function () {
  'use strict';

  const U = {};

  U.clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  U.lerp = (a, b, t) => a + (b - a) * t;
  U.ease = {
    linear: t => t,
    out: t => 1 - Math.pow(1 - t, 3),
    in: t => t * t * t,
    inOut: t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    outQuint: t => 1 - Math.pow(1 - t, 5),
    outBack: t => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
    outElastic: t => t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1,
    outExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  };

  /* 归一化进度：t 位于 [t0, t0+dur] → [0,1] */
  U.prog = (t, t0, dur) => U.clamp((t - t0) / dur, 0, 1);

  /* 确定性伪随机（mulberry32） */
  U.rng = function (seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let tt = Math.imul(a ^ (a >>> 15), 1 | a);
      tt = (tt + Math.imul(tt ^ (tt >>> 7), 61 | tt)) ^ tt;
      return ((tt ^ (tt >>> 14)) >>> 0) / 4294967296;
    };
  };

  /* —— DOM 确定性动画助手（全部由 JS 逐帧写入，无 CSS transition） —— */

  /* 遮盖上推揭示：元素从下方被一条移动的边“擦除”出现 */
  U.wipeUp = (el, t, t0, dur) => {
    const p = U.ease.out(U.prog(t, t0, dur));
    el.style.clipPath = `inset(${(1 - p) * 100}% 0 0 0)`;
    el.style.opacity = '1';
    return p;
  };
  /* 从左往右擦除 */
  U.wipeRight = (el, t, t0, dur) => {
    const p = U.ease.out(U.prog(t, t0, dur));
    el.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
    el.style.opacity = '1';
    return p;
  };

  /* 升起 + 淡入 */
  U.riseIn = (el, t, t0, dur, dist = 34) => {
    const p = U.ease.out(U.prog(t, t0, dur));
    el.style.opacity = String(p);
    el.style.transform = `translateY(${(1 - p) * dist}px)`;
    return p;
  };

  /* 纯淡入 */
  U.fadeIn = (el, t, t0, dur) => {
    const p = U.ease.inOut(U.prog(t, t0, dur));
    el.style.opacity = String(p);
    return p;
  };

  /* 淡出（在 t0 开始） */
  U.fadeOut = (el, t, t0, dur) => {
    const p = U.ease.inOut(U.prog(t, t0, dur));
    el.style.opacity = String(1 - p);
    return 1 - p;
  };

  /* 字符逐个浮现（按文本节点拆分 span，只做一次） */
  U.splitChars = (el) => {
    if (el.dataset.split) return;
    const text = el.textContent;
    el.textContent = '';
    const frag = document.createDocumentFragment();
    for (const ch of text) {
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.display = 'inline-block';
      s.style.opacity = '0';
      s.style.transform = 'translateY(0.35em)';
      s.style.willChange = 'opacity, transform';
      frag.appendChild(s);
    }
    el.appendChild(frag);
    el.dataset.split = '1';
  };
  U.charsIn = (el, t, t0, per, easeFn) => {
    const spans = el.querySelectorAll('span');
    const n = spans.length;
    const e = easeFn || U.ease.out;
    spans.forEach((s, i) => {
      const p = e(U.clamp((t - t0 - i * per) / 0.55, 0, 1));
      s.style.opacity = String(p);
      s.style.transform = `translateY(${(1 - p) * 0.35}em)`;
    });
    return U.prog(t, t0, n * per + 0.55);
  };

  /* SVG 路径描绘动画 */
  U.drawPath = (path, t, t0, dur) => {
    const len = path.getTotalLength();
    if (!path.dataset.len) path.dataset.len = String(len);
    const p = U.ease.inOut(U.prog(t, t0, dur));
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len * (1 - p));
    return p;
  };

  /* 数字滚动 */
  U.countUp = (el, t, t0, dur, from, to, fmt) => {
    const p = U.ease.outQuint(U.prog(t, t0, dur));
    const v = U.lerp(from, to, p);
    el.textContent = fmt ? fmt(v) : String(Math.round(v));
    return p;
  };

  window.U = U;
})();
