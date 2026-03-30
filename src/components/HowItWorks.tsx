import AnimatedSection from "./AnimatedSection";

const chapters = [
  {
    number: "01",
    headline: "To nie Twoja wina, ale Twój problem",
    text: "Dowiesz się dlaczego kupujesz bez zastanowienia, nawet gdy wiesz że nie powinieneś. I dlaczego silna wola tu nie wystarczy.",
  },
  {
    number: "02",
    headline: "Czy to o Tobie?",
    text: "Sprawdzisz, które wzorce zachowań dotyczą Ciebie. To punkt startowy do zmiany.",
  },
  {
    number: "03",
    headline: "Skąd się to bierze",
    text: "Poznasz mechanizmy, które uruchamiają zakup zanim zdążysz pomyśleć. Kiedy je rozpoznasz, tracą swoją moc.",
  },
  {
    number: "04",
    headline: "Monitorowanie",
    text: "Zobaczysz gdzie naprawdę idą Twoje pieniądze. Bez Excela, bez skomplikowanych tabel.",
  },
  {
    number: "05",
    headline: "Schemat decyzji",
    text: "Sprawdzona metoda aby przestać kupować bez sensu. Nauczysz się jej raz, a potem korzystasz przez całe życie.",
  },
  {
    number: "06",
    headline: "Świadomy wybór",
    text: "Coś, o czym większość ludzi nie wie, że w ogóle istnieje. Kiedy to zobaczysz, zaczniesz podejmować decyzje zupełnie inaczej.",
  },
  {
    number: "07",
    headline: "Plan działania",
    text: "Co robić od pierwszego dnia po przeczytaniu. Krok po kroku, bez domysłów.",
  },
  {
    number: "08",
    headline: "Pułapki",
    text: "Sposoby na uniknięcie wszystkich przeszkód jakie mogą Cię spotkać.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            Co w środku
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            8 rozdziałów, które zmieniają nawyki
          </h2>
          <p className="mt-4 text-neutral-500 text-lg max-w-xl mx-auto">
            Każdy rozdział to konkretna wiedza, którą możesz wdrożyć od razu.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute left-[2.35rem] top-10 bottom-10 w-px bg-neutral-100" />

          <div className="space-y-7">
            {chapters.map(({ number, headline, text }, i) => (
              <AnimatedSection key={number} delay={i * 0.07}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-[4.7rem] h-[4.7rem] bg-orange-500 rounded-2xl flex items-center justify-center relative z-10">
                    <span className="text-white font-black text-xl">{number}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-neutral-900 font-black text-lg leading-snug mb-1.5">
                      {headline}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">{text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <a
            href="#produkt"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20 text-lg"
          >
            CHCĘ MIEĆ TO WSZYSTKO
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
