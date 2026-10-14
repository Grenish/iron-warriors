import type { Metadata } from "next"
import { Geist, Instrument_Serif } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// Geist stands in for VisueltPro: body, labels and hairline display type.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
})

// Instrument Serif italic stands in for Bradford: the one payoff word.
const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  preload: true,
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
      className={`${geist.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void">
        {children}
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  )
}
