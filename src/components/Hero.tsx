"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-16">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
        >
          CZY WIESZ ILE PIENIĘDZY{" "}
          <span className="text-orange-400">TRACISZ PRZEZ IMPULS?</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Większość ludzi traci{" "}
          <span className="text-white font-bold">4 000–6 000 zł rocznie</span>{" "}
          na zakupy, których potem żałuje. Istnieje jeden sposób, żeby to zatrzymać. Bez wyrzeczeń i bez ograniczeń.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="flex items-center justify-center mb-14"
        >
          <a
            href="#produkt"
            className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            POKAŻ MI, JAK TO ZATRZYMAĆ
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-orange-400">⚡</span> Dostęp natychmiastowy
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-orange-400">★</span> 4,9/5 – 743 oceny
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-orange-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
