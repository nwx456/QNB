"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ANIMATION, BUDGET, COLORS } from "@/lib/constants/brand";

type RingChartProps = {
  expensesPercent: number;
  savingsPercent: number;
  compact?: boolean;
  baselineExpenses?: number;
};

const RADIUS = 44;
const STROKE = 10;
const SIZE = (RADIUS + STROKE) * 2;
const CENTER = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function RingChart({
  expensesPercent,
  savingsPercent,
  compact = false,
  baselineExpenses = BUDGET.defaultExpenses,
}: RingChartProps) {
  const prefersReducedMotion = useReducedMotion();
  const expenseLength = (expensesPercent / 100) * CIRCUMFERENCE;
  const savingsLength = (savingsPercent / 100) * CIRCUMFERENCE;

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: ANIMATION.chartDuration, ease: "easeInOut" as const };

  const expenseColor =
    expensesPercent > baselineExpenses ? COLORS.expenseRed : COLORS.qnbNavy;

  return (
    <div className={`relative flex flex-col items-center ${compact ? "scale-90" : ""}`}>
      <div
        className="relative inline-flex"
        role="img"
        aria-label={`Harcama yüzde ${expensesPercent}, birikim yüzde ${savingsPercent}`}
      >
        <svg width={SIZE} height={SIZE} className="-rotate-90">
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={STROKE}
          />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke={expenseColor}
            strokeWidth={STROKE}
            strokeLinecap="round"
            animate={{
              strokeDasharray: `${expenseLength} ${CIRCUMFERENCE - expenseLength}`,
            }}
            transition={transition}
          />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke={COLORS.qnbPurple}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDashoffset={-expenseLength}
            animate={{
              strokeDasharray: `${savingsLength} ${CIRCUMFERENCE - savingsLength}`,
              strokeDashoffset: -expenseLength,
            }}
            transition={transition}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="tabular-nums text-xl font-medium text-heading">
            %{expensesPercent}
          </span>
          <span className="text-[10px] text-body">Harcama</span>
        </div>
      </div>
    </div>
  );
}
