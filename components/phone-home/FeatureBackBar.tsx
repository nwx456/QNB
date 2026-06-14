"use client";

import { ChevronLeft } from "lucide-react";

type FeatureBackBarProps = {
  title: string;
  onBack: () => void;
};

export function FeatureBackBar({ title, onBack }: FeatureBackBarProps) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-b border-border-default bg-white/90 px-3 pb-2 pt-2 backdrop-blur-sm">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-0.5 rounded-lg px-1 py-1 text-[11px] font-medium text-qnb-navy transition hover:bg-qnb-navy/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        Ana Sayfa
      </button>
      <span className="truncate text-[10px] text-body">{title}</span>
    </div>
  );
}
