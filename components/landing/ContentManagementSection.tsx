import { useTranslations } from "next-intl"
import { LayoutGrid } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { WaitlistCta } from "./WaitlistCta"

function PostsDashboardMockup() {
  const t = useTranslations("contentManagement.mockup")

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-md">
      <div className="h-8 bg-zinc-800" />
      <div className="p-4">
        <p className="mb-3 text-sm font-semibold text-brand-text">
          {t("title")}
        </p>
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs text-primary">
          <span className="size-2 rounded-full bg-primary" />
          {t("toast")}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-square rounded-lg bg-zinc-100" />
              <div className="h-2 rounded bg-zinc-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContentManagementSection() {
  const t = useTranslations("contentManagement")

  return (
    <section className="bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Badge className="mb-4 gap-1.5 rounded-full bg-primary-light px-3 py-1 text-primary">
            <LayoutGrid className="size-3.5" />
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
        <PostsDashboardMockup />
      </div>
    </section>
  )
}
