"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Square,
  SendHorizonal,
  Trash2,
  Download,
  Sparkles,
} from "lucide-react";
import { actions, useAppState } from "@/lib/store";
import { useChat } from "@/hooks/useChat";
import { takePendingDraft, takePendingPrompt } from "@/lib/intake";
import { MessageBubble } from "./MessageBubble";
import { ConfigWarning } from "./ConfigWarning";

interface ConfigStatus {
  configured: boolean;
}

const SUGGESTIONS = [
  { title: "解释概念", prompt: "用通俗的语言解释一下什么是 RAG（检索增强生成）" },
  { title: "写代码", prompt: "用 TypeScript 写一个防抖函数，并附上使用示例" },
  { title: "改文案", prompt: "帮我把这段话改得更专业：我们的产品很好用，大家都喜欢" },
  { title: "做计划", prompt: "帮我制定一份 30 天学习 Next.js 的计划" },
];

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function ChatView() {
  const { conversations, currentId } = useAppState();
  const conversation = conversations.find((c) => c.id === currentId);
  const messages = useMemo(() => conversation?.messages ?? [], [conversation]);

  const { streaming, send, regenerate, stop } = useChat();

  const [input, setInput] = useState("");
  const [configStatus, setConfigStatus] = useState<ConfigStatus | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const stickToBottom = useRef(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 查询服务端配置状态
  useEffect(() => {
    fetch("/api/config")
      .then((r) => r.json())
      .then(setConfigStatus)
      .catch(() => setConfigStatus({ configured: false }));
  }, []);

  // 首页/创作助手带入的一次性指令
  useEffect(() => {
    const pendingPrompt = takePendingPrompt();
    if (pendingPrompt) {
      send(pendingPrompt);
      return;
    }
    const pendingDraft = takePendingDraft();
    if (pendingDraft) {
      setInput(pendingDraft);
      requestAnimationFrame(() => textareaRef.current?.focus());
    }
  }, [send]);

  // 自动滚动：仅在用户贴底时跟随
  useEffect(() => {
    const el = scrollRef.current;
    if (el && stickToBottom.current) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, streaming]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    stickToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 90;
  };

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const handleSubmit = () => {
    if (!input.trim() || streaming) return;
    send(input);
    setInput("");
    requestAnimationFrame(() => {
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    });
  };

  const handleClear = () => {
    if (!currentId || messages.length === 0) return;
    if (window.confirm("确定清空当前对话的全部消息吗？此操作不可恢复。")) {
      actions.clearMessages(currentId);
    }
  };

  const handleExport = () => {
    if (!conversation || messages.length === 0) return;
    const body = messages
      .map((m) => `${m.role === "user" ? "【用户】" : "【AI】"}\n${m.content}`)
      .join("\n\n");
    const text = [
      "AI Space 对话导出",
      `标题：${conversation.title}`,
      `时间：${new Date().toLocaleString()}`,
      "=".repeat(40),
      "",
      body,
    ].join("\n");
    downloadText(`${conversation.title || "对话"}.txt`, text);
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="flex h-full flex-col">
      {/* 对话工具行 */}
      <div className="flex h-11 shrink-0 items-center gap-2 border-b border-white/[0.05] px-4 sm:px-6">
        <span className="truncate text-[13px] text-slate-400">
          {hasMessages ? conversation?.title : "开始一段新对话"}
        </span>
        <div className="ml-auto flex items-center gap-1">
          <button
            className="icon-btn"
            onClick={handleExport}
            disabled={!hasMessages}
            title="导出为文本"
          >
            <Download size={15} />
          </button>
          <button
            className="icon-btn"
            onClick={handleClear}
            disabled={!hasMessages}
            title="清空对话"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* 消息区域 */}
      <div ref={scrollRef} onScroll={handleScroll} className="min-h-0 flex-1 overflow-y-auto">
        {configStatus && !configStatus.configured && <ConfigWarning />}

        {hasMessages ? (
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
            {messages.map((m, i) => (
              <MessageBubble
                key={m.id}
                message={m}
                streaming={streaming}
                isLast={i === messages.length - 1}
                onRegenerate={regenerate}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/25 ring-1 ring-white/10">
              <Sparkles className="h-6 w-6 text-cyan-300" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-white">
              有什么可以帮你？
            </h2>
            <p className="mt-2 text-[13px] text-slate-500">
              输入问题开始对话，或选择以下任务
            </p>
            <div className="mt-7 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.title}
                  onClick={() => send(s.prompt)}
                  disabled={streaming}
                  className="glass-soft rounded-xl px-4 py-3 text-left transition hover:bg-white/[0.07] disabled:opacity-40"
                >
                  <p className="text-[13px] font-medium text-slate-200">
                    {s.title}
                  </p>
                  <p className="mt-0.5 truncate text-[12px] text-slate-500">
                    {s.prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 输入区域 */}
      <div className="shrink-0 border-t border-white/[0.06] bg-navy-950/50 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex w-full max-w-3xl items-end gap-2.5">
          <div className="glass flex flex-1 items-end rounded-xl px-3.5 py-2">
            <textarea
              ref={textareaRef}
              value={input}
              rows={1}
              onChange={(e) => {
                setInput(e.target.value);
                autoResize();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder={streaming ? "AI 正在回复…" : "输入消息，Enter 发送，Shift+Enter 换行"}
              className="max-h-40 w-full resize-none bg-transparent text-[14px] leading-relaxed text-slate-100 placeholder:text-slate-600 focus:outline-none"
            />
          </div>

          {streaming ? (
            <button
              onClick={stop}
              className="btn-ghost h-11 w-11 shrink-0 rounded-xl p-0"
              title="停止生成"
              aria-label="停止生成"
            >
              <Square size={15} className="fill-current" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="btn-primary h-11 w-11 shrink-0 rounded-xl p-0"
              title="发送"
              aria-label="发送消息"
            >
              <SendHorizonal size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
