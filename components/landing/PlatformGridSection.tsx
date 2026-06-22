import { useTranslations } from "next-intl"
import { WaitlistCta } from "./WaitlistCta"
import { Card } from "@/components/ui/card"
import { PLATFORMS } from "@/lib/platforms"
import { PlatformIcon } from "./PlatformIcon"

export function PlatformGridSection() {
  const t = useTranslations("platforms")

  return (
    <section id="platforms" className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-brand-text lg:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-brand-secondary">{t("subtitle")}</p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {PLATFORMS.map((platform) => (
            <Card
              key={platform.id}
              className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl p-6 transition-all duration-200 hover:border-primary hover:shadow-md"
            >
              <PlatformIcon platform={platform} size="lg" rounded="xl" />
              <span className="text-sm font-medium text-brand-text">
                {t(`names.${platform.id}`)}
              </span>
            </Card>
          ))}
          <Card className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl bg-muted p-6">
            <span className="text-2xl text-brand-muted">···</span>
            <span className="text-sm text-brand-muted">{t("moreToCome")}</span>
          </Card>
        </div>

        <WaitlistCta variant="outline" className="mt-8 px-10 py-6">
          {t("cta")}
        </WaitlistCta>
      </div>
    </section>
  )
}
