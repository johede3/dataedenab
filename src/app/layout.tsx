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
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "A preview image for Dataeden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["https://dataeden.se/favi/android-chrome-512x512.png"], // Same OG image for Twitter
  },
  icons: {
    shortcut: "favi/favicon-16x16.png",
    apple: "favi/apple-touch-icon.png",
    logo: "/logo.png",
  },
  metadataBase: new URL(siteDetails.siteUrl),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv-SE">
      <head>
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
              description: "Skräddarsydda webblösningar för företag i Göteborg.",
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
