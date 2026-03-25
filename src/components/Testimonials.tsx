import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Marta K.",
    info: "Nauczycielka, 34 lata",
    avatar: "MK",
    text: "Przez 3 lata nie mogłam odłożyć złotówki. Po pierwszym miesiącu mam odłożoną 1/3 na wakacje. Dziękuję za pomoc.",
    result: "Zaoszczędziła 800 zł w 1. miesiącu",
  },
  {
    name: "Tomasz W.",
    info: "Programista, 28 lat",
    avatar: "TW",
    text: "Myślałem że to kolejna motywacyjna bzdura. Okazało się inaczej. Czytasz i od razu wiesz co robić. Konkretny plan działania, który mogłem wdrożyć od razu. Po 4 miesiącach udało mi się odłożyć 2500 zł. Wcześniej nie miałem złotówki.",
    result: "Fundusz awaryjny 4 000 zł",
  },
  {
    name: "Agnieszka N.",
    info: "Freelancerka, 31 lat",
    avatar: "AN",
    text: "Zarabiam nieregularnie. Jak przyszły pieniądze to je wydawałam. Często nie starczyło mi do końca miesiąca. Zaczęłam stosować metodę i ogarnęłam swoje wydatki. Pierwszy raz od lat czuję się stabilnie.",
    result: "Nie żyje już od wypłaty do wypłaty",
  },
  {
    name: "Piotr M.",
    info: "Menedżer, 41 lat",
    avatar: "PM",
    text: "Kupiłem z ciekawości. Okazało się, że przez lata wpadałem w każdą pułapkę opisaną w ebooku. Sama świadomość tego mechanizmu zmieniła moje zachowanie. Polecam każdemu.",
    result: "Ograniczył zbędne wydatki o 40%",
  },
  {
    name: "Karolina S.",
    info: "Pielęgniarka, 26 lat",
    avatar: "KS",
    text: "Myślałam że i tak nic mnie nie zmieni. Po 6 tygodniach przestałam kupować ubrania, które zakładałam raz. Mam 30 rzeczy które lubię zamiast 200 których nie noszę. I 1400 zł więcej na koncie.",
    result: "1 400 zł oszczędności na ubraniach",
  },
  {
    name: "Rafał B.",
    info: "Elektryk, 37 lat",
    avatar: "RB",
    text: "Prosta i konkretna. W jeden weekend poznałem cały sposób i od razu zacząłem wdrażać. Po 2 miesiącach spłaciłem połowę zadłużenia na karcie.",
    result: "Spłacił połowę długu na karcie",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="opinie" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
            Rezultaty
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
            Oni nie zwlekali. Zmienili swoje życie.
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Ponad 2000 osób wdrożyło ten sposób. Oto co mówią po kilku tygodniach.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="font-black text-neutral-900">4,9</span>
            <span className="text-neutral-400 text-sm">· 743 oceny</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {testimonials.map(({ name, info, avatar, text, result }, i) => (
            <AnimatedSection key={name} delay={i * 0.06}>
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col h-full hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <Quote className="w-7 h-7 text-orange-200 mb-3 flex-shrink-0" />
                <Stars />
                <p className="mt-3 text-neutral-700 text-sm leading-relaxed flex-1">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full self-start">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {result}
                </div>
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-neutral-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                    {avatar}
                  </div>
                  <div>
                    <p className="text-sm font-black text-neutral-900">{name}</p>
                    <p className="text-xs text-neutral-400">{info}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <a
            href="#produkt"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-lg shadow-lg shadow-orange-500/20"
          >
            DOŁĄCZ DO NICH
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
