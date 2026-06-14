"use client";

type SuggestionChipsProps = {
  chips: string[];
  onSelect: (chip: string) => void;
  disabled?: boolean;
};

export function SuggestionChips({
  chips,
  onSelect,
  disabled = false,
}: SuggestionChipsProps) {
  if (chips.length === 0) return null;

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="group"
      aria-label="Önerilen sorular"
    >
      {chips.map((chip) => (
        <button
          key={chip}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(chip)}
          className="shrink-0 rounded-full border border-qnb-navy/20 bg-qnb-navy/5 px-3.5 py-2 text-[12px] text-qnb-navy transition hover:border-qnb-navy/40 hover:bg-qnb-navy/10 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-navy"
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
