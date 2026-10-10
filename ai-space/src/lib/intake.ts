"use client";

/**
 * 跨页面一次性指令传递（sessionStorage，关闭标签页即失效）。
 * 用于把中文内容从首页/创作助手带入聊天页，避免出现在 URL 查询串中。
 */

const PROMPT_KEY = "aispace:intake:prompt";
const DRAFT_KEY = "aispace:intake:draft";

export function setPendingPrompt(text: string) {
  try {
    sessionStorage.setItem(PROMPT_KEY, text);
  } catch {
    /* 忽略 */
  }
}

export function takePendingPrompt(): string | null {
  try {
    const v = sessionStorage.getItem(PROMPT_KEY);
    sessionStorage.removeItem(PROMPT_KEY);
    return v;
  } catch {
    return null;
  }
}

export function setPendingDraft(text: string) {
  try {
    sessionStorage.setItem(DRAFT_KEY, text);
  } catch {
    /* 忽略 */
  }
}

export function takePendingDraft(): string | null {
  try {
    const v = sessionStorage.getItem(DRAFT_KEY);
    sessionStorage.removeItem(DRAFT_KEY);
    return v;
  } catch {
    return null;
  }
}
