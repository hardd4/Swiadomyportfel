import Link from "next/link";
import { Wallet } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin – ŚwiadomyPortfel",
  description: "Regulamin sprzedaży produktów cyfrowych ŚwiadomyPortfel.",
  robots: { index: false },
};

export default function Regulamin() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b border-neutral-100 py-4 px-6">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
            <Wallet className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-black text-neutral-900 text-base tracking-tight">
            Świadomy<span className="text-orange-500">Portfel</span>
          </span>
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-neutral-900 mb-2">Regulamin</h1>
        <p className="text-neutral-500 text-sm mb-12">Ostatnia aktualizacja: marzec 2025</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§1. Postanowienia ogólne</h2>
            <p>Niniejszy regulamin określa zasady sprzedaży produktów cyfrowych oferowanych przez ŚwiadomyPortfel. Złożenie zamówienia jest jednoznaczne z akceptacją niniejszego regulaminu.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§2. Sprzedawca</h2>
            <p>Sprzedawcą produktów jest właściciel serwisu ŚwiadomyPortfel. Kontakt: <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline">kontakt@swiadomyportfel.pl</a></p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§3. Produkty cyfrowe</h2>
            <p>Oferowane produkty mają charakter cyfrowy (pliki PDF, materiały online). Po dokonaniu płatności Kupujący otrzymuje dostęp do zakupionego materiału drogą elektroniczną na podany adres e-mail.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§4. Ceny i płatności</h2>
            <p>Wszystkie ceny podane na stronie są cenami brutto wyrażonymi w złotych polskich (PLN). Płatność jest jednorazowa. Nie ma żadnych ukrytych opłat ani subskrypcji.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§5. Dostęp do produktu</h2>
            <p>Dostęp do zakupionego materiału jest przyznawany natychmiast po potwierdzeniu płatności. Kupujący ma dożywotni dostęp do pliku oraz wszystkich przyszłych aktualizacji danego produktu.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§6. Prawo do odstąpienia od umowy</h2>
            <p>Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta, prawo do odstąpienia od umowy nie przysługuje w przypadku dostarczania treści cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy. Klikając przycisk zakupu, Kupujący wyraża zgodę na natychmiastowe dostarczenie treści cyfrowej i przyjmuje do wiadomości, że tym samym traci prawo do odstąpienia od umowy.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§7. Reklamacje</h2>
            <p>W przypadku problemów technicznych z dostępem do zakupionego produktu prosimy o kontakt na adres: <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline">kontakt@swiadomyportfel.pl</a>. Reklamacje rozpatrywane są w ciągu 14 dni roboczych.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§8. Prawa autorskie</h2>
            <p>Zakupiony materiał jest przeznaczony wyłącznie do użytku osobistego. Zabrania się kopiowania, rozpowszechniania, odsprzedaży ani udostępniania treści osobom trzecim bez pisemnej zgody sprzedawcy.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§9. Postanowienia końcowe</h2>
            <p>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy polskiego prawa, w szczególności Kodeksu cywilnego oraz ustawy o prawach konsumenta.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100">
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-bold text-sm">
            ← Wróć na stronę główną
          </Link>
        </div>
      </main>
    </div>
  );
}
