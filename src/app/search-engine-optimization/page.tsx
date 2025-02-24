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
        url: "https://dataeden.se/images/seo-optimization.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function SEOPage() {
  return (
    <Container className="mt-20">
      {seoSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} description={section.description}>
          {section.content && (
            <div className="mx-auto max-w-3xl px-6 text-left lg:px-12">
              {section.content.map((paragraph, index) => (
                <p key={index} className="mt-3 text-gray-600 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.id === "seo-benefits" && (
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 lg:grid-cols-3">
              {seoBenefits.map((item, index) => {
                const IconComponent =
                  item.icon === "FiTrendingUp" ? FiTrendingUp : item.icon === "FiGlobe" ? FiGlobe : FiSearch
                return (
                  <div key={index} className="mt-4 flex flex-col items-center rounded-xl border p-6 shadow-lg">
                    <div className="text-primary mb-4">
                      <IconComponent size={26} />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-center text-gray-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          )}

          {section.id === "seo-cta" && (
            <div className="mt-8 flex justify-center">
              <Link
                href="/kontakt"
                className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-all hover:bg-purple-700"
              >
                Kontakta oss
              </Link>
            </div>
          )}
        </Section>
      ))}
    </Container>
  )
}
