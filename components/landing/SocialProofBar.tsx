import { useTranslations } from "next-intl"
import { DollarSign, Rocket } from "lucide-react"

const PUBLICATIONS = [
  { key: "starterStory", icon: DollarSign },
  { key: "tinyLaunch", icon: Rocket },
  { key: "productHunt", icon: null },
  { key: "twitter", icon: null },
] as const

export function SocialProofBar() {
  const t = useTranslations("socialProofBar")

  return (
    <section className="border-y border-brand-border bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 md:gap-16 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold tracking-widest text-brand-muted uppercase">
          {t("label")}
        </span>
        {PUBLICATIONS.map(({ key, icon: Icon }) => (
          <div
            key={key}
            className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-zinc-400 grayscale transition-all duration-200 hover:grayscale-0 hover:text-brand-text"
          >
            <div className="flex size-6 items-center justify-center rounded bg-zinc-200">
              {Icon ? (
                <Icon className="size-3.5" />
              ) : (
                <span className="text-xs font-bold">
                  {key === "productHunt" ? "P" : "X"}
                </span>
              )}
            </div>
            {t(`publications.${key}`)}
          </div>
        ))}
      </div>
    </section>
  )
}
