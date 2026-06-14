"use client";

import { Sparkles, Target, TreeDeciduous } from "lucide-react";
import { TOTAL_GOALS } from "./LifeTreeProgressCard";

type LifeTreeTreeStatsProps = {
  selectedCount: number;
};

export function LifeTreeTreeStats({ selectedCount }: LifeTreeTreeStatsProps) {
  const growthPercent = Math.round((selectedCount / TOTAL_GOALS) * 100);
  const tipCount = selectedCount * 2;

  return (
    <div className="grid shrink-0 grid-cols-3 gap-1.5">
      <StatPill
        icon={TreeDeciduous}
        label="Büyüme"
        value={`%${growthPercent}`}
      />
      <StatPill icon={Target} label="Durak" value={String(selectedCount)} />
      <StatPill icon={Sparkles} label="Öneri" value={String(tipCount)} />
    </div>
  );
}

function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border-default/50 bg-white/90 px-1 py-2 shadow-sm">
      <Icon className="h-3.5 w-3.5 text-qnb-navy" aria-hidden="true" />
      <span className="mt-0.5 text-[11px] font-semibold tabular-nums text-heading">
        {value}
      </span>
      <span className="text-[8px] text-body">{label}</span>
    </div>
  );
}
