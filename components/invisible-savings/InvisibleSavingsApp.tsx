"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { useDriveMode } from "@/components/phone-home/DriveModeContext";
import { VoiceCommandFooter } from "@/components/phone-home/VoiceCommandFooter";
import {
  GOAL_CONFIG,
  pickRandomScenario,
  type ActivityItem,
  type SavingsScenario,
} from "@/lib/constants/invisible-savings";
import { InvisibleSavingsHeader } from "./InvisibleSavingsHeader";
import { ProactiveAlertCard } from "./ProactiveAlertCard";
import { SavingsDashboard } from "./SavingsDashboard";

export function InvisibleSavingsApp() {
  const { isSilent, primaryButtonClass } = useDriveMode();
  const [activeScenario, setActiveScenario] = useState<SavingsScenario | null>(
    null,
  );
  const [savedAmount, setSavedAmount] = useState<number>(
    GOAL_CONFIG.goalInitialSaved,
  );
  const [transfers, setTransfers] = useState<ActivityItem[]>([]);
  const [lastScenarioId, setLastScenarioId] = useState<string | undefined>();

  const totalContributed = useMemo(
    () => transfers.reduce((sum, t) => sum + t.amount, 0),
    [transfers],
  );

  const handleSimulate = useCallback(() => {
    const scenario = pickRandomScenario(lastScenarioId);
    setActiveScenario(scenario);
  }, [lastScenarioId]);

  const handleDismiss = useCallback(() => {
    if (!activeScenario) return;

    const scenario = activeScenario;
    setSavedAmount((prev) => prev + scenario.transferAmount);
    setTransfers((prev) => [
      {
        id: `transfer-${scenario.id}-${Date.now()}`,
        label: `Hopti · ${scenario.behaviorShort}`,
        amount: scenario.transferAmount,
        type: "transfer",
        scenarioId: scenario.id,
      },
      ...prev,
    ]);
    setLastScenarioId(scenario.id);
    setActiveScenario(null);
  }, [activeScenario]);

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <InvisibleSavingsHeader />

      <SavingsDashboard
        savedAmount={savedAmount}
        transfers={transfers}
        totalContributed={totalContributed}
      />

      <VoiceCommandFooter hint="Senaryoyu sesli başlat">
        {!isSilent && (
          <div>
            <button
              type="button"
              onClick={handleSimulate}
              disabled={activeScenario !== null}
              className={`w-full rounded-full bg-qnb-navy font-medium text-white transition hover:bg-qnb-navy/90 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy focus-visible:ring-offset-2 ${primaryButtonClass}`}
            >
              Senaryoyu simüle et
            </button>
            <p className="mt-2 text-center text-[10px] text-body">
              Rastgele senaryo · kahve, yemek, ulaşım ve daha fazlası
            </p>
          </div>
        )}
      </VoiceCommandFooter>

      <AnimatePresence>
        {activeScenario && (
          <ProactiveAlertCard
            key={activeScenario.id}
            scenario={activeScenario}
            onDismiss={handleDismiss}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
