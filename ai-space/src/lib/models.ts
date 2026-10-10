/**
 * 模型预设。这里不假设任何模型一定存在——
 * 实际可用性取决于服务端 AI_BASE_URL 指向的服务商账号。
 * 选择「服务端默认」时，请求不携带 model，由服务端 AI_MODEL 决定。
 */
export interface ModelPreset {
  id: string;
  label: string;
  note: string;
}

export const MODEL_PRESETS: ModelPreset[] = [
  { id: "", label: "服务端默认", note: "使用环境变量 AI_MODEL" },
  { id: "gpt-4o-mini", label: "GPT-4o mini", note: "OpenAI · 快速经济" },
  { id: "gpt-4o", label: "GPT-4o", note: "OpenAI · 综合能力强" },
  { id: "gpt-4.1-mini", label: "GPT-4.1 mini", note: "OpenAI · 长上下文" },
  { id: "deepseek-chat", label: "DeepSeek Chat", note: "DeepSeek · 通用对话" },
  { id: "claude-3-5-sonnet-latest", label: "Claude 3.5 Sonnet", note: "Anthropic · 长文写作" },
];

export function getModelLabel(id: string): string {
  return MODEL_PRESETS.find((m) => m.id === id)?.label ?? (id || "服务端默认");
}
