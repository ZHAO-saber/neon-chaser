"use client";

import type { LucideIcon } from "lucide-react";

interface PlanItem {
  title: string;
  desc: string;
}

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
  plans: PlanItem[];
}

export function PlaceholderPage({ icon: Icon, title, desc, plans }: Props) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-600/20 ring-1 ring-white/10">
          <Icon size={22} className="text-cyan-300" />
        </span>
        <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>

        <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
            扩展设计
          </p>
          <ul className="mt-4 flex flex-col gap-4">
            {plans.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                <div>
                  <p className="text-[13px] font-medium text-slate-200">
                    {p.title}
                  </p>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-[12px] text-slate-600">
          当前版本不包含该功能的任何实际能力，页面仅作架构预留。
        </p>
      </div>
    </div>
  );
}
