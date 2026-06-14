"use client";

import { HeroSection } from "./HeroSection";
import { PhoneMockup } from "./PhoneMockup";
import { InvisibleSavingsSection } from "@/components/invisible-savings/InvisibleSavingsSection";
import { LifeTreeSection } from "@/components/life-tree/LifeTreeSection";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";

export function WhatIfLanding() {
  return (
    <div className="min-h-screen bg-white">
      <section
        id="simulator"
        className="dot-grid border-b border-border-purple/40"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10 lg:py-24 xl:max-w-[90rem]">
          <HeroSection />
          <div className="flex justify-center lg:justify-end lg:self-start">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <LifeTreeSection />
      <InvisibleSavingsSection />
      <SocialProofSection />
    </div>
  );
}
