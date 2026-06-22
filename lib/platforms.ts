export type PlatformId =
  | "instagram"
  | "linkedin"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "threads"

export type Platform = {
  id: PlatformId
  initial: string
  bg: string
  logo?: string
}

export const PLATFORMS: Platform[] = [
  {
    id: "instagram",
    initial: "IG",
    bg: "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400",
    logo: "/logos/instagram.webp",
  },
  {
    id: "linkedin",
    initial: "in",
    bg: "bg-[#0077B5]",
    logo: "/logos/linkedin.png",
  },
  {
    id: "facebook",
    initial: "f",
    bg: "bg-[#1877F2]",
    logo: "/logos/facebook.png",
  },
  {
    id: "tiktok",
    initial: "TK",
    bg: "bg-zinc-900",
    logo: "/logos/tiktok.avif",
  },
  {
    id: "youtube",
    initial: "▶",
    bg: "bg-[#FF0000]",
    logo: "/logos/youtube.png",
  },
  {
    id: "threads",
    initial: "Θ",
    bg: "bg-zinc-900",
    logo: "/logos/threads.png",
  },
]

export const DIAGRAM_PLATFORM_IDS = [
  "linkedin",
  "instagram",
  "youtube",
  "tiktok",
] as const satisfies readonly PlatformId[]

export const SCHEDULER_PLATFORM_IDS = [
  "instagram",
  "tiktok",
  "threads",
  "youtube",
] as const satisfies readonly PlatformId[]

export function getPlatform(id: PlatformId): Platform {
  const platform = PLATFORMS.find((p) => p.id === id)
  if (!platform) {
    throw new Error(`Unknown platform: ${String(id)}`)
  }
  return platform
}
