import { useTranslations } from "next-intl"
import { Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddReachPreviewSection() {
  const t = useTranslations("addReach.preview")

  return (
    <section className="bg-brand-dark py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-accent/10 blur-[100px]"></div>
        <div className="absolute top-40 -left-40 size-80 rounded-full bg-primary/10 blur-[100px]"></div>
      </div>

      <div className="mx-auto relative z-10 grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <ScrollReveal>
          <Badge className="mb-4 gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-accent border border-accent/30">
            <Users className="size-3.5" />
            New Feature
          </Badge>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-bold text-white">
            {t("title")}
            <br />
            <span className="text-accent">{t("titleAccent")}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/addreach" className="block">
              <Button size="lg" className="px-8 py-6 transition-all font-bold text-base h-auto">
                {t("cta")}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
        
        {/* Visual Mockup Side */}
        <ScrollReveal stagger={1} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="clay-card rounded-3xl p-6 lg:p-8 bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            {/* Inner abstract elements to represent "Dark Social" / WhatsApp Statuses */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-zinc-800/50 pb-6">
                <div className="size-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 p-0.5">
                  <div className="size-full rounded-full bg-emerald-400 flex items-center justify-center text-emerald-950 font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-medium text-white">Brand Campaign</h3>
                  <p className="text-sm text-zinc-400">Budget: $500</p>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="size-10 lg:size-14 rounded-full bg-gradient-to-tr from-accent to-purple-500 p-[2px]">
                      <div className="size-full rounded-full bg-zinc-900 border-2 border-zinc-900"></div>
                    </div>
                    <div className="h-1.5 w-8 bg-zinc-800 rounded-full"></div>
                  </div>
                ))}
              </div>
              
              <div className="mt-2 rounded-2xl bg-zinc-800/50 p-4 border border-zinc-700/50">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-300">Total Reach</span>
                  <span className="font-bold text-accent">+15,420</span>
                </div>
                <div className="mt-3 h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[85%] rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
