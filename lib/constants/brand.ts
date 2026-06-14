export const COLORS = {
  qnbNavy: "#0033A0",
  qnbPurple: "#5B21B6",
  heading: "#061b31",
  body: "#64748d",
  label: "#273951",
  expenseRed: "#EF4444",
  savingsGreen: "#10B981",
  savingsPurple: "#7C3AED",
  teal: "#00a87e",
  danger: "#e23b4a",
  appShell: "#191c1f",
  appCard: "#252a2f",
} as const;

export const ANIMATION = {
  staggerDelay: 0.1,
  fadeDuration: 0.4,
  chartDuration: 0.6,
  floatDuration: 5,
  typingDelay: 800,
} as const;

export const BUDGET = {
  defaultExpenses: 62,
  defaultSavings: 38,
} as const;

export const MOCK_PROFILE = {
  name: "Ayşe",
  monthlyIncome: 42000,
  savingsPercent: 38,
  expensesPercent: 62,
} as const;

export const INITIAL_CHIPS = [
  "Eve kedi alsam ne olur?",
  "Arabayı satıp kiralasam ne olur?",
  "Yeni eve taşınsam ne olur?",
] as const;
