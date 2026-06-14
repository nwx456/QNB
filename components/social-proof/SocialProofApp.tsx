"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import {
  DEFAULT_SEGMENT_LABEL,
  pickRandomSocialProofScenario,
  type AcceptedStep,
  type SocialProofScenario,
} from "@/lib/constants/social-proof";
import { PeerInsightDashboard } from "./PeerInsightDashboard";
import { SocialProofCard } from "./SocialProofCard";
import { SocialProofHeader } from "./SocialProofHeader";

export function SocialProofApp() {
  const [activeScenario, setActiveScenario] =
    useState<SocialProofScenario | null>(null);
  const [acceptedSteps, setAcceptedSteps] = useState<AcceptedStep[]>([]);
  const [lastScenarioId, setLastScenarioId] = useState<string | undefined>();
  const [segmentLabel, setSegmentLabel] = useState(DEFAULT_SEGMENT_LABEL);

  const handleSimulate = useCallback(() => {
    const scenario = pickRandomSocialProofScenario(lastScenarioId);
    setSegmentLabel(scenario.segmentLabel);
    setActiveScenario(scenario);
  }, [lastScenarioId]);

  const handleDismiss = useCallback(() => {
    if (!activeScenario) return;
    setLastScenarioId(activeScenario.id);
    setActiveScenario(null);
  }, [activeScenario]);

  const handleAccept = useCallback(() => {
    if (!activeScenario) return;

    const scenario = activeScenario;
    setAcceptedSteps((prev) => [
      {
        id: `step-${scenario.id}-${Date.now()}`,
        scenarioId: scenario.id,
        goalName: scenario.trendingGoal,
        amount: scenario.suggestedAmount,
        segmentLabel: scenario.segmentLabel,
      },
      ...prev,
    ]);
    setLastScenarioId(scenario.id);
    setActiveScenario(null);
  }, [activeScenario]);

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <SocialProofHeader segmentLabel={segmentLabel} />

      <PeerInsightDashboard
        segmentLabel={segmentLabel}
        acceptedSteps={acceptedSteps}
      />

      <footer className="shrink-0 border-t border-border-default bg-white/90 px-4 pb-5 pt-3 backdrop-blur-sm">
        <button
          type="button"
          onClick={handleSimulate}
          disabled={activeScenario !== null}
          className="w-full rounded-full bg-qnb-navy py-3 text-sm font-medium text-white transition hover:bg-qnb-navy/90 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy focus-visible:ring-offset-2"
        >
          Sosyal öneriyi simüle et
        </button>
        <p className="mt-2 text-center text-[10px] text-body">
          Rastgele segment · yeni evlenen, mezun, ebeveyn ve daha fazlası
        </p>
      </footer>

      <AnimatePresence>
        {activeScenario && (
          <SocialProofCard
            key={activeScenario.id}
            scenario={activeScenario}
            onAccept={handleAccept}
            onDismiss={handleDismiss}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
