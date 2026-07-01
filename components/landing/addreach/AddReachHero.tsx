import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import AuroraBorealisShader from "@/components/ui/aurora-borealis-shader"

export function AddReachHero() {
  const t = useTranslations("addReach.hero")

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Aurora Borealis Background */}
      <AuroraBorealisShader />
      
      {/* Background overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-zinc-950/60 pointer-events-none z-10" />
      
      <div className="mx-auto relative z-20 flex flex-col items-center justify-center max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Badge className="mb-6 gap-1.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md emil-enter">
          <Sparkles className="size-4 text-accent" />
          <span className="font-medium tracking-wide text-sm">AddReach by ADDPOSTS</span>
        </Badge>
        <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] font-bold text-white tracking-tight emil-enter stagger-1 [text-wrap:balance]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 block pb-2">
            {t("titleBrand")}
          </span>
          {t("title")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            {t("titleAccent")}
          </span>
        </h1>
        <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-zinc-300 max-w-2xl emil-enter stagger-2 [text-wrap:balance]">
          {t("description")}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center emil-enter stagger-3">
          <Button asChild size="lg" className="px-10 py-8 transition-transform hover:scale-105 active:scale-95 font-bold text-lg h-auto rounded-full bg-accent hover:bg-accent/90 text-white shadow-[0_0_40px_rgba(244,63,94,0.3)]">
            <Link href="/addreach/brands">{t("ctaPrimary")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-10 py-8 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white transition-all font-bold text-lg h-auto shadow-sm">
            <Link href="/addreach/creators">{t("ctaSecondary")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
