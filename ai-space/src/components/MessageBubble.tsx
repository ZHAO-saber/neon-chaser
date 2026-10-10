"use client";

import { useState } from "react";
import { Check, Copy, RefreshCw, Sparkles, AlertTriangle } from "lucide-react";
import type { ChatMessage } from "@/lib/types";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface Props {
  message: ChatMessage;
  streaming: boolean;
  isLast: boolean;
  onRegenerate: () => void;
}

export function MessageBubble({ message, streaming, isLast, onRegenerate }: Props) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* 忽略 */
    }
  };

  if (isUser) {
    return (
      <div className="flex animate-fade-up justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-cyan-400/15 bg-gradient-to-br from-cyan-500/12 to-violet-500/10 px-4 py-2.5 text-[14px] leading-relaxed text-slate-100 sm:max-w-[75%]">
          <span className="whitespace-pre-wrap">{message.content}</span>
        </div>
      </div>
    );
  }

  const showTyping = streaming && isLast && !message.content && !message.error;

  return (
    <div className="group flex animate-fade-up gap-3">
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ${
          message.error
            ? "bg-rose-500/15 text-rose-300 ring-rose-400/25"
            : "bg-gradient-to-br from-cyan-500/20 to-violet-600/20 text-cyan-300 ring-white/10"
        }`}
      >
        {message.error ? <AlertTriangle size={15} /> : <Sparkles size={15} />}
      </span>

      <div className="min-w-0 flex-1">
        {showTyping ? (
          <div className="flex items-center gap-1.5 py-2">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-cyan-300" />
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-violet-300" style={{ animationDelay: "0.3s" }} />
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-cyan-300" style={{ animationDelay: "0.6s" }} />
          </div>
        ) : (
          <MarkdownRenderer content={message.content} />
        )}

        {/* 操作栏：非流式生成中才显示 */}
        {!streaming && message.content && (
          <div className="mt-2 flex items-center gap-1 opacity-60 transition group-hover:opacity-100">
            <button onClick={copy} className="icon-btn h-7 w-7" title="复制回答">
              {copied ? <Check size={13} className="text-cyan-300" /> : <Copy size={13} />}
            </button>
            {isLast && (
              <button onClick={onRegenerate} className="icon-btn h-7 w-7" title="重新生成">
                <RefreshCw size={13} />
              </button>
            )}
            {message.error && (
              <button onClick={onRegenerate} className="btn-ghost ml-1 h-7 px-2.5 text-xs">
                <RefreshCw size={12} />
                重试
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
