"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { WaitlistCta } from "./WaitlistCta"
import { Card } from "@/components/ui/card"

function useCountUp(target: string, duration = 1500) {
  const [display, setDisplay] = useState(target)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return
        started.current = true

        const numericMatch = target.match(/^([\d,]+)/)
        if (!numericMatch) return

        const numeric = parseInt(numericMatch[1].replace(/,/g, ""), 10)
        const suffix = target.slice(numericMatch[1].length)
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const current = Math.floor(numeric * progress)
          setDisplay(current.toLocaleString() + suffix)
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { display, ref }
}

function StatCard({ value, label }: { value: string; label: string }) {
  const { display, ref } = useCountUp(value)

  return (
    <Card className="rounded-2xl border-brand-border bg-white p-8 text-center shadow-sm">
      <div
        ref={ref}
        className="font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-brand-text"
      >
        {display}
      </div>
      <p className="mt-2 text-xs font-semibold tracking-widest text-brand-muted uppercase">
        {label}
      </p>
    </Card>
  )
}

export function StatsSection() {
  const t = useTranslations("stats")

  const stats = [
    { value: t("platforms.value"), label: t("platforms.label") },
    { value: t("posts.value"), label: t("posts.label") },
    { value: t("time.value"), label: t("time.label") },
  ]

  return (
    <section
      id="reviews"
      className="bg-surface-alt pt-20 pb-10 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <WaitlistCta size="lg" className="px-10 py-6 text-base font-semibold">
            {t("cta")}
          </WaitlistCta>
        </div>
        <div className="mt-16 text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-brand-text">
            {t("lovedBy")}{" "}
            <span className="text-accent">{t("lovedByAccent")}</span>
          </h2>
          <p className="mt-2 font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-brand-text">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  )
}
