import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2687461501639854');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=2687461501639854&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
