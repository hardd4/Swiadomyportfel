import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const TOKEN_SECRET = process.env.TOKEN_SECRET!;

const PRODUCT_NAME = "ŚwiadomyPortfel";
const PRODUCT_DESCRIPTION = "Sprawdzony system kontroli wydatków i zakupów impulsywnych";
const PRODUCT_PRICE = 6499; // 64.99 PLN w groszach
const VAT_RATE = 5; // ebooki w PL = 5%

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sessionParams: any = {
      mode: "payment",
      customer_email: email,
      success_url: `${SITE_URL}/dziekujemy?token=${generateToken(email)}`,
      cancel_url: `${SITE_URL}/#produkt`,
      metadata: { email },
      allow_promotion_codes: true,
      billing_address_collection: "required",
      custom_fields: [
        {
          key: "fullname",
          label: { type: "custom", custom: "Imię i nazwisko" },
          type: "text",
          optional: false,
        },
        {
          key: "nip",
          label: { type: "custom", custom: "NIP (opcjonalnie, do faktury)" },
          type: "text",
          optional: true,
        },
        {
          key: "company",
          label: { type: "custom", custom: "Nazwa firmy (opcjonalnie, do faktury)" },
          type: "text",
          optional: true,
        },
      ],
      line_items: [
        {
          price_data: {
            currency: "pln",
            product_data: {
              name: PRODUCT_NAME,
              description: PRODUCT_DESCRIPTION,
            },
            unit_amount: PRODUCT_PRICE,
          },
          quantity: 1,
        },
      ],
    };

    if (process.env.STRIPE_PRICE_ID) {
      sessionParams.line_items = [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Payment error:", err);
    return NextResponse.json({ error: "Błąd podczas tworzenia sesji płatności" }, { status: 500 });
  }
}
