/** 简单事件总线，模块间解耦通信 */

type Handler<T = unknown> = (payload: T) => void;

export class EventBus {
  private handlers = new Map<string, Set<Handler>>();

  on<T>(event: string, handler: Handler<T>): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler as Handler);
  }

  off<T>(event: string, handler: Handler<T>): void {
    this.handlers.get(event)?.delete(handler as Handler);
  }

  emit<T>(event: string, payload?: T): void {
    this.handlers.get(event)?.forEach((h) => h(payload as T));
  }
}

export const eventBus = new EventBus();
