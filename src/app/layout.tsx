import { GoogleAnalytics } from "@next/third-parties/google"
import { Manrope, Source_Sans_3 } from "next/font/google"
import "styles/tailwind.css"

import Footer from "../components/UI/Shared/Footer"
import Header from "../components/UI/Shared/Header"
import { siteDetails } from "./data/siteDetails"

const manrope = Manrope({ subsets: ["latin"], display: "swap" })
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap" })

export const metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: [
    "Webbutveckling Göteborg",
    "Hemsidor småföretag",
    "Skräddarsydda webblösningar",
    "Webbdesign Göteborg",
    "SEO optimering",
    "Webbapplikationer",
    "Mobilanpassade hemsidor",
    "E-handelslösningar",
  ],
  authors: [
    {
      name: "Dataeden",
    },
  ],
  creator: "Dataeden",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteDetails.siteUrl,
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    siteName: siteDetails.siteName,
  },
  icons: {
    shortcut: "favi/favicon-16x16.png",
    apple: "favi/apple-touch-icon.png",
  },
  metadataBase: new URL(siteDetails.siteUrl),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv-SE">
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
