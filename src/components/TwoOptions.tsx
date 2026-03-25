import { X, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const leftItems = [
  "Kończysz miesiąc bez grosza",
  "Kupujesz rzeczy, których nie potrzebujesz",
  "Czujesz się winny po każdym zakupie",
  "Oszczędności stoją w miejscu",
  "Stres przy każdym sprawdzeniu konta",
  "\"Od przyszłego miesiąca...\" w kółko",
];

const rightItems = [
  "Wiesz dokładnie na co idą Twoje pieniądze",
  "Kupujesz świadomie tylko to, czego chcesz",
  "Czujesz spokój i kontrolę nad finansami",
  "Oszczędności rosną co miesiąc",
  "Otwierasz apkę bankową bez stresu",
  "Działasz już dziś, a nie od przyszłego miesiąca",
];

export default function TwoOptions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            Masz przed sobą dwie opcje
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            Którą wybierasz?
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">

          {/* Left – bad option */}
          <AnimatedSection direction="right">
            <div className="bg-neutral-950 rounded-2xl p-7 sm:p-8 h-full">
              <div className="inline-block bg-neutral-800 text-neutral-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Bierne czekanie
              </div>
              <h3 className="text-white text-xl font-black mb-5 leading-tight">
                Nie robisz nic i masz nadzieję, że samo się naprawi
              </h3>
              <ul className="space-y-3">
                {leftItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-neutral-500" />
                    </div>
                    <span className="text-neutral-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right – good option */}
          <AnimatedSection direction="left" delay={0.08}>
            <div className="bg-orange-500 rounded-2xl p-7 sm:p-8 h-full relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                  Przejmujesz kontrolę
                </div>
                <h3 className="text-white text-xl font-black mb-5 leading-tight">
                  Decydujesz się działać i zmieniasz swoje finanse
                </h3>
                <ul className="space-y-3">
                  {rightItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#produkt"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-black text-sm px-6 py-3 rounded-xl mt-7 hover:bg-orange-50 transition-colors duration-200"
                >
                  WYBIERAM KONTROLĘ
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
