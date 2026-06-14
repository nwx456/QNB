"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { FeatureEntry } from "@/lib/constants/feature-entries";
import { PHONE_CLASSES } from "@/lib/constants/design-system";
import { BankHomeScreen } from "./BankHomeScreen";
import { useDriveMode } from "./DriveModeContext";
import { FeatureBackBar } from "./FeatureBackBar";

type PhoneAppShellProps = {
  entry: FeatureEntry;
  children: React.ReactNode;
};

type Screen = "home" | "feature";

function PhoneAppShellInner({ entry, children }: PhoneAppShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const { mode } = useDriveMode();
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className={`${PHONE_CLASSES.shellHeight} flex flex-col`}>
      <div
        data-drive-mode={mode}
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
      >
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
    </div>
  );
}

export function PhoneAppShell({ entry, children }: PhoneAppShellProps) {
  return <PhoneAppShellInner entry={entry}>{children}</PhoneAppShellInner>;
}
