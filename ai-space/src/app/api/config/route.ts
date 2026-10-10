/**
 * 配置状态查询：只返回「是否已配置」等非敏感信息，
 * 绝不返回 API Key 本身。
 */
import { NextResponse } from "next/server";
import { getAIConfig, safeHost } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cfg = getAIConfig();

  return NextResponse.json({
    configured: Boolean(cfg.apiKey && cfg.baseUrl && cfg.model),
    hasApiKey: Boolean(cfg.apiKey),
    hasBaseUrl: Boolean(cfg.baseUrl),
    hasModel: Boolean(cfg.model),
    model: cfg.model || null,
    baseUrlHost: safeHost(cfg.baseUrl) || null,
  });
}
