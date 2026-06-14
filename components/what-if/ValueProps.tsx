"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, Repeat, Sparkles, Target } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Anında etki analizi",
    desc: "Senaryo sorduğunuz anda aylık bütçe, birikim oranı ve nakit akışı değişimini görürsünüz.",
  },
  {
    icon: Target,
    title: "Context-aware deneyim",
    desc: "Gelir, birikim hedefi ve harcama alışkanlıklarınıza göre kişiselleştirilmiş yanıtlar.",
  },
  {
    icon: Layers,
    title: "Sandbox güvenliği",
    desc: "Gerçek hesabınıza dokunulmaz. Her senaryo izole bir kum havuzunda test edilir.",
  },
  {
    icon: Repeat,
    title: "Danışma alışkanlığı",
    desc: "Her büyük karar öncesi uygulamaya dönme alışkanlığı, finansal güvenlik ağınız.",
  },
];

export function ValueProps() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-gradient-to-b from-white to-surface-purple py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy">
            Neden Ne Olurdu?
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-heading lg:text-4xl">
            Bankacılık kararları için güvenilir rehber
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border-purple/40 bg-white p-8 shadow-sm shadow-qnb-purple/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-qnb-navy/10 to-qnb-purple/15">
                <item.icon className="h-5 w-5 text-qnb-purple" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-heading">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
