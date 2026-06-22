import { useTranslations } from "next-intl"
import { Wand2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WaitlistCta } from "./WaitlistCta"

function ContentStudioMockup() {
  const t = useTranslations("contentStudio.mockup")

  const templates = [
    { key: "grid", views: "20M+" },
    { key: "fade", views: "500M+" },
    { key: "ugc", views: "1M+" },
  ] as const

  return (
    <div className="rounded-2xl border border-brand-border bg-white p-4 shadow-md">
      <p className="mb-4 text-sm font-semibold text-black">{t("title")}</p>

      <div className="mb-4 rounded-xl bg-primary-light p-4">
        <Badge className="mb-2 bg-primary text-[10px] text-primary-foreground">
          {t("featuredBadge")}
        </Badge>
        <p className="text-sm font-semibold text-black">{t("featuredTitle")}</p>
        <p className="mt-1 text-xs text-brand-secondary">{t("featuredDesc")}</p>
        <WaitlistCta size="sm" className="mt-3 rounded-full">
          {t("featuredCta")}
        </WaitlistCta>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {templates.map(({ key, views }) => (
          <div key={key} className="rounded-xl border border-brand-border p-3">
            <div className="mb-2 aspect-video rounded-lg bg-zinc-100" />
            <p className="text-xs font-semibold text-black">
              {t(`templates.${key}`)}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[10px] text-primary">{t("trending")}</span>
              <span className="text-[10px] text-brand-muted">{views}</span>
            </div>
            <WaitlistCta
              size="sm"
              variant="outline"
              className="mt-2 w-full rounded-full text-xs"
            >
              {t("useTemplate")}
            </WaitlistCta>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContentStudioSection() {
  const t = useTranslations("contentStudio")

  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <ContentStudioMockup />
        </div>
        <div className="order-1 lg:order-2">
          <Badge className="mb-4 gap-1.5 rounded-full bg-primary-light px-3 py-1 text-primary">
            <Wand2 className="size-3.5" />
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
            <WaitlistCta className="px-10 py-6">{t("ctaPrimary")}</WaitlistCta>
            <WaitlistCta variant="outline" className="border-2 px-10 py-6">
              {t("ctaSecondary")}
            </WaitlistCta>
          </div>
        </div>
      </div>
    </section>
  )
}
