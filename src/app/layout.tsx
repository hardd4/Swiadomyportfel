import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Świadomy Portfel – Skończ z Impulsywnym Kupowaniem",
  description:
    "Sprawdzony system, który zmienia Twoje podejście do pieniędzy. Odkryj konkretny mechanizm kontroli wydatków i odzyskaj pełną kontrolę nad swoim budżetem.",
  keywords:
    "impulsywne kupowanie, kontrola wydatków, budżet domowy, oszczędzanie, finanse osobiste, metoda STOP",
  openGraph: {
    title: "Świadomy Portfel – Skończ z Impulsywnym Kupowaniem",
    description:
      "Sprawdzony system z konkretnymi technikami, który pomoże Ci odzyskać kontrolę nad finansami i skończyć z impulsywnymi zakupami.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
