"use client";

import { useEffect, useRef } from "react";
import type { ChatMessage } from "@/lib/simulator/types";
import { ScenarioResultPanel } from "../cards/ScenarioResultPanel";
import { AssistantBubble } from "./AssistantBubble";
import { TypingIndicator } from "./TypingIndicator";
import { UserBubble } from "./UserBubble";

type ChatThreadProps = {
  messages: ChatMessage[];
  isTyping: boolean;
};

export function ChatThread({ messages, isTyping }: ChatThreadProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      className="flex-1 space-y-2 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="log"
      aria-live="polite"
      aria-label="Sohbet mesajları"
    >
      {messages.map((msg) => {
        if (msg.role === "user") {
          return <UserBubble key={msg.id} content={msg.content} />;
        }

        return (
          <AssistantBubble key={msg.id}>
            {msg.scenario ? (
              <ScenarioResultPanel result={msg.scenario} />
            ) : (
              <p className="phone-text text-[13px] text-body">
                {msg.content}
              </p>
            )}
          </AssistantBubble>
        );
      })}

      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
}
