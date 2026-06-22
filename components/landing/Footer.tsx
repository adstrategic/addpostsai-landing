import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { AppLogo } from "./AppLogo"

const LEGAL_LINKS = [
  { href: "/terms-of-service", labelKey: "terms" },
  { href: "/privacy-policy", labelKey: "privacy" },
] as const

export function Footer() {
  const t = useTranslations("footer")
  const columns = [
    "links",
    "platforms",
    // "tools",
    "legal",
  ] as const

  return (
    <footer className="section-dark border-t border-brand-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo size={32} />
              <span className="font-display font-bold text-brand-text">
                ADDPOSTS
              </span>
            </Link>
            <p className="mt-3 text-sm text-brand-secondary">{t("tagline")}</p>
            <p className="mt-4 text-sm text-brand-muted">{t("copyright")}</p>
          </div>

          {columns.map((col) => (
            <div key={col}>
              <h3 className="mb-4 text-xs font-semibold tracking-widest text-brand-muted uppercase">
                {t(`columns.${col}.title`)}
              </h3>
              <ul className="space-y-2">
                {col === "legal"
                  ? LEGAL_LINKS.map(({ href, labelKey }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-sm text-brand-secondary transition-colors duration-200 hover:text-primary"
                        >
                          {t(`columns.legal.${labelKey}`)}
                        </Link>
                      </li>
                    ))
                  : (t.raw(`columns.${col}.items`) as string[]).map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm text-brand-secondary transition-colors duration-200 hover:text-primary"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
