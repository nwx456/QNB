"use client";

import { HOME_TABS } from "@/lib/constants/bank-home";

export function BankHomeTabs() {
  return (
    <div className="flex shrink-0 gap-6 border-b border-white/15 bg-gradient-to-r from-qnb-navy to-qnb-purple px-4 pb-0 pt-1">
      {HOME_TABS.map((tab, i) => (
        <button
          key={tab}
          type="button"
          className={`relative pb-3 text-[11px] font-medium transition ${
            i === 0 ? "text-white" : "text-white/55"
          }`}
          aria-current={i === 0 ? "page" : undefined}
        >
          {tab}
          {i === 0 && (
            <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-white" />
          )}
        </button>
      ))}
    </div>
  );
}
