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
                // TODO: wire yearly prices
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
              <Card
                key={planKey}
                className={cn(
                  "relative p-6",
                  isCreator
                    ? "border-2 border-primary shadow-lg"
                    : "border border-brand-border"
                )}
              >
                <CardContent>
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
                    <span className="font-display text-5xl font-extrabold text-brand-text">
                      {t(`plans.${planKey}.price`)}
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
                </CardContent>
              </Card>
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
