/**
 * 对话代理路由：浏览器只与本路由通信，API Key 保留在服务端。
 * 请求/响应均为流式（SSE），客户端断开时自动中止上游请求。
 */
import { NextResponse, type NextRequest } from "next/server";
import {
  AIConfigError,
  AIProviderError,
  createChatCompletionStream,
} from "@/lib/ai";
import type { Role } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_CONTENT_LENGTH = 50_000;
const REQUEST_TIMEOUT_MS = Number(process.env.AI_TIMEOUT_MS ?? 120_000);

function jsonErr(status: number, code: string, message: string) {
  return NextResponse.json({ error: { code, message } }, { status });
}

function sanitizeMessages(
  raw: unknown
): { role: Role; content: string }[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 100) return null;
  const allowed = new Set(["system", "user", "assistant"]);
  const out: { role: Role; content: string }[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") return null;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (typeof role !== "string" || !allowed.has(role)) return null;
    if (typeof content !== "string" || !content.trim()) return null;
    if (content.length > MAX_CONTENT_LENGTH) return null;
    out.push({ role: role as Role, content });
  }

  // 最后一条必须是用户输入
  if (out[out.length - 1].role !== "user") return null;
  return out;
}

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return jsonErr(400, "invalid_json", "请求体不是合法 JSON");
  }

  const messages = sanitizeMessages(
    (payload as { messages?: unknown }).messages
  );
  if (!messages) {
    return jsonErr(
      400,
      "invalid_messages",
      "messages 必须是非空数组，每条包含合法 role 与非空 content，且最后一条为 user"
    );
  }

  const rawModel = (payload as { model?: unknown }).model;
  const model =
    typeof rawModel === "string" && rawModel.length <= 120 ? rawModel : null;

  // 整体超时 + 客户端断开，任一触发即中止上游
  const timeoutSignal = AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  const signal =
    typeof AbortSignal.any === "function"
      ? AbortSignal.any([req.signal, timeoutSignal])
      : req.signal;

  try {
    const upstream = await createChatCompletionStream({
      messages,
      model,
      signal,
    });

    return new Response(upstream.body, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    if (err instanceof AIConfigError) {
      return jsonErr(503, err.code, err.message);
    }
    if (err instanceof AIProviderError) {
      return jsonErr(err.status || 502, err.code, err.message);
    }
    if ((err as Error).name === "AbortError") {
      return jsonErr(499, "aborted", "请求已中止");
    }
    // 仅记录错误类型与信息，绝不打印请求头/密钥
    console.error(
      "[ai-space] /api/chat unexpected error:",
      (err as Error).message
    );
    return jsonErr(500, "internal_error", "服务端发生未知错误");
  }
}
