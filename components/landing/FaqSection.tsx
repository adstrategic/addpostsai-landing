import { useTranslations } from "next-intl"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const t = useTranslations("faq")
  const items = t.raw("items") as Array<{ q: string; a: string }>

  return (
    <section id="faq" className="section-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-brand-text">
            {t("title")}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-brand-border"
            >
              <AccordionTrigger className="text-left text-base font-medium text-brand-text hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-brand-secondary leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
