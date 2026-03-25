"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

function formatPln(n: number) {
  return n.toLocaleString("pl-PL") + " zł";
}

function getComparison(yearly: number): string {
  if (yearly >= 8000) return "tyle co używane auto";
  if (yearly >= 5000) return "tyle co rok rat kredytowych";
  if (yearly >= 3000) return "tyle co wakacje za granicą dla dwojga";
  if (yearly >= 2000) return "tyle co nowy laptop";
  if (yearly >= 1000) return "tyle co kilka miesięcy oszczędności";
  return "tyle co kilka naprawdę dobrych weekendów";
}

export default function LossCalculator() {
  const [times, setTimes] = useState(5);
  const [amount, setAmount] = useState(70);

  const monthly = times * amount;
  const yearly = monthly * 12;
  const fiveYear = yearly * 5;

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            Kalkulator strat
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
            Ile naprawdę tracisz przez impuls?
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Przesuń suwak i zobacz jak łatwo rosną koszty.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 sm:p-9">

            {/* Slider 1 */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-white text-sm font-bold">
                  Nieplanowane zakupy w miesiącu
                </label>
                <span className="text-orange-400 font-black text-xl">{times}x</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={times}
                onChange={(e) => setTimes(Number(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-full appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-neutral-600 text-xs mt-1">
                <span>1x</span>
                <span>20x</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <label className="text-white text-sm font-bold">
                  Średnia kwota jednego zakupu
                </label>
                <span className="text-orange-400 font-black text-xl">{amount} zł</span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={10}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-full appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-neutral-600 text-xs mt-1">
                <span>10 zł</span>
                <span>500 zł</span>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-neutral-800 pt-8 space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">Miesięcznie tracisz</span>
                <span className="text-white font-black text-xl">{formatPln(monthly)}</span>
              </div>

              <div className="flex items-center justify-between bg-orange-500/10 border border-orange-500/20 rounded-xl px-5 py-4">
                <div>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-0.5">Rocznie tracisz</p>
                  <p className="text-neutral-400 text-xs">To {getComparison(yearly)}</p>
                </div>
                <span className="text-orange-400 font-black text-3xl">{formatPln(yearly)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">W ciągu 5 lat tracisz</span>
                <span className="text-neutral-200 font-black text-2xl">{formatPln(fiveYear)}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <p className="text-neutral-500 text-sm mb-4">
                Koszt metody zwraca się po małych 2 zakupach.
              </p>
              <a
                href="#produkt"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                CHCĘ ODZYSKAĆ PIENIĄDZE
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
