"use client";

import { FEATURE_ENTRIES } from "@/lib/constants/feature-entries";
import { PhoneAppShell } from "@/components/phone-home/PhoneAppShell";
import { InvisibleSavingsApp } from "./InvisibleSavingsApp";

export function InvisibleSavingsPhoneApp() {
  return (
    <PhoneAppShell entry={FEATURE_ENTRIES.invisibleSavings}>
      <InvisibleSavingsApp />
    </PhoneAppShell>
  );
}
