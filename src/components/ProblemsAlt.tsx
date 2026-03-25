import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    n: "1",
    headline: "Pod koniec miesiąca nie wiesz, gdzie zniknęły twoje pieniądze",
    text: "Patrzyłeś jak zarabiasz, a konto i tak puste. Coś znikało. W drobnych, w promocjach, w zakupach których nawet nie pamiętasz.",
  },
  {
    n: "2",
    headline: "Obiecujesz sobie, że w tym miesiącu wreszcie coś odłożysz",
    text: "I naprawdę wierzysz w to pierwszego dnia. A potem znowu się nie udaje. I znowu. I znowu.",
  },
  {
    n: "3",
    headline: "Kupujesz pod wpływem chwili, a potem żałujesz tego samego dnia",
    text: "Widzisz, klikasz, kupujesz. Jeszcze zanim zdążyłeś pomyśleć. A kilka godzin później przychodzi to znane poczucie.",
  },
  {
    n: "4",
    headline: "Chcesz odzyskać kontrolę nad finansami, bez ciągłego poczucia winy",
    text: "Nie chcesz się kontrolować przez całe życie. Chcesz po prostu wiedzieć, że masz to pod kontrolą. Bez stresu, bez wyrzeczeń.",
  },
  {
    n: "5",
    headline: "Zakupy dają chwilową ulgę, ale po chwili zostaje pustka na koncie",
    text: "To nie jest słabość charakteru. To mechanizm. I dokładnie dlatego sam budżet i siła woli nie wystarczą.",
  },
  {
    n: "6",
    headline: "Zdarza Ci się wydawać na rzeczy, których później nie używasz",
    text: "Szafa pełna, a wciąż 'nie ma co na siebie włożyć'. Półka z gadżetami, które leżą nieruszone. Rachunki za subskrypcje, o których zapomniałeś.",
  },
];

const failedMethods = [
  "Planowanie budżetu w Excelu",
  "Metoda kopert",
  "Blokowanie kart i limitów",
  "Przelew na konto oszczędnościowe pierwszego dnia",
  "Usuwanie aplikacji zakupowych",
];

export default function ProblemsAlt() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-14">
          <p className="text-neutral-500 text-base mb-10 text-center">
            Spójrz szczerze na swoje finanse. Tylko szczerze:
          </p>

          <div className="space-y-12">
            {problems.map(({ n, headline, text }, i) => (
              <AnimatedSection key={n} delay={i * 0.07}>
                <div>
                  <p className="text-orange-500 font-black text-5xl mb-4 leading-none">{n}</p>
                  <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-3">
                    {headline}
                  </h3>
                  <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
                    {text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="border-t border-neutral-800 pt-14">
            <h3 className="text-white font-black text-2xl sm:text-3xl mb-3 leading-tight">
              Pewnie już próbowałeś to naprawić.
            </h3>
            <p className="text-neutral-400 text-base mb-8 leading-relaxed">
              Większość ludzi próbuje tych samych rzeczy. I większość po kilku tygodniach wraca do starych nawyków.
            </p>

            <div className="space-y-3">
              {failedMethods.map((m) => (
                <div key={m} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-neutral-600 text-xs font-black">✕</span>
                  </div>
                  <span className="text-neutral-400 text-sm">{m}</span>
                </div>
              ))}
            </div>

            <p className="text-neutral-300 text-base leading-relaxed mt-8">
              To nie Twoja wina, że to nie działało. Te metody leczą objaw, nie przyczynę.
              Zakupy impulsywne to nie kwestia dyscypliny. To kwestia tego,
              jak Twój mózg reaguje na konkretne sytuacje. I właśnie to można zmienić.
            </p>

            <a
              href="#produkt"
              className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 text-white font-black px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              POKAŻ MI ROZWIĄZANIE
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
