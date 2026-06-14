"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  getGoalByIds,
  LIFE_GOALS,
  PATH_BRANCH_MAP,
  TREE_PATHS,
  VIEWBOX,
} from "@/lib/constants/life-goals";

type LifeTreeSvgProps = {
  selectedGoalIds: string[];
};

const BRANCH_KEYS = [
  "branchLeft",
  "branchCenter",
  "branchRight",
  "branchLeftLow",
  "branchRightLow",
] as const;

const SECONDARY_BRANCH_KEYS = [
  "branchSecondaryLeft",
  "branchSecondaryRight",
] as const;

export function LifeTreeSvg({ selectedGoalIds }: LifeTreeSvgProps) {
  const prefersReducedMotion = useReducedMotion();
  const selectedGoals = getGoalByIds(selectedGoalIds);
  const selectedSet = new Set(selectedGoalIds);

  const pathTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1, ease: "easeInOut" as const };

  function branchOpacity(pathKey: keyof typeof TREE_PATHS): number {
    if (pathKey === "trunk") return 1;
    if (
      pathKey === "branchSecondaryLeft" ||
      pathKey === "branchSecondaryRight"
    ) {
      return 0.22;
    }
    const isHighlighted = selectedGoalIds.some(
      (goalId) => PATH_BRANCH_MAP[goalId] === pathKey,
    );
    if (selectedGoalIds.length === 0) return 0.35;
    return isHighlighted ? 1 : 0.28;
  }

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <ellipse
        cx={150}
        cy={368}
        rx={118}
        ry={14}
        fill="#e2e8f0"
        opacity={0.6}
      />
      <line
        x1={32}
        y1={368}
        x2={268}
        y2={368}
        stroke="#cbd5e1"
        strokeWidth={1.5}
        opacity={0.55}
      />

      <ellipse cx={150} cy={72} rx={72} ry={48} fill="#5B21B6" opacity={0.1} />
      <ellipse cx={108} cy={65} rx={48} ry={32} fill="#0033A0" opacity={0.08} />
      <ellipse cx={192} cy={67} rx={46} ry={30} fill="#5B21B6" opacity={0.08} />
      <ellipse cx={150} cy={52} rx={36} ry={22} fill="#0033A0" opacity={0.07} />

      <motion.path
        d={TREE_PATHS.trunk}
        fill="#1e3a5f"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={pathTransition}
      />

      {BRANCH_KEYS.map((key, i) => (
        <motion.path
          key={key}
          d={TREE_PATHS[key]}
          fill="none"
          stroke="#0033A0"
          strokeWidth={8}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.15 }}
          animate={{
            pathLength: 1,
            opacity: branchOpacity(key),
          }}
          transition={{ ...pathTransition, delay: 0.12 + i * 0.07 }}
        />
      ))}

      {SECONDARY_BRANCH_KEYS.map((key, i) => (
        <motion.path
          key={key}
          d={TREE_PATHS[key]}
          fill="none"
          stroke="#0033A0"
          strokeWidth={3.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{ pathLength: 1, opacity: branchOpacity(key) }}
          transition={{ ...pathTransition, delay: 0.45 + i * 0.06 }}
        />
      ))}

      {LIFE_GOALS.map((goal) => {
        const isSelected = selectedSet.has(goal.id);
        return (
          <motion.path
            key={`twig-${goal.id}`}
            d={goal.twigPath}
            fill="none"
            stroke="#0033A0"
            strokeWidth={3.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: isSelected ? 0.9 : 0.12,
            }}
            transition={{ ...pathTransition, delay: isSelected ? 0.5 : 0 }}
          />
        );
      })}

      {selectedGoals.map((goal, i) => {
        const { x, y } = goal.nodePosition;
        return (
          <motion.g
            key={`foliage-${goal.id}`}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.06 }}
          >
            <ellipse
              cx={x}
              cy={y - 14}
              rx={40}
              ry={24}
              fill="#5B21B6"
              opacity={0.13}
            />
            <ellipse
              cx={x - 18}
              cy={y - 18}
              rx={24}
              ry={16}
              fill="#0033A0"
              opacity={0.1}
            />
            <ellipse
              cx={x + 20}
              cy={y - 16}
              rx={22}
              ry={14}
              fill="#5B21B6"
              opacity={0.1}
            />
            <ellipse
              cx={x + 2}
              cy={y - 26}
              rx={16}
              ry={11}
              fill="#0033A0"
              opacity={0.08}
            />
          </motion.g>
        );
      })}
    </svg>
  );
}

export { PATH_BRANCH_MAP };
