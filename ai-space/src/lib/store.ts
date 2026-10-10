"use client";

import { useSyncExternalStore } from "react";
import type { ChatMessage, Conversation } from "./types";

const STORAGE_KEY = "aispace:state:v1";

export interface AppState {
  conversations: Conversation[];
  currentId: string | null;
  /** "" 表示服务端默认模型 */
  selectedModel: string;
  hydrated: boolean;
}

const initialState: AppState = {
  conversations: [],
  currentId: null,
  selectedModel: "",
  hydrated: false,
};

let state: AppState = initialState;
const listeners = new Set<() => void>();
let hydrationDone = false;

function emit() {
  state = { ...state };
  listeners.forEach((l) => l());
}

function persist() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        conversations: state.conversations,
        currentId: state.currentId,
        selectedModel: state.selectedModel,
      })
    );
  } catch {
    /* 存储已满或被禁用，静默处理 */
  }
}

/** 首次订阅时（仅客户端）从 localStorage 恢复 */
function hydrate() {
  if (hydrationDone) return;
  hydrationDone = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AppState>;
      state = {
        conversations: Array.isArray(parsed.conversations)
          ? (parsed.conversations as Conversation[])
          : [],
        currentId:
          typeof parsed.currentId === "string" ? parsed.currentId : null,
        selectedModel:
          typeof parsed.selectedModel === "string" ? parsed.selectedModel : "",
        hydrated: true,
      };
      // 当前指向的会话不存在时纠正
      if (state.currentId && !state.conversations.some((c) => c.id === state.currentId)) {
        state.currentId = null;
      }
    } else {
      state = { ...state, hydrated: true };
    }
  } catch {
    state = { ...state, hydrated: true };
  }
}

function subscribe(listener: () => void) {
  hydrate();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useAppState(): AppState {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => initialState
  );
}

function mutate(next: Partial<AppState>) {
  state = { ...state, ...next };
  persist();
  emit();
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function patchConversation(
  id: string,
  updater: (conv: Conversation) => Conversation
) {
  mutate({
    conversations: state.conversations.map((c) => (c.id === id ? updater(c) : c)),
  });
}

export const actions = {
  newConversation(): string {
    const now = Date.now();
    const conv: Conversation = {
      id: newId(),
      title: "新对话",
      messages: [],
      createdAt: now,
      updatedAt: now,
    };
    mutate({
      conversations: [conv, ...state.conversations],
      currentId: conv.id,
    });
    return conv.id;
  },

  selectConversation(id: string) {
    if (state.conversations.some((c) => c.id === id)) {
      mutate({ currentId: id });
    }
  },

  deleteConversation(id: string) {
    const remaining = state.conversations.filter((c) => c.id !== id);
    mutate({
      conversations: remaining,
      currentId: state.currentId === id ? null : state.currentId,
    });
  },

  addMessage(convId: string, msg: ChatMessage) {
    patchConversation(convId, (c) => {
      const isFirstUser =
        msg.role === "user" && !c.messages.some((m) => m.role === "user");
      return {
        ...c,
        title: isFirstUser ? msg.content.slice(0, 24) : c.title,
        messages: [...c.messages, msg],
        updatedAt: Date.now(),
      };
    });
  },

  patchMessage(convId: string, msgId: string, patch: Partial<ChatMessage>) {
    patchConversation(convId, (c) => ({
      ...c,
      updatedAt: Date.now(),
      messages: c.messages.map((m) =>
        m.id === msgId ? { ...m, ...patch } : m
      ),
    }));
  },

  appendChunk(convId: string, msgId: string, chunk: string) {
    patchConversation(convId, (c) => ({
      ...c,
      updatedAt: Date.now(),
      messages: c.messages.map((m) =>
        m.id === msgId ? { ...m, content: m.content + chunk } : m
      ),
    }));
  },

  /** 删除某条用户消息之后（含可选的该用户消息之后的 AI 消息），用于重新生成 */
  truncateAfter(convId: string, userMsgId: string) {
    patchConversation(convId, (c) => {
      const idx = c.messages.findIndex((m) => m.id === userMsgId);
      if (idx === -1) return c;
      return {
        ...c,
        updatedAt: Date.now(),
        messages: c.messages.slice(0, idx + 1),
      };
    });
  },

  clearMessages(convId: string) {
    patchConversation(convId, (c) => ({
      ...c,
      title: "新对话",
      messages: [],
      updatedAt: Date.now(),
    }));
  },

  setModel(model: string) {
    mutate({ selectedModel: model });
  },

  clearAll() {
    mutate({ conversations: [], currentId: null });
  },

  getConversation(id: string | null): Conversation | undefined {
    if (!id) return undefined;
    return state.conversations.find((c) => c.id === id);
  },
};
