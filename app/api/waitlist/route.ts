import { addEmailToWaitlist } from "@/lib/airtable"
import { waitlistEmailSchema } from "@/lib/waitlist"
// import { NewUser } from "@/emails/NewUser"
// import { WelcomeEmail } from "@/emails/WelcomeEmail"
import { NextRequest, NextResponse } from "next/server"
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  if (
    !process.env.AIRTABLE_API_KEY ||
    !process.env.AIRTABLE_BASE_ID ||
    !process.env.AIRTABLE_TABLE_NAME
  ) {
    console.error("Airtable environment variables are not configured")
    return NextResponse.json({ error: "server_error" }, { status: 500 })
  }

  try {
    const body = await request.json()
    const validation = waitlistEmailSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 })
    }

    const { email } = validation.data

    await addEmailToWaitlist(email)
    // const fromAddress =
    //   process.env.RESEND_FROM_EMAIL ?? "ADDPOSTS <onboarding@resend.dev>"
    // const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL

    // if (process.env.RESEND_API_KEY) {
    //   const emails = [
    //     {
    //       from: fromAddress,
    //       to: [email],
    //       subject: "Thank you for joining the ADDPOSTS waitlist!",
    //       react: WelcomeEmail(),
    //     },
    //     ...(notifyEmail
    //       ? [
    //           {
    //             from: fromAddress,
    //             to: [notifyEmail],
    //             subject: "New client has joined the ADDPOSTS waitlist",
    //             react: NewUser({ email }),
    //           },
    //         ]
    //       : []),
    //   ]

    //   const { error } = await resend.batch.send(emails)

    //   if (error) {
    //     console.error("Resend error:", error)
    //   }
    // }

    return NextResponse.json({ message: "success" }, { status: 200 })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ error: "server_error" }, { status: 500 })
  }
}
