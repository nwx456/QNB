"use client";

import { useDriveMode } from "./DriveModeContext";
import { VoiceMicButton } from "./VoiceMicButton";

type VoiceCommandFooterProps = {
  children?: React.ReactNode;
  hint?: string;
};

export function VoiceCommandFooter({ children, hint }: VoiceCommandFooterProps) {
  const { isSilent, isLoud } = useDriveMode();

  if (isSilent) {
    return (
      <footer className="shrink-0 border-t border-border-default bg-white/90 px-4 pb-5 pt-4 backdrop-blur-sm">
        <VoiceMicButton size="large" label={hint ?? "Sesli komut verin"} />
        <p className="mt-2 text-center text-[10px] text-body">
          Sessiz araç modu · dokunmadan konuşun
        </p>
      </footer>
    );
  }

  return (
    <footer className="shrink-0 border-t border-border-default bg-white/90 px-4 pb-5 pt-3 backdrop-blur-sm">
      <div className={`flex gap-3 ${isLoud ? "items-center" : "flex-col"}`}>
        <div className="min-w-0 flex-1">{children}</div>
        {isLoud && (
          <VoiceMicButton size="compact" showLabel={false} label="Sesli komut" />
        )}
      </div>
    </footer>
  );
}
