import type { Metadata, Viewport } from "next"
import { Geist, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { PaletteSwitcher } from "@/components/theme/palette-switcher"
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

// Mobile browser bar follows the active scheme.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

// Preview palette, applied before paint so a saved choice never flashes.
const paletteScript = `try{var p=localStorage.getItem("sequel-palette");if(p)document.documentElement.dataset.palette=p}catch(e){}`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${geist.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: paletteScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-void">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <PaletteSwitcher />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
