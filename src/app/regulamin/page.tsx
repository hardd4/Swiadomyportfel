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

        <div className="space-y-10 text-neutral-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§1. Definicje</h2>
            <ul className="space-y-2">
              <li><strong className="text-neutral-900">Sprzedawca</strong> — Maciej Zawadzki, ul. Zgody 10, 05-250 Radzymin.</li>
              <li><strong className="text-neutral-900">Kupujący</strong> — osoba, która dokonuje zakupu produktu przez stronę swiadomyportfel.pl.</li>
              <li><strong className="text-neutral-900">Produkt</strong> — cyfrowy materiał o kontroli wydatków i zakupach impulsywnych, dostarczany w formacie PDF.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§2. Zamówienie i dostawa</h2>
            <ul className="space-y-2">
              <li>Zamówienie składasz przez formularz na stronie swiadomyportfel.pl.</li>
              <li>Po opłaceniu zamówienia produkt zostaje wysłany automatycznie na podany adres e-mail.</li>
              <li>Dostawa odbywa się drogą elektroniczną. Nie wysyłamy niczego pocztą.</li>
              <li>
                Jeśli produkt nie dotarł w ciągu 15 minut, sprawdź folder spam.
                Jeśli nadal go nie ma, napisz na{" "}
                <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline">
                  kontakt@swiadomyportfel.pl
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§3. Cena i płatność</h2>
            <ul className="space-y-2">
              <li>Cena produktu podana na stronie jest ceną brutto (zawiera VAT).</li>
              <li>Płatność odbywa się za pośrednictwem operatora płatności online.</li>
              <li>Faktura VAT jest generowana automatycznie i wysyłana na adres e-mail Kupującego (jeśli podał dane do faktury).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§4. Licencja i prawa autorskie</h2>
            <ul className="space-y-2">
              <li>Kupujący otrzymuje licencję na korzystanie z produktu na własny użytek.</li>
              <li>Zabrania się kopiowania, udostępniania, odsprzedawania lub rozpowszechniania produktu w jakiejkolwiek formie.</li>
              <li>Produkt jest chroniony prawem autorskim. Wszelkie prawa zastrzeżone.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§5. Odstąpienie od umowy</h2>
            <ul className="space-y-3">
              <li>
                Kupujący będący konsumentem ma prawo odstąpić od umowy w terminie 14 dni od dnia zawarcia umowy, bez podania przyczyny.
              </li>
              <li>
                Prawo odstąpienia od umowy nie przysługuje Kupującemu, jeżeli Sprzedawca wykonał w pełni usługę cyfrową (dostarczył produkt) za wyraźną zgodą Kupującego, który został poinformowany przed rozpoczęciem świadczenia, że po spełnieniu świadczenia przez Sprzedawcę utraci prawo odstąpienia od umowy, i przyjął to do wiadomości.
              </li>
              <li>
                Kupujący przed dokonaniem zakupu wyraża zgodę na rozpoczęcie dostarczania treści cyfrowej przed upływem terminu do odstąpienia od umowy poprzez zaznaczenie odpowiedniego checkboxa na stronie zakupu. Kupujący zostaje jednocześnie poinformowany, że po pełnym wykonaniu usługi cyfrowej (dostarczeniu produktu) utraci prawo do odstąpienia od umowy.
              </li>
              <li>
                W celu odstąpienia od umowy (o ile prawo to przysługuje) Kupujący powinien wysłać oświadczenie na adres:{" "}
                <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline">
                  kontakt@swiadomyportfel.pl
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§6. Reklamacje</h2>
            <ul className="space-y-2">
              <li>
                Reklamacje można składać mailowo na adres:{" "}
                <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline">
                  kontakt@swiadomyportfel.pl
                </a>.
              </li>
              <li>Reklamacja zostanie rozpatrzona w ciągu 14 dni roboczych.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§7. Dane osobowe</h2>
            <ul className="space-y-2">
              <li>Administratorem danych osobowych jest Sprzedawca.</li>
              <li>
                Szczegóły dotyczące przetwarzania danych znajdziesz w{" "}
                <Link href="/polityka-prywatnosci" className="text-orange-500 hover:underline">
                  Polityce prywatności
                </Link>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">§8. Postanowienia końcowe</h2>
            <ul className="space-y-2">
              <li>Regulamin obowiązuje od dnia publikacji na stronie.</li>
              <li>Sprzedawca zastrzega sobie prawo do zmiany regulaminu. Zmiany nie dotyczą zamówień już złożonych.</li>
              <li>W sprawach nieuregulowanych stosuje się przepisy prawa polskiego.</li>
            </ul>
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
