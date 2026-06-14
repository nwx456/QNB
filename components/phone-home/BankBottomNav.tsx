"use client";

import { BOTTOM_NAV_ITEMS } from "@/lib/constants/bank-home";

export function BankBottomNav() {
  return (
    <nav
      className="shrink-0 border-t border-border-default bg-white/95 px-2 pb-4 pt-2 backdrop-blur-sm"
      aria-label="Alt menü"
    >
      <ul className="grid grid-cols-4 gap-1">
        {BOTTOM_NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = id === "home";
          return (
            <li key={id}>
              <span
                className={`flex flex-col items-center gap-0.5 py-1 text-[9px] font-medium ${
                  isActive ? "text-qnb-navy" : "text-body"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-qnb-purple" : "text-body"}`}
                  aria-hidden="true"
                />
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
