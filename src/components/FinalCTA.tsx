import { CheckCircle, Zap, Lock } from "lucide-react";
import BuyButton from "./BuyButton";
import AnimatedSection from "./AnimatedSection";

const bullets = [
  "Pierwszy raz od dawna zostaną Ci pieniądze na koniec miesiąca",
  "Zyskasz kontrolę nad pieniędzmi, bez wyrzeczeń",
  "Przestaniesz kupować rzeczy, których nie potrzebujesz",
  "Zrozumiesz dlaczego poprzednie metody nie działały i co zrobić inaczej",
  "Skończy się poczucie winy po zakupie i sprawdzanie konta z niepokojem",
];

export default function FinalCTA() {
  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <AnimatedSection>
          {/* Tag */}
          <div className="inline-block bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-7">
            Ostatnia szansa
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 uppercase">
            Nic się nie zmieni,{" "}
            <span className="text-orange-400">jeśli Ty się nie zmienisz.</span>
          </h2>

          {/* Sub */}
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            Każdy kolejny miesiąc bez zmiany to kolejne kilkaset złotych wyrzucone w błoto.
          </p>

          {/* Product card */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 text-left">

            {/* Price */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-neutral-500 text-base line-through">79,99 zł</span>
              <span className="text-white text-4xl font-black">64,99 zł</span>
              <span className="bg-orange-500 text-white text-xs font-black px-2.5 py-1 rounded-full">
                -20%
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-7">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mb-4">
              <BuyButton url={process.env.NEXT_PUBLIC_PAYMENT_URL ?? "#"} />
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-500 text-xs">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                Dostęp od razu
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-orange-400" />
                Bezpieczna płatność
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
