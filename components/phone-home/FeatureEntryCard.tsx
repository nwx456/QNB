"use client";

import { ChevronRight } from "lucide-react";
import type { FeatureEntry } from "@/lib/constants/feature-entries";

type FeatureEntryCardProps = {
  entry: FeatureEntry;
  onOpen: () => void;
};

export function FeatureEntryCard({ entry, onOpen }: FeatureEntryCardProps) {
  const Icon = entry.icon;
  const isPurple = entry.accent === "purple";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group w-full rounded-2xl border p-4 text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-purple focus-visible:ring-offset-2 ${
        isPurple
          ? "border-qnb-purple/35 bg-gradient-to-br from-qnb-purple/8 to-white"
          : "border-qnb-navy/25 bg-gradient-to-br from-qnb-navy/5 to-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            isPurple ? "bg-qnb-purple/10" : "bg-qnb-navy/10"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${isPurple ? "text-qnb-purple" : "text-qnb-navy"}`}
            aria-hidden="true"
          />
        </span>
        <div className="min-w-0 flex-1">
          <p
            className={`text-[9px] font-medium uppercase tracking-wide ${
              isPurple ? "text-qnb-purple" : "text-qnb-navy"
            }`}
          >
            {entry.subtitle}
          </p>
          <p className="mt-0.5 text-sm font-medium text-heading">{entry.title}</p>
          <p className="mt-1 text-[11px] leading-snug text-body">
            {entry.description}
          </p>
        </div>
        <ChevronRight
          className={`mt-1 h-5 w-5 shrink-0 transition group-hover:translate-x-0.5 ${
            isPurple ? "text-qnb-purple" : "text-qnb-navy"
          }`}
          aria-hidden="true"
        />
      </div>
      <span
        className={`mt-3 inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium text-white ${
          isPurple ? "brand-gradient" : "bg-qnb-navy"
        }`}
      >
        Aç
      </span>
    </button>
  );
}
