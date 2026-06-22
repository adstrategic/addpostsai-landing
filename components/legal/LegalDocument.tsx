"use client"

import { useTranslations } from "next-intl"

type LegalSection = {
  title: string
  paragraphs?: string[]
  list?: string[]
}

type LegalDocumentProps = {
  namespace: "termsOfService" | "privacyPolicy"
}

export function LegalDocument({ namespace }: LegalDocumentProps) {
  const t = useTranslations(namespace)
  const sections = t.raw("sections") as LegalSection[]

  return (
    <article className="text-brand-secondary">
      <header className="mb-10 border-b border-brand-border pb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm text-brand-muted">{t("lastUpdated")}</p>
      </header>

      <p className="mb-8 leading-relaxed">{t("intro")}</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-semibold text-brand-text">
              {section.title}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mb-3 leading-relaxed last:mb-0">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <p className="mt-10 border-t border-brand-border pt-8 leading-relaxed text-brand-text">
        {t("closing")}
      </p>
    </article>
  )
}
