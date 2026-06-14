import type { ScenarioResult } from "@/lib/simulator/types";
import { BudgetImpactChart } from "./BudgetImpactChart";
import { CostBreakdownCard } from "./CostBreakdownCard";
import { RecommendationCard } from "./RecommendationCard";
import { SummaryCard } from "./SummaryCard";

type ScenarioResultPanelProps = {
  result: ScenarioResult;
};

export function ScenarioResultPanel({ result }: ScenarioResultPanelProps) {
  return (
    <div className="space-y-2">
      <SummaryCard
        summary={result.summary}
        riskLevel={result.riskLevel}
        monthlyDelta={result.monthlyDelta}
      />
      <CostBreakdownCard items={result.breakdown} />
      <BudgetImpactChart before={result.budgetBefore} after={result.budgetAfter} />
      <RecommendationCard recommendation={result.recommendation} />
    </div>
  );
}
