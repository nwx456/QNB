"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SHADOWS, PHONE_CLASSES } from "@/lib/constants/design-system";
import { ANIMATION } from "@/lib/constants/brand";
import { LifeTreePhoneApp } from "./LifeTreePhoneApp";

export function LifeTreePhoneMockup() {
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
          className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-qnb-navy/10 via-qnb-purple/10 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div
          className="relative rounded-[2.85rem] bg-gradient-to-b from-qnb-navy to-qnb-purple p-1"
          style={{ boxShadow: SHADOWS.phone }}
        >
          <div
            className="absolute left-1/2 top-4 z-10 h-[29px] w-[103px] -translate-x-1/2 rounded-full bg-slate-900"
            aria-hidden="true"
          />

          <div className="overflow-hidden rounded-[2.65rem] phone-screen">
            <LifeTreePhoneApp />
          </div>
        </div>
    </motion.div>
  );
}
