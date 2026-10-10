"use client";

import { Sparkles, Wand2, FileText } from "lucide-react";

/**
 * AI 动态视觉元素：纯 CSS 实现的「对话核心 + 悬浮能力标签」，
 * 不使用任何图片。
 */
export function WelcomeHero() {
  return (
    <div className="pointer-events-none relative mx-auto flex h-44 w-full max-w-md items-center justify-center sm:h-52">
      {/* 光晕环 */}
      <div className="absolute h-40 w-40 animate-spin-slow rounded-full border border-dashed border-cyan-400/20 sm:h-48 sm:w-48" />
      <div className="absolute h-28 w-28 rounded-full border border-violet-400/20 sm:h-36 sm:w-36" />

      {/* 中心核心 */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-600/25 shadow-glow ring-1 ring-white/10 backdrop-blur-md sm:h-24 sm:w-24">
        <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15" />
        <Sparkles className="relative h-8 w-8 text-cyan-300 sm:h-9 sm:w-9" />
      </div>

      {/* 悬浮能力标签 */}
      <div className="glass absolute -left-2 top-4 flex animate-float items-center gap-1.5 rounded-lg px-2.5 py-1.5 sm:left-2">
        <Wand2 size={13} className="text-violet-300" />
        <span className="text-[11px] text-slate-300">文案创作</span>
      </div>
      <div
        className="glass absolute -right-1 top-10 flex animate-float items-center gap-1.5 rounded-lg px-2.5 py-1.5 sm:right-4"
        style={{ animationDelay: "1.6s" }}
      >
        <FileText size={13} className="text-cyan-300" />
        <span className="text-[11px] text-slate-300">文件分析</span>
      </div>
      <div
        className="glass absolute bottom-3 left-1/2 flex -translate-x-1/2 animate-float items-center gap-1.5 rounded-lg px-2.5 py-1.5"
        style={{ animationDelay: "3s" }}
      >
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-cyan-300" />
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-violet-300" style={{ animationDelay: "0.4s" }} />
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-cyan-300" style={{ animationDelay: "0.8s" }} />
        </span>
        <span className="text-[11px] text-slate-300">多轮对话</span>
      </div>
    </div>
  );
}
