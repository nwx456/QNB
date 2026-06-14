import { BUDGET, MOCK_PROFILE } from "@/lib/constants/brand";
import type { MatchResult, ScenarioResult } from "./types";

const SCENARIOS: Record<string, ScenarioResult> = {
  cat: {
    id: "cat",
    summary: `Profilinize göre eve kedi almak aylık bütçenizi yaklaşık ₺1.370 artırır. Birikim oranınız %${MOCK_PROFILE.savingsPercent}'den %35'e düşer.`,
    breakdown: [
      { label: "Kuru mama", amount: 850, icon: "shopping-bag" },
      { label: "Veteriner (ortalama)", amount: 400, icon: "heart-pulse" },
      { label: "Aşı & bakım", amount: 120, icon: "syringe" },
    ],
    budgetBefore: { expenses: BUDGET.defaultExpenses, savings: BUDGET.defaultSavings },
    budgetAfter: { expenses: 65, savings: 35 },
    monthlyDelta: 1370,
    recommendation:
      "Acil fonunuz 3 aylık gideri karşılıyor. Kedi masrafı birikim hedefinizi %8 geriye çeker. 2 ay ertelemek veya mama bütçesini optimize etmek mantıklı olabilir.",
    riskLevel: "medium",
    followUpChips: [
      "Pet sigortası alsam ne olur?",
      "Birikim hedefimi koruyabilir miyim?",
    ],
  },
  car_lease: {
    id: "car_lease",
    summary:
      "Arabayı satıp kiralamak aylık nakit akışınızı ₺4.500 iyileştirir. Kasko ve yakıt tasarrufu kira maliyetini kısmen dengeler.",
    breakdown: [
      { label: "Kasko tasarrufu", amount: -1200, icon: "shield" },
      { label: "Yakıt tasarrufu", amount: -800, icon: "fuel" },
      { label: "Araç kira bedeli", amount: 6500, icon: "car" },
      { label: "Bakım & sigorta farkı", amount: -2000, icon: "wrench" },
    ],
    budgetBefore: { expenses: BUDGET.defaultExpenses, savings: BUDGET.defaultSavings },
    budgetAfter: { expenses: 52, savings: 48 },
    monthlyDelta: -4500,
    recommendation:
      "Profilinize göre araç kiralama, sabit giderlerinizi azaltır ve birikim kapasitenizi %10 artırır. Yıllık 15.000 km altında kullanıyorsanız bu senaryo güçlü bir aday.",
    riskLevel: "low",
    followUpChips: [
      "Kiralama vs satın alma karşılaştır",
      "Birikim hedefim ne kadar artar?",
    ],
  },
  move: {
    id: "move",
    summary: `Yeni eve taşınmak aylık giderlerinizi ₺5.040 artırır. Birikim oranınız %${MOCK_PROFILE.savingsPercent}'den %26'ya düşer, orta-yüksek risk.`,
    breakdown: [
      { label: "Depozito (aylık amortisman)", amount: 2800, icon: "home" },
      { label: "Nakliye & kurulum", amount: 640, icon: "truck" },
      { label: "Kira farkı", amount: 1200, icon: "building" },
      { label: "Yeni mahalle giderleri", amount: 400, icon: "map-pin" },
    ],
    budgetBefore: { expenses: BUDGET.defaultExpenses, savings: BUDGET.defaultSavings },
    budgetAfter: { expenses: 74, savings: 26 },
    monthlyDelta: 5040,
    recommendation:
      "Taşınma büyük bir karar. Mevcut acil fonunuz yalnızca 1.8 ayı karşılıyor. En az 3 aylık gider biriktirdikten sonra taşınmayı değerlendirmenizi öneririm.",
    riskLevel: "high",
    followUpChips: [
      "Depozito için kredi kullansam ne olur?",
      "Taşınmayı 6 ay ertelersem?",
    ],
  },
};

const INTENT_RULES: { id: string; keywords: string[] }[] = [
  { id: "cat", keywords: ["kedi", "pet", "mama", "hayvan", "kedi alsam"] },
  {
    id: "car_lease",
    keywords: ["araba", "araç", "sat", "kiral", "kasko", "otomobil"],
  },
  { id: "move", keywords: ["taşın", "ev", "depozito", "kira", "nakliye"] },
];

function normalize(text: string): string {
  return text.toLocaleLowerCase("tr-TR").trim();
}

export function matchIntent(input: string): MatchResult {
  const normalized = normalize(input);

  for (const rule of INTENT_RULES) {
    if (rule.keywords.some((kw) => normalized.includes(kw))) {
      return { type: "scenario", result: SCENARIOS[rule.id] };
    }
  }

  return {
    type: "fallback",
    message:
      "Tam olarak anlayamadım. Aşağıdaki senaryolardan birini seçebilir veya farklı bir şekilde sorabilirsiniz.",
    suggestions: [
      "Eve kedi alsam ne olur?",
      "Arabayı satıp kiralasam ne olur?",
      "Yeni eve taşınsam ne olur?",
    ],
  };
}

export function getWelcomeMessage(): string {
  return `Merhaba ${MOCK_PROFILE.name}, ben Ne Olurdu? asistanınız. Finansal kararlarınızı risk almadan test edebilirsiniz. Bir senaryo sorun, profilinize göre hesaplayayım.`;
}
