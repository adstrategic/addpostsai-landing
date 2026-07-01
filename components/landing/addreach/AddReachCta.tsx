import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Link } from "@/i18n/navigation"

export function AddReachCta() {
  const t = useTranslations("addReach.cta")

  return (
    <section className="bg-white bg-gradient-to-b from-white to-primary/10 py-32 relative overflow-hidden">
      {/* High Contrast Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[80%] bg-white/50 blur-[120px] pointer-events-none"></div>

      <ScrollReveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text mb-6">
          {t("title")}
        </h2>
        <p className="text-xl sm:text-2xl text-brand-secondary mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild size="lg" className="w-full sm:w-auto px-10 py-7 transition-all font-bold text-lg h-auto">
            <Link href="/addreach/brands">
              {t("brandBtn")}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-10 py-7 rounded-full border-2 border-brand-border bg-white text-brand-text hover:bg-zinc-100 hover:text-brand-text transition-all font-bold text-lg h-auto shadow-sm">
            <Link href="/addreach/creators">
              {t("creatorBtn")}
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  )
}
