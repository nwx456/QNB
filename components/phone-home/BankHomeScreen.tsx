"use client";

import type { FeatureEntry } from "@/lib/constants/feature-entries";
import { BankAccountCard } from "./BankAccountCard";
import { BankBottomNav } from "./BankBottomNav";
import { BankHomeHeader } from "./BankHomeHeader";
import { BankHomeTabs } from "./BankHomeTabs";
import { BankQuickActions } from "./BankQuickActions";
import { BankTransactionList } from "./BankTransactionList";
import { FeatureEntryCard } from "./FeatureEntryCard";

type BankHomeScreenProps = {
  entry: FeatureEntry;
  onOpenFeature: () => void;
};

export function BankHomeScreen({ entry, onOpenFeature }: BankHomeScreenProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <BankHomeHeader />
      <BankHomeTabs />

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto bg-gradient-to-b from-qnb-navy/5 via-transparent to-transparent px-4 py-3">
        <BankAccountCard />
        <BankQuickActions />
        <FeatureEntryCard entry={entry} onOpen={onOpenFeature} />
        <BankTransactionList />
      </div>

      <BankBottomNav />
    </div>
  );
}
