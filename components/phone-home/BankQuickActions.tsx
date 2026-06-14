"use client";

import { QUICK_ACTIONS } from "@/lib/constants/bank-home";

export function BankQuickActions() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {QUICK_ACTIONS.map(({ id, label, icon: Icon, accent }) => (
        <div
          key={id}
          className="flex flex-col items-center gap-1.5 rounded-xl border border-border-default/60 bg-white/80 px-2 py-3"
          aria-hidden="true"
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              accent === "purple" ? "bg-qnb-purple/10" : "bg-qnb-navy/10"
            }`}
          >
            <Icon
              className={`h-4 w-4 ${
                accent === "purple" ? "text-qnb-purple" : "text-qnb-navy"
              }`}
            />
          </span>
          <span className="text-center text-[9px] font-medium leading-tight text-label">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
