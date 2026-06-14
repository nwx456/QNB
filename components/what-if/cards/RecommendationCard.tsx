type RecommendationCardProps = {
  recommendation: string;
};

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="rounded-xl border-l-2 border-qnb-navy bg-qnb-navy/5 px-3.5 py-3">
      <p className="text-[10px] font-medium uppercase tracking-wide text-qnb-navy">
        Profil bazlı öneri
      </p>
      <p className="phone-text mt-1 text-[13px] text-label">
        {recommendation}
      </p>
    </div>
  );
}
