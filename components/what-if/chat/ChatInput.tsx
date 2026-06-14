"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
  inputClass?: string;
};

export function ChatInput({
  onSend,
  disabled = false,
  inputClass = "py-3 text-[13px]",
}: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Olurmu diye sorun..."
        aria-label="Olurmu sorusu yazın"
        className={`min-w-0 flex-1 rounded-full border border-border-default bg-white px-4 text-heading placeholder:text-body focus:border-qnb-navy focus:outline-none focus:ring-1 focus:ring-qnb-navy/30 disabled:opacity-50 ${inputClass}`}
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label="Gönder"
        className={`flex shrink-0 items-center justify-center rounded-full bg-qnb-navy text-white transition hover:bg-qnb-navy/90 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy focus-visible:ring-offset-2 ${
          inputClass.includes("15px") ? "h-12 w-12" : "h-10 w-10"
        }`}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
