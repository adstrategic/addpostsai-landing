import { useTranslations } from "next-intl"
import { Building2, Smartphone, Target, ShieldCheck, MessagesSquare, BadgeDollarSign, Wallet, Pointer, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddReachProfiles() {
  const t = useTranslations("addReach.profiles")

  return (
    <section className="bg-surface py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text mb-6">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Brand Profile Card */}
          <ScrollReveal stagger={1} className="relative rounded-2xl p-8 sm:p-12 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(0,0,0,0.05),_0_8px_24px_rgba(0,0,0,0.04)] bg-gradient-to-b from-white to-primary/10 transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),_0_8px_16px_-4px_rgba(0,0,0,0.1)] will-change-[transform,box-shadow] overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-accent/10 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="size-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-brand-border">
                <Building2 className="size-8 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-brand-text mb-3 tracking-tight">
                {t("brands.title")}
              </h3>
              <p className="text-lg font-medium text-primary mb-4">
                {t("brands.subtitle")}
              </p>
              <p className="text-brand-secondary mb-10 leading-relaxed">
                {t("brands.description")}
              </p>

              <div className="space-y-6">
                <FeatureRow icon={<Target className="text-emerald-400"/>} title={t("brands.features.targeting.title")} text={t("brands.features.targeting.text")} />
                <FeatureRow icon={<ShieldCheck className="text-blue-400"/>} title={t("brands.features.safety.title")} text={t("brands.features.safety.text")} />
                <FeatureRow icon={<MessagesSquare className="text-purple-400"/>} title={t("brands.features.conversion.title")} text={t("brands.features.conversion.text")} />
                <FeatureRow icon={<BadgeDollarSign className="text-amber-400"/>} title={t("brands.features.roi.title")} text={t("brands.features.roi.text")} />
              </div>
            </div>
          </ScrollReveal>

          {/* Creator Profile Card */}
          <ScrollReveal stagger={2} className="relative rounded-2xl p-8 sm:p-12 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(0,0,0,0.05),_0_8px_24px_rgba(0,0,0,0.04)] bg-gradient-to-b from-white to-primary/10 transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),_0_8px_16px_-4px_rgba(0,0,0,0.1)] will-change-[transform,box-shadow] overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/4 group-hover:bg-primary/10 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="size-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-brand-border">
                <Smartphone className="size-8 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-brand-text mb-3 tracking-tight">
                {t("creators.title")}
              </h3>
              <p className="text-lg font-medium text-primary mb-4">
                {t("creators.subtitle")}
              </p>
              <p className="text-brand-secondary mb-10 leading-relaxed">
                {t("creators.description")}
              </p>

              <div className="space-y-6">
                <FeatureRow icon={<Wallet className="text-emerald-400"/>} title={t("creators.features.easyMoney.title")} text={t("creators.features.easyMoney.text")} />
                <FeatureRow icon={<Zap className="text-amber-400"/>} title={t("creators.features.noEffort.title")} text={t("creators.features.noEffort.text")} />
                <FeatureRow icon={<ShieldCheck className="text-blue-400"/>} title={t("creators.features.securePayments.title")} text={t("creators.features.securePayments.text")} />
                <FeatureRow icon={<Pointer className="text-purple-400"/>} title={t("creators.features.freedom.title")} text={t("creators.features.freedom.text")} />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

function FeatureRow({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 p-2 rounded-xl bg-white shadow-sm border border-brand-border shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-brand-text font-semibold mb-1">{title}</h4>
        <p className="text-brand-secondary text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
