import { useTranslations } from "next-intl"
import { Calendar, Check, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SCHEDULER_PLATFORM_IDS, getPlatform } from "@/lib/platforms"
import { PlatformIcon } from "./PlatformIcon"
import { WaitlistCta } from "./WaitlistCta"

function SchedulerMockup() {
  const t = useTranslations("scheduling.mockup")
  const platformNames: Record<(typeof SCHEDULER_PLATFORM_IDS)[number], string> =
    {
      instagram: "Instagram",
      tiktok: "TikTok",
      threads: "Threads",
      youtube: "YouTube",
    }

  const platforms = SCHEDULER_PLATFORM_IDS.map((id) => ({
    id,
    platform: getPlatform(id),
    name: platformNames[id],
  }))

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-surface-alt p-4 shadow-md">
        <div className="mb-4 flex items-center gap-2 rounded-t-xl bg-zinc-800 p-3">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-yellow-400" />
          <div className="size-2.5 rounded-full bg-primary" />
        </div>
        <p className="mb-3 text-sm font-semibold text-black">{t("title")}</p>
        <div className="mb-4">
          <p className="mb-1 text-xs text-brand-muted">{t("caption")}</p>
          <div className="h-10 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm text-brand-secondary">
            {t("captionValue")}
          </div>
        </div>
        <p className="mb-2 text-xs font-medium text-brand-muted">
          {t("publishingTo")}
        </p>
        <div className="mb-4 space-y-2">
          {platforms.map(({ id, platform, name }) => (
            <div
              key={id}
              className="flex items-center gap-2 rounded-lg bg-white px-3 py-2"
            >
              <PlatformIcon platform={platform} size="xs" />
              <span className="flex-1 text-sm text-black">{name}</span>
              <div className="size-6 rounded-full bg-brand-muted" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-brand-border pt-3">
          <span className="text-xs text-brand-secondary">
            {t("schedulePost")}
          </span>
          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
          <div className="ml-auto flex gap-2">
            <div className="rounded border border-brand-border px-2 py-1 text-xs text-brand-muted">
              2024-12-12
            </div>
            <div className="rounded border border-brand-border px-2 py-1 text-xs text-brand-muted">
              11:55 PM
            </div>
          </div>
        </div>
        <Button disabled className="mt-4 w-full rounded-full opacity-70">
          <Loader2 className="mr-2 size-4 animate-spin" />
          {t("scheduling")}
        </Button>
      </div>

      {/* Floating modal */}
      <div className="absolute top-8 right-4 z-10 w-52 rounded-xl border border-brand-border bg-white p-4 shadow-lg lg:-right-8">
        <p className="mb-3 text-sm font-semibold text-black">
          {t("modalTitle")}
        </p>
        <div className="space-y-2">
          {["Instagram", "TikTok", "Threads"].map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-xs text-brand-secondary"
            >
              <Check className="size-3.5 text-primary" />
              {name}
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-brand-muted">{t("modalNote")}</p>
      </div>
    </div>
  )
}

export function SchedulingSection() {
  const t = useTranslations("scheduling")

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <SchedulerMockup />
        </div>
        <div className="order-1 lg:order-2">
          <Badge className="mb-4 gap-1.5 rounded-full bg-primary-light px-3 py-1 text-primary">
            <Calendar className="size-3.5" />
            {t("eyebrow")}
          </Badge>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-bold text-white">
            {t("headline")}
            <br />
            <span className="text-accent">{t("headlineAccent")}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#92b7b1]">
            {t("body")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaitlistCta size="lg" className="px-10 py-6">
              {t("ctaPrimary")}
            </WaitlistCta>
            <WaitlistCta
              variant="outline"
              size="lg"
              className="border-2 px-10 py-6"
            >
              {t("ctaSecondary")}
            </WaitlistCta>
          </div>
        </div>
      </div>
    </section>
  )
}
