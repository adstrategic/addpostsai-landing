import { useTranslations } from "next-intl"
import { PencilRuler, UserCheck, Send, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddReachFlow() {
  const t = useTranslations("addReach.flow")

  const steps = [
    {
      id: "step1",
      icon: <PencilRuler className="size-6" />,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "step2",
      icon: <UserCheck className="size-6" />,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "step3",
      icon: <Send className="size-6" />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "step4",
      icon: <ShieldCheck className="size-6" />,
      color: "text-accent",
      bg: "bg-accent/10 border-accent/20",
    }
  ]

  return (
    <section className="bg-brand-dark py-24 border-b border-zinc-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-zinc-800 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-accent w-[80%] opacity-50 blur-[2px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={step.id} stagger={index + 1} className="relative group">
                <div className={cn(
                  "size-24 rounded-3xl mx-auto mb-8 flex items-center justify-center border-2 shadow-xl backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2",
                  step.bg, step.color
                )}>
                  {step.icon}
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4 h-14 flex items-center justify-center">
                    {t(`${step.id}.title` as any)}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {t(`${step.id}.description` as any)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
