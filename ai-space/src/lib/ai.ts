/**
 * AI 模型调用服务层（仅在服务端使用，禁止在客户端组件中 import）
 *
 * 设计目标：
 * - 明确区分 API Base URL / API Key / Model ID 三个配置
 * - 兼容 OpenAI 风格的 Chat Completions 接口（POST {BASE_URL}/chat/completions）
 * - 其他服务商若协议不同，只需在此文件内适配，路由层与前端无需改动
 * - 任何情况下都不打印 API Key
 */
import type { Role } from "./types";

export class AIConfigError extends Error {
  code: string;
  constructor(message: string, code = "not_configured") {
    super(message);
    this.name = "AIConfigError";
    this.code = code;
  }
}

export class AIProviderError extends Error {
  code: string;
  status: number;
  constructor(message: string, status: number, code = "provider_error") {
    super(message);
    this.name = "AIProviderError";
    this.code = code;
    this.status = status;
  }
}

export interface AIConfig {
  apiKey: string;
  baseUrl: string;
  model: string;
}

export function getAIConfig(): AIConfig {
  return {
    apiKey: (process.env.AI_API_KEY ?? "").trim(),
    baseUrl: (process.env.AI_BASE_URL ?? "").trim(),
    model: (process.env.AI_MODEL ?? "").trim(),
  };
}

export function safeHost(baseUrl: string): string {
  try {
    return new URL(baseUrl).host;
  } catch {
    return "";
  }
}

export interface StreamChatParams {
  messages: { role: Role; content: string }[];
  /** 前端选择的模型；为空时回退到服务端 AI_MODEL */
  model?: string | null;
  signal?: AbortSignal;
}

function joinUrl(base: string, path: string): string {
  return base.replace(/\/+$/, "") + path;
}

function mapStatus(status: number): string {
  if (status === 401 || status === 403) return "unauthorized";
  if (status === 404) return "not_found";
  if (status === 429) return "rate_limited";
  if (status >= 500) return "upstream_error";
  return "provider_error";
}

function extractErrorMessage(raw: string, status: number): string {
  try {
    const parsed = JSON.parse(raw);
    const msg = parsed?.error?.message ?? parsed?.message;
    if (typeof msg === "string" && msg.trim()) return msg.slice(0, 500);
  } catch {
    /* 非 JSON 响应，忽略 */
  }
  const hint: Record<number, string> = {
    401: "鉴权失败：请检查 AI_API_KEY 是否正确、是否已过期",
    403: "无访问权限：当前 Key 可能未开通该模型/接口",
    404: "接口或模型不存在：请检查 AI_BASE_URL 与模型 ID",
    429: "触发服务商限流，请稍后再试",
  };
  return hint[status] ?? `服务商返回错误（HTTP ${status}）`;
}

/**
 * 发起流式 Chat Completions 请求，返回原始上游 Response。
 * 不伪造任何回复：上游失败时抛出 AIConfigError / AIProviderError。
 */
export async function createChatCompletionStream({
  messages,
  model,
  signal,
}: StreamChatParams): Promise<Response> {
  const cfg = getAIConfig();

  if (!cfg.apiKey) {
    throw new AIConfigError("服务端未配置 AI_API_KEY", "missing_api_key");
  }
  if (!cfg.baseUrl) {
    throw new AIConfigError("服务端未配置 AI_BASE_URL", "missing_base_url");
  }

  let targetModel: string;
  try {
    new URL(cfg.baseUrl);
  } catch {
    throw new AIConfigError("AI_BASE_URL 不是合法的 URL", "invalid_base_url");
  }

  const requested = (model ?? "").trim();
  if (requested) {
    // 模型 ID 做基本字符校验，防止异常输入透传给上游
    if (!/^[\w.\-:/]{1,120}$/.test(requested)) {
      throw new AIConfigError(`非法的模型 ID：${requested}`, "invalid_model");
    }
    targetModel = requested;
  } else {
    targetModel = cfg.model;
  }
  if (!targetModel) {
    throw new AIConfigError(
      "未指定模型：服务端缺少 AI_MODEL，且前端未选择具体模型",
      "missing_model"
    );
  }

  const url = joinUrl(cfg.baseUrl, "/chat/completions");

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.apiKey}`,
        Accept: "text/event-stream",
      },
      body: JSON.stringify({
        model: targetModel,
        messages,
        stream: true,
      }),
      signal,
    });
  } catch (err) {
    if ((err as Error).name === "AbortError") throw err;
    throw new AIProviderError(
      `无法连接模型服务${cfg.baseUrl ? `（${safeHost(cfg.baseUrl)}）` : ""}，请检查 AI_BASE_URL 与网络`,
      0,
      "network_error"
    );
  }

  if (!res.ok || !res.body) {
    let detail = "";
    try {
      detail = (await res.text()).slice(0, 1000);
    } catch {
      /* 忽略读取失败 */
    }
    throw new AIProviderError(
      extractErrorMessage(detail, res.status),
      res.status,
      mapStatus(res.status)
    );
  }

  return res;
}
