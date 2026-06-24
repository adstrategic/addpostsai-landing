import { setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/landing/Navbar"
import { HeroSection } from "@/components/landing/HeroSection"
import { WaitlistSection } from "@/components/landing/WaitlistSection"
import { CrossPostingSection } from "@/components/landing/CrossPostingSection"
import { SchedulingSection } from "@/components/landing/SchedulingSection"
import { ContentManagementSection } from "@/components/landing/ContentManagementSection"
import { ContentStudioSection } from "@/components/landing/ContentStudioSection"
import { AiCopywritingSection } from "@/components/landing/AiCopywritingSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"
import { FounderSection } from "@/components/landing/FounderSection"
import { PlatformGridSection } from "@/components/landing/PlatformGridSection"
import { PricingSection } from "@/components/landing/PricingSection"
import { FaqSection } from "@/components/landing/FaqSection"
import { CtaBanner } from "@/components/landing/CtaBanner"
import { Footer } from "@/components/landing/Footer"
import { routing } from "@/i18n/routing"
import { SectionDivider } from "@/components/landing/SectionDivider"

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main className="bg-brand-dark">
        <HeroSection />
        <WaitlistSection />
        <SectionDivider variant="plane" theme="dark" />
        <CrossPostingSection />
        <AiCopywritingSection />
        <SectionDivider variant="plane" theme="dark" />
        <ContentManagementSection />
        <SchedulingSection />
        {/* <ContentStudioSection /> */}
        <SectionDivider variant="plane" theme="dark" />
        <StatsSection />
        <TestimonialsSection />
        <SectionDivider variant="plane" theme="light" />
        <FounderSection />
        <PlatformGridSection />
        <SectionDivider variant="plane" theme="dark" />
        <PricingSection />
        <FaqSection />
        <SectionDivider variant="plane" theme="dark" />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
