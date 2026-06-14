import type { GoalIconKey } from "@/lib/constants/life-goals";
import { GOAL_ICON_MAP } from "@/lib/constants/life-goals";

type GoalIconProps = {
  icon: GoalIconKey;
  className?: string;
};

export function GoalIcon({ icon, className = "h-5 w-5" }: GoalIconProps) {
  const Icon = GOAL_ICON_MAP[icon];
  return <Icon className={className} aria-hidden="true" />;
}
