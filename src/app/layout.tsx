import type { Metadata } from "next"
import { Archivo, Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// Inter for body copy and UI.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

// Archivo for headings and figures. Loaded as a variable font with the width
// axis so headlines can run semi condensed (see the headline utility).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
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
      className={`${inter.variable} ${archivo.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        {children}
        <Toaster theme="light" position="top-center" />
      </body>
    </html>
  )
}
