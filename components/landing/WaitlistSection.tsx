"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { CheckCircle2 } from "lucide-react"
import { isValidWaitlistEmail } from "@/lib/waitlist"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

type WaitlistError = "invalid_email" | "server_error" | null

export function WaitlistSection() {
  const t = useTranslations("waitlist")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<WaitlistError>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const trimmedEmail = email.trim()

    if (!isValidWaitlistEmail(trimmedEmail)) {
      setError("invalid_email")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      const data = (await response.json()) as { error?: WaitlistError }

      if (!response.ok) {
        setError(data.error ?? "server_error")
        return
      }

      setIsSuccess(true)
    } catch {
      setError("server_error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-brand-dark py-20 lg:py-28"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-7xl">
            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-brand-secondary">
            {t("description")}
          </p>

          {isSuccess ? (
            <div className="mx-auto max-w-lg rounded-2xl border border-brand-border bg-surface px-6 py-10">
              <CheckCircle2 className="mx-auto mb-4 size-12 text-accent" />
              <h3 className="mb-2 text-2xl font-bold text-primary">
                {t("successTitle")}
              </h3>
              <p className="text-black">{t("successDescription")}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t("emailPlaceholder")}
                required
                autoComplete="email"
                disabled={isSubmitting}
                aria-invalid={error === "invalid_email"}
                className="px-5 py-6 text-base text-brand-text placeholder:text-brand-muted"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-6 text-lg font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                {isSubmitting ? t("submitting") : t("cta")}
              </Button>
            </form>
          )}

          {error && !isSuccess && (
            <p className="mt-4 text-sm text-destructive" role="alert">
              {t(`errors.${error}`)}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
