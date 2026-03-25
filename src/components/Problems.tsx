import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    emoji: "💸",
    headline: "Pod koniec miesiąca nie wiesz, gdzie zniknęły pieniądze",
    text: "Zarabiasz, a konto i tak jest puste. Pieniądze znikają w promocjach, drobnych wydatkach i zakupach, których nawet nie pamiętasz.",
  },
  {
    emoji: "🔄",
    headline: "Obiecujesz sobie, że tym razem coś odłożysz",
    text: "Przez chwilę wszystko idzie dobrze, a potem tracisz nad tym kontrolę.",
  },
  {
    emoji: "🎯",
    headline: "Chcesz mieć kontrolę nad pieniędzmi, ale bez wyrzeczeń",
    text: "Bez liczenia każdego grosza. Z poczuciem, że wszystko jest pod kontrolą.",
  },
  {
    emoji: "🛍️",
    headline: "Wydajesz na rzeczy, których potem nie używasz",
    text: "Po czasie zostaje tylko wrażenie, że to były zbędne wydatki.",
  },
  {
    emoji: "😔",
    headline: "Zakup daje chwilową ulgę, a potem zostaje pustka",
    text: "To nie Twoja słabość, tylko schemat, który się powtarza. Dlatego tak trudno to zatrzymać.",
  },
];

export default function Problems() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            Czy to brzmi znajomo?
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            Czy tak wygląda Twoja rzeczywistość?
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {problems.map(({ emoji, headline, text }, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="flex gap-5 items-start bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all duration-300 group">
                <div className="text-3xl flex-shrink-0 mt-0.5">{emoji}</div>
                <div>
                  <h3 className="font-black text-neutral-900 text-lg leading-snug mb-1.5 transition-colors">
                    {headline}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{text}</p>
                </div>
                <div className="flex-shrink-0 ml-auto pl-4 hidden sm:flex items-center self-center">
                  <span className="text-neutral-400 text-xs font-bold border border-neutral-300 rounded-full px-3 py-1 whitespace-nowrap group-hover:border-orange-400 group-hover:text-orange-500 transition-all">
                    Znam to
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-neutral-500 text-base mb-6">
            To nie jest kwestia słabej woli. To kwestia tego, że nikt Cię nie nauczył jak to naprawić.
          </p>
          <a
            href="#produkt"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
          >
            POKAŻ MI ROZWIĄZANIE
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
