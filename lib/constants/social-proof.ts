import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
} from "lucide-react";

export type SocialProofScenario = {
  id: string;
  icon: LucideIcon;
  city: string;
  lifeStage: string;
  segmentLabel: string;
  adoptionPercent: number;
  trendingGoal: string;
  peerCount: string;
  headline: string;
  message: string;
  ctaPrimary: string;
  ctaSecondary: string;
  suggestedAmount: number;
  explainLine: string;
};

export type AcceptedStep = {
  id: string;
  scenarioId: string;
  goalName: string;
  amount: number;
  segmentLabel: string;
};

export const DEFAULT_SEGMENT_LABEL = "İstanbul · Yeni evlenen";

export const SOCIAL_PROOF_SCENARIOS: SocialProofScenario[] = [
  {
    id: "newly-married",
    icon: Heart,
    city: "İstanbul",
    lifeStage: "Yeni evlenen",
    segmentLabel: "İstanbul · Yeni evlenen",
    adoptionPercent: 70,
    trendingGoal: "Acil Durum Fonu",
    peerCount: "12.400+",
    headline: "Akranlarınız harekete geçti",
    message:
      "Senin gibi İstanbul'da yeni evlenen kullanıcılarımızın %70'i şu an 'Acil Durum Fonu' oluşturuyor. Sen de bu ay ufak bir adımla başlamak ister misin?",
    ctaPrimary: "Evet, bu ay başlayalım",
    ctaSecondary: "Şimdilik geç",
    suggestedAmount: 500,
    explainLine:
      "Anonimleştirilmiş segment verisi · 12.400+ benzer profil",
  },
  {
    id: "new-graduate",
    icon: GraduationCap,
    city: "Ankara",
    lifeStage: "Yeni mezun",
    segmentLabel: "Ankara · Yeni mezun",
    adoptionPercent: 65,
    trendingGoal: "İlk Yatırım Sepeti",
    peerCount: "8.200+",
    headline: "Mezunlarınız yatırıma başlıyor",
    message:
      "Senin gibi Ankara'da yeni mezun kullanıcılarımızın %65'i 'İlk Yatırım Sepeti' açtı. Küçük bir aylık katkıyla sen de başlayabilirsin.",
    ctaPrimary: "Evet, bu ay başlayalım",
    ctaSecondary: "Şimdilik geç",
    suggestedAmount: 300,
    explainLine: "Anonimleştirilmiş segment verisi · 8.200+ benzer profil",
  },
  {
    id: "young-parent",
    icon: Baby,
    city: "İzmir",
    lifeStage: "Genç ebeveyn",
    segmentLabel: "İzmir · Genç ebeveyn",
    adoptionPercent: 58,
    trendingGoal: "Çocuk Eğitim Birikimi",
    peerCount: "6.100+",
    headline: "Ebeveynler eğitim için birikiyor",
    message:
      "Senin gibi İzmir'de genç ebeveyn kullanıcılarımızın %58'i 'Çocuk Eğitim Birikimi' oluşturuyor. Bu ay küçük bir adımla katılmak ister misin?",
    ctaPrimary: "Evet, bu ay başlayalım",
    ctaSecondary: "Şimdilik geç",
    suggestedAmount: 400,
    explainLine: "Anonimleştirilmiş segment verisi · 6.100+ benzer profil",
  },
  {
    id: "first-job",
    icon: Briefcase,
    city: "İstanbul",
    lifeStage: "İlk iş",
    segmentLabel: "İstanbul · İlk iş",
    adoptionPercent: 72,
    trendingGoal: "Otomatik Tasarruf Kuralı",
    peerCount: "15.800+",
    headline: "İlk maaşını birikime yönlendirenler",
    message:
      "Senin gibi İstanbul'da ilk işine yeni başlayan kullanıcılarımızın %72'si otomatik tasarruf kuralı tanımladı. Sen de bu ay ufak bir adımla başlamak ister misin?",
    ctaPrimary: "Evet, bu ay başlayalım",
    ctaSecondary: "Şimdilik geç",
    suggestedAmount: 350,
    explainLine: "Anonimleştirilmiş segment verisi · 15.800+ benzer profil",
  },
  {
    id: "home-buyer",
    icon: Home,
    city: "Bursa",
    lifeStage: "Ev alıcı adayı",
    segmentLabel: "Bursa · Ev alıcı adayı",
    adoptionPercent: 63,
    trendingGoal: "Konut Peşinat Fonu",
    peerCount: "4.900+",
    headline: "Ev hayali için birikenler",
    message:
      "Senin gibi Bursa'da ev almayı planlayan kullanıcılarımızın %63'ü 'Konut Peşinat Fonu' oluşturuyor. Bu ay küçük bir katkıyla sen de başlayabilirsin.",
    ctaPrimary: "Evet, bu ay başlayalım",
    ctaSecondary: "Şimdilik geç",
    suggestedAmount: 600,
    explainLine: "Anonimleştirilmiş segment verisi · 4.900+ benzer profil",
  },
];

export function pickRandomSocialProofScenario(
  excludeId?: string,
): SocialProofScenario {
  const pool = excludeId
    ? SOCIAL_PROOF_SCENARIOS.filter((s) => s.id !== excludeId)
    : SOCIAL_PROOF_SCENARIOS;
  return pool[Math.floor(Math.random() * pool.length)] ?? SOCIAL_PROOF_SCENARIOS[0];
}
