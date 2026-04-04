import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const TOKEN_SECRET = process.env.TOKEN_SECRET!;
const TOKEN_MAX_AGE = 7 * 24 * 60 * 60; // 7 dni

const PDF_PATH = path.join(process.cwd(), "private", "ebook.pdf");
const DOWNLOAD_FILENAME = "SwiadomyPortfel.pdf";

// Prosta rate-limiting (in-memory, resetuje się przy restarcie funkcji)
const rateMap = new Map<string, { start: number; count: number }>();
const RATE_LIMIT = 10;
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

function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length < 3) return false;

    const sig = parts.pop()!;
    const ts = parseInt(parts.pop()!, 10);
    const email = parts.join(":");

    const data = `${email}:${ts}`;
    const expectedSig = crypto
      .createHmac("sha256", TOKEN_SECRET)
      .update(data)
      .digest("hex")
      .slice(0, 16);

    if (sig !== expectedSig) return false;
    if (Math.floor(Date.now() / 1000) - ts > TOKEN_MAX_AGE) return false;
    return true;
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (!checkRate(ip)) {
    return NextResponse.json({ error: "Za dużo requestów. Spróbuj za chwilę." }, { status: 429 });
  }

  const token = req.nextUrl.searchParams.get("token");
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: "Brak dostępu" }, { status: 403 });
  }

  try {
    const pdf = fs.readFileSync(PDF_PATH);
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${DOWNLOAD_FILENAME}"`,
        "Content-Length": pdf.length.toString(),
      },
    });
  } catch {
    console.error("PDF read error — plik nie istnieje w /private/ebook.pdf");
    return NextResponse.json({ error: "Plik niedostępny. Skontaktuj się z nami." }, { status: 500 });
  }
}
