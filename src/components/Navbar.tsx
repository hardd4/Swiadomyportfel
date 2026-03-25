import { Wallet } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-neutral-900 text-lg tracking-tight">
              Świadomy<span className="text-orange-500">Portfel</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#produkt"
            className="hidden sm:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            CHCĘ TO ZMIENIĆ
          </a>
        </div>
      </div>
    </header>
  );
}
