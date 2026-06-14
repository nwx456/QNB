"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { useDriveMode } from "@/components/phone-home/DriveModeContext";
import { VoiceMicButton } from "@/components/phone-home/VoiceMicButton";
import { LifeTreeAppHeader } from "./LifeTreeAppHeader";
import { LifeTreeStepTabs } from "./LifeTreeStepTabs";
import { GoalSelectionStep } from "./steps/GoalSelectionStep";
import { TreeDashboardStep } from "./steps/TreeDashboardStep";

type Step = "goals" | "tree";

export function LifeTreeApp() {
  const prefersReducedMotion = useReducedMotion();
  const { isSilent } = useDriveMode();
  const [step, setStep] = useState<Step>("goals");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleGoal = useCallback((id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  }, []);

  const stepVariants = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -12 },
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <LifeTreeAppHeader
        selectedCount={selectedIds.length}
        showEditLink={step === "tree"}
        onEditGoals={() => setStep("goals")}
      />

      {isSilent && step === "tree" && (
        <div className="flex shrink-0 justify-center border-b border-border-default/60 bg-qnb-purple/5 py-2">
          <VoiceMicButton size="compact" label="Ağacını sesli keşfet" />
        </div>
      )}

      <LifeTreeStepTabs step={step} />

      <div className="min-h-0 flex-1">
        <AnimatePresence mode="wait">
          {step === "goals" ? (
            <motion.div
              key="goals"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <GoalSelectionStep
                selectedIds={selectedIds}
                onToggle={toggleGoal}
                onContinue={() => setStep("tree")}
              />
            </motion.div>
          ) : (
            <motion.div
              key="tree"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <TreeDashboardStep selectedIds={selectedIds} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
