import { useTranslations } from "next-intl"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials")
  const items = t.raw("items") as Array<{
    text: string
    name: string
    role: string
  }>

  return (
    <section className="bg-surface-alt pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <figure
              key={i}
              className={cn(
                "mb-4 w-full break-inside-avoid rounded-lg border border-brand-border bg-white p-4 sm:p-6"
              )}
            >
              <figcaption className="flex flex-wrap items-center gap-4">
                <div>
                  <p className="text-sm font-semibold text-brand-text">
                    {item.name}
                  </p>
                  <span className="mt-0.5 block text-xs font-medium text-brand-muted">
                    {item.role}
                  </span>
                </div>
              </figcaption>

              <div
                className="mt-6 flex gap-2"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-3.5 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-4">
                <p className="text-sm leading-relaxed text-brand-secondary">
                  {item.text}
                </p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
