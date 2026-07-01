import { useTranslations } from "next-intl"
import { Shield, ShieldCheck, Search, Activity, Lock, Fingerprint, Award } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddReachTrust() {
  const t = useTranslations("addReach.trust")

  return (
    <section className="bg-white bg-gradient-to-b from-white to-primary/10 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-600 mb-6">
              <Shield className="size-5" />
              <span className="font-medium tracking-wider uppercase text-sm">{t("subtitle")}</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-brand-secondary mb-12">
              {t("description")}
            </p>

            <div className="space-y-6">
              {[
                { icon: Search, title: t("features.auth.title"), desc: t("features.auth.text") },
                { icon: Activity, title: t("features.review.title"), desc: t("features.review.text") },
                { icon: Lock, title: t("features.reputation.title"), desc: t("features.reputation.text") }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 size-10 rounded-full bg-white/50 border border-brand-border flex flex-shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-brand-text" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-text text-lg">{feature.title}</h3>
                    <p className="text-brand-secondary">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal stagger={1} className="relative w-full max-w-md mx-auto lg:max-w-full h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-[3rem]"></div>
            
            <div className="relative clay-card w-full max-w-md bg-zinc-900/80 border border-zinc-800 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-6 -right-6 size-24 bg-emerald-500 rounded-full blur-[40px] opacity-20"></div>
              
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <ShieldCheck className="size-20 text-emerald-400 z-10 relative" />
                  <div className="absolute inset-0 animate-ping opacity-20 bg-emerald-400 rounded-full scale-150"></div>
                </div>
              </div>

              <h3 className="text-center text-2xl font-bold text-white mb-6">Automated AI Audit</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400 text-sm">Account Age Check</span>
                  <span className="text-emerald-400 font-medium text-sm px-2 py-1 bg-emerald-500/10 rounded">Passed</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400 text-sm">Post URL Validation</span>
                  <span className="text-emerald-400 font-medium text-sm px-2 py-1 bg-emerald-500/10 rounded">Passed</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400 text-sm">OCR Time Check</span>
                  <span className="text-emerald-400 font-medium text-sm px-2 py-1 bg-emerald-500/10 rounded">Passed</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <span className="text-emerald-400 font-bold block mb-1">FUNDS RELEASED</span>
                <span className="text-xs text-emerald-500/70">Escrow condition met successfully</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
