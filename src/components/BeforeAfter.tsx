import AnimatedSection from "./AnimatedSection";

const before = [
  { text: "Stres za każdym razem gdy sprawdzasz konto" },
  { text: "Wstydzisz się przyznać ile naprawdę wydałeś" },
  { text: '"Od przyszłego miesiąca oszczędzam" – od 2 lat' },
  { text: "Kupujesz rzeczy, których po tygodniu nie pamiętasz" },
  { text: "Wiesz, że to błąd – ale znowu to robisz" },
];

const after = [
  { text: "Otwierasz apkę bankową bez strachu" },
  { text: "Jesteś dumny ze swoich decyzji finansowych" },
  { text: "Widzisz jak Twoje oszczędności rosną miesiąc po miesiącu" },
  { text: "Kupujesz to co chcesz – świadomie i bez wyrzutów sumienia" },
  { text: "Ty kontrolujesz pieniądze. Nie one Ciebie." },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            Przed i po
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            Jak wygląda życie przed i po zmianie
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mb-10">

          {/* Before */}
          <AnimatedSection direction="right">
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-7">
              <div className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-500 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-neutral-400 rounded-full" />
                Przed
              </div>
              <ul className="space-y-4">
                {before.map(({ text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-neutral-600 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection direction="left" delay={0.08}>
            <div className="bg-neutral-950 border-2 border-orange-500/30 rounded-2xl p-7">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-orange-400 rounded-full" />
                Po systemie
              </div>
              <ul className="space-y-4">
                {after.map(({ text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-white text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2} className="text-center">
          <a
            href="#produkt"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20 text-lg"
          >
            CHCĘ MIEĆ TĘ ZMIANĘ
          </a>
          <p className="mt-3 text-neutral-400 text-sm">30-dniowa gwarancja zwrotu · Dostęp natychmiastowy</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
