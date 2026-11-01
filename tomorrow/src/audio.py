#!/usr/bin/env python3
"""《明天尚未生成》程序化声音设计：48kHz 立体声 300s"""
import numpy as np
from scipy.io import wavfile
import sys, os

SR = 48000
DUR = 300
N = SR * DUR
rng = np.random.default_rng(20261102)

def smooth_env(dur, points):
    """points: [(t, gain)] -> 0..1 envelope with soft edges"""
    pts_t = np.array([p[0] for p in points], dtype=np.float64)
    pts_g = np.array([p[1] for p in points], dtype=np.float64)
    t = np.arange(dur, dtype=np.float64)
    env = np.interp(t, pts_t, pts_g)
    # 0.8s box smooth
    w = int(0.8 * SR)
    c = np.cumsum(env)
    out = (c[w:] - c[:-w]) / w
    out = np.concatenate([np.full(w, out[0]), out])
    return out.astype(np.float32)

def add_tone(sig, t0, dur, freq, amp, attack=0.06, pan=0.0, harmonics=(1,)):
    i0 = int(max(0, t0 * SR))
    n = int(dur * SR)
    if i0 + n > len(sig):
        n = len(sig) - i0
    if n <= 0:
        return
    t = np.arange(n, dtype=np.float64) / SR
    env = np.exp(-t * (3.0 / dur)) * (1 - np.exp(-t / max(0.001, attack)))
    w = np.zeros(n, dtype=np.float64)
    for h in harmonics:
        w += np.sin(2 * np.pi * freq * h * t + h * 0.7) / (h ** 1.6)
    w *= env * amp
    sig[i0:i0 + n, 0] += w * (1 - 0.35 * max(0, pan))
    sig[i0:i0 + n, 1] += w * (1 + 0.35 * min(0, pan))

def add_noise_burst(sig, t0, dur, amp, band=(200, 4000), pan=0.0):
    i0 = int(max(0, t0 * SR))
    n = int(dur * SR)
    if i0 + n > len(sig):
        n = len(sig) - i0
    if n <= 0:
        return
    t = np.arange(n, dtype=np.float64) / SR
    noise = rng.standard_normal(n)
    # 简易带通：FFT
    spec = np.fft.rfft(noise)
    freqs = np.fft.rfftfreq(n, 1 / SR)
    lo, hi = band
    mask = (freqs >= lo) & (freqs <= hi)
    spec[~mask] *= 0.02
    noise = np.fft.irfft(spec, n)
    env = np.exp(-t * (4.0 / dur)) * (1 - np.exp(-t / 0.02))
    w = noise * env * amp
    sig[i0:i0 + n, 0] += w * (1 - 0.4 * max(0, pan))
    sig[i0:i0 + n, 1] += w * (1 + 0.4 * min(0, pan))

# ---------------------------------------------------------------- 基底
t = np.arange(N, dtype=np.float64) / SR

CUE_T = [0, 7, 18, 30, 46, 56, 74, 90, 104, 126, 142, 156, 166, 178, 190, 206, 214, 226, 244, 262, 280, 292]
CUE_G = [0.18, 0.42, 0.34, 0.5, 0.66, 0.58, 0.66, 0.74, 0.82, 0.98, 0.92, 0.78, 0.66, 0.46, 0.12, 0.16, 0.3, 0.5, 0.64, 0.5, 0.4, 0.24]
ENV = smooth_env(N, list(zip([c * SR for c in [x for x in CUE_T]], CUE_G)))

# 低频空间底噪
low = np.sin(2 * np.pi * 41.2 * t + 0.4) * 0.9
low += np.sin(2 * np.pi * 57.7 * t + 1.9) * 0.5
low += np.sin(2 * np.pi * 88.3 * t + 2.6) * 0.22
low *= ENV * 0.020

# 缓慢呼吸的压力感
breath = (0.5 + 0.5 * np.sin(2 * np.pi * t / 23.0)) ** 2
low *= (0.6 + 0.55 * breath)
sig = np.zeros((N, 2), dtype=np.float32)
sig[:, 0] += low.astype(np.float32) * 1.02
sig[:, 1] += np.roll(low, 137).astype(np.float32) * 1.02

# ---------------------------------------------------------------- 各段事件
# 诞生：一次点亮
add_tone(sig, 7.2, 9.0, 220.0, 0.035, attack=1.2, harmonics=(1, 2, 3))
add_tone(sig, 17.0, 12.0, 329.6, 0.028, attack=2.0, harmonics=(1, 2))
add_tone(sig, 30.0, 14.0, 164.8, 0.030, attack=2.4, harmonics=(1, 2, 3))
add_noise_burst(sig, 40.0, 12.0, 0.020, band=(80, 900))

# 理解：数据颗粒
for i in range(120):
    tt = 56 + rng.random() * 46
    f = 700 + rng.random() * 2600
    add_tone(sig, tt, 0.45 + rng.random() * 0.8, f, 0.012 + rng.random() * 0.02,
             attack=0.01, pan=rng.uniform(-0.9, 0.9))
for i in range(26):
    tt = 58 + rng.random() * 44
    add_noise_burst(sig, tt, 0.5, 0.012, band=(300, 5000), pan=rng.uniform(-1, 1))

# 预测：时间线分裂，密度最高
for i in range(190):
    tt = 104 + rng.random() * 48
    f = 480 + rng.random() * 3400
    add_tone(sig, tt, 0.5 + rng.random() * 1.1, f, 0.010 + rng.random() * 0.022,
             attack=0.012, pan=rng.uniform(-1, 1))
for k in range(13):
    add_tone(sig, 106 + k * 4.0, 3.2, 110.0, 0.030, attack=0.05, harmonics=(1, 2))
# 峰值处的长弦
add_tone(sig, 126.0, 16.0, 392.0, 0.030, attack=1.6, harmonics=(1, 2, 3))
add_tone(sig, 142.0, 12.0, 523.2, 0.022, attack=1.4, harmonics=(1, 2))

# 警戒：整体下行
add_tone(sig, 156.0, 8.0, 220.0, 0.030, attack=0.2, harmonics=(1, 2))
add_noise_burst(sig, 160.0, 6.0, 0.030, band=(60, 700))
add_tone(sig, 166.0, 5.0, 146.8, 0.040, attack=0.15, harmonics=(1, 2, 3))

# 未知：几乎无声，只剩一条极高的细线
add_tone(sig, 182.0, 22.0, 1470.0, 0.0045, attack=3.0, pan=0.2)
add_tone(sig, 198.0, 12.0, 196.0, 0.007, attack=2.0)
# 白闪 / 纸面的一个清气口
add_noise_burst(sig, 189.5, 3.4, 0.022, band=(700, 9000))

# 提问
add_tone(sig, 214.0, 9.0, 110.0, 0.020, attack=1.5, harmonics=(1, 2, 3))

# 创造：暖调缓慢展开
warm_parts = [(110.0, 0.020), (164.8, 0.014), (220.0, 0.012), (293.7, 0.008)]
for f, a in warm_parts:
    add_tone(sig, 218.0, 60.0, f, a, attack=5.0, harmonics=(1, 2, 3))
add_tone(sig, 244.0, 36.0, 440.0, 0.012, attack=4.0, harmonics=(1, 2))
# 笔触：空气被划开
add_noise_burst(sig, 258.0, 10.0, 0.016, band=(400, 6500))
add_noise_burst(sig, 270.0, 12.0, 0.010, band=(900, 8000))

# 收束
add_tone(sig, 280.0, 20.0, 55.0, 0.030, attack=2.0, harmonics=(1, 2, 3))
add_tone(sig, 289.0, 11.0, 220.0, 0.016, attack=2.4, harmonics=(1, 2))
add_tone(sig, 294.0, 6.0, 110.0, 0.012, attack=1.0)

# 全局微弱的磁带底噪
hiss = rng.standard_normal((N, 2)).astype(np.float32) * 0.0012
sig += hiss

# 边缘淡入淡出
head = np.clip(t / 2.0, 0, 1).astype(np.float32)
tail = np.clip((DUR - t) / 2.5, 0, 1).astype(np.float32)
sig *= head[:, None] * tail[:, None]

peak = float(np.max(np.abs(sig))) or 1.0
target = 0.86  # -1.3 dBFS
sig *= target / peak

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'out', 'score.wav')
wavfile.write(out, SR, (sig * 32767).astype(np.int16))
print('wrote', out, sig.shape, 'peak', float(np.max(np.abs(sig))))
