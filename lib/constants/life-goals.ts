import type { LucideIcon } from "lucide-react";
import {
  Car,
  GraduationCap,
  Heart,
  Home,
  Laptop,
  Plane,
} from "lucide-react";

export type GoalIconKey =
  | "car"
  | "heart"
  | "plane"
  | "home"
  | "graduation-cap"
  | "laptop";

export const GOAL_ICON_MAP: Record<GoalIconKey, LucideIcon> = {
  car: Car,
  heart: Heart,
  plane: Plane,
  home: Home,
  "graduation-cap": GraduationCap,
  laptop: Laptop,
};

export type MicroTip = {
  id: string;
  text: string;
  ctaLabel: string;
  /** 0 = stem root (trunk side), 1 = node (fruit). Dots at 0.4 / 0.72 for uniform spacing. */
  positionT: number;
};

export type LifeGoal = {
  id: string;
  label: string;
  icon: GoalIconKey;
  branch: "left" | "right" | "center";
  nodePosition: { x: number; y: number };
  /** Stem root on the branch (trunk side) */
  stemRoot: { x: number; y: number };
  twigPath: string;
  microTips: MicroTip[];
};

export const VIEWBOX = { width: 300, height: 380 } as const;

export const TREE_PATHS = {
  trunk:
    "M128 368 L172 368 L166 262 Q163 210 150 172 L150 162 Q137 210 134 262 L128 368 Z",
  branchLeft: "M150 238 C105 215 58 178 28 148",
  branchCenter: "M150 238 C150 168 150 108 150 42",
  branchRight: "M150 238 C195 215 242 178 272 148",
  branchLeftLow: "M150 262 C105 268 58 272 32 278",
  branchRightLow: "M150 264 C195 270 242 274 268 278",
  branchSecondaryLeft: "M150 248 C88 255 48 232 28 210",
  branchSecondaryRight: "M150 250 C212 257 252 234 272 210",
} as const;

export const PATH_BRANCH_MAP: Record<string, keyof typeof TREE_PATHS> = {
  car: "branchLeft",
  laptop: "branchLeft",
  erasmus: "branchLeftLow",
  marriage: "branchCenter",
  travel: "branchRight",
  home: "branchRightLow",
};

/** Standard tip spacing: first dot mid-stem, second closer to fruit but not on it. */
export const TIP_POSITIONS = [0.4, 0.72] as const;

function stemPath(root: { x: number; y: number }, node: { x: number; y: number }) {
  return `M${root.x} ${root.y} L${node.x} ${node.y}`;
}

export const LIFE_GOALS: LifeGoal[] = [
  {
    id: "car",
    label: "Araba Al",
    icon: "car",
    branch: "left",
    nodePosition: { x: 28, y: 148 },
    stemRoot: { x: 72, y: 198 },
    twigPath: stemPath({ x: 72, y: 198 }, { x: 28, y: 148 }),
    microTips: [
      {
        id: "car-savings",
        text: "Araba hedefin için %40 faizli özel birikim hesabı açarak hedefine 3 ay daha erken ulaşabilirsin.",
        ctaLabel: "Birikim Hesabı Aç",
        positionT: TIP_POSITIONS[0],
      },
      {
        id: "car-loan",
        text: "Kredi skoruna göre ön onaylı taşıt kredisi seçeneğin hazır, aylık taksit simülasyonunu incele.",
        ctaLabel: "Kredi Simülasyonu",
        positionT: TIP_POSITIONS[1],
      },
    ],
  },
  {
    id: "marriage",
    label: "Evlen",
    icon: "heart",
    branch: "center",
    nodePosition: { x: 150, y: 42 },
    stemRoot: { x: 150, y: 108 },
    twigPath: stemPath({ x: 150, y: 108 }, { x: 150, y: 42 }),
    microTips: [
      {
        id: "marriage-fund",
        text: "Evlilik hazırlığı fonu ile düğün masraflarını 12 ayda %15 daha düşük maliyetle planlayabilirsin.",
        ctaLabel: "Fon Oluştur",
        positionT: TIP_POSITIONS[0],
      },
      {
        id: "marriage-joint",
        text: "Ortak birikim hesabı açarak hedefinize birlikte ulaşın, profil bazlı bütçe optimizasyonu önerilir.",
        ctaLabel: "Ortak Hesap Aç",
        positionT: TIP_POSITIONS[1],
      },
    ],
  },
  {
    id: "travel",
    label: "Dünya Turu",
    icon: "plane",
    branch: "right",
    nodePosition: { x: 272, y: 148 },
    stemRoot: { x: 228, y: 198 },
    twigPath: stemPath({ x: 228, y: 198 }, { x: 272, y: 148 }),
    microTips: [
      {
        id: "travel-miles",
        text: "Mil puanı biriktiren kart ile uçak biletinizin %30'unu puanla karşılayabilirsiniz.",
        ctaLabel: "Kart Başvurusu",
        positionT: TIP_POSITIONS[0],
      },
      {
        id: "travel-fx",
        text: "Döviz birikim hesabı ile tur öncesi kur riskini azalt, hedef tarihe göre otomatik alım.",
        ctaLabel: "Döviz Hesabı",
        positionT: TIP_POSITIONS[1],
      },
    ],
  },
  {
    id: "home",
    label: "Ev Al",
    icon: "home",
    branch: "right",
    nodePosition: { x: 268, y: 278 },
    stemRoot: { x: 228, y: 268 },
    twigPath: stemPath({ x: 228, y: 268 }, { x: 268, y: 278 }),
    microTips: [
      {
        id: "home-mortgage",
        text: "Konut kredisi ön değerlendirmen hazır, peşinat oranını artırarak faizi %0.8 düşürebilirsin.",
        ctaLabel: "Mortgage Başvur",
        positionT: TIP_POSITIONS[0],
      },
      {
        id: "home-deposit",
        text: "Ev alım fonunda otomatik birikim kuralı kurarak 18 ay erken hedefe ulaşma şansın var.",
        ctaLabel: "Otomatik Birikim",
        positionT: TIP_POSITIONS[1],
      },
    ],
  },
  {
    id: "erasmus",
    label: "Erasmus Fonu",
    icon: "graduation-cap",
    branch: "left",
    nodePosition: { x: 32, y: 278 },
    stemRoot: { x: 72, y: 268 },
    twigPath: stemPath({ x: 72, y: 268 }, { x: 32, y: 278 }),
    microTips: [
      {
        id: "erasmus-grant",
        text: "Erasmus burs eşleştirme programına uygun görünüyorsun, ek fon başvurusunu simüle et.",
        ctaLabel: "Burs Simülasyonu",
        positionT: TIP_POSITIONS[0],
      },
      {
        id: "erasmus-fx",
        text: "Avro birikim hesabı ile harcama döneminde kur dalgalanmasından korun.",
        ctaLabel: "Euro Hesabı Aç",
        positionT: TIP_POSITIONS[1],
      },
    ],
  },
  {
    id: "laptop",
    label: "İlk Bilgisayar",
    icon: "laptop",
    branch: "left",
    nodePosition: { x: 68, y: 88 },
    stemRoot: { x: 118, y: 228 },
    twigPath: stemPath({ x: 118, y: 228 }, { x: 68, y: 88 }),
    microTips: [
      {
        id: "laptop-student",
        text: "Öğrenci teknoloji kredisi ile 0 faizli 6 taksit seçeneğin mevcut.",
        ctaLabel: "Kredi Başvur",
        positionT: TIP_POSITIONS[0],
      },
      {
        id: "laptop-save",
        text: "Kısa vadeli birikim hedefi oluştur, 4 ayda laptop almak için günlük ₺45 yeterli.",
        ctaLabel: "Hedef Oluştur",
        positionT: TIP_POSITIONS[1],
      },
    ],
  },
];

export function getGoalById(id: string): LifeGoal | undefined {
  return LIFE_GOALS.find((g) => g.id === id);
}

export function getGoalByIds(ids: string[]): LifeGoal[] {
  return ids
    .map((id) => getGoalById(id))
    .filter((g): g is LifeGoal => g !== undefined);
}
