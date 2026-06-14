export function PhoneNotch() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-4 z-50 flex h-[29px] w-[103px] -translate-x-1/2 items-center justify-center gap-2.5 rounded-full bg-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      aria-hidden="true"
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-800 ring-1 ring-slate-600/80" />
      <span className="h-1.5 w-9 shrink-0 rounded-full bg-slate-900" />
    </div>
  );
}
