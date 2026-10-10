"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MessageSquareText,
  PenLine,
  WandSparkles,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import { WelcomeHero } from "@/components/WelcomeHero";
import { FeatureCard } from "@/components/FeatureCard";
import { setPendingPrompt } from "@/lib/intake";

const QUICK_PROMPTS = [
  "帮我写一份新产品的发布文案",
  "用通俗的语言解释什么是向量数据库",
  "优化我简历里的项目经历描述",
  "帮我制定一份为期一周的健身计划",
];

const FEATURES = [
  {
    href: "/chat",
    title: "AI 对话",
    desc: "多轮上下文对话，支持 Markdown 与代码高亮，回答可复制、可重新生成。",
    icon: MessageSquareText,
    tone: "cyan" as const,
  },
  {
    href: "/create?type=copy",
    title: "文案创作",
    desc: "覆盖营销、社媒、产品介绍等场景的创作模板，从草稿到成稿一步到位。",
    icon: PenLine,
    tone: "violet" as const,
  },
  {
    href: "/create?type=prompt",
    title: "提示词优化",
    desc: "把模糊想法改写为结构清晰、目标明确的高质量提示词，提升模型输出质量。",
    icon: WandSparkles,
    tone: "cyan" as const,
  },
  {
    href: "/files",
    title: "文件分析",
    desc: "文档解读与要点提炼能力规划中，将在模型接口就绪后开放。",
    icon: FileSearch,
    tone: "violet" as const,
    badge: "扩展中",
  },
];

export default function HomePage() {
  const router = useRouter();

  const goWithPrompt = (text: string) => {
    setPendingPrompt(text);
    router.push("/chat");
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* 欢迎区域 */}
        <section className="flex flex-col items-center text-center">
          <WelcomeHero />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            欢迎使用 <span className="text-gradient">AI Space</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            一个集成对话、创作与分析的智能工作空间。所有请求经服务端安全转发，
            对话记录仅保存在你的浏览器中。
          </p>

          <Link href="/chat" className="btn-primary mt-7 h-10 px-5">
            开始对话
            <ArrowRight size={16} />
          </Link>
        </section>

        {/* 常用任务快捷入口 */}
        <section className="mt-12 sm:mt-16">
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-500">
            常用任务
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {QUICK_PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => goWithPrompt(p)}
                className="glass-soft flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-[13px] text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                <span className="truncate">{p}</span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-slate-600 transition hover:text-cyan-300"
                />
              </button>
            ))}
          </div>
        </section>

        {/* 核心功能卡片 */}
        <section className="mt-12 sm:mt-16">
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-500">
            核心功能
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        <p className="mt-14 text-center text-[11px] text-slate-600">
          AI Space · 本地运行版本 · 模型输出由第三方服务商提供
        </p>
      </div>
    </div>
  );
}
