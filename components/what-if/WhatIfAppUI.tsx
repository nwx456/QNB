"use client";

import { useCallback, useId, useState } from "react";
import { ANIMATION, INITIAL_CHIPS, MOCK_PROFILE } from "@/lib/constants/brand";
import { getWelcomeMessage, matchIntent } from "@/lib/simulator/scenarios";
import type { ChatMessage } from "@/lib/simulator/types";
import { ChatInput } from "./chat/ChatInput";
import { ChatThread } from "./chat/ChatThread";
import { SuggestionChips } from "./chat/SuggestionChips";

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function WhatIfAppUI() {
  const baseId = useId();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: `${baseId}-welcome`,
      role: "assistant",
      content: getWelcomeMessage(),
    },
  ]);
  const [chips, setChips] = useState<string[]>([...INITIAL_CHIPS]);
  const [isTyping, setIsTyping] = useState(false);

  const processMessage = useCallback((text: string) => {
    const userMsg: ChatMessage = {
      id: createId(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setChips([]);

    window.setTimeout(() => {
      const match = matchIntent(text);

      if (match.type === "scenario") {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            scenario: match.result,
          },
        ]);
        setChips(match.result.followUpChips);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            content: match.message,
          },
        ]);
        setChips(match.suggestions);
      }

      setIsTyping(false);
    }, ANIMATION.typingDelay);
  }, []);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex items-center justify-between border-b border-border-default bg-white/80 px-4 pb-3 pt-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-qnb-navy text-sm font-medium text-white"
            aria-hidden="true"
          >
            {MOCK_PROFILE.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-heading">
              Merhaba, {MOCK_PROFILE.name}
            </p>
            <p className="text-[11px] text-body">Ne Olurdu? Asistan</p>
          </div>
        </div>
        <span className="tabular-nums shrink-0 rounded-full border border-qnb-navy/20 bg-qnb-navy/5 px-2.5 py-1 text-[11px] font-medium text-qnb-navy">
          Birikim %{MOCK_PROFILE.savingsPercent}
        </span>
      </header>

      <div className="flex min-h-0 flex-1 flex-col px-4 py-2">
        <ChatThread messages={messages} isTyping={isTyping} />
      </div>

      <footer className="space-y-3 border-t border-border-default bg-white/90 px-4 pb-5 pt-3.5 backdrop-blur-sm">
        <SuggestionChips
          chips={chips}
          onSelect={processMessage}
          disabled={isTyping}
        />
        <ChatInput onSend={processMessage} disabled={isTyping} />
      </footer>
    </div>
  );
}
