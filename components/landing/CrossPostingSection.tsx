import { useTranslations } from "next-intl"
import { Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { WaitlistCta } from "./WaitlistCta"
import { PlatformDiagram } from "./PlatformDiagram"

export function CrossPostingSection() {
  const t = useTranslations("crossPosting")

  return (
    <section id="features" className="bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Badge className="mb-4 gap-1.5 rounded-full bg-primary-light px-3 py-1 text-primary">
            <Zap className="size-3.5" />
            {t("eyebrow")}
          </Badge>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-bold text-brand-text">
            {t("headline")}
            <br />
            <span className="text-accent">{t("headlineAccent")}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-secondary">
            {t("body")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaitlistCta size="lg" className="px-10 py-6">
              {t("ctaPrimary")}
            </WaitlistCta>
            <WaitlistCta
              variant="outline"
              size="lg"
              className="border-2 px-10 py-6"
            >
              {t("ctaSecondary")}
            </WaitlistCta>
          </div>
        </div>
        <PlatformDiagram />
      </div>
    </section>
  )
}
