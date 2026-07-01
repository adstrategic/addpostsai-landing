import { useTranslations } from "next-intl"
import { TrendingDown, TrendingUp, Users, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddReachProblem() {
  const t = useTranslations("addReach.problemSolution")

  return (
    <section className="bg-zinc-950 py-24 border-y border-zinc-900 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("sectionTitle")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* The Problem */}
          <ScrollReveal stagger={1} className="flex flex-col gap-6 opacity-80 transition-opacity hover:opacity-100">
            <div className="flex items-center gap-3 text-red-400">
              <TrendingDown className="size-6" />
              <h3 className="font-display text-xl font-semibold tracking-wide uppercase">The Old Way</h3>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("problemTitle")}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {t("problemText")}
            </p>
            
            <div className="mt-4 p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-zinc-300 font-medium">Meta Ads Budget</span>
                <span className="text-red-400 font-bold">$500</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex-1 bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <div className="w-[10%] h-full bg-red-500/50 rounded-full"></div>
                </div>
                <span>Low Trust (2% CTR)</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Divider on mobile / Arrow on desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-zinc-900 border-4 border-zinc-950 items-center justify-center z-10">
            <ArrowRight className="size-6 text-zinc-500" />
          </div>

          {/* The Solution */}
          <ScrollReveal stagger={2} className="clay-card p-8 sm:p-10 bg-zinc-900/50 border border-accent/20 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-700"></div>
            
            <div className="flex items-center gap-3 text-accent">
              <TrendingUp className="size-6" />
              <h3 className="font-display text-xl font-semibold tracking-wide uppercase">The AddReach Way</h3>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("solutionTitle")}
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-medium">
              {t("solutionText")}
            </p>
            
            <div className="mt-4 p-6 rounded-2xl bg-accent/10 border border-accent/20 shadow-[0_0_30px_rgba(244,63,94,0.1)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">AddReach Budget</span>
                <span className="text-accent font-bold">$500</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-300">
                <div className="flex-1 bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-accent rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
                </div>
                <span className="flex items-center gap-1 font-semibold text-accent"><Users className="size-4"/> High Trust (20% CTR)</span>
              </div>
              <div className="mt-4 pt-4 border-t border-accent/10 flex justify-between text-sm">
                <span className="text-zinc-400">Distribution</span>
                <span className="text-white font-medium">100 Local Ambassadors ($5 ea)</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
