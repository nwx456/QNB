"use client";

import { motion } from "framer-motion";
import { LIFE_GOALS } from "@/lib/constants/life-goals";
import { LifeTreeProgressCard } from "../LifeTreeProgressCard";
import { GoalIcon } from "../GoalIcon";

type GoalSelectionStepProps = {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onContinue: () => void;
};

export function GoalSelectionStep({
  selectedIds,
  onToggle,
  onContinue,
}: GoalSelectionStepProps) {
  return (
    <div className="flex h-full min-h-0 flex-col px-4 pb-4 pt-3">
      <LifeTreeProgressCard selectedCount={selectedIds.length} />

      <p className="mt-3 text-center text-[12px] font-medium text-heading">
        Hayalindeki durakları seç
      </p>
      <p className="mt-0.5 text-center text-[10px] text-body">
        Hedeflerini seç, ağacın büyüsün
      </p>

      <div className="mt-4 grid flex-1 grid-cols-3 content-center gap-x-3 gap-y-5">
        {LIFE_GOALS.map((goal) => {
          const isSelected = selectedIds.includes(goal.id);
          return (
            <motion.button
              key={goal.id}
              type="button"
              aria-label={`${goal.label} hedefini ${isSelected ? "kaldır" : "seç"}`}
              aria-pressed={isSelected}
              onClick={() => onToggle(goal.id)}
              className="flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy focus-visible:ring-offset-2"
              whileTap={{ scale: 0.96 }}
            >
              <div
                className={`flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 bg-white transition ${
                  isSelected
                    ? "border-qnb-navy bg-qnb-navy/5 ring-2 ring-qnb-navy"
                    : "border-border-default hover:border-qnb-navy/40"
                }`}
              >
                <GoalIcon
                  icon={goal.icon}
                  className={`h-7 w-7 ${isSelected ? "text-qnb-purple" : "text-qnb-navy"}`}
                />
              </div>
              <span className="max-w-[80px] truncate text-center text-[10px] font-medium leading-tight text-label">
                {goal.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {selectedIds.length > 0 && (
        <p className="mt-3 text-center text-[10px] text-body">
          <span className="font-medium text-qnb-navy">
            {selectedIds.length * 2} öneri
          </span>{" "}
          ağacında seni bekliyor
        </p>
      )}

      <button
        type="button"
        disabled={selectedIds.length === 0}
        onClick={onContinue}
        className="mt-3 w-full shrink-0 rounded-full bg-qnb-navy py-3 text-sm font-medium text-white transition hover:bg-qnb-navy/90 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy focus-visible:ring-offset-2"
      >
        Hayat Ağacımı Büyüt
      </button>
    </div>
  );
}
