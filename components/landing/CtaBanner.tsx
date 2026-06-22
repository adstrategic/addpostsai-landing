import { useTranslations } from "next-intl"
import { WaitlistCta } from "./WaitlistCta"

export function CtaBanner() {
  const t = useTranslations("ctaBanner")

  return (
    <section className="bg-brand-dark py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-border bg-surface-alt bg-linear-to-b from-primary-light/30 to-transparent p-10 text-center shadow-sm lg:p-16">
          <h2 className="font-display text-3xl font-bold text-brand-text lg:text-4xl">
            {t("headline")}{" "}
            <span className="text-accent">{t("headlineAccent")}</span>
            {t("headlineEnd")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-brand-secondary">
            {t("body")}
          </p>
          <WaitlistCta size="lg" className="mt-8 px-10 py-6 text-base font-semibold">
            {t("cta")}
          </WaitlistCta>
        </div>
      </div>
    </section>
  )
}
