import { GoogleAnalytics } from "@next/third-parties/google"
import { Manrope, Source_Sans_3 } from "next/font/google"
import Script from "next/script"
import "styles/tailwind.css"

import Footer from "../components/UI/Shared/Footer"
import Header from "../components/UI/Shared/Header"
import { siteDetails } from "./data/siteDetails"

const manrope = Manrope({ subsets: ["latin"], display: "swap" })
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap" })

export const metadata = {
  title: "Dataeden – Webbutveckling, SEO & Digitala Lösningar",
  description:
    "Skräddarsydda hemsidor, apputveckling och SEO-optimerade webblösningar för företag. Vi hjälper dig att synas på Google och nå fler kunder online.",
  keywords: [
    "Webbutveckling",
    "Hemsidor småföretag",
    "Skräddarsydda webblösningar",
    "Webbdesign",
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
    title: "Dataeden – Webbutveckling, SEO & Digitala Lösningar",
    description:
      "Skräddarsydda hemsidor och digitala lösningar för företag. Vi bygger snabba, mobilvänliga och SEO-optimerade webbplatser.",
    siteName: "Dataeden",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Dataeden – Professionell webbutveckling och SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dataeden – Webbutveckling, SEO & Digitala Lösningar",
    description: "Skräddarsydda hemsidor och SEO-optimering för företag som vill växa online.",
    images: ["https://dataeden.se/favi/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favi/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favi/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favi/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favi/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/favi/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL(siteDetails.siteUrl),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv-SE">
      <head>
        <link rel="preload" href="/images/BSHsmall.webp" as="image" type="image/webp" />
        {/* Schema Markup för Google */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dataeden",
              url: "https://dataeden.se",
              logo: "https://dataeden.se/logo.png",
              description: "Webbutveckling, SEO & Digitala Lösningar för företag och privatpersoner.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Göteborg",
                addressCountry: "SE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "kontakt@dataeden.se",
              },
            }),
          }}
        />
      </head>
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
