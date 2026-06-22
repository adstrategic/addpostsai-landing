"use client"

import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher")
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 rounded-full border border-brand-border bg-muted p-0.5">
      {(["es", "en"] as const).map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-200",
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "text-brand-secondary hover:text-primary"
          )}
        >
          {t(loc)}
        </Link>
      ))}
    </div>
  )
}
