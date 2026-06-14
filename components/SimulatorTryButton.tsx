type SimulatorTryButtonProps = {
  href: string;
};

export function SimulatorTryButton({ href }: SimulatorTryButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex w-fit self-start items-center rounded-full brand-gradient px-10 py-4 text-base font-medium text-white shadow-lg shadow-qnb-purple/25 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-qnb-purple focus-visible:ring-offset-2"
    >
      Simülatörü Dene
    </a>
  );
}
