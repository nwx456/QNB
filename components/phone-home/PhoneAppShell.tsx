"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { FeatureEntry } from "@/lib/constants/feature-entries";
import { PHONE_CLASSES } from "@/lib/constants/design-system";
import { BankHomeScreen } from "./BankHomeScreen";
import { FeatureBackBar } from "./FeatureBackBar";

type PhoneAppShellProps = {
  entry: FeatureEntry;
  children: React.ReactNode;
};

type Screen = "home" | "feature";

export function PhoneAppShell({ entry, children }: PhoneAppShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className={PHONE_CLASSES.shellHeight}>
      <AnimatePresence mode="wait" initial={false}>
        {screen === "home" ? (
          <motion.div
            key="home"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: -12 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="flex h-full min-h-0 flex-col"
          >
            <BankHomeScreen
              entry={entry}
              onOpenFeature={() => setScreen("feature")}
            />
          </motion.div>
        ) : (
          <motion.div
            key="feature"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: 12 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="flex h-full min-h-0 flex-col"
          >
            <FeatureBackBar
              title={entry.title}
              onBack={() => setScreen("home")}
            />
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
