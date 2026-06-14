import type { RiskLevel } from "@/lib/simulator/types";
import { formatDelta } from "@/lib/utils/format";

const RISK_LABELS: Record<RiskLevel, { label: string; className: string }> = {
  low: { label: "Düşük risk", className: "bg-qnb-navy/10 text-qnb-navy" },
  medium: { label: "Orta risk", className: "bg-qnb-purple/10 text-qnb-purple" },
  high: { label: "Yüksek risk", className: "bg-red-50 text-red-600" },
};

type SummaryCardProps = {
  summary: string;
  riskLevel: RiskLevel;
  monthlyDelta: number;
};

export function SummaryCard({
  summary,
  riskLevel,
  monthlyDelta,
}: SummaryCardProps) {
  const risk = RISK_LABELS[riskLevel];

  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${risk.className}`}
        >
          {risk.label}
        </span>
        <span
          className={`tabular-nums text-xs font-medium ${
            monthlyDelta >= 0 ? "text-red-600" : "text-qnb-navy"
          }`}
        >
          {formatDelta(monthlyDelta)}
        </span>
      </div>
      <p className="phone-text text-[13px] text-label">{summary}</p>
    </div>
  );
}
