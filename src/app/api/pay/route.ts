import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
const TOKEN_SECRET = process.env.TOKEN_SECRET!;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

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

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@") || email.length < 5) {
      return NextResponse.json({ error: "Podaj prawidłowy adres email" }, { status: 400 });
    }

    const token = generateToken(email);

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("customer_email", email);
    params.append("success_url", `${SITE_URL}/dziekujemy?token=${token}`);
    params.append("cancel_url", `${SITE_URL}/#produkt`);
    params.append("metadata[email]", email);
    params.append("allow_promotion_codes", "true");
    params.append("billing_address_collection", "required");
    params.append("line_items[0][price_data][currency]", "pln");
    params.append("line_items[0][price_data][product_data][name]", "ŚwiadomyPortfel");
    params.append("line_items[0][price_data][product_data][description]", "Sprawdzony system kontroli wydatków i zakupów impulsywnych");
    params.append("line_items[0][price_data][unit_amount]", "6499");
    params.append("line_items[0][quantity]", "1");
    params.append("custom_fields[0][key]", "fullname");
    params.append("custom_fields[0][label][type]", "custom");
    params.append("custom_fields[0][label][custom]", "Imię i nazwisko");
    params.append("custom_fields[0][type]", "text");
    params.append("custom_fields[0][optional]", "false");
    params.append("custom_fields[1][key]", "nip");
    params.append("custom_fields[1][label][type]", "custom");
    params.append("custom_fields[1][label][custom]", "NIP (opcjonalnie, do faktury)");
    params.append("custom_fields[1][type]", "text");
    params.append("custom_fields[1][optional]", "true");

    if (process.env.STRIPE_PRICE_ID) {
      params.delete("line_items[0][price_data][currency]");
      params.delete("line_items[0][price_data][product_data][name]");
      params.delete("line_items[0][price_data][product_data][description]");
      params.delete("line_items[0][price_data][unit_amount]");
      params.set("line_items[0][price]", process.env.STRIPE_PRICE_ID);
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json() as { url?: string; error?: { message: string } };

    if (!response.ok) {
      console.error("Stripe error:", JSON.stringify(data));
      return NextResponse.json({ error: data.error?.message || "Błąd Stripe" }, { status: 500 });
    }

    return NextResponse.json({ url: data.url });
  } catch (err: unknown) {
    console.error("Payment error:", err);
    return NextResponse.json({ error: "Błąd podczas tworzenia sesji płatności" }, { status: 500 });
  }
}
