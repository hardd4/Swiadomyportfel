"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">Ta strona używa plików cookies</p>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Używamy cookies analitycznych, aby lepiej rozumieć jak odwiedzasz stronę.{" "}
              <Link href="/polityka-prywatnosci" className="text-orange-400 hover:underline">
                Polityka prywatności
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={reject}
              className="text-neutral-400 hover:text-neutral-200 text-xs font-bold transition-colors px-3 py-2"
            >
              Odrzuć
            </button>
            <button
              onClick={accept}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              AKCEPTUJĘ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
