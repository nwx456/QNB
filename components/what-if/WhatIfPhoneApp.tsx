"use client";

import { FEATURE_ENTRIES } from "@/lib/constants/feature-entries";
import { PhoneAppShell } from "@/components/phone-home/PhoneAppShell";
import { WhatIfAppUI } from "./WhatIfAppUI";

export function WhatIfPhoneApp() {
  return (
    <PhoneAppShell entry={FEATURE_ENTRIES.whatIf}>
      <WhatIfAppUI />
    </PhoneAppShell>
  );
}
