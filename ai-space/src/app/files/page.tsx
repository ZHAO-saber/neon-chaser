"use client";

import { FileSearch } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function FilesPage() {
  return (
    <PlaceholderPage
      icon={FileSearch}
      title="文件分析 · 即将上线"
      desc="计划支持上传文本与文档，由模型完成摘要、要点提取与基于内容的问答。文件内容不会在浏览器外持久化。"
      plans={[
        {
          title: "新增 /api/files/analyze 路由",
          desc: "服务端接收文件、提取文本后拼接为模型上下文，统一走 Chat Completions，复用现有服务层。",
        },
        {
          title: "前端上传与校验",
          desc: "拖拽上传、格式与大小限制、解析进度、失败提示；敏感文件由用户自行评估后上传。",
        },
        {
          title: "文档问答模式",
          desc: "基于文档内容进行多轮提问，区分原文展示与模型生成内容，避免答案脱离材料。",
        },
      ]}
    />
  );
}
