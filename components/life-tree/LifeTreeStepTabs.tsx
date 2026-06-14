"use client";

type LifeTreeStepTabsProps = {
  step: "goals" | "tree";
};

const tabs = [
  { id: "goals" as const, label: "Duraklar", num: "1" },
  { id: "tree" as const, label: "Ağacın", num: "2" },
];

export function LifeTreeStepTabs({ step }: LifeTreeStepTabsProps) {
  return (
    <div
      className="flex shrink-0 gap-1 border-b border-border-default/60 bg-white/60 px-3 py-2 backdrop-blur-sm"
      role="tablist"
      aria-label="Hayat Ağacı adımları"
    >
      {tabs.map((tab) => {
        const isActive = step === tab.id;
        return (
          <div
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-[10px] font-medium transition ${
              isActive
                ? "bg-qnb-navy/8 text-qnb-navy"
                : "text-body opacity-60"
            }`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                isActive
                  ? "bg-qnb-navy text-white"
                  : "border border-border-default bg-white"
              }`}
            >
              {tab.num}
            </span>
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}
