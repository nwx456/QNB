"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type DriveMode = "silent" | "loud";

type DriveModeContextValue = {
  mode: DriveMode;
  setMode: (mode: DriveMode) => void;
  isSilent: boolean;
  isLoud: boolean;
  primaryButtonClass: string;
  chipClass: string;
  inputClass: string;
};

const DriveModeContext = createContext<DriveModeContextValue | null>(null);

export function DriveModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DriveMode>("silent");

  const setMode = useCallback((next: DriveMode) => {
    setModeState(next);
  }, []);

  const isSilent = mode === "silent";
  const isLoud = mode === "loud";

  const value = useMemo<DriveModeContextValue>(
    () => ({
      mode,
      setMode,
      isSilent,
      isLoud,
      primaryButtonClass: isLoud
        ? "py-4 text-base min-h-[52px]"
        : "py-3 text-sm",
      chipClass: isLoud ? "px-4 py-2.5 text-[13px]" : "px-3 py-1.5 text-[11px]",
      inputClass: isLoud ? "py-3.5 text-[15px]" : "py-3 text-[13px]",
    }),
    [mode, setMode, isSilent, isLoud],
  );

  return (
    <DriveModeContext.Provider value={value}>{children}</DriveModeContext.Provider>
  );
}

export function useDriveMode(): DriveModeContextValue {
  const ctx = useContext(DriveModeContext);
  if (!ctx) {
    throw new Error("useDriveMode must be used within DriveModeProvider");
  }
  return ctx;
}

export function useDriveModeOptional(): DriveModeContextValue | null {
  return useContext(DriveModeContext);
}
