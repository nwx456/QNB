"use client";

import { Share2 } from "lucide-react";
import { BANK_ACCOUNT } from "@/lib/constants/bank-home";

export function BankAccountCard() {
  return (
    <div className="rounded-2xl border border-border-default bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-heading">{BANK_ACCOUNT.name}</p>
          <p className="mt-0.5 text-[10px] text-body">{BANK_ACCOUNT.ibanMasked}</p>
        </div>
        <Share2 className="h-4 w-4 shrink-0 text-qnb-navy/50" aria-hidden="true" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="text-[9px] uppercase tracking-wide text-body">
            Kullanılabilir Bakiye
          </p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-heading">
            {BANK_ACCOUNT.availableBalance}
          </p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wide text-body">
            Kredili Bakiye
          </p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-heading">
            {BANK_ACCOUNT.creditBalance}
          </p>
        </div>
      </div>
    </div>
  );
}
