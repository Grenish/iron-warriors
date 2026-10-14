import type { Metadata, Viewport } from "next"
import { Public_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// Public Sans is the only family: body, labels, display type and the italic
// payoff word. latin-ext carries the rupee sign (U+20B9).
const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
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

// Mobile browser bar follows the active scheme.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef0f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2329" },
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${publicSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
