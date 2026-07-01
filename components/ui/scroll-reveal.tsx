"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function ScrollReveal({ children, className, stagger = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect user's motion preferences
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // Triggers slightly before element enters view
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Create delay utility classes dynamically for staggering
  const staggerClass = stagger > 0 ? `stagger-${stagger}` : ""

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? "emil-visible" : "emil-hidden",
        staggerClass,
        className
      )}
    >
      {children}
    </div>
  )
}
