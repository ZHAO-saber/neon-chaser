"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* 剪贴板不可用 */
    }
  };

  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <span className="text-[11px] text-slate-500">{lang || "text"}</span>
        <button
          onClick={copy}
          className="flex items-center gap-1 text-[11px] text-slate-400 transition hover:text-slate-200"
        >
          {copied ? <Check size={12} className="text-cyan-300" /> : <Copy size={12} />}
          {copied ? "已复制" : "复制"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children }: CodeProps) {
            const text = String(children ?? "").replace(/\n$/, "");
            const lang = /language-([\w-]+)/.exec(className || "")?.[1] ?? "";
            if (inline) return <code className={className}>{children}</code>;
            return <CodeBlock lang={lang} code={text} />;
          },
          a({ children, href }) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
