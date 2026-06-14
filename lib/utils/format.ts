export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(Math.abs(amount));
}

export function formatSignedCurrency(amount: number): string {
  const formatted = formatCurrency(amount);
  if (amount > 0) return `+${formatted}`;
  if (amount < 0) return `-${formatted}`;
  return formatted;
}

export function formatDelta(amount: number): string {
  return `${formatSignedCurrency(amount)}/ay`;
}
