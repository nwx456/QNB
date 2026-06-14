"use client";

import { RECENT_TRANSACTIONS } from "@/lib/constants/bank-home";

export function BankTransactionList() {
  return (
    <div className="rounded-xl border border-border-default/80 bg-white/90">
      <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-qnb-navy to-qnb-purple px-3 py-2">
        <p className="text-[9px] font-medium uppercase tracking-wide text-white">
          Hesap Hareketleri
        </p>
        <span className="text-[9px] text-white/80">Tümünü Gör</span>
      </div>
      <ul className="divide-y divide-border-default/50">
        {RECENT_TRANSACTIONS.map((tx) => {
          const Icon = tx.icon;
          return (
            <li
              key={tx.id}
              className="flex items-center gap-2.5 px-3 py-2.5"
              aria-hidden="true"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-qnb-navy/5">
                <Icon className="h-3.5 w-3.5 text-qnb-navy" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-label">
                  {tx.label}
                </p>
                <p className="text-[10px] text-body">{tx.date}</p>
              </div>
              <span className="shrink-0 text-[11px] font-medium tabular-nums text-body">
                {tx.amount}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
