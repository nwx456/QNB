"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LifeGoal } from "@/lib/constants/life-goals";
import { GoalIcon } from "../GoalIcon";

type GoalRecommendationsSheetProps = {
  goal: LifeGoal;
  onClose: () => void;
  onCta: (tipId: string, ctaLabel: string) => void;
};

export function GoalRecommendationsSheet({
  goal,
  onClose,
  onCta,
}: GoalRecommendationsSheetProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <button
        type="button"
        aria-label="Kapat"
        className="absolute inset-0 z-30 bg-slate-900/10"
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="goal-recommendations-title"
        initial={prefersReducedMotion ? false : { y: "100%" }}
        animate={{ y: 0 }}
        exit={prefersReducedMotion ? undefined : { y: "100%" }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 380, damping: 32 }
        }
        className="absolute inset-x-0 bottom-0 z-40 flex max-h-[48%] flex-col rounded-t-2xl border-t border-border-default bg-white shadow-[0_-8px_30px_rgba(0,51,160,0.08)]"
      >
        <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-border-default" />

        <div className="flex items-center gap-2.5 border-b border-border-default/60 px-4 pb-3 pt-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-qnb-navy/20 bg-qnb-navy/5">
            <GoalIcon icon={goal.icon} className="h-4 w-4 text-qnb-navy" />
          </div>
          <div className="min-w-0 flex-1">
            <p
              id="goal-recommendations-title"
              className="truncate text-sm font-medium text-heading"
            >
              {goal.label}
            </p>
            <p className="text-[10px] text-body">
              {goal.microTips.length} profil bazlı öneri
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-[11px] font-medium text-qnb-navy underline-offset-2 hover:underline"
          >
            Kapat
          </button>
        </div>

        <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto px-4 py-3">
          {goal.microTips.map((tip, index) => (
            <li
              key={tip.id}
              className="rounded-xl border border-border-default/80 bg-white px-3.5 py-3 shadow-sm"
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-qnb-navy">
                Öneri {index + 1}
              </p>
              <p className="phone-text mt-1.5 text-[12px] leading-snug text-label">
                {tip.text}
              </p>
              <button
                type="button"
                onClick={() => onCta(tip.id, tip.ctaLabel)}
                className="mt-2.5 w-full rounded-full border border-qnb-navy/20 bg-qnb-navy/5 py-2 text-[11px] font-medium text-qnb-navy transition hover:bg-qnb-navy/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy"
              >
                {tip.ctaLabel}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
