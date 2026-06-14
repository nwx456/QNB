"use client";

import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <div className="flex justify-start" aria-label="Yanıt hazırlanıyor">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border-default bg-white px-4 py-3.5 shadow-sm">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-qnb-navy/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
