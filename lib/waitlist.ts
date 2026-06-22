import { z } from "zod"

export const waitlistEmailSchema = z.object({
  email: z.email(),
})

export function isValidWaitlistEmail(email: string): boolean {
  return waitlistEmailSchema.safeParse({ email: email.trim() }).success
}
