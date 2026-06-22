import { useTranslations } from "next-intl"
import { WaitlistCta } from "./WaitlistCta"

export function FounderSection() {
  const t = useTranslations("founder")
  const story = t.raw("story") as string[]

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-l-4 border-brand-border border-l-primary bg-surface-alt p-8 lg:p-12">
          <div className="mx-auto mb-6 size-24 rounded-full bg-brand-muted ring-4 ring-primary/30" />
          <h2 className="text-center font-display text-2xl font-bold text-brand-text lowercase">
            {t("greeting")} <span className="text-accent">{t("name")}</span>
          </h2>
          <p className="mt-1 text-center text-sm text-brand-muted italic">
            {t("subtitle")}
          </p>
          <div className="mt-8 space-y-4">
            {story.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-brand-secondary"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <WaitlistCta size="lg" className="w-full px-10 py-6 sm:w-auto">
              {t("cta")}
            </WaitlistCta>
          </div>
        </div>
      </div>
    </section>
  )
}
