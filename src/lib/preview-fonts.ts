import {
  Barlow,
  Barlow_Condensed,
  Fraunces,
  Newsreader,
  Space_Grotesk,
  IBM_Plex_Sans,
  Inter, Inter_Tight, Manrope, Public_Sans, Source_Sans_3
} from "next/font/google"

// PREVIEW ONLY. Candidate sans pairings for the floating font switcher.
// preload: false keeps these out of <link rel=preload>; the @font-face rules
// exist but a browser only downloads a file once [data-font=x] makes an element
// use that family. latin-ext carries the rupee sign (U+20B9); Barlow has none, so Inter fills it in.
export const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})
export const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})
export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
})
export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
})
export const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})

export const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})
export const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})
export const barlowCond = Barlow_Condensed({
  variable: "--font-barlow-cond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
})
export const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
})
export const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
})

export const previewFontVars = [newsreader, fraunces, barlowCond, barlow, grotesk, plex, sourceSans, interTight, inter, manrope, publicSans].map((f) => f.variable).join(" ")
