"use client";

import { FEATURE_ENTRIES } from "@/lib/constants/feature-entries";
import { PhoneAppShell } from "@/components/phone-home/PhoneAppShell";
import { SocialProofApp } from "./SocialProofApp";

export function SocialProofPhoneApp() {
  return (
    <PhoneAppShell entry={FEATURE_ENTRIES.socialProof}>
      <SocialProofApp />
    </PhoneAppShell>
  );
}
