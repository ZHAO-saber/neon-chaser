"use client";

import { useCallback, useRef, useState } from "react";
import { actions, useAppState } from "@/lib/store";
import type { ChatMessage } from "@/lib/types";

function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function readError(res: Response): Promise<string> {
  try {
    const data = await res.json();
    const msg = data?.error?.message;
    if (typeof msg === "string") return msg;
  } catch {
    /* 非 JSON */
  }
  return `请求失败（HTTP ${res.status}）`;
}

/** 解析 SSE 流，逐块回调 */
async function pumpSSE(
  res: Response,
  onChunk: (chunk: string) => void
): Promise<void> {
  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const raw of lines) {
      const line = raw.trim();
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (data === "[DONE]") return;
      try {
        const json = JSON.parse(data);
        const delta: unknown = json?.choices?.[0]?.delta?.content;
        if (typeof delta === "string") onChunk(delta);
      } catch {
        /* 忽略心跳/非法分片 */
      }
    }
  }
}

export function useChat() {
  const { currentId, selectedModel } = useAppState();
  const [streaming, setStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const runStream = useCallback(
    async (convId: string, history: { role: string; content: string }[]) => {
      const assistantId = makeId();
      const placeholder: ChatMessage = {
        id: assistantId,
        role: "assistant",
        content: "",
        createdAt: Date.now(),
      };
      actions.addMessage(convId, placeholder);

      const controller = new AbortController();
      abortRef.current = controller;
      setStreaming(true);

      const failMessage = (text: string) => {
        const conv = actions.getConversation(convId);
        const msg = conv?.messages.find((m) => m.id === assistantId);
        if (msg && msg.content) {
          actions.patchMessage(convId, assistantId, {
            error: true,
            content: `${msg.content}\n\n---\n\n${text}`,
          });
        } else {
          actions.patchMessage(convId, assistantId, {
            error: true,
            content: text,
          });
        }
      };

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history,
            model: selectedModel || undefined,
          }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const detail = await readError(res);
          failMessage(`**请求失败**\n\n${detail}`);
          return;
        }

        await pumpSSE(res, (chunk) =>
          actions.appendChunk(convId, assistantId, chunk)
        );

        const conv = actions.getConversation(convId);
        const msg = conv?.messages.find((m) => m.id === assistantId);
        if (msg && !msg.content) {
          actions.patchMessage(convId, assistantId, {
            error: true,
            content:
              "**模型未返回有效内容**\n\n可能原因：模型 ID 不存在、账号无权限或上游服务异常。请更换模型后重试。",
          });
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          // 用户主动停止：保留已生成内容，不标记错误
        } else {
          failMessage(
            `**网络异常**\n\n无法完成请求：${(err as Error).message}。请检查网络后重试。`
          );
        }
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [selectedModel]
  );

  const send = useCallback(
    (text: string) => {
      const content = text.trim();
      if (!content || streaming) return;

      const convId = currentId ?? actions.newConversation();
      const userMsg: ChatMessage = {
        id: makeId(),
        role: "user",
        content,
        createdAt: Date.now(),
      };
      actions.addMessage(convId, userMsg);

      const conv = actions.getConversation(convId);
      const history = (conv?.messages ?? [])
        .filter((m) => !m.error)
        .map((m) => ({ role: m.role, content: m.content }));

      void runStream(convId, history);
    },
    [currentId, streaming, runStream]
  );

  const regenerate = useCallback(() => {
    if (streaming || !currentId) return;
    const conv = actions.getConversation(currentId);
    if (!conv) return;
    const lastUser = [...conv.messages].reverse().find((m) => m.role === "user");
    if (!lastUser) return;

    actions.truncateAfter(currentId, lastUser.id);
    const updated = actions.getConversation(currentId);
    const history = (updated?.messages ?? [])
      .filter((m) => !m.error)
      .map((m) => ({ role: m.role, content: m.content }));

    void runStream(currentId, history);
  }, [streaming, currentId, runStream]);

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  return { streaming, send, regenerate, stop };
}
