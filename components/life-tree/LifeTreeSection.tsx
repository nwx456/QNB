"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, Sprout, TrendingUp } from "lucide-react";
import { SimulatorTryButton } from "@/components/SimulatorTryButton";
import { LifeTreePhoneMockup } from "./LifeTreePhoneMockup";

const features = [
  {
    icon: Sprout,
    title: "Dinamik hayat evresi",
    desc: "Öğrencilikten mezuniyete, her evrede farklı duraklar ve proaktif hedef önerileri.",
  },
  {
    icon: TrendingUp,
    title: "Görsel ilerleme",
    desc: "Hedeflerinize yaklaştıkça ağacınız büyür; tamamlama arzusuyla düzenli takip.",
  },
  {
    icon: Lightbulb,
    title: "Profil bazlı öneriler",
    desc: "Her dalda size özel birikim, kredi ve sigorta önerileri; karmaşık veri arka planda.",
  },
];

export function LifeTreeSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="life-tree"
      className="border-t border-border-purple/40 dot-grid py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 xl:max-w-[90rem]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-10 lg:pl-10 xl:pl-16"
          >
            <div className="max-w-2xl lg:max-w-3xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-qnb-navy lg:text-sm">
                QNB · Hayat Ağacı
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight lg:text-5xl">
                <span className="brand-gradient-text">
                  Dinamik yol haritanız büyüsün
                </span>
              </h2>
            </div>

            <ul className="max-w-2xl space-y-4 lg:max-w-3xl">
              {features.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex gap-5 rounded-2xl border border-border-purple/40 bg-white p-5 shadow-sm lg:p-6"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border-purple/50 bg-gradient-to-br from-qnb-navy/5 to-qnb-purple/10">
                    <Icon className="h-7 w-7 text-qnb-navy" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-medium text-label lg:text-xl">{title}</p>
                    <p className="mt-1.5 text-base leading-relaxed text-body">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <SimulatorTryButton href="#life-tree" />
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:justify-end lg:self-start">
            <LifeTreePhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
