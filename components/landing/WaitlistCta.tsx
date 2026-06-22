"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Button, buttonVariants } from "@/components/ui/button"
import { WAITLIST_SECTION_HREF } from "@/lib/landing"

type WaitlistCtaProps = React.ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    onNavigate?: () => void
  }

export function WaitlistCta({
  className,
  variant,
  size,
  onNavigate,
  onClick,
  children,
  ...props
}: WaitlistCtaProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={WAITLIST_SECTION_HREF}
        onClick={(event) => {
          onNavigate?.()
          onClick?.(event)
        }}
        {...props}
      >
        {children}
      </a>
    </Button>
  )
}
