"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Sorun",
    desc: "\"Eve kedi alsam ne olur?\" gibi doğal bir cümle yazın veya önerilen senaryolardan birini seçin.",
  },
  {
    num: "02",
    title: "Analiz",
    desc: "AI profilinize göre mama, veteriner, kasko ve diğer kalemleri anında modelleyip bütçe etkisini hesaplar.",
  },
  {
    num: "03",
    title: "Karar verin",
    desc: "Görsel grafikler, masraf dökümü ve kişisel önerilerle bilinçli karar alın, risk almadan.",
  },
];

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="border-t border-border-purple/30 bg-gradient-to-b from-surface-alt to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy">
            Nasıl çalışır
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-heading lg:text-4xl">
            Üç adımda finansal kum havuzu
          </h2>
          <p className="mt-4 text-lg text-body">
            Karmaşık hesaplamalar arka planda kalır. Siz yalnızca sorarsınız,
            anlaşılır sonuç alırsınız.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border-purple/40 bg-white p-8 shadow-sm shadow-qnb-navy/5"
            >
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 hidden h-px w-8 translate-x-full bg-border-default md:block"
                  aria-hidden="true"
                />
              )}
              <span className="font-mono text-sm font-medium text-qnb-purple">
                {step.num}
              </span>
              <h3 className="mt-4 text-xl font-medium text-heading">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
