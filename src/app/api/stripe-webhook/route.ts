import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import crypto from "crypto";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
const TOKEN_SECRET = process.env.TOKEN_SECRET!;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "kontakt@swiadomyportfel.pl";

function generateToken(email: string): string {
  const ts = Math.floor(Date.now() / 1000);
  const data = `${email}:${ts}`;
  const sig = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(data)
    .digest("hex")
    .slice(0, 16);
  return Buffer.from(`${data}:${sig}`).toString("base64url");
}

async function sendEmail(email: string) {
  const token = generateToken(email);
  const downloadUrl = `${SITE_URL}/api/download?token=${token}`;
  const pageUrl = `${SITE_URL}/dziekujemy?token=${token}`;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Twój zakup – ŚwiadomyPortfel",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;">
        <h1 style="font-size:24px;margin-bottom:8px;">Dziękuję za zakup!</h1>
        <p style="font-size:16px;color:#555;margin-bottom:24px;">Twój materiał jest gotowy do pobrania.</p>

        <div style="background:#fff7ed;border:2px solid #f97316;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
          <p style="font-size:16px;margin:0 0 16px;"><strong>Pobierz swój materiał:</strong></p>
          <a href="${downloadUrl}" style="display:inline-block;background:#f97316;color:#fff;padding:12px 28px;font-size:16px;font-weight:bold;text-decoration:none;border-radius:8px;">POBIERZ PDF</a>
        </div>

        <p style="font-size:14px;color:#555;">Możesz też przejść na stronę z pobraniem:</p>
        <p style="margin-bottom:24px;"><a href="${pageUrl}" style="color:#f97316;">${pageUrl}</a></p>

        <p style="font-size:14px;color:#555;">Link ważny 7 dni. Jeśli wygaśnie — napisz, wyślemy nowy.</p>

        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0;">
        <p style="font-size:12px;color:#999;">kontakt@swiadomyportfel.pl</p>
      </div>
    `,
  });
}

async function createInvoice(session: Stripe.Checkout.Session) {
  const FAKTUROWNIA_TOKEN = process.env.FAKTUROWNIA_TOKEN;
  const FAKTUROWNIA_DOMAIN = process.env.FAKTUROWNIA_DOMAIN;
  if (!FAKTUROWNIA_TOKEN || !FAKTUROWNIA_DOMAIN) return;

  const customFields: Record<string, string> = {};
  if (session.custom_fields) {
    for (const field of session.custom_fields) {
      customFields[field.key] = (field.text as { value?: string } | undefined)?.value || "";
    }
  }

  const email = session.customer_email || session.metadata?.email || "";
  const nip = customFields.nip || "";
  const company = customFields.company || "";
  const billingName = customFields.fullname || session.customer_details?.name || email;
  const billingAddress = (session.customer_details?.address as unknown as Record<string, string>) || {};
  const amount = session.amount_total || 6499;

  // Lookup NIP from Polish tax authority
  let gusData: { name: string; street: string; city: string; postCode: string } | null = null;
  if (nip) {
    try {
      const cleanNip = nip.replace(/[^0-9]/g, "");
      if (cleanNip.length === 10) {
        const today = new Date().toISOString().split("T")[0];
        const res = await fetch(`https://wl-api.mf.gov.pl/api/search/nip/${cleanNip}?date=${today}`);
        if (res.ok) {
          const data = await res.json();
          const subject = data.result?.subject;
          if (subject) {
            gusData = {
              name: subject.name,
              street: subject.workingAddress?.split(",")[0] || "",
              city: subject.residenceAddress?.split(",").pop()?.trim() || "",
              postCode: subject.residenceAddress?.match(/\d{2}-\d{3}/)?.[0] || "",
            };
          }
        }
      }
    } catch {
      // GUS lookup failed, continue without it
    }
  }

  const today = new Date().toISOString().split("T")[0];

  const invoice = {
    api_token: FAKTUROWNIA_TOKEN,
    invoice: {
      kind: nip ? "vat" : "normal",
      number: null,
      sell_date: today,
      issue_date: today,
      payment_type: "card",
      status: "paid",
      paid_date: today,
      buyer_name: gusData?.name || company || billingName,
      buyer_tax_no: nip || undefined,
      buyer_email: email,
      buyer_post_code: gusData?.postCode || billingAddress.postal_code || "",
      buyer_city: gusData?.city || billingAddress.city || "",
      buyer_street: gusData?.street || billingAddress.line1 || "",
      buyer_country: billingAddress.country || "PL",
      positions: [
        {
          name: "ŚwiadomyPortfel – materiał cyfrowy",
          quantity: 1,
          total_price_gross: (amount / 100).toFixed(2),
          tax: 5,
        },
      ],
    },
  };

  const apiUrl = `https://${FAKTUROWNIA_DOMAIN}.fakturownia.pl/invoices.json`;
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invoice),
  });

  if (!res.ok) throw new Error(`Fakturownia error: ${await res.text()}`);

  const data = await res.json();
  if (data.id) {
    await fetch(`https://${FAKTUROWNIA_DOMAIN}.fakturownia.pl/invoices/${data.id}/send_by_email.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_token: FAKTUROWNIA_TOKEN }),
    });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email || session.metadata?.email;

    if (email && session.payment_status === "paid") {
      try {
        await sendEmail(email);
        console.log("Email sent:", email);
      } catch (err) {
        console.error("Email failed:", err);
      }

      try {
        await createInvoice(session);
        console.log("Invoice created:", email);
      } catch (err) {
        console.error("Invoice failed:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
