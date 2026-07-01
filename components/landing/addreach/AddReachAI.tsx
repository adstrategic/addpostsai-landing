import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  BrainCircuit, 
  Target,
  ScanSearch, 
  Smartphone,
  Wand2,
  ShieldAlert, 
  Bot,
  Zap,
  CheckCircle,
  Timer,
  Eye,
  Sparkles
} from "lucide-react"

export function AddReachAI() {
  const t = useTranslations("addReach.ai")

  return (
    <section className="bg-surface py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-medium text-sm mb-6 shadow-sm">
            <Sparkles className="size-4" />
            <span>{t("title")}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text mb-6 tracking-tight">
            {t("subtitle")}
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1: Segmentation */}
          <ScrollReveal stagger={1} className="clay-card rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white to-emerald-50/50 border border-brand-border/50 hover:border-emerald-500/30 transition-colors group relative overflow-hidden shadow-xl">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-emerald-500/20">
              <BrainCircuit className="size-7 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-3">
              {t("segmentation.title")}
            </h3>
            <p className="text-brand-secondary mb-8">
              {t("segmentation.description")}
            </p>
            <div className="space-y-5">
              <FeatureItem icon={Target} title={t("segmentation.features.matching.title")} text={t("segmentation.features.matching.text")} />
            </div>
          </ScrollReveal>

          {/* Card 2: Brand Shield */}
          <ScrollReveal stagger={2} className="clay-card rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white to-blue-50/50 border border-brand-border/50 hover:border-blue-500/30 transition-colors group relative overflow-hidden shadow-xl">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-blue-500/20">
              <ScanSearch className="size-7 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-3">
              {t("brandShield.title")}
            </h3>
            <p className="text-brand-secondary mb-8">
              {t("brandShield.description")}
            </p>
            <div className="space-y-5">
              <FeatureItem icon={CheckCircle} title={t("brandShield.features.vision.title")} text={t("brandShield.features.vision.text")} />
              <FeatureItem icon={Smartphone} title={t("brandShield.features.ocr.title")} text={t("brandShield.features.ocr.text")} />
            </div>
          </ScrollReveal>

          {/* Card 3: Creator Assistant */}
          <ScrollReveal stagger={3} className="clay-card rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white to-purple-50/50 border border-brand-border/50 hover:border-purple-500/30 transition-colors group relative overflow-hidden shadow-xl">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-purple-500/20">
              <Wand2 className="size-7 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-3">
              {t("creatorAssistant.title")}
            </h3>
            <p className="text-brand-secondary mb-8">
              {t("creatorAssistant.description")}
            </p>
            <div className="space-y-5">
              <FeatureItem icon={Zap} title={t("creatorAssistant.features.multiformat.title")} text={t("creatorAssistant.features.multiformat.text")} />
            </div>
          </ScrollReveal>

          {/* Card 4: Fraud Prevention */}
          <ScrollReveal stagger={4} className="clay-card rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white to-rose-50/50 border border-brand-border/50 hover:border-rose-500/30 transition-colors group relative overflow-hidden shadow-xl">
            <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-rose-500/20">
              <ShieldAlert className="size-7 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-3">
              {t("fraudPrevention.title")}
            </h3>
            <p className="text-brand-secondary mb-8">
              {t("fraudPrevention.description")}
            </p>
            <div className="space-y-5">
              <FeatureItem icon={Bot} title={t("fraudPrevention.features.anomalies.title")} text={t("fraudPrevention.features.anomalies.text")} />
            </div>
          </ScrollReveal>
        </div>

        {/* Why this AI wins */}
        <ScrollReveal stagger={5} className="mt-12 bg-brand-dark rounded-[2.5rem] p-8 sm:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 transition-colors duration-700 group-hover:bg-accent/30"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-12 text-center">
              {t("whyItWins.title")}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                { key: "reliability", icon: CheckCircle },
                { key: "speed", icon: Timer },
                { key: "transparency", icon: Eye }
              ].map((feature) => (
                <div key={feature.key} className="relative z-10 flex flex-col items-center text-center">
                  <div className="size-14 rounded-2xl bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center mb-6 shadow-xl transition-transform hover:-translate-y-1">
                    <feature.icon className="size-6 text-accent" />
                  </div>
                  <h4 className="text-xl text-white font-bold mb-3">
                    {t(`whyItWins.features.${feature.key}.title` as any)}
                  </h4>
                  <p className="text-base text-zinc-400">
                    {t(`whyItWins.features.${feature.key}.text` as any)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="flex gap-4 group/item">
      <div className="mt-1 shrink-0">
        <Icon className="size-5 text-brand-secondary transition-colors" />
      </div>
      <div>
        <span className="font-semibold text-brand-text mr-1">{title}</span>
        <span className="text-brand-secondary text-sm">{text}</span>
      </div>
    </div>
  )
}
