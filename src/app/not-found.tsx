import Link from "next/link";
import { Wallet } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4 text-center">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Wallet className="w-4 h-4 text-white" />
        </div>
        <span className="font-black text-white text-lg tracking-tight">
          Świadomy<span className="text-orange-400">Portfel</span>
        </span>
      </div>

      <p className="text-orange-500 font-black text-sm uppercase tracking-widest mb-4">
        Błąd 404
      </p>
      <h1 className="text-white font-black text-4xl sm:text-5xl leading-tight mb-6">
        Tej strony nie ma.
      </h1>
      <p className="text-neutral-400 text-lg mb-10 max-w-md">
        Ale Twoje pieniądze nadal możesz odzyskać. Wróć na stronę główną i zacznij od nowa.
      </p>

      <Link
        href="/"
        className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-lg"
      >
        WRÓĆ NA STRONĘ GŁÓWNĄ
      </Link>
    </main>
  );
}
