"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, Cpu } from "lucide-react";
import { MODEL_PRESETS } from "@/lib/models";
import { actions, useAppState } from "@/lib/store";

export function ModelSelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { selectedModel, hydrated } = useAppState();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current =
    MODEL_PRESETS.find((m) => m.id === selectedModel) ??
    ({ id: selectedModel, label: selectedModel, note: "自定义模型" } as const);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="btn-ghost h-9 max-w-[180px] sm:max-w-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Cpu size={15} className="shrink-0 text-cyan-300" />
        <span className="truncate">
          {hydrated ? current.label : "加载中…"}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="glass absolute right-0 top-11 z-50 w-64 animate-fade-in rounded-xl p-1.5"
        >
          <p className="px-2.5 py-1.5 text-[11px] text-slate-500">
            选择模型（需服务商账号实际可用）
          </p>
          {MODEL_PRESETS.map((m) => {
            const active = m.id === selectedModel;
            return (
              <button
                key={m.id || "default"}
                role="option"
                aria-selected={active}
                onClick={() => {
                  actions.setModel(m.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition hover:bg-white/[0.06] ${
                  active ? "bg-white/[0.05]" : ""
                }`}
              >
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-[13px] text-slate-200">
                    {m.label}
                  </span>
                  <span className="truncate text-[11px] text-slate-500">
                    {m.note}
                  </span>
                </span>
                {active && <Check size={15} className="shrink-0 text-cyan-300" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
