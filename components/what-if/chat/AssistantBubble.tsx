import type { ReactNode } from "react";

type AssistantBubbleProps = {
  children: ReactNode;
};

export function AssistantBubble({ children }: AssistantBubbleProps) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[95%] rounded-2xl rounded-bl-md border border-border-default bg-white px-4 py-2.5 shadow-sm">
        {children}
      </div>
    </div>
  );
}
