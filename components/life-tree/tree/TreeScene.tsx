"use client";

import { getGoalByIds } from "@/lib/constants/life-goals";
import { GoalNode } from "./GoalNode";
import { LifeTreeSvg } from "./LifeTreeSvg";

type TreeSceneProps = {
  selectedGoalIds: string[];
  activeGoalId: string | null;
  onGoalSelect: (goalId: string) => void;
};

export function TreeScene({
  selectedGoalIds,
  activeGoalId,
  onGoalSelect,
}: TreeSceneProps) {
  const selectedGoals = getGoalByIds(selectedGoalIds);

  return (
    <div className="relative mx-auto aspect-[300/380] h-auto w-full max-h-full">
      <LifeTreeSvg selectedGoalIds={selectedGoalIds} />

      {selectedGoals.map((goal, index) => (
        <GoalNode
          key={goal.id}
          goal={goal}
          index={index}
          isActive={activeGoalId === goal.id}
          onSelect={onGoalSelect}
        />
      ))}
    </div>
  );
}
