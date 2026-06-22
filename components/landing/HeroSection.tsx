import { useTranslations } from "next-intl"
import { Bot, Play, Sparkles } from "lucide-react"
import { PLATFORMS } from "@/lib/platforms"
import { PlatformIcon } from "./PlatformIcon"
import { WaitlistCta } from "./WaitlistCta"

function PlatformStrip() {
  const items = [...PLATFORMS]

  return (
    <div className="relative overflow-hidden py-6">
      <div className="animate-marquee flex justify-center gap-4">
        {items.map((platform, i) => (
          <PlatformIcon key={`${platform.id}-${i}`} platform={platform} />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="section-dark relative overflow-hidden pt-12 pb-8 lg:pt-20 lg:pb-16">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 z-0 h-80 sm:h-96 lg:h-[28rem]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PlatformStrip />

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-extrabold text-brand-text">
            {t("headline")}{" "}
            <span className="text-accent">{t("headlineAccent")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-brand-secondary">
            {t("sub")}
          </p>
          <div className="mt-8">
            <WaitlistCta
              size="lg"
              className="rounded-full px-8 text-base font-semibold"
            >
              {t("cta")}
            </WaitlistCta>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="size-9 rounded-full border-2 border-white bg-brand-muted"
                />
              ))}
            </div>
            <p
              className="text-sm text-brand-secondary"
              dangerouslySetInnerHTML={{
                __html: t.raw("socialProof") as string,
              }}
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-brand-border bg-zinc-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-full bg-white/10">
                <Play className="size-8 fill-white text-white" />
              </div>
              <span className="text-sm text-white/70">
                {t("videoPlaceholder")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
