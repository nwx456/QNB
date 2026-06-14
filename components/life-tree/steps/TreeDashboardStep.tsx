"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { getGoalById } from "@/lib/constants/life-goals";
import { LifeTreeGoalStrip } from "../LifeTreeGoalStrip";
import { LifeTreeTreeStats } from "../LifeTreeTreeStats";
import { GoalRecommendationsSheet } from "../tree/GoalRecommendationsSheet";
import { TreeScene } from "../tree/TreeScene";

type TreeDashboardStepProps = {
  selectedIds: string[];
};

export function TreeDashboardStep({ selectedIds }: TreeDashboardStepProps) {
  const [activeGoalId, setActiveGoalId] = useState<string | null>(null);

  const handleGoalSelect = useCallback((goalId: string) => {
    setActiveGoalId((prev) => (prev === goalId ? null : goalId));
  }, []);

  const handleCta = useCallback((tipId: string, ctaLabel: string) => {
    console.info(`[LifeTree CTA] ${ctaLabel} (${tipId})`);
    setActiveGoalId(null);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveGoalId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeGoal = activeGoalId ? getGoalById(activeGoalId) : undefined;

  return (
    <div className="relative flex h-full min-h-0 flex-col gap-2 overflow-hidden px-2 pb-2 pt-2">
      <LifeTreeTreeStats selectedCount={selectedIds.length} />

      <LifeTreeGoalStrip
        selectedIds={selectedIds}
        activeGoalId={activeGoalId}
        onGoalSelect={handleGoalSelect}
      />

      <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-center overflow-hidden rounded-2xl border border-qnb-navy/10 bg-gradient-to-b from-qnb-navy/[0.05] via-white/40 to-qnb-purple/[0.04] px-1 py-1 shadow-inner">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(91,33,182,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 25%, rgba(0,51,160,0.07) 0%, transparent 40%), radial-gradient(circle at 50% 90%, rgba(0,51,160,0.06) 0%, transparent 50%)",
          }}
        />
        {selectedIds.length === 0 ? (
          <p className="relative mx-auto rounded-lg bg-white/90 px-4 py-3 text-center text-[11px] text-body shadow-sm">
            Henüz hedef seçilmedi
          </p>
        ) : (
          <div className="relative min-h-0 flex-1">
            <TreeScene
              selectedGoalIds={selectedIds}
              activeGoalId={activeGoalId}
              onGoalSelect={handleGoalSelect}
            />
          </div>
        )}
      </div>

      <div className="flex shrink-0 items-center justify-between gap-2 rounded-xl border border-border-default/60 bg-white/80 px-3 py-1.5">
        <p className="text-[10px] text-body">
          Meyvelere veya duraklara dokun · önerileri keşfet
        </p>
      </div>

      <AnimatePresence>
        {activeGoal && (
          <GoalRecommendationsSheet
            key={activeGoal.id}
            goal={activeGoal}
            onClose={() => setActiveGoalId(null)}
            onCta={handleCta}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
