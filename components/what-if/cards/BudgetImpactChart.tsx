"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ANIMATION } from "@/lib/constants/brand";
import type { BudgetSplit } from "@/lib/simulator/types";
import { RingChart } from "./RingChart";

type BudgetImpactChartProps = {
  before: BudgetSplit;
  after: BudgetSplit;
};

function BarPair({
  label,
  beforeVal,
  afterVal,
  color,
}: {
  label: string;
  beforeVal: number;
  afterVal: number;
  color: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] text-body">
        <span>{label}</span>
        <span className="tabular-nums">
          %{beforeVal} → %{afterVal}
        </span>
      </div>
      <div className="flex gap-2">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: prefersReducedMotion ? `${beforeVal}%` : 0 }}
            animate={{ width: `${beforeVal}%` }}
            transition={{ duration: ANIMATION.chartDuration }}
          />
        </div>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
          <motion.div
            className="h-full rounded-full opacity-90"
            style={{ backgroundColor: color }}
            initial={{ width: prefersReducedMotion ? `${afterVal}%` : 0 }}
            animate={{ width: `${afterVal}%` }}
            transition={{ duration: ANIMATION.chartDuration, delay: 0.15 }}
          />
        </div>
      </div>
    </div>
  );
}

export function BudgetImpactChart({ before, after }: BudgetImpactChartProps) {
  return (
    <div className="rounded-xl border border-border-default bg-surface-alt p-3.5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-medium text-heading">Bütçe etkisi</p>
        <div className="flex gap-3 text-[10px] text-body">
          <span>Önce</span>
          <span>Sonra</span>
        </div>
      </div>

      <div className="space-y-3">
        <BarPair
          label="Harcama"
          beforeVal={before.expenses}
          afterVal={after.expenses}
          color="#dc2626"
        />
        <BarPair
          label="Birikim"
          beforeVal={before.savings}
          afterVal={after.savings}
          color="#0033A0"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <div className="relative inline-flex">
          <RingChart
            expensesPercent={after.expenses}
            savingsPercent={after.savings}
            compact
            baselineExpenses={before.expenses}
          />
        </div>
      </div>
    </div>
  );
}
