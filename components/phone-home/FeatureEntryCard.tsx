"use client";

import { ChevronRight, Mic } from "lucide-react";
import type { FeatureEntry } from "@/lib/constants/feature-entries";
import { useDriveMode } from "./DriveModeContext";

type FeatureEntryCardProps = {
  entry: FeatureEntry;
  onOpen: () => void;
};

export function FeatureEntryCard({ entry, onOpen }: FeatureEntryCardProps) {
  const { isSilent, isLoud } = useDriveMode();
  const Icon = entry.icon;
  const isPurple = entry.accent === "purple";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group w-full rounded-2xl border text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-purple focus-visible:ring-offset-2 ${
        isLoud ? "p-5" : "p-4"
      } ${
        isPurple
          ? "border-qnb-purple/35 bg-gradient-to-br from-qnb-purple/8 to-white"
          : "border-qnb-navy/25 bg-gradient-to-br from-qnb-navy/5 to-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex shrink-0 items-center justify-center rounded-xl ${
            isLoud ? "h-14 w-14" : "h-11 w-11"
          } ${isPurple ? "bg-qnb-purple/10" : "bg-qnb-navy/10"}`}
        >
          <Icon
            className={`${isLoud ? "h-6 w-6" : "h-5 w-5"} ${isPurple ? "text-qnb-purple" : "text-qnb-navy"}`}
            aria-hidden="true"
          />
        </span>
        <div className="min-w-0 flex-1">
          <p
            className={`font-medium uppercase tracking-wide ${
              isLoud ? "text-[10px]" : "text-[9px]"
            } ${isPurple ? "text-qnb-purple" : "text-qnb-navy"}`}
          >
            {entry.subtitle}
          </p>
          <p
            className={`mt-0.5 font-medium text-heading ${isLoud ? "text-base" : "text-sm"}`}
          >
            {entry.title}
          </p>
          <p
            className={`mt-1 leading-snug text-body ${isLoud ? "text-xs" : "text-[11px]"}`}
          >
            {entry.description}
          </p>
        </div>
        <ChevronRight
          className={`mt-1 shrink-0 transition group-hover:translate-x-0.5 ${
            isLoud ? "h-6 w-6" : "h-5 w-5"
          } ${isPurple ? "text-qnb-purple" : "text-qnb-navy"}`}
          aria-hidden="true"
        />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span
          className={`inline-flex rounded-full font-medium text-white ${
            isLoud ? "px-5 py-2 text-sm" : "px-4 py-1.5 text-[11px]"
          } ${isPurple ? "brand-gradient" : "bg-qnb-navy"}`}
        >
          Aç
        </span>
        {isSilent && (
          <span className="inline-flex items-center gap-1 text-[10px] text-body">
            <Mic className="h-3 w-3 text-qnb-purple" aria-hidden="true" />
            Sesli aç
          </span>
        )}
      </div>
    </button>
  );
}
