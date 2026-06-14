"use client";

import { Calendar, Search } from "lucide-react";
import { MOCK_PROFILE } from "@/lib/constants/brand";

export function BankHomeHeader() {
  return (
    <header className="shrink-0 bg-gradient-to-br from-qnb-navy via-qnb-navy to-qnb-purple px-4 pb-4 pt-2 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/15 text-sm font-medium"
            aria-hidden="true"
          >
            {MOCK_PROFILE.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium">Merhaba, {MOCK_PROFILE.name}</p>
            <p className="text-[10px] text-white/75">QNB Mobil</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
            aria-hidden="true"
          >
            <Calendar className="h-4 w-4" />
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
            aria-hidden="true"
          >
            <Search className="h-4 w-4" />
          </span>
        </div>
      </div>
    </header>
  );
}
