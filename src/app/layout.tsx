import type { Metadata } from "next"
import { Geist, Inter_Tight } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// Geist for body copy and UI.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

// Inter Tight for monumental display headlines and figures.
const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
})

const title = "Iron Warriors Gym | Memberships from ₹1,499/month"
const description =
  "Join Iron Warriors with monthly, quarterly, half-yearly or annual plans. Pay online and get WhatsApp reminders before every renewal."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Iron Warriors",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${geist.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black">
        {children}
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  )
}
