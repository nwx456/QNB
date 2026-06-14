import {
  Building,
  Car,
  Fuel,
  HeartPulse,
  Home,
  MapPin,
  Shield,
  ShoppingBag,
  Syringe,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { BreakdownItem } from "@/lib/simulator/types";
import { formatSignedCurrency } from "@/lib/utils/format";

const ICON_MAP: Record<string, LucideIcon> = {
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  syringe: Syringe,
  shield: Shield,
  fuel: Fuel,
  car: Car,
  wrench: Wrench,
  home: Home,
  truck: Truck,
  building: Building,
  "map-pin": MapPin,
};

type CostBreakdownCardProps = {
  items: BreakdownItem[];
};

export function CostBreakdownCard({ items }: CostBreakdownCardProps) {
  return (
    <div className="rounded-xl border border-border-default bg-surface-alt p-3.5">
      <p className="mb-2 text-xs font-medium text-qnb-navy">Masraf dökümü</p>
      <ul className="space-y-2">
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? ShoppingBag;
          return (
            <li
              key={item.label}
              className="flex items-center justify-between text-xs"
            >
              <span className="flex items-center gap-2 text-label">
                <Icon className="h-3.5 w-3.5 text-qnb-navy/60" aria-hidden="true" />
                {item.label}
              </span>
              <span
                className={`tabular-nums font-medium ${
                  item.amount >= 0 ? "text-red-600" : "text-qnb-navy"
                }`}
              >
                {formatSignedCurrency(item.amount)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
