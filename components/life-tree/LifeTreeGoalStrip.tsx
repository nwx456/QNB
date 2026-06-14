"use client";

import type { LifeGoal } from "@/lib/constants/life-goals";
import { getGoalByIds } from "@/lib/constants/life-goals";
import { GoalIcon } from "./GoalIcon";

type LifeTreeGoalStripProps = {
  selectedIds: string[];
  activeGoalId: string | null;
  onGoalSelect: (goalId: string) => void;
};

export function LifeTreeGoalStrip({
  selectedIds,
  activeGoalId,
  onGoalSelect,
}: LifeTreeGoalStripProps) {
  const goals = getGoalByIds(selectedIds);
  if (goals.length === 0) return null;

  return (
    <div className="shrink-0 rounded-xl border border-border-default/60 bg-white/85 px-2.5 py-2 shadow-sm">
      <p className="mb-1.5 px-0.5 text-[9px] font-medium uppercase tracking-wide text-qnb-navy">
        Seçili duraklar
      </p>
      <div className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {goals.map((goal) => (
          <GoalChip
            key={goal.id}
            goal={goal}
            isActive={activeGoalId === goal.id}
            onSelect={() => onGoalSelect(goal.id)}
          />
        ))}
      </div>
    </div>
  );
}

function GoalChip({
  goal,
  isActive,
  onSelect,
}: {
  goal: LifeGoal;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy ${
        isActive
          ? "border-qnb-purple bg-qnb-purple/10 text-qnb-purple"
          : "border-border-default bg-white text-label hover:border-qnb-navy/30"
      }`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          isActive ? "bg-qnb-purple/15" : "bg-qnb-navy/5"
        }`}
      >
        <GoalIcon
          icon={goal.icon}
          className={`h-3.5 w-3.5 ${isActive ? "text-qnb-purple" : "text-qnb-navy"}`}
        />
      </span>
      <span className="max-w-[72px] truncate text-[10px] font-medium">
        {goal.label}
      </span>
    </button>
  );
}
