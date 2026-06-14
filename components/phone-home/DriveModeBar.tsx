"use client";

import { CarFront } from "lucide-react";
import { useDriveMode, type DriveMode } from "./DriveModeContext";

const MODES: { id: DriveMode; label: string }[] = [
  { id: "silent", label: "Sessiz" },
  { id: "loud", label: "Gürültülü" },
];

export function DriveModeBar() {
  const { mode, setMode, isSilent } = useDriveMode();

  return (
    <div className="pointer-events-auto">
      <div className="h-11 shrink-0" aria-hidden="true" />

      <div
        className={`border-b px-3 pb-2 backdrop-blur-sm ${
          isSilent
            ? "border-qnb-purple/30 bg-qnb-purple/10"
            : "border-border-default bg-white/95"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-medium text-qnb-navy">
            <CarFront className="h-3.5 w-3.5" aria-hidden="true" />
            Araç modu
          </div>
          <div
            className="flex rounded-full border border-border-default bg-surface-alt p-0.5"
            role="tablist"
            aria-label="Araç modu seçimi"
          >
            {MODES.map(({ id, label }) => {
              const active = mode === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-pressed={active}
                  onClick={() => setMode(id)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-[11px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-purple ${
                    active
                      ? "bg-qnb-navy text-white shadow-sm"
                      : "text-body hover:bg-white/80 hover:text-heading"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <p
          className={`mt-1.5 text-center text-[9px] font-medium ${
            isSilent ? "text-qnb-purple" : "text-qnb-navy"
          }`}
        >
          {isSilent
            ? "Sessiz mod aktif · sesli komut"
            : "Gürültülü mod aktif · büyük dokunmatik"}
        </p>
      </div>
    </div>
  );
}
