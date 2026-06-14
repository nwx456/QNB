import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  Banknote,
  CreditCard,
  Landmark,
  ShoppingCart,
  Wallet,
} from "lucide-react";

export const BANK_ACCOUNT = {
  name: "Vadesiz TL Hesabı",
  ibanMasked: "TR** **** **** **34 5678",
  availableBalance: "***** TL",
  creditBalance: "***** TL",
} as const;

export const HOME_TABS = ["Hesaplarım", "Kartlarım", "Yatırımlarım"] as const;

export type QuickAction = {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: "navy" | "purple";
};

export const QUICK_ACTIONS: QuickAction[] = [
  { id: "transfer", label: "Para Transferi", icon: ArrowLeftRight, accent: "navy" },
  { id: "atm", label: "ATM'den Çek", icon: Banknote, accent: "navy" },
  { id: "all", label: "Tüm İşlemler", icon: Landmark, accent: "purple" },
];

export type BankTransaction = {
  id: string;
  label: string;
  date: string;
  amount: string;
  icon: LucideIcon;
};

export const RECENT_TRANSACTIONS: BankTransaction[] = [
  {
    id: "t1",
    label: "Market alışverişi",
    date: "27 Haz",
    amount: "-*** TL",
    icon: ShoppingCart,
  },
  {
    id: "t2",
    label: "Maaş yatırıldı",
    date: "26 Haz",
    amount: "+***** TL",
    icon: Wallet,
  },
];

export const BOTTOM_NAV_ITEMS = [
  { id: "home", label: "Ana Sayfa", icon: Landmark },
  { id: "accounts", label: "Hesap/Kart", icon: CreditCard },
  { id: "apply", label: "Başvuru", icon: Banknote },
  { id: "assets", label: "Varlıklar", icon: Wallet },
] as const;
