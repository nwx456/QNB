"use client";

import { Palmtree, Sparkles } from "lucide-react";
import {
  GOAL_CONFIG,
  PLACEHOLDER_ACTIVITIES,
  getActivityIcon,
  type ActivityItem,
} from "@/lib/constants/invisible-savings";

type SavingsDashboardProps = {
  savedAmount: number;
  transfers: ActivityItem[];
  totalContributed: number;
};

export function SavingsDashboard({
  savedAmount,
  transfers,
  totalContributed,
}: SavingsDashboardProps) {
  const s = GOAL_CONFIG;
  const percent = Math.min(
    100,
    Math.round((savedAmount / s.goalTarget) * 100),
  );

  const activities = [...transfers, ...PLACEHOLDER_ACTIVITIES];

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-3">
      {totalContributed > 0 && (
        <div className="flex items-center gap-2 rounded-xl border border-qnb-purple/25 bg-qnb-purple/5 px-3 py-2">
          <Sparkles className="h-4 w-4 shrink-0 text-qnb-purple" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium text-qnb-purple">
              Toplam görünmez birikim katkısı
            </p>
            <p className="text-sm font-semibold tabular-nums text-heading">
              +{totalContributed.toLocaleString("tr-TR")} TL
            </p>
          </div>
          <span className="shrink-0 text-[10px] text-body">
            {transfers.length} katkı
          </span>
        </div>
      )}

      <div className="rounded-xl border border-border-default bg-white p-3.5 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-qnb-navy/5">
            <Palmtree className="h-4 w-4 text-qnb-navy" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-heading">{s.goalName}</p>
            <p className="text-[10px] text-body">Hedef birikim</p>
          </div>
          <span className="tabular-nums text-sm font-semibold text-qnb-navy">
            %{percent}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-qnb-navy/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-qnb-navy to-qnb-purple transition-all duration-700 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-body">
          <span className="tabular-nums font-medium text-label">
            ₺{savedAmount.toLocaleString("tr-TR")}
          </span>
          <span className="tabular-nums">
            ₺{s.goalTarget.toLocaleString("tr-TR")} hedef
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-border-default/80 bg-white/90 p-3 shadow-sm">
        <p className="text-[10px] font-medium uppercase tracking-wide text-qnb-navy">
          Son hareketler
        </p>
        <ul className="mt-2 max-h-[140px] space-y-2 overflow-y-auto">
          {activities.map((item) => {
            const Icon = getActivityIcon(item);
            const isTransfer = item.type === "transfer";

            return (
              <li
                key={item.id}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                  isTransfer
                    ? "border border-qnb-purple/20 bg-qnb-purple/5"
                    : "bg-surface-alt/50"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    isTransfer ? "bg-qnb-purple/10" : "bg-qnb-navy/5"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${
                      isTransfer ? "text-qnb-purple" : "text-qnb-navy"
                    }`}
                    aria-hidden="true"
                  />
                </span>
                <span className="min-w-0 flex-1 truncate text-label">
                  {item.label}
                </span>
                <span
                  className={`shrink-0 tabular-nums font-medium ${
                    item.amount > 0 ? "text-emerald-600" : "text-qnb-purple"
                  }`}
                >
                  {item.amount > 0 ? "+" : ""}
                  {item.amount.toLocaleString("tr-TR")} TL
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="text-center text-[10px] text-body">
        Her tasarruf farklı bir bildirimle sunulur, katkılar hedefinize
        eklenir.
      </p>
    </div>
  );
}
