import { BookOpen, Zap, ShieldCheck, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import BuyButton from "./BuyButton";

const bullets = [
  "Pierwszy raz od dawna zostaną Ci pieniądze na koniec miesiąca",
  "Zyskasz kontrolę nad pieniędzmi, bez wyrzeczeń",
  "Przestaniesz kupować rzeczy, których nie potrzebujesz",
];

const paymentMethods = ["BLIK", "Visa", "Mastercard", "Przelewy24", "PayPal"];

export default function ProductSection() {
  return (
    <section id="produkt" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            To jest dla Ciebie
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            Sprawdzony system, który pomoże Ci zatrzymać zakup zanim wydasz pieniądze
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">

              {/* Left – info */}
              <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-neutral-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">ŚwiadomyPortfel</p>
                    <p className="text-white font-bold text-sm">swiadomyportfel.pl</p>
                  </div>
                </div>

                <h3 className="text-white text-2xl sm:text-3xl font-black leading-tight mb-3">
                  Skończ z Impulsywnym Kupowaniem
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  Sprawdzony mechanizm opisany prostym językiem który pomoże Ci kontrolować wydatki, oszczędzać więcej oraz kupować świadomie.
                </p>

                {/* Bullets */}
                <ul className="space-y-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-black">
                        {i + 1}
                      </span>
                      <span className="text-neutral-300 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right – price + CTA */}
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-neutral-500 text-sm line-through">79,99 zł</span>
                    <div className="flex items-end gap-3">
                      <span className="text-white text-5xl font-black">64,99</span>
                      <span className="text-white text-2xl font-bold mb-1">zł</span>
                      <span className="bg-orange-500 text-white text-xs font-black px-2.5 py-1 rounded-full mb-2">
                        -20%
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mt-1">
                      Jednorazowo · Bez subskrypcji · Bez ukrytych kosztów
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mb-4">
                    <BuyButton url={process.env.NEXT_PUBLIC_PAYMENT_URL ?? "#"} />
                  </div>

                  {/* Instant access */}
                  <div className="flex items-center gap-2 justify-center text-neutral-400 text-sm mb-6">
                    <Zap className="w-4 h-4 text-orange-400" />
                    <span>Dostęp natychmiastowy po zakupie</span>
                  </div>

                  {/* Payment methods */}
                  <div className="border-t border-neutral-800 pt-5">
                    <p className="text-neutral-600 text-xs text-center mb-3">Akceptowane metody płatności</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {paymentMethods.map((m) => (
                        <span
                          key={m}
                          className="bg-neutral-800 text-neutral-300 text-xs font-bold px-3 py-1.5 rounded-lg"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick reassurance */}
        <AnimatedSection delay={0.15}>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Zap, text: "Pobierasz od razu po płatności – żadnego czekania" },
              { icon: RefreshCw, text: "Bezpłatne aktualizacje na zawsze" },
              { icon: ShieldCheck, text: "Bezpieczna płatność szyfrowana SSL" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                <Icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-neutral-700 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
