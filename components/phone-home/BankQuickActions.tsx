"use client";

import { QUICK_ACTIONS } from "@/lib/constants/bank-home";
import { useDriveMode } from "./DriveModeContext";

export function BankQuickActions() {
  const { isLoud } = useDriveMode();

  return (
    <div className="grid grid-cols-3 gap-2">
      {QUICK_ACTIONS.map(({ id, label, icon: Icon, accent }) => (
        <div
          key={id}
          className={`flex flex-col items-center gap-1.5 rounded-xl border border-border-default/60 bg-white/80 ${
            isLoud ? "px-2.5 py-4" : "px-2 py-3"
          }`}
          aria-hidden="true"
        >
          <span
            className={`flex items-center justify-center rounded-full ${
              isLoud ? "h-12 w-12" : "h-10 w-10"
            } ${accent === "purple" ? "bg-qnb-purple/10" : "bg-qnb-navy/10"}`}
          >
            <Icon
              className={`${isLoud ? "h-5 w-5" : "h-4 w-4"} ${
                accent === "purple" ? "text-qnb-purple" : "text-qnb-navy"
              }`}
            />
          </span>
          <span
            className={`text-center font-medium leading-tight text-label ${
              isLoud ? "text-[10px]" : "text-[9px]"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
