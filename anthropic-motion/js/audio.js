/* ============ 配乐：Web Audio 全合成（离线/在线通用） ============
   曲式：D 小调 · 76 BPM · 六幕情绪铺陈
   S1 稀疏钢弦 → S2 低鸣脉冲 → S3 希望琶音 → S4 节奏动机
   → S5 全编制推进 → S6 主题再现 + 大调收束
==================================================== */
(function () {
  'use strict';

  const A = {};
  const BPM = 76;
  const BEAT = 60 / BPM;            // 0.78947s
  const BAR = BEAT * 4;             // 3.1579s

  /* ---------- 音符 ---------- */
  const N = {
    D2: 73.42, F2: 87.31, A2: 110, Bb2: 116.54, C3: 130.81, D3: 146.83, E3: 164.81,
    F3: 174.61, G3: 196, A3: 220, Bb3: 233.08, C4: 261.63, D4: 293.66, E4: 329.63,
    F4: 349.23, G4: 392, A4: 440, Bb4: 466.16, C5: 523.25, D5: 587.33, E5: 659.26,
    F5: 698.46, G5: 783.99, A5: 880, Bb5: 932.33, C6: 1046.5, D6: 1174.66, E6: 1318.5
  };

  /* ---------- 噪声 / 混响 IR ---------- */
  let _noise = null;
  function noise(ctx) {
    if (_noise && _noise.sampleRate === ctx.sampleRate) return _noise;
    const len = Math.floor(ctx.sampleRate * 2);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    _noise = buf;
    return buf;
  }

  function makeIR(ctx, dur = 3.2, decay = 2.8) {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / ctx.sampleRate;
        const pre = t < 0.02 ? 0 : 1;                       // 轻微 predelay
        d[i] = (Math.random() * 2 - 1) * pre * Math.pow(1 - t / dur, decay) * 0.6;
      }
    }
    return buf;
  }

  /* ---------- 主链 ---------- */
  function build(ctx) {
    const master = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 24;
    comp.ratio.value = 3.5; comp.attack.value = 0.008; comp.release.value = 0.25;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 13200;

    master.connect(comp); comp.connect(lp); lp.connect(ctx.destination);
    master.gain.value = 0.0001;

    /* 混响发送 */
    const revIn = ctx.createGain(); revIn.gain.value = 1;
    const conv = ctx.createConvolver(); conv.buffer = makeIR(ctx);
    const revGain = ctx.createGain(); revGain.gain.value = 0.5;
    revIn.connect(conv); conv.connect(revGain); revGain.connect(master);

    return { ctx, master, revIn };
  }

  /* ---------- 乐器 ---------- */
  const inst = {

    /* 弦乐垫：多振荡器 + 慢滤波 */
    pad(env, freqs, t0, dur, o = {}) {
      const { ctx, master, revIn } = env;
      const g = o.gain != null ? o.gain : 0.05;
      const gNode = ctx.createGain();
      gNode.gain.value = 0;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = o.cutoff || 900;
      lp.Q.value = 0.4;
      gNode.connect(lp); lp.connect(master);
      const send = ctx.createGain(); send.gain.value = o.wet != null ? o.wet : 0.5;
      lp.connect(send); send.connect(revIn);

      const atk = o.attack || 1.4, rel = o.release || 2.2;
      gNode.gain.setValueAtTime(0, t0);
      gNode.gain.linearRampToValueAtTime(g, t0 + atk);
      gNode.gain.setValueAtTime(g, t0 + Math.max(atk, dur - rel));
      gNode.gain.linearRampToValueAtTime(0, t0 + dur);

      freqs.forEach((f, i) => {
        [-6, 6].forEach(det => {
          const osc = ctx.createOscillator();
          osc.type = i % 2 ? 'triangle' : 'sawtooth';
          osc.frequency.value = f;
          osc.detune.value = det;
          const vg = ctx.createGain(); vg.gain.value = 0.5 / freqs.length;
          osc.connect(vg); vg.connect(gNode);
          osc.start(t0); osc.stop(t0 + dur + 0.1);
        });
      });
      /* 滤波呼吸 */
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
      const lg = ctx.createGain(); lg.gain.value = (o.cutoff || 900) * 0.35;
      lfo.connect(lg); lg.connect(lp.frequency);
      lfo.start(t0); lfo.stop(t0 + dur + 0.1);
    },

    /* 钢琴拨弦：FM 合成 */
    pluck(env, freq, t, o = {}) {
      const { ctx, master, revIn } = env;
      const dur = o.dur || 1.6;
      const g = o.gain != null ? o.gain : 0.16;
      const out = ctx.createGain();
      out.gain.setValueAtTime(0, t);
      out.gain.linearRampToValueAtTime(g, t + 0.008);
      out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      out.connect(master);
      const send = ctx.createGain(); send.gain.value = o.wet != null ? o.wet : 0.4;
      out.connect(send); send.connect(revIn);

      const car = ctx.createOscillator(); car.type = 'sine'; car.frequency.value = freq;
      const mod = ctx.createOscillator(); mod.type = 'sine';
      mod.frequency.value = freq * (o.ratio || 2);
      const mg = ctx.createGain();
      mg.gain.setValueAtTime(freq * (o.index || 1.6), t);
      mg.gain.exponentialRampToValueAtTime(1, t + dur * 0.5);
      mod.connect(mg); mg.connect(car.frequency);
      car.connect(out);
      mod.start(t); car.start(t);
      mod.stop(t + dur + 0.05); car.stop(t + dur + 0.05);
    },

    /* 钟 / 铃：FM ratio 3.5 */
    bell(env, freq, t, o = {}) {
      inst.pluck(env, freq, t, Object.assign({ dur: 3.2, gain: 0.1, ratio: 3.5, index: 3.2, wet: 0.6 }, o));
    },

    /* 低频铺垫 */
    sub(env, freq, t0, dur, o = {}) {
      const { ctx, master } = env;
      const osc = ctx.createOscillator(); osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 1.02, t0);
      osc.frequency.exponentialRampToValueAtTime(freq, t0 + dur * 0.4);
      const g = ctx.createGain();
      const peak = o.gain != null ? o.gain : 0.22;
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(peak, t0 + (o.attack || 0.12));
      g.gain.linearRampToValueAtTime(0, t0 + dur);
      osc.connect(g); g.connect(master);
      osc.start(t0); osc.stop(t0 + dur + 0.05);
    },

    /* 底鼓 */
    kick(env, t, g = 0.5) {
      const { ctx, master } = env;
      const osc = ctx.createOscillator(); osc.type = 'sine';
      osc.frequency.setValueAtTime(132, t);
      osc.frequency.exponentialRampToValueAtTime(44, t + 0.11);
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(g, t);
      gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      osc.connect(gn); gn.connect(master);
      osc.start(t); osc.stop(t + 0.32);
      /* 打击点 */
      const n = ctx.createBufferSource(); n.buffer = noise(ctx);
      const nf = ctx.createBiquadFilter(); nf.type = 'highpass'; nf.frequency.value = 4000;
      const ng = ctx.createGain();
      ng.gain.setValueAtTime(g * 0.25, t);
      ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
      n.connect(nf); nf.connect(ng); ng.connect(master);
      n.start(t); n.stop(t + 0.05);
    },

    /* 沙锤 */
    shaker(env, t, g = 0.06) {
      const { ctx, master, revIn } = env;
      const n = ctx.createBufferSource(); n.buffer = noise(ctx);
      n.playbackRate.value = 1.6;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 7200; f.Q.value = 1.1;
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(0, t);
      gn.gain.linearRampToValueAtTime(g, t + 0.006);
      gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.075);
      n.connect(f); f.connect(gn); gn.connect(master);
      const s = ctx.createGain(); s.gain.value = 0.25; gn.connect(s); s.connect(revIn);
      n.start(t, Math.random()); n.stop(t + 0.1);
    },

    /* 刻度音 */
    tick(env, t, g = 0.22) {
      const { ctx, master } = env;
      const n = ctx.createBufferSource(); n.buffer = noise(ctx);
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2800; f.Q.value = 2.4;
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(g, t);
      gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      n.connect(f); f.connect(gn); gn.connect(master);
      n.start(t, Math.random()); n.stop(t + 0.06);
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 1240;
      const og = ctx.createGain();
      og.gain.setValueAtTime(g * 0.5, t);
      og.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o.connect(og); og.connect(master);
      o.start(t); o.stop(t + 0.08);
    },

    /* 扫频 whoosh */
    whoosh(env, t, dur = 1.1, dir = 1) {
      const { ctx, master, revIn } = env;
      const n = ctx.createBufferSource(); n.buffer = noise(ctx); n.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.3;
      f.frequency.setValueAtTime(dir > 0 ? 240 : 5200, t);
      f.frequency.exponentialRampToValueAtTime(dir > 0 ? 4200 : 240, t + dur);
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(0, t);
      gn.gain.linearRampToValueAtTime(0.16, t + dur * 0.75);
      gn.gain.linearRampToValueAtTime(0, t + dur);
      n.connect(f); f.connect(gn); gn.connect(master);
      const s = ctx.createGain(); s.gain.value = 0.5; gn.connect(s); s.connect(revIn);
      n.start(t); n.stop(t + dur + 0.05);
    },

    /* 上升 riser */
    riser(env, t, dur = 1.4) {
      const { ctx, master, revIn } = env;
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(110, t);
      o.frequency.exponentialRampToValueAtTime(440, t + dur);
      const f = ctx.createBiquadFilter(); f.type = 'lowpass';
      f.frequency.setValueAtTime(500, t);
      f.frequency.exponentialRampToValueAtTime(3800, t + dur);
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(0, t);
      gn.gain.linearRampToValueAtTime(0.1, t + dur * 0.9);
      gn.gain.linearRampToValueAtTime(0, t + dur);
      o.connect(f); f.connect(gn); gn.connect(master);
      const s = ctx.createGain(); s.gain.value = 0.5; gn.connect(s); s.connect(revIn);
      o.start(t); o.stop(t + dur + 0.05);
      inst.whoosh(env, t, dur, 1);
    },

    /* 撞击 */
    impact(env, t) {
      const { ctx, master, revIn } = env;
      inst.sub(env, N.D2, t, 1.6, { gain: 0.4 });
      const n = ctx.createBufferSource(); n.buffer = noise(ctx);
      const f = ctx.createBiquadFilter(); f.type = 'lowpass';
      f.frequency.setValueAtTime(3000, t);
      f.frequency.exponentialRampToValueAtTime(200, t + 0.7);
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(0.34, t);
      gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      n.connect(f); f.connect(gn); gn.connect(master);
      const s = ctx.createGain(); s.gain.value = 0.6; gn.connect(s); s.connect(revIn);
      n.start(t); n.stop(t + 1);
      inst.bell(env, N.D6, t, { gain: 0.07 });
    },

    /* 一组上行闪光音 */
    sparkle(env, t, base = N.C6, n = 6) {
      const steps = [0, 2, 4, 7, 9, 12, 14];
      for (let i = 0; i < n; i++) {
        const semi = steps[i % steps.length] + (i >= steps.length ? 12 : 0);
        const f = base * Math.pow(2, semi / 12);
        inst.pluck(env, f, t + i * 0.09, { gain: 0.055, dur: 1.4, ratio: 3, index: 2, wet: 0.7 });
      }
    }
  };

  /* ---------- 总谱 ---------- */
  function schedule(env) {
    const t0 = env.t0;
    const P = (freq, t, o) => inst.pluck(env, freq, t0 + t, o);
    const B = (freq, t, o) => inst.bell(env, freq, t0 + t, o);
    const K = (t, g) => inst.kick(env, t0 + t, g);
    const S = (t, g) => inst.shaker(env, t0 + t, g);
    const T = (t, g) => inst.tick(env, t0 + t, g);
    const W = (t, dur, dir) => inst.whoosh(env, t0 + t, dur, dir);
    const R = (t, dur) => inst.riser(env, t0 + t, dur);
    const SUB = (freq, t, dur, o) => inst.sub(env, freq, t0 + t, dur, o);

    /* ===== S1 序（0–8.2）稀疏、发问 ===== */
    inst.pad(env, [N.D3, N.F3, N.A3, N.C4, N.E4], t0 + 0, 8.4, { gain: 0.052, cutoff: 780, attack: 2.2, release: 3 });
    B(N.D6, 0.4, { gain: 0.075 });
    P(N.D5, 0.7, { gain: 0.13 });
    B(N.A5, 2.5, { gain: 0.06 });
    P(N.A4, 2.8, { gain: 0.11 });
    P(N.F5, 4.6, { gain: 0.12 });
    P(N.D5, 6.2, { gain: 0.08, dur: 2.2 });
    W(7.6, 0.7, -1);

    /* ===== S2 出走（8.2–17.5）暗、低鸣 ===== */
    inst.pad(env, [N.D2, N.F3, N.A3, N.C4], t0 + 8.2, 9.4, { gain: 0.075, cutoff: 620, attack: 1.6, release: 3 });
    W(8.2, 1.0, 1);
    SUB(N.D2, 10.4, 1.5, { gain: 0.2 });
    SUB(N.D2, 12.2, 1.5, { gain: 0.2 });
    P(N.A4, 13.2, { gain: 0.1, dur: 2.4 });
    inst.impact(env, t0 + 14.3);
    P(N.D5, 15.0, { gain: 0.1, dur: 2.6 });
    R(16.1, 1.4);
    SUB(N.D2, 16.4, 1.2, { gain: 0.16 });

    /* ===== S3 宪法（17.5–30.5）希望、琶音 ===== */
    const s3chords = [
      { f: [N.D3, N.F3, N.A3, N.C4, N.E4], t: 17.5, d: 3.4 },   // Dm9
      { f: [N.Bb3, N.D4, N.F4, N.G4], t: 20.9, d: 3.4 },        // Bb6
      { f: [N.F3, N.A3, N.C4, N.D4, N.G4], t: 24.3, d: 3.3 },   // F6/9
      { f: [N.C3, N.G3, N.C4, N.D4, N.E4], t: 27.6, d: 3.1 }    // C6/9
    ];
    s3chords.forEach((c, ci) => {
      inst.pad(env, c.f, t0 + c.t, c.d, { gain: 0.058, cutoff: 1000, attack: 1.0, release: 2 });
      const arp = [0, 1, 2, 3, 2, 1, 2, 3];
      for (let i = 0; i < 8; i++) {
        const f = c.f[arp[i] % c.f.length] * (i >= 4 ? 2 : 1);
        P(f, c.t + 0.15 + i * 0.4, { gain: i % 2 ? 0.085 : 0.115, dur: 1.8 });
      }
    });
    B(N.D6, 18.3, { gain: 0.09 });
    B(N.F5, 21.5, { gain: 0.07 });
    SUB(N.F2, 20.6, 1.4, { gain: 0.14 });
    inst.sparkle(env, t0 + 26.7, N.C6, 7);
    W(26.2, 1.0, -1);

    /* ===== S4 Claude 纪元（30.5–47.5）节奏动机 ===== */
    const s4chords = [
      { f: [N.D3, N.F3, N.A3, N.C4, N.E4], r: N.D2 },  // Dm9
      { f: [N.Bb3, N.D4, N.F4, N.G4], r: N.Bb2 },      // Bb6
      { f: [N.F3, N.A3, N.C4, N.D4, N.G4], r: N.F2 },  // F6/9
      { f: [N.C3, N.G3, N.C4, N.D4, N.E4], r: N.C3 }   // C6/9
    ];
    const loopStart = 31.2;
    for (let bar = 0; bar < 6; bar++) {
      const bt = loopStart + bar * BAR;
      const c = s4chords[bar % 4];
      inst.pad(env, c.f, t0 + bt, BAR * 1.05, { gain: 0.05, cutoff: 1050, attack: 0.7, release: 1.6 });
      K(bt, 0.5); K(bt + BEAT * 2, 0.42);
      for (let e = 0; e < 8; e++) S(bt + e * BEAT / 2, e % 2 ? 0.05 : 0.075);
      for (let e = 0; e < 8; e++) SUB(c.r, bt + e * BEAT / 2, BEAT / 2 * 0.9, { gain: 0.085, attack: 0.02 });
      /* 旋律动机：A4 D5 F5 E5 | D5 C5 A4 G4（变体） */
      const motifs = [
        [N.A4, N.D5, N.F5, N.E5, N.D5, N.C5, N.A4, N.G4],
        [N.F5, N.E5, N.D5, N.C5, N.D5, N.F5, N.E5, N.D5],
        [N.A4, N.C5, N.D5, N.F5, N.E5, N.D5, N.C5, N.A4],
        [N.D5, N.C5, N.A4, N.G4, N.A4, N.C5, N.D5, N.E5]
      ];
      const m = motifs[bar % 4];
      for (let e = 0; e < 8; e++) P(m[e], bt + e * BEAT / 2, { gain: 0.1, dur: 1.3, ratio: 2, index: 1.4 });
    }
    /* 里程碑刻度音（8 个节点，与画面对齐） */
    [35.0, 36.6, 38.2, 39.8, 41.4, 43.0, 44.6, 46.2].forEach((t, i) => T(t, i === 7 ? 0.3 : 0.22));
    inst.sparkle(env, t0 + 46.3, N.E6, 6);

    /* ===== S5 信任曲线（47.5–60.5）全编制 ===== */
    const s5chords = [
      { f: [N.D3, N.F3, N.A3, N.C4, N.E4], r: N.D2 },
      { f: [N.Bb3, N.D4, N.F4, N.G4], r: N.Bb2 },
      { f: [N.F3, N.A3, N.C4, N.D4, N.G4], r: N.F2 },
      { f: [N.C3, N.G3, N.C4, N.D4, N.E4], r: N.C3 }
    ];
    for (let bar = 0; bar < 4; bar++) {
      const bt = 47.6 + bar * BAR;
      const c = s5chords[bar % 4];
      inst.pad(env, c.f, t0 + bt, BAR * 1.05, { gain: 0.045, cutoff: 1150, attack: 0.5, release: 1.4 });
      K(bt, 0.55); K(bt + BEAT * 2, 0.46); K(bt + BEAT * 3.5, 0.34);
      for (let e = 0; e < 8; e++) S(bt + e * BEAT / 2, e % 2 ? 0.06 : 0.085);
      for (let e = 0; e < 8; e++) SUB(c.r, bt + e * BEAT / 2, BEAT / 2 * 0.85, { gain: 0.1, attack: 0.02 });
      /* 16 分琶音 */
      for (let e = 0; e < 16; e++) {
        const f = c.f[e % c.f.length] * (e % 8 >= 4 ? 2 : 1) * (e % 16 >= 12 ? 2 : 1);
        P(f, bt + e * BEAT / 4, { gain: 0.045, dur: 0.9, ratio: 3, index: 0.8 });
      }
      /* 高音旋律 */
      const mels = [
        [N.A4, N.D5, N.F5, N.A5, N.G5, N.F5, N.E5, N.D5],
        [N.F5, N.D5, N.Bb4, N.D5, N.F5, N.G5, N.F5, N.D5],
        [N.A4, N.C5, N.F5, N.A5, N.G5, N.F5, N.D5, N.C5],
        [N.G4, N.C5, N.E5, N.G5, N.F5, N.E5, N.D5, N.C5]
      ][bar];
      for (let e = 0; e < 8; e++) P(mels[e], bt + e * BEAT / 2, { gain: 0.095, dur: 1.5, ratio: 2, index: 1.5 });
    }
    W(51.5, 1.6, 1);                       // 曲线绘制
    [51.8, 52.6, 53.4, 54.2, 55.0, 55.8, 56.6].forEach((t, i) =>
      P(N.C5 * Math.pow(2, i * 2 / 12), t, { gain: 0.08, dur: 1.1, ratio: 3, index: 2 }));
    SUB(N.D2, 58.1, 2.2, { gain: 0.3, attack: 0.4 });
    B(N.D6, 58.3, { gain: 0.11 });
    inst.sparkle(env, t0 + 58.4, N.E6, 7);
    R(59.5, 1.0);

    /* ===== S6 尾声（60.5–79）主题再现 + 大调收束 ===== */
    inst.pad(env, [N.F3, N.A3, N.C4, N.D4, N.G4], t0 + 60.5, 7.6, { gain: 0.06, cutoff: 1000, attack: 1.8, release: 2.5 });
    inst.pad(env, [N.Bb3, N.D4, N.F4, N.G4], t0 + 68.2, 4.4, { gain: 0.055, cutoff: 950, attack: 1.4, release: 2 });
    inst.pad(env, [N.F3, N.A3, N.C4, N.D4, N.G4], t0 + 72.6, 6.6, { gain: 0.058, cutoff: 1050, attack: 1.6, release: 3 });
    P(N.F5, 61.3, { gain: 0.11, dur: 2.2 });
    P(N.A5, 62.5, { gain: 0.11, dur: 2.2 });
    P(N.C6, 63.7, { gain: 0.12, dur: 2.6 });
    P(N.A5, 65.0, { gain: 0.09, dur: 2.2 });
    P(N.G5, 68.5, { gain: 0.1, dur: 2.0 });
    P(N.F5, 69.7, { gain: 0.1, dur: 2.0 });
    P(N.D5, 70.9, { gain: 0.1, dur: 2.2 });
    B(N.C6, 72.7, { gain: 0.1 });
    P(N.A5, 73.5, { gain: 0.09, dur: 2.6 });
    P(N.F5, 74.8, { gain: 0.09, dur: 3.0 });
    inst.sparkle(env, t0 + 75.2, N.C6, 5);
  }

  /* ---------- 主音量包络 ---------- */
  function masterEnv(env, total) {
    const g = env.master.gain;
    const t0 = env.t0;
    g.setValueAtTime(0.0001, t0);
    g.linearRampToValueAtTime(0.9, t0 + 1.6);
    g.setValueAtTime(0.9, t0 + total - 2.2);
    g.linearRampToValueAtTime(0.0001, t0 + total);
  }

  A.TOTAL = 79.5;

  /* 在线播放（用户点击后） */
  A.playLive = function (ctx) {
    const env = build(ctx);
    env.t0 = ctx.currentTime + 0.12;
    masterEnv(env, A.TOTAL);
    schedule(env);
    return env;
  };

  /* 离线渲染 */
  A.renderOffline = function () {
    const sr = 48000;
    const ctx = new OfflineAudioContext(2, Math.ceil(sr * A.TOTAL), sr);
    const env = build(ctx);
    env.t0 = 0;
    masterEnv(env, A.TOTAL);
    schedule(env);
    return ctx.startRendering();
  };

  /* WAV 编码（16bit PCM） */
  A.encodeWAV = function (buf) {
    const nCh = buf.numberOfChannels;
    const len = buf.length;
    const bytes = 44 + len * nCh * 2;
    const ab = new ArrayBuffer(bytes);
    const v = new DataView(ab);
    const wr = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    wr(0, 'RIFF'); v.setUint32(4, bytes - 8, true); wr(8, 'WAVE');
    wr(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true);
    v.setUint16(22, nCh, true); v.setUint32(24, buf.sampleRate, true);
    v.setUint32(28, buf.sampleRate * nCh * 2, true);
    v.setUint16(32, nCh * 2, true); v.setUint16(34, 16, true);
    wr(36, 'data'); v.setUint32(40, len * nCh * 2, true);
    const chans = [];
    for (let c = 0; c < nCh; c++) chans.push(buf.getChannelData(c));
    let o = 44;
    for (let i = 0; i < len; i++) {
      for (let c = 0; c < nCh; c++) {
        let s = Math.max(-1, Math.min(1, chans[c][i]));
        v.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        o += 2;
      }
    }
    return new Uint8Array(ab);
  };

  window.A = A;
})();
