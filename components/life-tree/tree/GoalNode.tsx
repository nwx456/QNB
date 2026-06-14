"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LifeGoal } from "@/lib/constants/life-goals";
import { VIEWBOX } from "@/lib/constants/life-goals";
import { GoalIcon } from "../GoalIcon";

type GoalNodeProps = {
  goal: LifeGoal;
  index: number;
  isActive: boolean;
  onSelect: (goalId: string) => void;
};

export function GoalNode({ goal, index, isActive, onSelect }: GoalNodeProps) {
  const prefersReducedMotion = useReducedMotion();
  const { x, y } = goal.nodePosition;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20,
        delay: 0.55 + index * 0.06,
      }}
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{
        left: `${(x / VIEWBOX.width) * 100}%`,
        top: `${(y / VIEWBOX.height) * 100}%`,
      }}
    >
      <button
        type="button"
        aria-label={`${goal.label}, önerileri görüntüle`}
        aria-pressed={isActive}
        onClick={() => onSelect(goal.id)}
        className={`flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 bg-gradient-to-b from-white to-qnb-navy/5 shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy focus-visible:ring-offset-2 ${
          isActive
            ? "border-qnb-purple ring-2 ring-qnb-purple/40 scale-105"
            : "border-qnb-navy/30 hover:border-qnb-navy/50 hover:shadow-xl"
        }`}
      >
        <GoalIcon icon={goal.icon} className="h-7 w-7 text-qnb-navy" />
      </button>
      <span className="mt-1 max-w-[72px] truncate text-center text-[10px] font-medium leading-tight text-label pointer-events-none">
        {goal.label}
      </span>
    </motion.div>
  );
}
