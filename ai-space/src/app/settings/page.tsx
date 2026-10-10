"use client";

import { useEffect, useState } from "react";
import {
  Settings as SettingsIcon,
  CheckCircle2,
  XCircle,
  Database,
  Download,
  Trash2,
  Info,
} from "lucide-react";
import { actions, useAppState } from "@/lib/store";

interface ConfigStatus {
  configured: boolean;
  hasApiKey: boolean;
  hasBaseUrl: boolean;
  hasModel: boolean;
  model: string | null;
  baseUrlHost: string | null;
}

function StatusRow({ ok, label, value }: { ok: boolean; label: string; value?: string | null }) {
  return (
    <div className="flex items-center gap-2.5 py-2">
      {ok ? (
        <CheckCircle2 size={15} className="shrink-0 text-emerald-400" />
      ) : (
        <XCircle size={15} className="shrink-0 text-rose-400" />
      )}
      <span className="text-[13px] text-slate-300">{label}</span>
      {value && (
        <span className="ml-auto truncate text-[12px] text-slate-500">{value}</span>
      )}
    </div>
  );
}

const ENV_GUIDE = `# 1. 在项目根目录复制环境变量模板
cp .env.example .env.local

# 2. 编辑 .env.local，填入三项配置
AI_API_KEY=sk-你的真实密钥
AI_BASE_URL=https://api.openai.com/v1
AI_MODEL=gpt-4o-mini

# 3. 保存后重启开发服务器（Ctrl+C 后重新运行）
npm run dev`;

export default function SettingsPage() {
  const { conversations } = useAppState();
  const [status, setStatus] = useState<ConfigStatus | null>(null);

  useEffect(() => {
    fetch("/api/config")
      .then((r) => r.json())
      .then(setStatus)
      .catch(() => null);
  }, []);

  const exportAll = () => {
    const blob = new Blob([JSON.stringify(conversations, null, 2)], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-space-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    if (conversations.length === 0) return;
    if (
      window.confirm(
        `确定删除本地全部 ${conversations.length} 个对话吗？此操作不可恢复，且不影响服务端配置。`
      )
    ) {
      actions.clearAll();
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <SettingsIcon size={18} className="text-cyan-300" />
          设置
        </h2>

        {/* 服务连接状态 */}
        <section className="glass mt-6 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-medium text-slate-100">模型服务连接</h3>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] ${
                status?.configured
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-amber-400/10 text-amber-300"
              }`}
            >
              {status === null ? "检测中…" : status.configured ? "已就绪" : "未配置"}
            </span>
          </div>
          <div className="mt-2 divide-y divide-white/[0.05]">
            <StatusRow ok={!!status?.hasApiKey} label="AI_API_KEY" />
            <StatusRow ok={!!status?.hasBaseUrl} label="AI_BASE_URL" value={status?.baseUrlHost} />
            <StatusRow ok={!!status?.hasModel} label="AI_MODEL" value={status?.model} />
          </div>
        </section>

        {/* 配置指引 */}
        <section className="glass mt-4 rounded-2xl p-5">
          <h3 className="text-[14px] font-medium text-slate-100">配置指引</h3>
          <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
            密钥仅在服务端读取，浏览器端只能看到上述状态，无法接触真实 Key。
          </p>
          <div className="codeblock mt-3">
            <pre>
              <code>{ENV_GUIDE}</code>
            </pre>
          </div>
          <p className="mt-3 flex gap-1.5 text-[12px] text-slate-500">
            <Info size={13} className="mt-0.5 shrink-0 text-cyan-300" />
            使用第三方兼容网关时，AI_BASE_URL 填写网关根地址，模型 ID 以服务商文档为准。
          </p>
        </section>

        {/* 本地数据管理 */}
        <section className="glass mt-4 rounded-2xl p-5">
          <h3 className="flex items-center gap-2 text-[14px] font-medium text-slate-100">
            <Database size={15} className="text-violet-300" />
            本地数据
          </h3>
          <p className="mt-1 text-[12.5px] text-slate-500">
            当前浏览器共保存 {conversations.length} 个对话。
          </p>
          <div className="mt-4 flex gap-2.5">
            <button
              onClick={exportAll}
              disabled={conversations.length === 0}
              className="btn-ghost"
            >
              <Download size={14} />
              导出全部 (JSON)
            </button>
            <button
              onClick={clearAll}
              disabled={conversations.length === 0}
              className="btn-ghost hover:!border-rose-400/30 hover:!text-rose-300"
            >
              <Trash2 size={14} />
              清空全部
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
