"use client"

import Image from "next/image"
import { Send, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  variant?: "plane" | "connections"
  theme?: "light" | "dark"
}

export function SectionDivider({ variant = "plane", theme = "light" }: SectionDividerProps) {
  const isDark = theme === "dark"
  
  if (variant === "connections") {
    return (
      <div className={cn("flex w-full items-center justify-center py-12", isDark ? "bg-brand-dark" : "bg-surface-alt")}>
        <div className="flex w-full max-w-7xl items-center justify-center gap-4 px-4 opacity-70">
          <div className={cn("h-px w-full max-w-xs bg-gradient-to-r from-transparent to-current", isDark ? "text-white/20" : "text-brand-border")} />
          <div className={cn("flex size-12 items-center justify-center rounded-full", isDark ? "bg-primary/10" : "bg-primary/5")}>
            <Share2 className={cn("size-6", isDark ? "text-primary/70" : "text-primary/60")} />
          </div>
          <div className={cn("h-px w-full max-w-xs bg-gradient-to-l from-transparent to-current", isDark ? "text-white/20" : "text-brand-border")} />
        </div>
      </div>
    )
  }

  // Plane variant
  return (
    <div className={cn("relative flex w-full items-center overflow-hidden py-16", isDark ? "bg-brand-dark" : "bg-surface-alt")}>
      <div className={cn("absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed", isDark ? "border-white/10" : "border-brand-border/60")} />
      
      {/* Plane moving across */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-[fly_12s_linear_infinite]">
        <div className={cn("flex size-12 items-center justify-center rounded-full shadow-sm", isDark ? "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]" : "bg-white text-primary border border-brand-border")}>
          <Image src="/logos/logo-addposts.png" alt="Plane" width={24} height={24} className="object-contain" />
        </div>
      </div>
    </div>
  )
}
