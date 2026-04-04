import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const TOKEN_SECRET = process.env.TOKEN_SECRET!;
const TOKEN_MAX_AGE = 7 * 24 * 60 * 60;

const rateMap = new Map<string, { start: number; count: number }>();
const RATE_LIMIT = 30;
const RATE_WINDOW = 60 * 1000;

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { start: now, count: 1 });
    return true;
  }
  entry.count++;
  return entry.count <= RATE_LIMIT;
}

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (!checkRate(ip)) {
    return NextResponse.json({ valid: false, error: "Za dużo requestów." }, { status: 429 });
  }

  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ valid: false, error: "Brak tokena" }, { status: 400 });
  }

  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length < 3) return NextResponse.json({ valid: false }, { status: 400 });

    const sig = parts.pop()!;
    const ts = parseInt(parts.pop()!, 10);
    const email = parts.join(":");

    const data = `${email}:${ts}`;
    const expectedSig = crypto
      .createHmac("sha256", TOKEN_SECRET)
      .update(data)
      .digest("hex")
      .slice(0, 16);

    if (sig !== expectedSig) return NextResponse.json({ valid: false }, { status: 403 });

    if (Math.floor(Date.now() / 1000) - ts > TOKEN_MAX_AGE) {
      return NextResponse.json({ valid: false, error: "Token wygasł" }, { status: 403 });
    }

    return NextResponse.json({ valid: true });
  } catch {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
}
