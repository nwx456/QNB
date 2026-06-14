import type { LucideIcon } from "lucide-react";
import {
  Bus,
  Coffee,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

export const GOAL_CONFIG = {
  goalName: "Yaz Tatili",
  goalTarget: 15000,
  goalInitialSaved: 4200,
} as const;

export type SavingsScenario = {
  id: string;
  icon: LucideIcon;
  alertTitle: string;
  alertMessage: string;
  explainLine: string;
  transferAmount: number;
  behaviorShort: string;
};

export const SAVINGS_SCENARIOS: SavingsScenario[] = [
  {
    id: "coffee",
    icon: Coffee,
    alertTitle: "Tebrikler! Tasarrufun fark edildi",
    alertMessage:
      "Bu hafta 3 kez kendi kahveni yaptın. Arka planda o 450 TL'yi senin için yaklaşan 'Yaz Tatili' hedefine aktardım.",
    explainLine:
      "Dışarıda kahve harcaması tespit edilmedi · otomatik birikim kuralı devrede",
    transferAmount: 450,
    behaviorShort: "Evde kahve",
  },
  {
    id: "lunch",
    icon: UtensilsCrossed,
    alertTitle: "Harika! Ev yemeği tercihin fark edildi",
    alertMessage:
      "4 gün üst üste evden yemek getirdin. 380 TL'lik tasarrufu 'Yaz Tatili' hedefine ekledim, sen sadece yaşadın.",
    explainLine:
      "Restoran harcaması düşük · haftalık yemek bütçesi optimize edildi",
    transferAmount: 380,
    behaviorShort: "Evden yemek",
  },
  {
    id: "transport",
    icon: Bus,
    alertTitle: "Sürdürülebilir seçim ödüllendirildi",
    alertMessage:
      "Bu hafta 5 kez toplu taşıma kullandın, taksi tercih etmedin. 120 TL'yi Yaz Tatili birikimine aktardım.",
    explainLine: "Taksi harcaması yok · ulaşım paternin olumlu sapma gösterdi",
    transferAmount: 120,
    behaviorShort: "Toplu taşıma",
  },
  {
    id: "impulse",
    icon: ShoppingBag,
    alertTitle: "Bilinçli harcama tespit edildi",
    alertMessage:
      "5 gün üst üste impulsif online alışveriş yapmadın. 275 TL'lik farkı arka planda tatil hedefine yönlendirdim.",
    explainLine:
      "Gece alışverişi bildirimi yok · harcama freni kuralı tetiklendi",
    transferAmount: 275,
    behaviorShort: "Impuls yok",
  },
  {
    id: "subscription",
    icon: Sparkles,
    alertTitle: "Hopti devrede",
    alertMessage:
      "Kullanmadığın abonelik otomatik tespit edildi ve iptal edildi. Aylık 199 TL artık Yaz Tatili hedefine akıyor.",
    explainLine:
      "Kullanılmayan dijital abonelik · proaktif iptal + birikim yönlendirme",
    transferAmount: 199,
    behaviorShort: "Abonelik iptali",
  },
];

export type ActivityItem = {
  id: string;
  label: string;
  amount: number;
  type: "transfer" | "pending";
  scenarioId?: string;
  icon?: LucideIcon;
};

export function getActivityIcon(item: ActivityItem): LucideIcon {
  if (item.icon) return item.icon;
  if (item.scenarioId) {
    const scenario = SAVINGS_SCENARIOS.find((s) => s.id === item.scenarioId);
    if (scenario) return scenario.icon;
  }
  return item.amount > 0 ? Wallet : ShoppingCart;
}

export const PLACEHOLDER_ACTIVITIES: ActivityItem[] = [
  {
    id: "a1",
    label: "Market alışverişi",
    amount: -320,
    type: "pending",
    icon: ShoppingCart,
  },
  {
    id: "a2",
    label: "Maaş yatırıldı",
    amount: 42000,
    type: "pending",
    icon: Wallet,
  },
];

export function pickRandomScenario(
  excludeId?: string,
): SavingsScenario {
  const pool = excludeId
    ? SAVINGS_SCENARIOS.filter((s) => s.id !== excludeId)
    : SAVINGS_SCENARIOS;
  return pool[Math.floor(Math.random() * pool.length)] ?? SAVINGS_SCENARIOS[0];
}

/** @deprecated use GOAL_CONFIG + SAVINGS_SCENARIOS */
export const INVISIBLE_SAVINGS_SCENARIO = {
  ...GOAL_CONFIG,
  ...SAVINGS_SCENARIOS[0],
  transferAmount: SAVINGS_SCENARIOS[0].transferAmount,
  streakDays: 3,
  behaviorLabel: "kendi kahveni yaptın",
};
