"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Menu, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "@/i18n/navigation"
import { useNavbarShadow } from "@/hooks/use-navbar-shadow"
import { cn } from "@/lib/utils"
import { LocaleSwitcher } from "./LocaleSwitcher"
import { AppLogo } from "./AppLogo"
import { WaitlistCta } from "./WaitlistCta"
import { Separator } from "../ui/separator"

const NAV_LINKS = [
  { key: "pricing", href: "/#pricing" },
  { key: "reviews", href: "/#reviews" },
  { key: "features", href: "/#features" },
  { key: "addReach", href: "/addreach" },
  { key: "platforms", href: "/#platforms" },
  { key: "faq", href: "/#faq" },
  { key: "blog", href: "#" },
] as const

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <AppLogo size={40} rounded={false} />
      <span className="font-display text-lg font-bold text-white">
        ADDPOSTS
      </span>
    </Link>
  )
}

export function Navbar() {
  const t = useTranslations("nav")
  const tWaitlist = useTranslations("waitlist")
  const scrolled = useNavbarShadow()
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-colors duration-300 border-b",
        scrolled
          ? "pointer-events-none px-4 pt-4 border-transparent bg-transparent"
          : "pointer-events-auto border-zinc-800 bg-brand-dark"
      )}
    >
      <header
        className={cn(
          "relative mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 transition-all duration-300",
          scrolled
            ? "clay-nav pointer-events-auto w-full max-w-6xl shadow-2xl"
            : "w-full max-w-7xl lg:h-24"
        )}
      >
        <div className="flex-1 flex items-center justify-start">
          <Logo />
        </div>

        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href as any}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-white",
                key === "addReach" 
                  ? "text-accent drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" 
                  : "text-zinc-300"
              )}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:flex flex-1">
          <LocaleSwitcher />
          <WaitlistCta size="lg" className="px-6">
            {tWaitlist("cta")}
          </WaitlistCta>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5 text-[#92b7b1]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="section-dark w-full">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-4 px-6 pb-4">
                {NAV_LINKS.map(({ key, href }) => (
                  <div key={key} className="flex flex-col gap-4">
                    <Link
                      href={href as any}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-zinc-300 transition-colors hover:text-white"
                    >
                      {t(key)}
                    </Link>
                    <Separator />
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-3 border-brand-border pt-4">
                  <WaitlistCta onNavigate={() => setOpen(false)}>
                    {tWaitlist("cta")}
                  </WaitlistCta>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}
