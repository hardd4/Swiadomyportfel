export const PIXEL_ID = "2687461501639854";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export function fbqEvent(event: string, params?: Record<string, unknown>, eventId?: string) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (eventId) {
      window.fbq("track", event, params, { eventID: eventId });
    } else {
      window.fbq("track", event, params);
    }
  }
}
