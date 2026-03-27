import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ŚwiadomyPortfel – Skończ z Impulsywnym Kupowaniem",
  description:
    "Sprawdzony system kontroli wydatków. Zatrzymaj zakup zanim wydasz pieniądze. Konkretny mechanizm, który możesz wdrożyć od razu.",
  keywords:
    "impulsywne kupowanie, kontrola wydatków, budżet domowy, oszczędzanie, finanse osobiste",
  metadataBase: new URL("https://swiadomyportfel.pl"),
  openGraph: {
    title: "ŚwiadomyPortfel – Skończ z Impulsywnym Kupowaniem",
    description:
      "Sprawdzony system kontroli wydatków. Zatrzymaj zakup zanim wydasz pieniądze.",
    type: "website",
    locale: "pl_PL",
    url: "https://swiadomyportfel.pl",
    siteName: "ŚwiadomyPortfel",
  },
  twitter: {
    card: "summary_large_image",
    title: "ŚwiadomyPortfel – Skończ z Impulsywnym Kupowaniem",
    description: "Sprawdzony system kontroli wydatków. Zatrzymaj zakup zanim wydasz pieniądze.",
  },
  robots: {
    index: true,
    follow: true,
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
        <CookieBanner />
      </body>
    </html>
  );
}
