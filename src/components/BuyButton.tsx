"use client";

import { useState } from "react";

interface BuyButtonProps {
  label?: string;
}

export default function BuyButton({ label = "KUPUJĘ TERAZ" }: BuyButtonProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [consentTouched, setConsentTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isEmailValid = email.includes("@") && email.length >= 5;

  const handleSubmit = async () => {
    setEmailTouched(true);
    setConsentTouched(true);
    if (!isEmailValid || !agreed) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Coś poszło nie tak. Spróbuj ponownie.");
        setLoading(false);
      }
    } catch {
      setError("Błąd połączenia. Sprawdź internet i spróbuj ponownie.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          className={`w-full bg-neutral-900 border rounded-xl px-4 py-3.5 text-white text-sm placeholder-neutral-500 outline-none transition-all ${
            emailTouched && !isEmailValid
              ? "border-red-500 focus:border-red-400"
              : "border-neutral-700 focus:border-orange-400"
          }`}
        />
        {emailTouched && !isEmailValid && (
          <p className="text-red-400 text-xs mt-1.5 font-medium">Podaj prawidłowy adres e-mail.</p>
        )}
      </div>

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            className="sr-only"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              setConsentTouched(true);
            }}
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-150 ${
              agreed
                ? "bg-orange-500 border-orange-500"
                : consentTouched && !agreed
                ? "border-red-500 bg-red-500/10"
                : "border-neutral-600 group-hover:border-orange-400"
            }`}
          >
            {agreed && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <span
          className={`text-xs leading-relaxed transition-colors ${
            consentTouched && !agreed
              ? "text-red-400"
              : "text-neutral-400 group-hover:text-neutral-300"
          }`}
        >
          Wyrażam zgodę na rozpoczęcie dostarczania przez usługodawcę usługi cyfrowej przed
          upływem terminu na odstąpienie od umowy. Oświadczam, że zostałem/-am poinformowany/-a,
          że po pełnym wykonaniu usługi cyfrowej utracę prawo odstąpienia od umowy.
        </span>
      </label>

      {consentTouched && !agreed && (
        <p className="text-red-400 text-xs font-medium">Zaznacz zgodę, żeby przejść do płatności.</p>
      )}

      {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full font-black text-lg py-4 rounded-xl transition-all duration-200 shadow-lg ${
          loading
            ? "bg-neutral-700 text-neutral-400 cursor-not-allowed shadow-none"
            : "bg-orange-500 hover:bg-orange-400 text-white hover:-translate-y-0.5 shadow-orange-500/25 cursor-pointer"
        }`}
      >
        {loading ? "Przekierowuję do płatności..." : label}
      </button>
    </div>
  );
}
