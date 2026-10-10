"use client";

import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";

/**
 * 未配置模型服务时的明确提示。不伪造任何 AI 能力。
 */
export function ConfigWarning() {
  return (
    <div className="mx-4 mt-4 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 sm:mx-6">
      <ShieldAlert size={17} className="mt-0.5 shrink-0 text-amber-300" />
      <div className="min-w-0 text-[13px] leading-relaxed text-amber-100/90">
        <p className="font-medium text-amber-200">模型服务尚未配置</p>
        <p className="mt-0.5 text-amber-100/70">
          请在项目根目录创建 <code className="rounded bg-black/30 px-1.5 py-0.5 text-[12px]">.env.local</code>，
          填入 AI_API_KEY、AI_BASE_URL、AI_MODEL 后重启开发服务器。
        </p>
        <Link
          href="/settings"
          className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-amber-300 hover:text-amber-200"
        >
          查看配置指引
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
