import type { LucideIcon } from "lucide-react";
import {
  EyeOff,
  GitBranch,
  MessageCircleQuestion,
  Users,
} from "lucide-react";

export type FeatureEntry = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accent: "navy" | "purple";
};

export const FEATURE_ENTRIES = {
  whatIf: {
    id: "what-if",
    title: "Ne Olurdu? Simülatörü",
    subtitle: "Akıllı özellik",
    description: "Finansal kararları risk almadan test edin, profilinize göre anında sonuç alın.",
    icon: MessageCircleQuestion,
    accent: "navy",
  },
  lifeTree: {
    id: "life-tree",
    title: "Hayat Ağacı",
    subtitle: "Akıllı özellik",
    description: "Hayat evrenize göre hedeflerinizi seçin, ağacınız büyüsün ve önerileri keşfedin.",
    icon: GitBranch,
    accent: "purple",
  },
  invisibleSavings: {
    id: "invisible-savings",
    title: "Görünmez Birikim",
    subtitle: "Akıllı özellik",
    description: "Tasarruf anlarınız arka planda yakalanır, hedefinize otomatik aktarılır.",
    icon: EyeOff,
    accent: "navy",
  },
  socialProof: {
    id: "social-proof",
    title: "Senin Gibiler Ne Yapıyor?",
    subtitle: "Akıllı özellik",
    description: "Benzer profildeki kullanıcıların ne yaptığını görün, küçük adımla başlayın.",
    icon: Users,
    accent: "purple",
  },
} as const satisfies Record<string, FeatureEntry>;
