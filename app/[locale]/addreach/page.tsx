import { setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { AddReachHero } from "@/components/landing/addreach/AddReachHero"
import { AddReachProblem } from "@/components/landing/addreach/AddReachProblem"
import { AddReachProfiles } from "@/components/landing/addreach/AddReachProfiles"
import { AddReachFlow } from "@/components/landing/addreach/AddReachFlow"
import { AddReachTrust } from "@/components/landing/addreach/AddReachTrust"
import { AddReachAI } from "@/components/landing/addreach/AddReachAI"
import { AddReachVideo } from "@/components/landing/addreach/AddReachVideo"
import { AddReachCta } from "@/components/landing/addreach/AddReachCta"
import { routing } from "@/i18n/routing"
import { SectionDivider } from "@/components/landing/SectionDivider"

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function AddReachPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main className="bg-brand-dark min-h-screen">
        <AddReachHero />
        <SectionDivider variant="plane" theme="dark" />
        <AddReachProblem />
        <SectionDivider variant="plane" theme="dark" />
        <AddReachProfiles />
        <AddReachFlow />
        <AddReachAI />
        <AddReachTrust />
        <AddReachVideo />
        <AddReachCta />
      </main>
      <Footer />
    </>
  )
}
