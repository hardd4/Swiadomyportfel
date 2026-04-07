import crypto from "crypto";

const PIXEL_ID = "2687461501639854";
const CAPI_TOKEN = process.env.META_CAPI_TOKEN!;

function hash(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

interface CAPIEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  user_data: {
    em?: string;
    client_ip_address?: string;
    client_user_agent?: string;
  };
  custom_data?: {
    currency?: string;
    value?: number;
    content_name?: string;
    content_type?: string;
  };
  action_source: string;
}

export async function sendCAPIEvent(event: CAPIEvent) {
  const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

  const body = {
    data: [event],
    access_token: CAPI_TOKEN,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Meta CAPI error: ${err}`);
  }

  return res.json();
}

export async function sendPurchaseEvent(email: string, amount: number, eventId: string) {
  return sendCAPIEvent({
    event_name: "Purchase",
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    user_data: {
      em: hash(email),
    },
    custom_data: {
      currency: "PLN",
      value: amount / 100,
      content_name: "ŚwiadomyPortfel",
      content_type: "product",
    },
  });
}
