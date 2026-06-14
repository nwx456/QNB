"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mic } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type VoiceMicButtonProps = {
  size?: "compact" | "default" | "large";
  label?: string;
  showLabel?: boolean;
};

const SIZE_MAP = {
  compact: { btn: "h-10 w-10", icon: "h-4 w-4", ring: "h-14 w-14" },
  default: { btn: "h-14 w-14", icon: "h-6 w-6", ring: "h-[4.5rem] w-[4.5rem]" },
  large: { btn: "h-[4.25rem] w-[4.25rem]", icon: "h-8 w-8", ring: "h-24 w-24" },
} as const;

export function VoiceMicButton({
  size = "default",
  label = "Sesli komut verin",
  showLabel = true,
}: VoiceMicButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const [listening, setListening] = useState(false);
  const dims = SIZE_MAP[size];

  const handleClick = useCallback(() => {
    setListening(true);
  }, []);

  useEffect(() => {
    if (!listening) return;
    const timer = window.setTimeout(() => setListening(false), 1500);
    return () => window.clearTimeout(timer);
  }, [listening]);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        aria-label={label}
        onClick={handleClick}
        className="relative flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-purple focus-visible:ring-offset-2"
      >
        {!prefersReducedMotion && (
          <motion.span
            aria-hidden="true"
            animate={
              listening
                ? { scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }
                : { scale: [1, 1.08, 1], opacity: [0.35, 0.15, 0.35] }
            }
            transition={{
              duration: listening ? 0.8 : 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full bg-qnb-purple/20 ${dims.ring}`}
          />
        )}
        <span
          className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-qnb-navy to-qnb-purple text-white shadow-lg shadow-qnb-purple/25 ${dims.btn}`}
        >
          <Mic className={dims.icon} aria-hidden="true" />
        </span>
      </button>
      {showLabel && (
        <p className="text-center text-[11px] font-medium text-label">
          {listening ? "Dinleniyor..." : label}
        </p>
      )}
    </div>
  );
}
