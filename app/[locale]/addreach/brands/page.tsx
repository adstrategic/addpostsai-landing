import { useTranslations } from "next-intl"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ShieldCheck, TrendingUp, Lock, Upload, Users, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandsPage() {
  const t = useTranslations("addReach.brandsPage")

  const flowSteps = [
    { icon: Upload, key: "step1" },
    { icon: Users, key: "step2" },
    { icon: Zap, key: "step3" },
    { icon: CheckCircle2, key: "step4" }
  ]

  const advantages = [
    { icon: ShieldCheck, key: "shield" },
    { icon: TrendingUp, key: "roi" },
    { icon: Lock, key: "escrow" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-1/4 -left-64 size-[500px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] [text-wrap:balance]">
              {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-rose-400">{t("hero.titleAccent")}</span>
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
              {t("hero.description")}
            </p>
            <div className="mt-12 flex justify-center">
              <Button size="lg" className="px-10 py-8 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-xl transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(244,63,94,0.3)]">
                {t("hero.cta")}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works (Typographic Sequence) */}
      <section className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Sticky Title */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <ScrollReveal>
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.1] [text-wrap:balance]">
                    {t("howItWorks.title")}
                  </h2>
                </ScrollReveal>
              </div>
            </div>

            {/* Steps Sequence */}
            <div className="lg:col-span-7 flex flex-col gap-24">
              {flowSteps.map((step, index) => (
                <ScrollReveal key={step.key} stagger={index} className="flex flex-col sm:flex-row gap-8 sm:gap-12 group">
                  <div className="flex-shrink-0">
                    <div className="size-20 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                      <step.icon className="size-8 stroke-[1.5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-4 tracking-tight">
                      {t(`howItWorks.steps.${step.key}.title`)}
                    </h3>
                    <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed [text-wrap:pretty]">
                      {t(`howItWorks.steps.${step.key}.text`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Advantages (Drenched Editorial) */}
      <section className="py-32 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-24 max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] [text-wrap:balance]">
              {t("advantages.title")}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
            {advantages.map((adv, index) => (
              <ScrollReveal key={adv.key} stagger={index + 1} className="flex flex-col">
                <div className="mb-8 text-accent">
                  <adv.icon className="size-12 stroke-[1.5]" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  {t(`advantages.features.${adv.key}.title`)}
                </h3>
                <p className="text-xl text-zinc-400 leading-relaxed [text-wrap:pretty]">
                  {t(`advantages.features.${adv.key}.text`)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-zinc-950 text-center relative overflow-hidden border-t border-zinc-900/50">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-white mb-12 tracking-tight [text-wrap:balance]">
              {t("cta.title")}
            </h2>
            <Button size="lg" className="px-12 py-8 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-xl shadow-[0_0_40px_rgba(244,63,94,0.3)] hover:shadow-[0_0_60px_rgba(244,63,94,0.5)] transition-all hover:scale-105 active:scale-95">
              {t("cta.btn")}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
