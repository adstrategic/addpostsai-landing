"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { WaitlistCta } from "./WaitlistCta"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

type PlanKey = "creator" | "growth" | "pro"

export function PricingSection() {
  const t = useTranslations("pricing")
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  const plans: PlanKey[] = ["creator", "growth", "pro"]

  const getPrice = (priceStr: string, isYearly: boolean) => {
    if (!isYearly) return priceStr
    const numMatch = priceStr.match(/\d+/)
    if (!numMatch) return priceStr
    const num = parseInt(numMatch[0], 10)
    // 17% discount approximation
    const discounted = Math.round(num * 0.83)
    return priceStr.replace(num.toString(), discounted.toString())
  }

  return (
    <section id="pricing" className="bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wide text-primary">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-brand-text">
          {t("title")}
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="relative flex rounded-full border border-brand-border bg-white p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                billing === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-brand-secondary hover:text-primary"
              )}
            >
              {t("monthly")}
            </button>
            <button
              type="button"
              onClick={() => {
                setBilling("yearly")
              }}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                billing === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-brand-secondary hover:text-primary"
              )}
            >
              {t("yearly")}
              <Badge className="absolute -top-3 -right-3 bg-orange-100 text-[10px] text-orange-600">
                {t("saveBadge")}
              </Badge>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-brand-secondary">
              {t("freeTrial")}
            </span>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {plans.map((planKey) => {
            const features = t.raw(`plans.${planKey}.features`) as string[]
            const isCreator = planKey === "creator"
            const isPro = planKey === "pro"
            const badge =
              isCreator || isPro ? t(`plans.${planKey}.badge`) : null

            return (
              <div
                key={planKey}
                className={cn(
                  "relative rounded-2xl p-8 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(0,0,0,0.05),_0_8px_24px_rgba(0,0,0,0.04)] bg-gradient-to-b from-white to-primary/10 transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),_0_8px_16px_-4px_rgba(0,0,0,0.1)] will-change-[transform,box-shadow]",
                  isCreator
                    ? "border-2 border-primary shadow-[0_0_40px_rgba(var(--primary),0.2)]"
                    : "border border-brand-border"
                )}
              >
                <div>
                  {badge && (
                    <Badge
                      className={cn(
                        "text-md mb-4 px-4 py-3",
                        isCreator
                          ? "bg-primary text-primary-foreground"
                          : "bg-green-100 text-green-700"
                      )}
                    >
                      {badge}
                    </Badge>
                  )}
                  <h3 className="font-display text-xl font-bold text-brand-text">
                    {t(`plans.${planKey}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    {t(`plans.${planKey}.description`)}
                  </p>
                  <div className="mt-4">
                    <span className="font-display text-5xl font-extrabold bg-gradient-to-br from-gray-900 to-primary bg-clip-text text-transparent">
                      {getPrice(t(`plans.${planKey}.price`), billing === "yearly")}
                    </span>
                    <span className="text-sm text-brand-muted">
                      {t("perMonth")}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-brand-secondary"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <WaitlistCta size="lg" className="mt-6 w-full">
                    {t(`plans.${planKey}.cta`)}
                  </WaitlistCta>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-brand-muted">
          {t("guarantee")}
        </p>
      </div>
    </section>
  )
}
