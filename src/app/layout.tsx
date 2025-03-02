import { GoogleAnalytics } from "@next/third-parties/google";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "styles/tailwind.css";
import Footer from "../components/UI/Shared/Footer";
import Header from "../components/UI/Shared/Header";
import { siteDetails } from "./data/siteDetails";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Dataeden – Professionell Webbutveckling & SEO i Sverige",
  description:
    "Behöver du en snabb, mobilvänlig och SEO-optimerad hemsida? Vi hjälper företag att synas på Google och växa digitalt med modern webbutveckling & SEO-strategier.",
  keywords: [
    "Webbyrå",
    "Webbutveckling",
    "SEO-tjänster",
    "Skapa hemsida",
    "Köpa hemsida",
    "E-handel utveckling",
    "Apputveckling",
    "UX design",
    "Digital marknadsföring",
    "Mobilanpassade hemsidor",
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
    title: "Dataeden – Webbutveckling & SEO för Företag i Sverige",
    description:
      "Vi bygger skräddarsydda hemsidor, appar och SEO-strategier för företag som vill dominera den digitala marknaden.",
    siteName: "Dataeden",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Dataeden – Webbutveckling & SEO för företag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dataeden – Webbutveckling & SEO för Företag i Sverige",
    description: "Snabba och optimerade hemsidor som gör att ditt företag syns online och når fler kunder.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv-SE">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQZ2G6QP');`,
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="preload" href="/images/BSHsmall.webp" as="image" type="image/webp" />
        {/* Schema Markup för Google */}
        <script
          type="application/ld+json"
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQZ2G6QP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
