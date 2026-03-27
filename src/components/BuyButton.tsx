"use client";

import { useState } from "react";

interface BuyButtonProps {
  url: string;
  label?: string;
  className?: string;
}

export default function BuyButton({ url, label = "KUPUJĘ TERAZ", className }: BuyButtonProps) {
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!agreed) {
      e.preventDefault();
      setTouched(true);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Checkbox zgody */}
      <label className={`flex items-start gap-3 cursor-pointer group`}>
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            className="sr-only"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              setTouched(true);
            }}
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-150 ${
              agreed
                ? "bg-orange-500 border-orange-500"
                : touched && !agreed
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
        <span className={`text-xs leading-relaxed transition-colors ${
          touched && !agreed ? "text-red-400" : "text-neutral-400 group-hover:text-neutral-300"
        }`}>
          Wyrażam zgodę na rozpoczęcie dostarczania przez usługodawcę usługi cyfrowej przed
          upływem terminu na odstąpienie od umowy. Ponadto oświadczam, że zostałem/-am
          poinformowany/-a, że po pełnym wykonaniu usługi cyfrowej przez usługodawcę utracę
          prawo odstąpienia od umowy oraz przyjąłem/-am tę informację do wiadomości.
        </span>
      </label>

      {/* Komunikat błędu */}
      {touched && !agreed && (
        <p className="text-red-400 text-xs font-medium">
          Zaznacz zgodę, żeby przejść do płatności.
        </p>
      )}

      {/* Przycisk */}
      <a
        href={agreed ? url : "#"}
        onClick={handleClick}
        className={`flex items-center justify-center gap-2 w-full font-black text-lg py-4 rounded-xl transition-all duration-200 shadow-lg text-center ${
          agreed
            ? "bg-orange-500 hover:bg-orange-400 text-white hover:-translate-y-0.5 shadow-orange-500/25 cursor-pointer"
            : "bg-neutral-700 text-neutral-400 cursor-not-allowed shadow-none"
        } ${className ?? ""}`}
      >
        {label}
      </a>
    </div>
  );
}
