/**
 * 音频系统：基于 WebAudio API 程序化生成所有音效
 * 不依赖外部音频文件，所有声音用 OscillatorNode + GainNode + 噪音 Buffer 合成
 */

/** 不同武器的射击音配置 */
interface WeaponSoundConfig {
  /** 主噪音 burst 增益 */
  noiseGain: number;
  /** 噪音衰减时长（秒） */
  noiseDecay: number;
  /** 噪音低通截止频率 */
  noiseCutoff: number;
  /** 振荡器频率（"砰"声） */
  oscFreq: number;
  /** 振荡器增益 */
  oscGain: number;
}

const WEAPON_SOUND_CONFIG: Record<string, WeaponSoundConfig> = {
  rifle: { noiseGain: 0.35, noiseDecay: 0.12, noiseCutoff: 4000, oscFreq: 180, oscGain: 0.25 },
  pistol: { noiseGain: 0.25, noiseDecay: 0.08, noiseCutoff: 3000, oscFreq: 220, oscGain: 0.18 },
  sniper: { noiseGain: 0.5, noiseDecay: 0.25, noiseCutoff: 6000, oscFreq: 120, oscGain: 0.35 },
  smg: { noiseGain: 0.22, noiseDecay: 0.06, noiseCutoff: 3500, oscFreq: 200, oscGain: 0.15 },
};

/** 不同主题的和弦进行（频率，Hz） */
const THEME_CHORDS: Record<string, number[][]> = {
  // 战斗主题：A 小调进行 Am - F - C - G
  combat: [
    [220.0, 261.63, 329.63],
    [174.61, 220.0, 261.63],
    [130.81, 164.81, 196.0],
    [196.0, 246.94, 293.66],
  ],
  // 平静主题：C - G - Am - F
  calm: [
    [261.63, 329.63, 392.0],
    [196.0, 246.94, 293.66],
    [220.0, 261.63, 329.63],
    [174.61, 220.0, 261.63],
  ],
  // 紧张主题：Dm - Bb - C - A
  tension: [
    [146.83, 174.61, 220.0],
    [116.54, 146.83, 174.61],
    [130.81, 164.81, 196.0],
    [110.0, 138.59, 164.81],
  ],
};

export class AudioSystem {
  private ctx: AudioContext;
  private masterGain: GainNode;
  private noiseBuffer: AudioBuffer;
  private volume = 0.7;
  private suspended = false;

  private bgmActive = false;
  private bgmInterval: number | null = null;
  private bgmGain: GainNode | null = null;
  private bgmChordIndex = 0;

  constructor() {
    // AudioContext 在用户交互前为 suspended，由外部调用 resume() 恢复
    // 兼容旧版 Safari 的 webkit 前缀
    const w = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    const Ctor = w.AudioContext || w.webkitAudioContext;
    if (!Ctor) throw new Error('AudioContext not supported in this browser');
    this.ctx = new Ctor();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.volume;
    this.masterGain.connect(this.ctx.destination);
    this.noiseBuffer = this.createNoiseBuffer(1.0);
  }

  /** 生成指定时长的白噪音 buffer */
  private createNoiseBuffer(duration: number): AudioBuffer {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  /** 设置主音量 0-1 */
  setVolume(v: number): void {
    this.volume = Math.max(0, Math.min(1, v));
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
  }

  /** 恢复 AudioContext（用户交互后调用） */
  resume(): void {
    this.suspended = false;
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  /** 暂停音频（标签页切换时调用） */
  suspend(): void {
    this.suspended = true;
    void this.ctx.suspend();
  }

  // === 射击音效 ===
  playShoot(weaponType: string): void {
    if (this.suspended) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const config = WEAPON_SOUND_CONFIG[weaponType] || WEAPON_SOUND_CONFIG.rifle;

    // 主噪音 burst（短促"啪"声）
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = config.noiseCutoff;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(config.noiseGain, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + config.noiseDecay);
    noise.connect(noiseFilter).connect(noiseGain).connect(this.masterGain);
    noise.start(now);
    noise.stop(now + config.noiseDecay);

    // 低频振荡（"砰"声）
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(config.oscFreq, now);
    osc.frequency.exponentialRampToValueAtTime(config.oscFreq * 0.5, now + 0.05);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(config.oscGain, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(oscGain).connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  // === 换弹音效（两个短金属碰撞声） ===
  playReload(): void {
    if (this.suspended) return;
    const now = this.ctx.currentTime;
    // 第一声：弹匣退出
    this.playClick(now, 2200, 0.04, 0.12);
    // 第二声：弹匣装入
    this.playClick(now + 0.4, 1800, 0.04, 0.15);
  }

  /** 单次金属碰撞声 */
  private playClick(startTime: number, freq: number, duration: number, volume: number): void {
    const ctx = this.ctx;
    // 振荡器（金属感）
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.value = freq;
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(volume, startTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(oscGain).connect(this.masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration);

    // 噪音混合（粗糙感）
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = freq;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(volume * 0.5, startTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    noise.connect(noiseFilter).connect(noiseGain).connect(this.masterGain);
    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  // === 脚步声（低频短噪音，音量随速度变化） ===
  playFootstep(speed: number): void {
    if (this.suspended) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400 + speed * 30;
    const gain = ctx.createGain();
    const volume = 0.04 + Math.min(0.12, speed * 0.012);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    noise.connect(filter).connect(gain).connect(this.masterGain);
    noise.start(now);
    noise.stop(now + 0.1);
  }

  // === 撞击声（中频噪音 burst，用于子弹命中） ===
  playHit(): void {
    if (this.suspended) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 1.5;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    noise.connect(filter).connect(gain).connect(this.masterGain);
    noise.start(now);
    noise.stop(now + 0.08);
  }

  // === 爆炸声（低频长噪音 + 衰减） ===
  playExplosion(): void {
    if (this.suspended) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // 主噪音（低频）
    const noise = ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(100, now + 1.0);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    noise.connect(filter).connect(gain).connect(this.masterGain);
    noise.start(now);
    noise.stop(now + 1.5);

    // 低频振荡（"轰"声）
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(60, now);
    osc.frequency.exponentialRampToValueAtTime(20, now + 1.0);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.4, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    osc.connect(oscGain).connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 1.3);
  }

  // === BGM：合成器循环（pad 和弦 + bass 节拍） ===
  startBGM(theme: string): void {
    if (this.bgmActive) return;
    this.bgmActive = true;
    this.bgmChordIndex = 0;

    const ctx = this.ctx;
    const chords = THEME_CHORDS[theme] || THEME_CHORDS.combat;

    // pad 通道：filter + gain
    const bgmGain = ctx.createGain();
    bgmGain.gain.value = 0.06;
    bgmGain.connect(this.masterGain);
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 1200;
    padFilter.connect(bgmGain);
    this.bgmGain = bgmGain;

    const playChord = () => {
      if (!this.bgmActive || !this.bgmGain) return;
      const chord = chords[this.bgmChordIndex % chords.length];
      const t = ctx.currentTime;
      // pad 和弦：3 个 sawtooth 振荡器
      for (const note of chord) {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = note;
        osc.connect(padFilter);
        osc.start(t);
        osc.stop(t + 4.0);
      }
      // bass 节拍：8 拍
      this.scheduleBass(t, chord[0] / 2);
      this.bgmChordIndex++;
    };

    playChord();
    this.bgmInterval = window.setInterval(playChord, 4000);
  }

  /** 调度 8 拍 bass 节拍 */
  private scheduleBass(startTime: number, freq: number): void {
    const ctx = this.ctx;
    const beat = 0.5;
    for (let i = 0; i < 8; i++) {
      const t = startTime + i * beat;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.1, t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.connect(gain).connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.4);
    }
  }

  /** 停止 BGM */
  stopBGM(): void {
    this.bgmActive = false;
    if (this.bgmInterval !== null) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
    // 静音 pad 通道
    if (this.bgmGain) {
      this.bgmGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.bgmGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.bgmGain = null;
    }
  }
}
