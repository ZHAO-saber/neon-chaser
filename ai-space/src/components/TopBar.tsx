"use client";

import { usePathname, useRouter } from "next/navigation";
import { Menu, Plus } from "lucide-react";
import { ModelSelector } from "./ModelSelector";
import { actions } from "@/lib/store";

const TITLES: Record<string, string> = {
  "/": "工作台",
  "/chat": "AI 对话",
  "/create": "创作助手",
  "/image": "图片生成",
  "/files": "文件分析",
  "/history": "历史对话",
  "/settings": "设置",
};

export function TopBar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const title = TITLES[pathname] ?? "AI Space";

  const handleNew = () => {
    actions.newConversation();
    router.push("/chat");
  };

  return (
    <header className="z-20 flex h-14 shrink-0 items-center gap-3 border-b border-white/[0.06] bg-navy-950/60 px-4 backdrop-blur-xl sm:px-6">
      <button
        className="icon-btn md:hidden"
        onClick={onOpenSidebar}
        aria-label="打开导航"
      >
        <Menu size={19} />
      </button>

      <h1 className="text-[15px] font-semibold text-slate-100">{title}</h1>

      <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
        <ModelSelector />
        <button onClick={handleNew} className="btn-primary h-9">
          <Plus size={16} />
          <span className="hidden sm:inline">新建对话</span>
        </button>

        {/* 用户区域：暂无登录体系，保留入口 */}
        <button
          className="ml-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/70 to-violet-600/70 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:brightness-110"
          aria-label="用户区域（暂未接入登录）"
          title="用户登录功能尚未接入"
        >
          Z
        </button>
      </div>
    </header>
  );
}
