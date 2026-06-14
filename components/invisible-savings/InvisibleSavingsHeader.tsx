"use client";

import { MOCK_PROFILE } from "@/lib/constants/brand";

export function InvisibleSavingsHeader() {
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
          <p className="text-[11px] text-body">Hopti</p>
        </div>
      </div>
      <span className="shrink-0 rounded-full border border-qnb-purple/20 bg-qnb-purple/5 px-2.5 py-1 text-[10px] font-medium text-qnb-purple">
        Proaktif
      </span>
    </header>
  );
}
