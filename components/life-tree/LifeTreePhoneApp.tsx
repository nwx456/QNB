"use client";

import { FEATURE_ENTRIES } from "@/lib/constants/feature-entries";
import { PhoneAppShell } from "@/components/phone-home/PhoneAppShell";
import { LifeTreeApp } from "./LifeTreeApp";

export function LifeTreePhoneApp() {
  return (
    <PhoneAppShell entry={FEATURE_ENTRIES.lifeTree}>
      <LifeTreeApp />
    </PhoneAppShell>
  );
}
