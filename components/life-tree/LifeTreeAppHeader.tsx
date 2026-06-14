"use client";

import { MOCK_PROFILE } from "@/lib/constants/brand";

type LifeTreeAppHeaderProps = {
  selectedCount: number;
  onEditGoals?: () => void;
  showEditLink?: boolean;
};

export function LifeTreeAppHeader({
  selectedCount,
  onEditGoals,
  showEditLink = false,
}: LifeTreeAppHeaderProps) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-border-default bg-white/80 px-4 pb-3 pt-3 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-qnb-navy text-sm font-medium text-white"
          aria-hidden="true"
        >
          {MOCK_PROFILE.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-heading">
            Merhaba, {MOCK_PROFILE.name}
          </p>
          <p className="text-[11px] text-body">Hayat Ağacı · Yol haritası</p>
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1">
        <div className="flex items-center gap-2">
          {showEditLink && onEditGoals && (
            <button
              type="button"
              onClick={onEditGoals}
              className="text-[10px] font-medium text-qnb-navy underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy"
            >
              Düzenle
            </button>
          )}
          <span
            className={`tabular-nums shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
              selectedCount > 0
                ? "border-qnb-navy/20 bg-qnb-navy/5 text-qnb-navy"
                : "border-border-default bg-surface-alt text-body"
            }`}
          >
            {selectedCount > 0 ? `${selectedCount} hedef` : "Hedef seç"}
          </span>
        </div>
        <span className="tabular-nums text-[9px] text-body">
          Birikim %{MOCK_PROFILE.savingsPercent}
        </span>
      </div>
    </header>
  );
}
