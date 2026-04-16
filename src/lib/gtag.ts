declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_ID = "G-HJY63V312P";

export function gtagEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function gtagPurchase(transactionId: string, value: number) {
  gtagEvent("purchase", {
    transaction_id: transactionId,
    value,
    currency: "PLN",
    items: [{
      item_id: "swiadomyportfel",
      item_name: "ŚwiadomyPortfel",
      price: value,
      quantity: 1,
    }],
  });
}

export function gtagBeginCheckout() {
  gtagEvent("begin_checkout", {
    currency: "PLN",
    value: 64.99,
    items: [{
      item_id: "swiadomyportfel",
      item_name: "ŚwiadomyPortfel",
      price: 64.99,
      quantity: 1,
    }],
  });
}

export function gtagViewItem() {
  gtagEvent("view_item", {
    currency: "PLN",
    value: 64.99,
    items: [{
      item_id: "swiadomyportfel",
      item_name: "ŚwiadomyPortfel",
      price: 64.99,
      quantity: 1,
    }],
  });
}
