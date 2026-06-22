import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { LegalDocument } from "@/components/legal/LegalDocument"
import { routing } from "@/i18n/routing"

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "privacyPolicy.metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main className="section-dark min-h-screen bg-brand-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LegalDocument namespace="privacyPolicy" />
        </div>
      </main>
      <Footer />
    </>
  )
}
