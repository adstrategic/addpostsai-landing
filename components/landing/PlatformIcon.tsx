import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Platform } from "@/lib/platforms"

const sizeMap = {
  xs: { box: "size-6", px: 24 },
  sm: { box: "size-11", px: 44 },
  md: { box: "size-12", px: 48 },
  lg: { box: "size-16", px: 64 },
} as const

type PlatformIconProps = {
  platform: Platform
  size?: keyof typeof sizeMap
  rounded?: "full" | "xl"
  className?: string
}

export function PlatformIcon({
  platform,
  size = "md",
  rounded = "full",
  className,
}: PlatformIconProps) {
  const { box, px } = sizeMap[size]
  const roundedClass = rounded === "full" ? "rounded-full" : "rounded-xl"

  if (platform.logo) {
    return (
      <div className={cn("relative w-auto shrink-0", className)}>
        <Image
          src={platform.logo}
          alt=""
          width={px}
          height={px}
          className="size-full object-contain"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        box,
        roundedClass,
        "flex shrink-0 items-center justify-center text-xs font-bold text-white",
        platform.bg,
        className
      )}
    >
      {platform.initial}
    </div>
  )
}

export function PlatformIconImg({
  platform,
  className,
}: {
  platform: Platform
  className?: string
}) {
  if (platform.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={platform.logo}
        alt=""
        className={cn("size-full object-cover", className)}
      />
    )
  }

  return (
    <span className={cn("text-xs font-bold text-white", className)}>
      {platform.initial}
    </span>
  )
}
