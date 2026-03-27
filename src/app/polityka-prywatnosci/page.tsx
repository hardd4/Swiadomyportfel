import Link from "next/link";
import { Wallet } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności – ŚwiadomyPortfel",
  description: "Polityka prywatności serwisu ŚwiadomyPortfel.",
  robots: { index: false },
};

export default function PolitykaPrywatnosci() {
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
        <h1 className="text-4xl font-black text-neutral-900 mb-2">Polityka Prywatności</h1>
        <p className="text-neutral-500 text-sm mb-12">Ostatnia aktualizacja: marzec 2025</p>

        <div className="space-y-10 text-neutral-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest:<br />
              <strong className="text-neutral-900">Maciej Zawadzki</strong><br />
              ul. Zgody 10, 05-250 Radzymin<br />
              E-mail: <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline">kontakt@swiadomyportfel.pl</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">2. Jakie dane zbieram</h2>
            <p className="mb-3">Zbieram wyłącznie dane niezbędne do realizacji zamówienia:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Adres e-mail (do dostarczenia produktu)</li>
              <li>Dane do faktury, jeśli o nią poprosisz (imię i nazwisko lub nazwa firmy, adres, NIP)</li>
              <li>
                Dane podawane podczas płatności — obsługiwane w całości przez zewnętrznego operatora płatności.{" "}
                <strong className="text-neutral-900">Nie mam dostępu do Twojej karty ani danych bankowych.</strong>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">3. Po co zbieram dane</h2>
            <p className="mb-3">Twoje dane przetwarzam w celu:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Realizacji zamówienia i dostarczenia zakupionego produktu</li>
              <li>Wystawienia faktury VAT (jeśli o nią poprosisz)</li>
              <li>Obsługi reklamacji i zapytań</li>
              <li>Wypełnienia obowiązków prawnych (np. podatkowych i księgowych)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">4. Komu udostępniam dane</h2>
            <p className="mb-3">Twoje dane mogą być przekazane wyłącznie podmiotom niezbędnym do realizacji usługi:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-neutral-900">Operator płatności</strong> — w celu obsługi transakcji</li>
              <li><strong className="text-neutral-900">Biuro rachunkowe</strong> — w celu prowadzenia księgowości</li>
              <li><strong className="text-neutral-900">Dostawca e-mail</strong> — w celu wysyłki zakupionego produktu</li>
            </ul>
            <p className="mt-4 font-medium text-neutral-900">
              Nie sprzedaję, nie wynajmuję i nie udostępniam Twoich danych w celach marketingowych podmiotom trzecim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">5. Pliki cookies</h2>
            <p className="mb-4">
              Ta strona używa plików cookies. Przy pierwszej wizycie pytam Cię o zgodę.
            </p>
            <ul className="space-y-3">
              <li>
                <strong className="text-neutral-900">Niezbędne</strong> — zapamiętanie Twojego wyboru dotyczącego cookies. Nie wymagają zgody.
              </li>
              <li>
                <strong className="text-neutral-900">Analityczne i marketingowe</strong> — Google Tag Manager, Meta Pixel. Ładowane tylko po Twojej zgodzie. Służą do analizy ruchu na stronie i wyświetlania reklam.
              </li>
            </ul>
            <p className="mt-4">
              Zgodę możesz wycofać w każdej chwili, usuwając pliki cookies w przeglądarce.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">6. Czas przechowywania</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-neutral-900">Dane do realizacji zamówienia</strong> — do czasu jego wykonania</li>
              <li><strong className="text-neutral-900">Dane do faktur</strong> — 5 lat (obowiązek podatkowy)</li>
              <li><strong className="text-neutral-900">Dane do obsługi reklamacji</strong> — do 1 roku od zakupu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">7. Twoje prawa</h2>
            <p className="mb-3">Masz prawo do:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia skargi do Prezesa UODO</li>
            </ul>
            <p className="mt-4">
              Wystarczy napisać na{" "}
              <a href="mailto:kontakt@swiadomyportfel.pl" className="text-orange-500 hover:underline font-medium">
                kontakt@swiadomyportfel.pl
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-neutral-900 mb-3">8. Zmiany polityki</h2>
            <p>
              Mogę zaktualizować tę politykę. Aktualna wersja jest zawsze dostępna na tej stronie.
            </p>
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
