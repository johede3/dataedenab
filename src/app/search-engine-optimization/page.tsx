import { Metadata } from "next"
import Link from "next/link"
import { FiGlobe, FiSearch, FiTrendingUp } from "react-icons/fi"
import Section from "../../components/Section/Section"
import Container from "../../components/UI/Container/Container"
import { seoBenefits, seoSections } from "../data/seo"

export const metadata: Metadata = {
  title: "SEO i Göteborg – Få fler kunder med sökmotoroptimering | Dataeden",
  description:
    "SEO i Göteborg: Lär dig hur sökmotoroptimering kan öka din trafik och hjälpa ditt företag att synas på Google. Dataeden erbjuder SEO-optimerade webbplatser.",
  openGraph: {
    url: "https://dataeden.se/seo",
    title: "SEO i Göteborg – Sökmotoroptimering för fler kunder",
    description: "SEO för småföretag i Göteborg. Få en hemsida som syns på Google och ökar din trafik.",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function SEOPage() {
  return (
    <Container className="mt-20">
      <Section id="seo-content" title="" description="">
        {seoSections.map((section) => (
          <div key={section.id} className="mx-auto max-w-4xl px-4 lg:px-0">
            <h2 className="mt-10 text-2xl font-bold text-gray-900 dark:text-gray-100">{section.title}</h2>

            {section.description && (
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{section.description}</p>
            )}

            {section.content && (
              <div className="mt-6 space-y-4">
                {section.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.id === "seo-benefits" && (
              <div className="mt-10 grid grid-cols-1 gap-8 px-4 lg:grid-cols-3">
                {seoBenefits.map((item, index) => {
                  const IconComponent =
                    item.icon === "FiTrendingUp" ? FiTrendingUp : item.icon === "FiGlobe" ? FiGlobe : FiSearch

                  return (
                    <div key={index} className="flex flex-col items-center rounded-lg border p-6 shadow-md">
                      <div className="text-primary mb-3">
                        <IconComponent size={32} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}

        <div className="mt-16 flex justify-center">
          <Link
            href="/kontakt"
            className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-lg font-medium text-white shadow-md transition-all hover:from-purple-700 hover:to-purple-600"
          >
            Kontakta oss
          </Link>
        </div>
      </Section>
    </Container>
  )
}
