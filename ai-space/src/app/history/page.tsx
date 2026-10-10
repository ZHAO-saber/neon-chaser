"use client";

import { useRouter } from "next/navigation";
import { History, Trash2, MessageSquareText } from "lucide-react";
import { actions, useAppState } from "@/lib/store";
import type { Conversation } from "@/lib/types";

function formatTime(ts: number): string {
  return new Date(ts).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function HistoryItem({ conv }: { conv: Conversation }) {
  const router = useRouter();

  const open = () => {
    actions.selectConversation(conv.id);
    router.push("/chat");
  };

  const remove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`确定删除对话「${conv.title}」吗？此操作不可恢复。`)) {
      actions.deleteConversation(conv.id);
    }
  };

  return (
    <div
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="glass group flex w-full cursor-pointer items-center gap-3.5 rounded-xl px-4 py-3.5 text-left transition hover:border-white/[0.12] hover:bg-white/[0.05]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-slate-400">
        <MessageSquareText size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14px] font-medium text-slate-100">
          {conv.title}
        </span>
        <span className="mt-0.5 block text-[12px] text-slate-500">
          {conv.messages.length} 条消息 · {formatTime(conv.updatedAt)}
        </span>
      </span>
      <button
        onClick={remove}
        className="icon-btn opacity-0 transition group-hover:opacity-100"
        aria-label="删除对话"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

export default function HistoryPage() {
  const { conversations } = useAppState();
  const sorted = [...conversations].sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <History size={18} className="text-cyan-300" />
          历史对话
        </h2>
        <p className="mt-1.5 text-[13px] text-slate-500">
          记录保存在当前浏览器的 localStorage 中，不会上传到服务器。
        </p>

        {sorted.length > 0 ? (
          <div className="mt-6 flex flex-col gap-2.5">
            {sorted.map((c) => (
              <HistoryItem key={c.id} conv={c} />
            ))}
          </div>
        ) : (
          <div className="mt-14 flex flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/[0.07]">
              <History size={20} className="text-slate-600" />
            </span>
            <p className="mt-4 text-[13px] text-slate-500">还没有历史对话</p>
          </div>
        )}
      </div>
    </div>
  );
}
