import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components"
import * as React from "react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://addpostsai.com"

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>ADDPOSTS will get in touch with you as soon as possible.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>ADDPOSTS</Text>
        <Text style={paragraph}>Hi,</Text>
        <Text style={paragraph}>
          Thank you for your interest in ADDPOSTS. We will launch the product
          soon and you will be the first to know. You will also get early access
          to discounts, new features, and exclusive offers.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>{siteUrl.replace(/^https?:\/\//, "")}</Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const brand = {
  fontSize: "24px",
  fontWeight: "700" as const,
  lineHeight: "32px",
  margin: "0 0 24px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
