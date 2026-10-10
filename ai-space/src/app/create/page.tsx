"use client";

import { useRouter } from "next/navigation";
import {
  PenLine,
  WandSparkles,
  Megaphone,
  Mail,
  Newspaper,
  MessageCircle,
  UserCog,
  ListChecks,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { setPendingDraft } from "@/lib/intake";

interface Template {
  title: string;
  desc: string;
  icon: LucideIcon;
  prompt: string;
}

const COPY_TEMPLATES: Template[] = [
  {
    title: "产品发布文案",
    desc: "标题 + 正文 + 社媒短版",
    icon: Megaphone,
    prompt:
      "请帮我撰写一份新产品的发布文案。\n\n产品名称：\n目标用户：\n核心卖点（至少 3 条）：\n\n要求：语气专业且有感染力，输出包含「主标题 + 发布正文（300 字内）+ 适合社交媒体发布的短版（80 字内）」三个部分。",
  },
  {
    title: "公众号推文大纲",
    desc: "结构化长文框架",
    icon: Newspaper,
    prompt:
      "我要写一篇微信公众号文章，请帮我产出详细大纲。\n\n文章主题：\n目标读者：\n希望读者读完后的行动：\n\n要求：给出吸引人的标题备选 3 个、开头钩子、3-5 个段落小节（每节附要点）、结尾引导，并说明各部分的写作注意事项。",
  },
  {
    title: "营销邮件",
    desc: "高打开率邮件写法",
    icon: Mail,
    prompt:
      "请帮我写一封营销邮件。\n\n收件人画像：\n推广的产品/活动：\n希望对方采取的行动：\n\n要求：包含 3 个邮件主题备选（突出价值或紧迫感）、称呼、简短正文（分段清晰）、明确的行动号召与落款，语气克制不夸张。",
  },
  {
    title: "社媒短内容",
    desc: "小红书 / 动态风格",
    icon: MessageCircle,
    prompt:
      "请帮我写一条社交媒体短内容。\n\n主题：\n平台（小红书 / 微博等）：\n目标（种草 / 通知 / 互动）：\n\n要求：开头一句话抓住注意力，正文分段易读，结尾设置互动问题，附带 5 个话题标签。",
  },
];

const PROMPT_TEMPLATES: Template[] = [
  {
    title: "通用提示词优化",
    desc: "模糊想法 → 高质量提示词",
    icon: WandSparkles,
    prompt:
      "你是一位提示词工程专家。请优化我提供的原始提示词，按以下结构重写：\n1. 角色设定（让模型明确身份）\n2. 任务目标（具体、可衡量）\n3. 必要的上下文与输入信息\n4. 输出格式与约束\n5. 需要澄清的关键假设\n\n重写后请用表格说明你做了哪些优化以及原因。\n\n我的原始提示词是：\n【在这里粘贴你的原始提示词】",
  },
  {
    title: "角色扮演增强",
    desc: "让模型进入专业身份",
    icon: UserCog,
    prompt:
      "请帮我把需求包装成一个「角色扮演」式提示词。我的需求是：\n【描述你希望 AI 扮演的专家角色与要完成的任务】\n\n要求：明确角色背景与专业能力、对话风格、任务边界、输出格式，并给出开场示例，使模型一上来就进入状态。",
  },
  {
    title: "结构化输出约束",
    desc: "固定格式便于程序使用",
    icon: ListChecks,
    prompt:
      "我需要让模型按固定结构输出，便于后续处理。任务描述：\n【描述任务】\n\n请帮我设计提示词，要求：\n- 明确输出为 JSON（或 Markdown 表格），给出字段定义与示例\n- 规定空值处理、字段顺序与语言\n- 加入「若信息不足如何处理」的规则\n并给出一个完整的输出示例。",
  },
];

function TemplateCard({ t }: { t: Template }) {
  const router = useRouter();
  const Icon = t.icon;

  return (
    <button
      onClick={() => {
        setPendingDraft(t.prompt);
        router.push("/chat");
      }}
      className="glass group flex items-start gap-3.5 rounded-2xl p-4 text-left transition hover:-translate-y-0.5 hover:border-white/[0.12]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400/15 to-cyan-500/10 text-violet-300 ring-1 ring-white/10">
        <Icon size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-[14px] font-medium text-slate-100">
          {t.title}
        </span>
        <span className="mt-0.5 block text-[12px] text-slate-500">{t.desc}</span>
      </span>
      <ArrowRight
        size={15}
        className="mt-1 shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
      />
    </button>
  );
}

export default function CreatePage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <PenLine size={18} className="text-cyan-300" />
          创作助手
        </h2>
        <p className="mt-1.5 text-[13px] text-slate-500">
          选择模板后会进入对话页，模板内容自动填入输入框，你补充信息后即可发送。
        </p>

        <section className="mt-8">
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-500">
            文案创作
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {COPY_TEMPLATES.map((t) => (
              <TemplateCard key={t.title} t={t} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-500">
            提示词优化
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROMPT_TEMPLATES.map((t) => (
              <TemplateCard key={t.title} t={t} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
