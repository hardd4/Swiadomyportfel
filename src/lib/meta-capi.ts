import crypto from "crypto";

const PIXEL_ID = "2687461501639854";
const CAPI_TOKEN = process.env.META_CAPI_TOKEN!;
const SITE_URL = "https://swiadomyportfel.pl";

export function hashEmail(email: string): string {
  return crypto.createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
}

interface UserData {
  em?: string[];
  ph?: (string | null)[];
  client_user_agent?: string;
  client_ip_address?: string;
}

interface CAPIEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  event_source_url: string;
  action_source: "website";
  user_data: UserData;
  custom_data?: {
    currency?: string;
    value?: string;
    content_name?: string;
    content_type?: string;
  };
  attribution_data?: {
    attribution_share: string;
  };
  original_event_data?: {
    event_name: string;
    event_time: number;
  };
}

async function sendCAPIEvents(events: CAPIEvent[]) {
  const body: Record<string, unknown> = { data: events, access_token: CAPI_TOKEN };
  if (process.env.META_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_TEST_EVENT_CODE;
  }
  const res = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Meta CAPI error: ${await res.text()}`);
  }
  return res.json();
}

export async function sendInitiateCheckoutEvent(opts: {
  email: string;
  userAgent?: string;
  ip?: string;
  eventId?: string;
}) {
  const event_time = Math.floor(Date.now() / 1000);
  return sendCAPIEvents([{
    event_name: "InitiateCheckout",
    event_time,
    event_id: opts.eventId,
    event_source_url: `${SITE_URL}/#produkt`,
    action_source: "website",
    user_data: {
      em: [hashEmail(opts.email)],
      ph: [null],
      client_user_agent: opts.userAgent,
      client_ip_address: opts.ip,
    },
    custom_data: {
      currency: "PLN",
      value: "64.99",
      content_name: "ŚwiadomyPortfel",
      content_type: "product",
    },
    attribution_data: { attribution_share: "0.3" },
    original_event_data: { event_name: "InitiateCheckout", event_time },
  }]);
}

export async function sendPurchaseEvent(opts: {
  email: string;
  amount: number;
  eventId: string;
  userAgent?: string;
  ip?: string;
}) {
  const event_time = Math.floor(Date.now() / 1000);
  return sendCAPIEvents([{
    event_name: "Purchase",
    event_time,
    event_id: opts.eventId,
    event_source_url: `${SITE_URL}/dziekujemy`,
    action_source: "website",
    user_data: {
      em: [hashEmail(opts.email)],
      ph: [null],
      client_user_agent: opts.userAgent,
      client_ip_address: opts.ip,
    },
    custom_data: {
      currency: "PLN",
      value: (opts.amount / 100).toFixed(2),
      content_name: "ŚwiadomyPortfel",
      content_type: "product",
    },
    attribution_data: { attribution_share: "0.3" },
    original_event_data: { event_name: "Purchase", event_time },
  }]);
}
