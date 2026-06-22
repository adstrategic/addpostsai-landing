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
  { key: "pricing", href: "#pricing" },
  { key: "reviews", href: "#reviews" },
  { key: "features", href: "#features" },
  { key: "platforms", href: "#platforms" },
  { key: "faq", href: "#faq" },
  { key: "blog", href: "#" },
] as const

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
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
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-zinc-800 bg-brand-dark transition-shadow duration-200",
        scrolled && "shadow-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
                  <>
                    <a
                      key={key}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-zinc-300 transition-colors hover:text-white"
                    >
                      {t(key)}
                    </a>
                    <Separator />
                  </>
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
      </div>
    </header>
  )
}
