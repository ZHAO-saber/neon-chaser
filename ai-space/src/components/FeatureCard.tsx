"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  href: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  tone: "cyan" | "violet";
  badge?: string;
}

export function FeatureCard({
  href,
  title,
  desc,
  icon: Icon,
  tone,
  badge,
}: FeatureCardProps) {
  const iconTone =
    tone === "cyan"
      ? "from-cyan-400/20 to-cyan-500/5 text-cyan-300 ring-cyan-400/20"
      : "from-violet-400/20 to-violet-500/5 text-violet-300 ring-violet-400/20";

  return (
    <Link
      href={href}
      className="glass group relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
    >
      <div
        className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${
          tone === "cyan"
            ? "from-cyan-500/10 to-transparent"
            : "from-violet-500/10 to-transparent"
        } opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="flex items-start justify-between">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ${iconTone}`}
        >
          <Icon size={18} />
        </span>
        <ArrowUpRight
          size={16}
          className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-300"
        />
      </div>
      <h3 className="mt-4 text-[15px] font-semibold text-slate-100">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{desc}</p>
      {badge && (
        <span className="mt-3 inline-block rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400">
          {badge}
        </span>
      )}
    </Link>
  );
}
