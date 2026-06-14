export const SHADOWS = {
  editorial:
    "0 25px 50px -12px rgba(0, 51, 160, 0.12), 0 8px 16px -8px rgba(91, 33, 182, 0.08)",
  phone:
    "0 40px 80px -20px rgba(91, 33, 182, 0.28), 0 16px 32px -12px rgba(0, 51, 160, 0.2)",
  card: "0 1px 3px rgba(0, 51, 160, 0.1)",
} as const;

export const SURFACES = {
  landing: "#ffffff",
  sectionAlt: "#f0f4ff",
  sectionPurple: "#f5f3ff",
  appShell: "#0f1a45",
  appCard: "#1a2560",
  appCardElevated: "#243075",
  appBorder: "#334695",
  appText: "#ffffff",
  appMuted: "#a5b4fc",
} as const;

export const TYPOGRAPHY = {
  displayTracking: "-0.02em",
  bodyTracking: "0.01em",
} as const;

export const SPACING = {
  sectionY: "5rem",
  sectionYLarge: "7.5rem",
} as const;

export const RADIUS = {
  card: "12px",
  cardLarge: "20px",
  pill: "9999px",
} as const;

export const PHONE = {
  maxWidth: {
    default: "405px",
    sm: "425px",
    lg: "450px",
  },
  height: {
    default: "830px",
    sm: "850px",
    lg: "875px",
  },
} as const;

export const PHONE_CLASSES = {
  mockupWidth:
    "relative w-full max-w-[405px] sm:max-w-[425px] lg:max-w-[450px]",
  shellHeight:
    "flex h-[830px] flex-col overflow-hidden sm:h-[850px] lg:h-[875px]",
} as const;
