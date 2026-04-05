import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@") || email.length < 5) {
      return NextResponse.json({ error: "Podaj prawidłowy adres email" }, { status: 400 });
    }

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("payment_method_types[]", "card");
    params.append("payment_method_types[]", "blik");
    params.append("payment_method_types[]", "p24");
    params.append("payment_method_types[]", "link");
    params.append("customer_email", email);
    params.append("success_url", `${SITE_URL}/dziekujemy?session_id={CHECKOUT_SESSION_ID}`);
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
      params.set("line_items[0][price]", process.env.STRIPE_PRICE_ID);
      params.delete("line_items[0][price_data][currency]");
      params.delete("line_items[0][price_data][product_data][name]");
      params.delete("line_items[0][price_data][product_data][description]");
      params.delete("line_items[0][price_data][unit_amount]");
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Stripe-Version": "2024-06-20",
      },
      body: params.toString(),
    });

    const data = await response.json() as { url?: string; error?: { message: string } };

    if (!response.ok) {
      console.error("Stripe error:", JSON.stringify(data));
      return NextResponse.json({ error: data.error?.message || "Błąd Stripe" }, { status: 500 });
    }

    return NextResponse.json({ url: data.url });
  } catch (err) {
    console.error("Payment error:", err);
    return NextResponse.json({ error: "Błąd podczas tworzenia sesji płatności" }, { status: 500 });
  }
}
