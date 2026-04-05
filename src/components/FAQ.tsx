"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Co dokładnie dostanę i jak to działa?",
    answer:
      "Dostaniesz sprawdzony sposób w formacie PDF, który przeprowadzi Cię przez 4 kroki zmiany nawyków zakupowych. Każdy krok jest konkretny i gotowy do wdrożenia – bez teorii, bez ogólników. Większość ludzi zauważa pierwszą zmianę już po tygodniu stosowania.",
  },
  {
    question: "Gdzie to dostanę i jak szybko?",
    answer:
      "Natychmiast po opłaceniu zamówienia dostajesz e-mail z linkiem do pobrania. Żadnego czekania – w ciągu 2 minut masz dostęp na swoim urządzeniu.",
  },
  {
    question: "Jakie metody płatności są dostępne?",
    answer:
      "Możesz zapłacić przez BLIK, kartą Visa/Mastercard, Klarna, Apple Pay lub Google Pay. Wszystkie płatności są bezpieczne i szyfrowane SSL.",
  },
  {
    question: "W ile zobaczę efekty?",
    answer:
      "Wdrażasz od razu po przeczytaniu. Efekty najlepiej widać po kilku tygodniach, kiedy sprawdzasz konto i widzisz ile pieniędzy zostało Ci na koncie.",
  },
  {
    question: "Czy jest to trudne do wdrożenia?",
    answer:
      "Nie. Cały materiał jest napisany prostym językiem i dostajesz gotowy plan działania. Nie potrzebujesz żadnej wiedzy finansowej – wystarczy, że chcesz zmienić swoje nawyki.",
  },
  {
    question: "A co jeśli mi nie pomoże?",
    answer:
      "Ta metoda działa, jeśli ją zastosujesz. Nie ma tu magii, jest konkret. Jeśli przeczytasz i wdrożysz, zobaczysz zmianę. Jeśli włożysz to na półkę, nic się nie zmieni.",
  },
  {
    question: "Czy to jest subskrypcja? Czy będę płacić co miesiąc?",
    answer:
      "Nie. Płacisz raz 64,99 zł i masz dożywotni dostęp do pliku oraz wszystkich przyszłych aktualizacji. Żadnych ukrytych kosztów, żadnych miesięcznych opłat.",
  },
  {
    question: "Mam pytanie, którego tu nie ma – jak się z Wami skontaktować?",
    answer:
      "Napisz do nas na kontakt@swiadomyportfel.pl. Odpowiadamy w ciągu 24 godzin w dni robocze. Odpowiemy na wszystko przed zakupem i po zakupie.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-bold text-neutral-900 leading-snug group-hover:text-orange-500 transition-colors text-sm sm:text-base">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-neutral-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            Masz pytania? Tu znajdziesz odpowiedzi.
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Najczęstsze pytania przed zakupem.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
