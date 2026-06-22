"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Check, Hash, Loader2, Search, Sparkles, Wand2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { getPlatform, type PlatformId } from "@/lib/platforms"
import { cn } from "@/lib/utils"
import { PlatformIcon } from "./PlatformIcon"
import { WaitlistCta } from "./WaitlistCta"

const COPY_PLATFORM_IDS = [
  "instagram",
  "tiktok",
  "youtube",
  "linkedin",
] as const satisfies readonly PlatformId[]

type CopyPlatformId = (typeof COPY_PLATFORM_IDS)[number]

function SeoScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-[10px] font-semibold text-primary">{score}</span>
    </div>
  )
}

function AiCopywritingMockup() {
  const t = useTranslations("aiCopywriting.mockup")
  const [perPlatform, setPerPlatform] = useState(true)
  const [activePlatform, setActivePlatform] =
    useState<CopyPlatformId>("instagram")
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  const platformNames: Record<CopyPlatformId, string> = {
    instagram: "Instagram",
    tiktok: "TikTok",
    youtube: "YouTube",
    linkedin: "LinkedIn",
  }

  const seoScores: Record<CopyPlatformId, number> = {
    instagram: 94,
    tiktok: 91,
    youtube: 88,
    linkedin: 96,
  }

  const charLimits: Record<CopyPlatformId, number> = {
    instagram: 2200,
    tiktok: 4000,
    youtube: 5000,
    linkedin: 3000,
  }

  const fullCopy = perPlatform
    ? t(`platforms.${activePlatform}.copy`)
    : t("universalCopy")

  const hashtags = perPlatform
    ? t(`platforms.${activePlatform}.hashtags`)
    : t("universalHashtags")

  useEffect(() => {
    if (!hasGenerated) return

    let index = 0
    const interval = window.setInterval(() => {
      index += 2
      setDisplayedText(fullCopy.slice(0, index))
      if (index >= fullCopy.length) {
        window.clearInterval(interval)
      }
    }, 16)

    return () => window.clearInterval(interval)
  }, [hasGenerated, fullCopy])

  function handleGenerate() {
    if (isGenerating) return
    setIsGenerating(true)
    setHasGenerated(false)
    setDisplayedText("")

    window.setTimeout(() => {
      setIsGenerating(false)
      setHasGenerated(true)
    }, 1400)
  }

  function handlePlatformChange(id: CopyPlatformId) {
    setActivePlatform(id)
    setDisplayedText("")
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-white p-4 shadow-md">
        <div className="mb-4 flex items-center gap-2 rounded-t-xl bg-zinc-800 px-3 py-2.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-yellow-400" />
          <div className="size-2.5 rounded-full bg-primary" />
          <span className="ml-2 text-[10px] text-zinc-400">
            {t("windowTitle")}
          </span>
        </div>

        <p className="mb-1 text-sm font-semibold text-black">{t("title")}</p>
        <p className="mb-3 text-xs text-brand-muted">{t("subtitle")}</p>

        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-medium text-brand-muted">
            {t("summaryLabel")}
          </label>
          <div className="min-h-[72px] rounded-xl border border-brand-border bg-zinc-50 px-3 py-2.5 text-sm leading-relaxed text-brand-text">
            {t("summaryValue")}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between rounded-xl border border-brand-border bg-zinc-50 px-3 py-2.5">
          <div>
            <p className="text-xs font-medium text-black">{t("modeLabel")}</p>
            <p className="text-[10px] text-brand-muted">
              {perPlatform ? t("modePerPlatform") : t("modeUniversal")}
            </p>
          </div>
          <Switch
            checked={perPlatform}
            onCheckedChange={(checked) => {
              setPerPlatform(checked)
              setHasGenerated(false)
              setDisplayedText("")
            }}
            className="data-[state=checked]:bg-primary"
            aria-label={t("modeLabel")}
          />
        </div>

        <Button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="mb-4 w-full rounded-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              {t("generating")}
            </>
          ) : (
            <>
              <Sparkles className="mr-2 size-4" />
              {t("generate")}
            </>
          )}
        </Button>

        {hasGenerated && (
          <div className="animate-in duration-300 fade-in slide-in-from-bottom-2">
            {perPlatform ? (
              <div className="mb-3 flex flex-wrap gap-1.5">
                {COPY_PLATFORM_IDS.map((id) => {
                  const platform = getPlatform(id)
                  const isActive = activePlatform === id

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handlePlatformChange(id)}
                      className={cn(
                        "flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors duration-200",
                        isActive
                          ? "border-primary bg-primary-light text-primary"
                          : "border-brand-border bg-white text-brand-muted hover:border-primary/40 hover:text-brand-secondary"
                      )}
                    >
                      <PlatformIcon platform={platform} size="xs" />
                      {platformNames[id]}
                      <span className="rounded bg-primary/10 px-1 py-0.5 text-[9px] text-primary">
                        {seoScores[id]}
                      </span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="mb-3 flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-[10px] font-medium text-primary">
                <Check className="size-3" />
                {t("appliedToAll")}
              </div>
            )}

            <div className="rounded-xl border border-brand-border p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {perPlatform && (
                    <PlatformIcon
                      platform={getPlatform(activePlatform)}
                      size="xs"
                    />
                  )}
                  <span className="text-xs font-semibold text-black">
                    {perPlatform
                      ? platformNames[activePlatform]
                      : t("universalTitle")}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="gap-1 border-primary/30 bg-primary-light text-[9px] text-primary"
                >
                  <Search className="size-2.5" />
                  {t("seoOptimized")}
                </Badge>
              </div>

              <div className="mb-3 min-h-[80px] rounded-lg bg-zinc-50 px-3 py-2.5 text-xs leading-relaxed text-brand-secondary">
                {displayedText}
                {displayedText.length < fullCopy.length && (
                  <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-primary" />
                )}
              </div>

              <div className="mb-2 flex flex-wrap gap-1">
                {hashtags.split(" ").map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] text-primary"
                  >
                    <Hash className="size-2" />
                    {tag.replace("#", "")}
                  </span>
                ))}
              </div>

              <div className="space-y-2 border-t border-brand-border pt-2">
                <div className="flex items-center justify-between text-[10px] text-brand-muted">
                  <span>{t("seoScore")}</span>
                  <span>
                    {displayedText.length}/
                    {perPlatform
                      ? charLimits[activePlatform]
                      : charLimits.instagram}
                  </span>
                </div>
                <SeoScoreBar
                  score={perPlatform ? seoScores[activePlatform] : 92}
                />
              </div>
            </div>
          </div>
        )}

        {!hasGenerated && !isGenerating && (
          <div className="rounded-xl border border-dashed border-brand-border bg-zinc-50 px-4 py-6 text-center">
            <Wand2 className="mx-auto mb-2 size-5 text-brand-muted" />
            <p className="text-xs text-brand-muted">{t("emptyState")}</p>
          </div>
        )}
      </div>

      {hasGenerated && perPlatform && (
        <div className="absolute -right-2 -bottom-4 z-10 hidden w-44 rounded-xl border border-brand-border bg-white p-3 shadow-lg lg:-right-10 lg:block">
          <p className="mb-2 text-[10px] font-semibold text-black">
            {t("rankingPreview")}
          </p>
          <div className="space-y-1.5">
            {COPY_PLATFORM_IDS.map((id) => (
              <div
                key={id}
                className={cn(
                  "flex items-center justify-between rounded-lg px-2 py-1 text-[9px]",
                  activePlatform === id
                    ? "bg-primary-light text-primary"
                    : "text-brand-muted"
                )}
              >
                <span>{platformNames[id]}</span>
                <span className="font-semibold">{seoScores[id]}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function AiCopywritingSection() {
  const t = useTranslations("aiCopywriting")

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <AiCopywritingMockup />
        </div>
        <div className="order-1 lg:order-2">
          <Badge className="mb-4 gap-1.5 rounded-full bg-primary-light px-3 py-1 text-primary">
            <Sparkles className="size-3.5" />
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
            <WaitlistCta className="px-10 py-6">{t("ctaPrimary")}</WaitlistCta>
            <WaitlistCta variant="outline" className="border-2 px-10 py-6">
              {t("ctaSecondary")}
            </WaitlistCta>
          </div>
        </div>
      </div>
    </section>
  )
}
