"use client";

import { TrendingUp, Users } from "lucide-react";
import type { AcceptedStep } from "@/lib/constants/social-proof";
import { SOCIAL_PROOF_SCENARIOS } from "@/lib/constants/social-proof";

type PeerInsightDashboardProps = {
  segmentLabel: string;
  acceptedSteps: AcceptedStep[];
};

const defaultScenario = SOCIAL_PROOF_SCENARIOS[0];

export function PeerInsightDashboard({
  segmentLabel,
  acceptedSteps,
}: PeerInsightDashboardProps) {
  const previewScenario =
    SOCIAL_PROOF_SCENARIOS.find((s) => s.segmentLabel === segmentLabel) ??
    defaultScenario;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-3">
      {acceptedSteps.length > 0 && (
        <div className="flex items-center gap-2 rounded-xl border border-qnb-purple/25 bg-qnb-purple/5 px-3 py-2">
          <TrendingUp className="h-4 w-4 shrink-0 text-qnb-purple" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium text-qnb-purple">
              Segmentinle uyumlu adımlar
            </p>
            <p className="text-sm font-semibold tabular-nums text-heading">
              {acceptedSteps.length} adım
            </p>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border-default bg-white p-3.5 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-qnb-navy/5">
            <Users className="h-4 w-4 text-qnb-navy" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-heading">Segment özeti</p>
            <p className="text-[10px] text-body">{segmentLabel}</p>
          </div>
          <span className="tabular-nums text-sm font-semibold text-qnb-purple">
            %{previewScenario.adoptionPercent}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-qnb-navy/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-qnb-navy to-qnb-purple transition-all duration-700 ease-out"
            style={{ width: `${previewScenario.adoptionPercent}%` }}
          />
        </div>
        <p className="mt-2 text-[10px] leading-snug text-body">
          Benzer profildeki kullanıcıların{" "}
          <span className="font-medium text-label">
            %{previewScenario.adoptionPercent}&apos;i
          </span>{" "}
          şu an &quot;{previewScenario.trendingGoal}&quot; oluşturuyor.
        </p>
      </div>

      <div className="rounded-xl border border-border-default/80 bg-white/90 p-3 shadow-sm">
        <p className="text-[10px] font-medium uppercase tracking-wide text-qnb-navy">
          Aldığın adımlar
        </p>
        {acceptedSteps.length === 0 ? (
          <p className="mt-2 rounded-lg bg-surface-alt/50 px-2 py-3 text-center text-[11px] text-body">
            Henüz adım yok. Sosyal öneriyi simüle edin ve başlayın.
          </p>
        ) : (
          <ul className="mt-2 max-h-[160px] space-y-2 overflow-y-auto">
            {acceptedSteps.map((step) => {
              const scenario = SOCIAL_PROOF_SCENARIOS.find(
                (s) => s.id === step.scenarioId,
              );
              const Icon = scenario?.icon;
              return (
                <li
                  key={step.id}
                  className="flex items-center gap-2 rounded-lg border border-qnb-purple/20 bg-qnb-purple/5 px-2 py-2 text-[11px]"
                >
                  {Icon && (
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 text-qnb-purple"
                      aria-hidden="true"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-label">
                      {step.goalName}
                    </p>
                    <p className="truncate text-[10px] text-body">
                      {step.segmentLabel}
                    </p>
                  </div>
                  <span className="shrink-0 tabular-nums font-medium text-emerald-600">
                    {step.amount.toLocaleString("tr-TR")} TL/ay
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <p className="text-center text-[10px] text-body">
        Veriler anonimleştirilmiş segment ortalamasına dayanır, kişisel bilgi
        paylaşılmaz.
      </p>
    </div>
  );
}
