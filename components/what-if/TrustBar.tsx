const metrics = [
  { value: "2.4s", label: "Ortalama analiz süresi" },
  { value: "127+", label: "Yaşam senaryosu" },
  { value: "%94", label: "Profil eşleşme doğruluğu" },
  { value: "7/24", label: "Anında danışmanlık" },
];

export function TrustBar() {
  return (
    <section className="brand-gradient py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center lg:text-left">
              <p className="tabular-nums text-3xl font-medium tracking-tight text-white lg:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-white/75">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
