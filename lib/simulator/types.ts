export type RiskLevel = "low" | "medium" | "high";

export type BreakdownItem = {
  label: string;
  amount: number;
  icon: string;
};

export type BudgetSplit = {
  expenses: number;
  savings: number;
};

export type ScenarioResult = {
  id: string;
  summary: string;
  breakdown: BreakdownItem[];
  budgetBefore: BudgetSplit;
  budgetAfter: BudgetSplit;
  monthlyDelta: number;
  recommendation: string;
  riskLevel: RiskLevel;
  followUpChips: string[];
};

export type MatchResult =
  | { type: "scenario"; result: ScenarioResult }
  | { type: "fallback"; message: string; suggestions: string[] };

export type ChatMessage =
  | { id: string; role: "user"; content: string }
  | { id: string; role: "assistant"; content?: string; scenario?: ScenarioResult };
