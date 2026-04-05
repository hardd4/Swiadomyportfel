"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Wallet, Download, Mail, CheckCircle, XCircle } from "lucide-react";

type State = "loading" | "valid" | "invalid";

function DziekujemyContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [state, setState] = useState<State>("loading");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setState("invalid");
      return;
    }
    fetch(`/api/verify-session?session_id=${encodeURIComponent(sessionId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.valid && data.token) {
          setToken(data.token);
          setState("valid");
        } else {
          setState("invalid");
        }
      })
      .catch(() => setState("invalid"));
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="border-b border-neutral-100 py-4 px-6">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
            <Wallet className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-black text-neutral-900 text-base tracking-tight">
            Świadomy<span className="text-orange-500">Portfel</span>
          </span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center">

          {/* Loading */}
          {state === "loading" && (
            <div>
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
              <p className="text-neutral-500">Weryfikacja zakupu...</p>
            </div>
          )}

          {/* Valid */}
          {state === "valid" && token && (
            <div>
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-orange-500" />
              </div>
              <h1 className="text-3xl font-black text-neutral-900 mb-2">Dziękuję! Masz to.</h1>
              <p className="text-neutral-500 mb-8">Twój materiał jest gotowy do pobrania.</p>

              {/* Download box */}
              <div className="bg-orange-50 border-2 border-orange-400 rounded-2xl p-7 mb-5 text-left">
                <h2 className="font-black text-neutral-900 text-lg mb-1">ŚwiadomyPortfel</h2>
                <p className="text-neutral-500 text-sm mb-5">PDF gotowy do pobrania. Wysyłamy go też na Twojego maila.</p>
                <a
                  href={`/api/download?token=${encodeURIComponent(token)}`}
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3.5 rounded-xl transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  POBIERZ PDF
                </a>
              </div>

              {/* Email info */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 mb-4 text-left">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-900 text-sm mb-1">Materiał wysłany na maila.</p>
                    <p className="text-neutral-500 text-sm">Jeśli nie widzisz — sprawdź spam. Problem? Napisz: <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500">kontakt@swiadomyportfel.pl</a></p>
                  </div>
                </div>
              </div>

              {/* Next steps */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 text-left">
                <h3 className="font-black text-neutral-900 text-sm mb-3">Co dalej?</h3>
                <ul className="space-y-2">
                  {[
                    "Otwórz materiał i przeczytaj pierwszy rozdział.",
                    "Zrób jedno ćwiczenie z rozdziału drugiego.",
                    "Wracaj do niego kiedy potrzebujesz.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-orange-500 font-black mt-0.5">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Invalid */}
          {state === "invalid" && (
            <div>
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-10 h-10 text-neutral-400" />
              </div>
              <h1 className="text-3xl font-black text-neutral-900 mb-2">Brak dostępu</h1>
              <p className="text-neutral-500 mb-8">Ta strona jest dostępna tylko po zakupie.</p>
              <Link
                href="/#produkt"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                KUP TERAZ
              </Link>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default function DziekujemyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <DziekujemyContent />
    </Suspense>
  );
}
