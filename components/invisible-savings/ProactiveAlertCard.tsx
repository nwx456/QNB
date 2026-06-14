"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { SavingsScenario } from "@/lib/constants/invisible-savings";
import { GOAL_CONFIG } from "@/lib/constants/invisible-savings";

type ProactiveAlertCardProps = {
  scenario: SavingsScenario;
  onDismiss: () => void;
};

export function ProactiveAlertCard({
  scenario,
  onDismiss,
}: ProactiveAlertCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = scenario.icon;

  return (
    <>
      <button
        type="button"
        aria-label="Kapat"
        className="absolute inset-0 z-30 bg-slate-900/10"
        onClick={onDismiss}
      />
      <motion.div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="proactive-alert-title"
        initial={prefersReducedMotion ? false : { y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={prefersReducedMotion ? undefined : { y: "100%", opacity: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 380, damping: 32 }
        }
        className="absolute inset-x-0 bottom-0 z-40 rounded-t-2xl border-t border-border-default bg-white px-4 pb-5 pt-4 shadow-[0_-8px_30px_rgba(0,51,160,0.08)]"
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border-default" />

        <div className="mb-3 flex items-center justify-between rounded-xl border border-qnb-purple/25 bg-gradient-to-r from-qnb-purple/10 to-qnb-navy/5 px-3 py-2.5">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-qnb-navy">
              Hedefe katkı
            </p>
            <p className="text-lg font-semibold tabular-nums text-qnb-purple">
              +{scenario.transferAmount.toLocaleString("tr-TR")} TL
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-body">Aktarıldı</p>
            <p className="text-[11px] font-medium text-label">
              {GOAL_CONFIG.goalName}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-qnb-purple/10">
            <Icon className="h-5 w-5 text-qnb-purple" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p
              id="proactive-alert-title"
              className="text-[11px] font-medium uppercase tracking-wide text-qnb-navy"
            >
              {scenario.alertTitle}
            </p>
            <p className="phone-text mt-2 text-[13px] leading-snug text-label">
              {scenario.alertMessage}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg border border-qnb-navy/10 bg-qnb-navy/5 px-3 py-2">
          <Sparkles
            className="h-4 w-4 shrink-0 text-qnb-navy"
            aria-hidden="true"
          />
          <p className="text-[10px] leading-snug text-body">
            {scenario.explainLine}
          </p>
        </div>

        <button
          type="button"
          onClick={onDismiss}
          className="mt-4 w-full rounded-full bg-qnb-navy py-2.5 text-[12px] font-medium text-white transition hover:bg-qnb-navy/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy"
        >
          Tamam, teşekkürler
        </button>
      </motion.div>
    </>
  );
}
