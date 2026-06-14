"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";
import { ANIMATION } from "@/lib/constants/brand";

const MEMBERS = [
  "Ömer Dovan",
  "Arda K. Yılmaz",
  "Ayberk Tanrıverdir",
  "Arda Türk",
] as const;

export function ClosingSection() {
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
      id="closing"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-t border-border-purple/40 bg-white dot-grid"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-qnb-navy/[0.04] via-transparent to-qnb-purple/[0.07]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-qnb-navy lg:text-sm"
        >
          Teşekkürler
        </motion.p>

        <motion.h2
          variants={item}
          className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="brand-gradient-text">Dinlediğiniz için teşekkürler</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-body lg:text-xl"
        >
          Hayatın akışına paralel banka çözümlerini birlikte şekillendirmeye hazırız.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-14 w-full max-w-xl rounded-3xl border border-border-purple/50 bg-white/90 p-8 shadow-sm backdrop-blur-sm lg:p-10"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-purple/50 bg-gradient-to-br from-qnb-navy/5 to-qnb-purple/10">
              <MessageCircleQuestion
                className="h-8 w-8 text-qnb-navy"
                aria-hidden="true"
              />
            </span>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy">
              Soru & Cevap
            </p>
            <p className="text-2xl font-medium text-label lg:text-3xl">
              Sorularınızı bekliyoruz
            </p>
            <p className="max-w-md text-base leading-relaxed text-body">
              Çözümlerimiz, teknik yaklaşımımız veya uygulama planımız hakkında
              merak ettiklerinizi yanıtlamaktan memnuniyet duyarız.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy">
            flux
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-body lg:text-base">
            {MEMBERS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
