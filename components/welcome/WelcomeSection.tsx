"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ANIMATION } from "@/lib/constants/brand";

const MEMBERS = [
  "Ömer Dovan",
  "Arda K. Yılmaz",
  "Ayberk Tanrıverdir",
  "Arda Türk",
] as const;

export function WelcomeSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : ANIMATION.staggerDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : ANIMATION.fadeDuration },
    },
  };

  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dot-grid"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-qnb-navy/[0.03] via-transparent to-qnb-purple/[0.06]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-qnb-navy lg:text-sm"
        >
          QNB · Pitch Sunumu
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 text-7xl font-medium tracking-tight sm:text-8xl lg:text-9xl"
        >
          <span className="brand-gradient-text">flux</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-xl leading-relaxed text-body lg:text-2xl"
        >
          Hayatın akışına paralel banka çözümleri
        </motion.p>

        <motion.div variants={item} className="mt-14 w-full max-w-lg">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy">
            Ekip
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {MEMBERS.map((name) => (
              <li
                key={name}
                className="rounded-2xl border border-border-purple/40 bg-white/80 px-5 py-4 text-base font-medium text-label shadow-sm backdrop-blur-sm lg:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.a
        href="#simulator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.2, duration: 0.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-sm text-body transition-colors hover:text-qnb-navy"
        aria-label="Sunuma devam et"
      >
        <span>Devam</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
