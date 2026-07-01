import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddReachVideo() {
  const t = useTranslations("addReach.video")

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-zinc-950 to-zinc-950 opacity-50" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            {t("title")}
          </h2>
          {t("subtitle") && (
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto [text-wrap:balance]">
              {t("subtitle")}
            </p>
          )}
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-white/10 bg-zinc-900 group">
            <iframe
              src="https://www.youtube.com/embed/yrUr3l76PhI?si=Wp3f54E_c1z3Gv6B"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
