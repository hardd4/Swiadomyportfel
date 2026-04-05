import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;
const TOKEN_SECRET = process.env.TOKEN_SECRET!;

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

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ valid: false, error: "Brak session_id" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      {
        headers: {
          Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ valid: false, error: "Nie znaleziono sesji" }, { status: 404 });
    }

    const session = await response.json() as {
      payment_status: string;
      customer_email: string | null;
      metadata?: { email?: string };
    };

    if (session.payment_status !== "paid") {
      return NextResponse.json({ valid: false, error: "Płatność niezrealizowana" }, { status: 403 });
    }

    const email = session.customer_email || session.metadata?.email || "unknown";
    const token = generateToken(email);

    return NextResponse.json({ valid: true, token });
  } catch (err) {
    console.error("verify-session error:", err);
    return NextResponse.json({ valid: false, error: "Błąd weryfikacji" }, { status: 500 });
  }
}
