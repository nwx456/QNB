"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightLeft, Eye, MessageSquare } from "lucide-react";
import { SimulatorTryButton } from "@/components/SimulatorTryButton";
import { InvisibleSavingsPhoneMockup } from "./InvisibleSavingsPhoneMockup";

const features = [
  {
    icon: Eye,
    title: "Patern tespiti",
    desc: "Günlük harcama alışkanlıklarınız izlenir; olumlu sapmalar anında yakalanır, reaktif değil proaktif.",
  },
  {
    icon: ArrowRightLeft,
    title: "Otomatik aktarım",
    desc: "Fark ettiğiniz tasarruf (ör. 450 TL kahve) arka planda Yaz Tatili gibi hedefinize yönlendirilir.",
  },
  {
    icon: MessageSquare,
    title: "Şeffaf açıklama",
    desc: "Neden, ne kadar ve hangi hedef; AI kararları açıklanabilir sunulur, güven ve pozitif pekiştirme yaratır.",
  },
];

export function InvisibleSavingsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="invisible-savings"
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
                QNB · Hopti
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight lg:text-5xl">
                <span className="brand-gradient-text">
                  Proaktif birikim, ihtiyaç oluşmadan önce
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
              <SimulatorTryButton href="#invisible-savings" />
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:justify-end lg:self-start">
            <InvisibleSavingsPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
