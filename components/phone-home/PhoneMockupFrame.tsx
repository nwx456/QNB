"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { ANIMATION } from "@/lib/constants/brand";
import { PHONE_CLASSES, SHADOWS } from "@/lib/constants/design-system";
import { DriveModeBar } from "./DriveModeBar";
import { PhoneNotch } from "./PhoneNotch";

type PhoneMockupFrameProps = {
  children: ReactNode;
};

export function PhoneMockupFrame({ children }: PhoneMockupFrameProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: ANIMATION.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      className={PHONE_CLASSES.mockupWidth}
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-qnb-navy/10 via-qnb-purple/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative rounded-[2.85rem] bg-gradient-to-b from-qnb-navy to-qnb-purple p-1"
        style={{ boxShadow: SHADOWS.phone }}
      >
        <div className="overflow-hidden rounded-[2.65rem] phone-screen">
          {children}
        </div>

        <div className="absolute inset-x-1 top-1 z-40 rounded-t-[2.65rem]">
          <DriveModeBar />
        </div>

        <PhoneNotch />
      </div>
    </motion.div>
  );
}
