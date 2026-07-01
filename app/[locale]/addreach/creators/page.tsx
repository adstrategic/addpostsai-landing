import { useTranslations } from "next-intl"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Zap, Wallet, Plane, Search, Copy, Clock, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreatorsPage() {
  const t = useTranslations("addReach.creatorsPage")

  const flowSteps = [
    { icon: Search, key: "step1" },
    { icon: Copy, key: "step2" },
    { icon: Clock, key: "step3" },
    { icon: ImageIcon, key: "step4" }
  ]

  const advantages = [
    { icon: Zap, key: "frictionless", color: "text-yellow-400" },
    { icon: Wallet, key: "instant", color: "text-emerald-400" },
    { icon: Plane, key: "freedom", color: "text-blue-400" }
  ]

  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-1/4 -right-64 size-[500px] rounded-full bg-brand-primary/15 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-zinc-900 tracking-tight leading-[1.05] [text-wrap:balance]">
              {t("hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-emerald-500">{t("hero.titleAccent")}</span>
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
              {t("hero.description")}
            </p>
            <div className="mt-12 flex justify-center">
              <Button size="lg" className="px-10 py-8 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xl transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                {t("hero.cta")}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works (Grid Typographic Sequence) */}
      <section className="py-32 bg-white relative border-t border-zinc-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.1] [text-wrap:balance]">
              {t("howItWorks.title")}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {flowSteps.map((step, index) => (
              <ScrollReveal key={step.key} stagger={index} className="flex gap-8 group">
                <div className="flex-shrink-0">
                  <div className="size-16 sm:size-20 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    <step.icon className="size-8 stroke-[1.5]" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-2">
                    0{index + 1}
                  </div>
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
      </section>

      {/* Advantages (Drenched Editorial) */}
      <section className="py-32 bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-24 max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] [text-wrap:balance]">
              {t("advantages.title")}
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
            {advantages.map((adv, index) => (
              <ScrollReveal key={adv.key} stagger={index + 1} className="flex flex-col">
                <div className={`mb-8 ${adv.color}`}>
                  <adv.icon className="size-12 stroke-[1.5]" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">
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
      <section className="py-40 bg-white text-center relative overflow-hidden border-t border-zinc-200/50">
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-zinc-950 mb-12 tracking-tight [text-wrap:balance]">
              {t("cta.title")}
            </h2>
            <Button size="lg" className="px-12 py-8 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95">
              {t("cta.btn")}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
