import Image from "next/image"
import { cn } from "@/lib/utils"

type AppLogoProps = {
  size?: number
  rounded?: boolean
  className?: string
}

export function AppLogo({
  size = 40,
  rounded = true,
  className,
}: AppLogoProps) {
  return rounded ? (
    <div className="flex size-10 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-primary-foreground">
      <Image
        src="/logos/logo-addposts.png"
        alt="ADDPOSTS"
        width={size}
        height={size}
        className={cn(rounded && "rounded-full", className)}
      />
    </div>
  ) : (
    <Image
      src="/logos/logo-addposts.png"
      alt="ADDPOSTS"
      width={size}
      height={size}
      className={cn(rounded && "rounded-full", className)}
    />
  )
}
