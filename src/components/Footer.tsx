import { Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <Wallet className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-black text-white text-base tracking-tight">
              Świadomy<span className="text-orange-400">Portfel</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600">
            <a href="mailto:kontakt@swiadomyportfel.pl" className="hover:text-neutral-300 transition-colors">
              kontakt@swiadomyportfel.pl
            </a>
            <span className="hidden sm:inline text-neutral-800">·</span>
            <a href="/polityka-prywatnosci" className="hover:text-neutral-300 transition-colors">
              Polityka prywatności
            </a>
            <span className="hidden sm:inline text-neutral-800">·</span>
            <a href="/regulamin" className="hover:text-neutral-300 transition-colors">
              Regulamin
            </a>
          </nav>

          <p className="text-neutral-700 text-xs">
            © {new Date().getFullYear()} ŚwiadomyPortfel
          </p>
        </div>
      </div>
    </footer>
  );
}
