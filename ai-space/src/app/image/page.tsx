"use client";

import { Image as ImageIcon } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function ImagePage() {
  return (
    <PlaceholderPage
      icon={ImageIcon}
      title="图片生成 · 即将上线"
      desc="计划对接兼容 OpenAI Images 协议的图像生成服务，所有请求继续通过服务端路由代理，密钥不下发浏览器。"
      plans={[
        {
          title: "新增 /api/image 服务端路由",
          desc: "读取 AI_API_KEY / AI_BASE_URL，向 {BASE_URL}/images/generations 发起请求，服务商不兼容时在服务层适配。",
        },
        {
          title: "参数化生成面板",
          desc: "支持提示词、尺寸、生成数量、风格等参数，提供生成中状态与失败重试。",
        },
        {
          title: "生成历史本地保存",
          desc: "生成记录与图片地址通过 localStorage 管理，刷新后可查看；不做服务端数据库存储。",
        },
      ]}
    />
  );
}
