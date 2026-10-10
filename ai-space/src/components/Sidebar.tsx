"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageSquareText,
  PenLine,
  Image as ImageIcon,
  FileSearch,
  History,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/chat", label: "AI 对话", icon: MessageSquareText },
  { href: "/create", label: "创作助手", icon: PenLine },
  { href: "/image", label: "图片生成", icon: ImageIcon },
  { href: "/files", label: "文件分析", icon: FileSearch },
  { href: "/history", label: "历史对话", icon: History },
  { href: "/settings", label: "设置", icon: Settings },
];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 px-1">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-glow">
        <Sparkles className="text-white" size={18} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-wide text-white">
          AI Space
        </span>
        <span className="mt-1 text-[11px] text-slate-500">智能创作空间</span>
      </span>
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="mt-7 flex flex-col gap-1">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
              active
                ? "bg-white/[0.07] font-medium text-white"
                : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
            }`}
          >
            {active && (
              <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />
            )}
            <Icon
              size={17}
              className={active ? "text-cyan-300" : "text-slate-500 group-hover:text-slate-300"}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* 移动端遮罩 */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/[0.06] bg-navy-900/95 px-4 py-5 backdrop-blur-xl transition-transform duration-300 md:static md:z-auto md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Brand />
          <button
            className="icon-btn md:hidden"
            onClick={onClose}
            aria-label="关闭导航"
          >
            <X size={18} />
          </button>
        </div>

        <NavList onNavigate={onClose} />

        <div className="mt-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
          <p className="text-xs font-medium text-slate-300">本地运行模式</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
            对话记录仅保存在当前浏览器，模型密钥通过服务端环境变量注入。
          </p>
        </div>
      </aside>
    </>
  );
}
