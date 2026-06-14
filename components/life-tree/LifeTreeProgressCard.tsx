"use client";

import { LIFE_GOALS } from "@/lib/constants/life-goals";

const TOTAL_GOALS = LIFE_GOALS.length;

type LifeTreeProgressCardProps = {
  selectedCount: number;
};

export function LifeTreeProgressCard({
  selectedCount,
}: LifeTreeProgressCardProps) {
  const percent = Math.round((selectedCount / TOTAL_GOALS) * 100);
  const tipCount = selectedCount * 2;

  return (
    <div className="rounded-xl border border-border-default/80 bg-white/90 px-3.5 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-medium text-heading">Hayat yolculuğu</p>
        <span className="tabular-nums text-[11px] font-medium text-qnb-navy">
          {selectedCount}/{TOTAL_GOALS} durak
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-qnb-navy/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-qnb-navy to-qnb-purple transition-all duration-500 ease-out"
          style={{ width: `${Math.max(percent, selectedCount > 0 ? 8 : 0)}%` }}
        />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-qnb-purple/20 bg-qnb-purple/5 px-2 py-0.5 text-[9px] font-medium text-qnb-purple">
          Genç profesyonel evresi
        </span>
        {selectedCount > 0 ? (
          <span className="text-[9px] text-body">
            {tipCount} profil bazlı öneri hazır
          </span>
        ) : (
          <span className="text-[9px] text-body">
            Durak seçtikçe ağacın büyür
          </span>
        )}
      </div>
    </div>
  );
}

export { TOTAL_GOALS };
