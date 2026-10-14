import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { FontSwitcher } from "@/components/theme/font-switcher"
import { previewFontVars } from "@/lib/preview-fonts"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// Geist stands in for VisueltPro: body, labels and hairline display type.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500"],
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

// Preview font pairing, applied before paint so a saved choice never flashes.
const fontScript = `try{var f=localStorage.getItem("sequel-font");if(f)document.documentElement.dataset.font=f}catch(e){}`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${geist.variable} ${previewFontVars} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: fontScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-void">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <FontSwitcher />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
