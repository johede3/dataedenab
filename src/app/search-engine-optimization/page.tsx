import { Metadata } from "next"
import Link from "next/link"
import { FiGlobe, FiSearch, FiTrendingUp } from "react-icons/fi"
import Section from "../../components/Section/Section"
import Container from "../../components/UI/Container/Container"
import { seoBenefits, seoSections, seoSeen } from "../data/seo"

export const metadata: Metadata = {
  title: "SEO – Rank högre & få fler kunder | Dataeden",
  description:
    "Behöver du fler kunder? Vi hjälper företag att synas på Google med professionell SEO, teknisk optimering och strategisk innehållsoptimering.",
  openGraph: {
    url: "https://dataeden.se/search-engine-optimization",
    title: "SEO – Bättre synlighet & fler kunder",
    description:
      "Vill du ranka högre på Google? Vi optimerar din hemsida för sökmotorer och hjälper dig att öka din trafik och konverteringar.",
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
        {seoSections.map((section, index) => (
          <div key={section.id} className="mx-auto max-w-5xl lg:px-0">
            {/* 🔥 Skapa mer separation med tydligare avdelare */}
            {index > 0 && <div className="my-16 border-t border-gray-300 dark:border-gray-700" />}

            {/* 🔥 Titel och beskrivning med större hierarki */}
            {section.id !== "seo-synas" && (
              <h2 className="mt-12 text-center text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
                {section.title}
              </h2>
            )}

            {section.description && section.id !== "seo-synas" && (
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
                {section.description}
              </p>
            )}

            {/* 🔥 Text-sektion med bredare layout och bättre spacing */}
            {section.content && (
              <div className="mt-6 space-y-4">
                {section.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* 🔥 SEO-synlighetsektionen med ANNAN bakgrund & större layout */}
            {section.id === "seo-synas" && (
              <div className="rounded-xl bg-gradient-to-b from-white to-gray-100 pb-16 dark:from-gray-900 dark:to-gray-800">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-0">
                  <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{section.description}</p>

                  {/* 🔥 Steg-baserad layout */}
                  <div className="mt-12 space-y-10">
                    {seoSeen.map((item, index) => (
                      <div key={index} className="flex items-start text-left">
                        {/* 🔥 Stor siffra istället för ikon */}
                        <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 p-6 text-xl font-bold text-white md:p-0">
                          {index + 1}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                          <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 🔥 SEO-fördelar med annan layout och bredare grid för bättre balans */}
            {section.id === "seo-benefits" && (
              <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {seoBenefits.map((item, index) => {
                  const IconComponent =
                    item.icon === "FiTrendingUp" ? FiTrendingUp : item.icon === "FiGlobe" ? FiGlobe : FiSearch

                  return (
                    <div
                      key={index}
                      className="mx-auto flex max-w-[360px] flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-transform duration-200 hover:scale-105 dark:bg-gray-800"
                    >
                      {/* 🔥 Mindre ikon, bättre spacing */}
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                        <IconComponent size={24} />
                      </div>

                      {/* 🔥 Justerade rubriker */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>

                      {/* 🔥 Kompaktare text */}
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </Section>
      <div className="mt-8 flex justify-center">
        <Link
          href="/kontakt"
          className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-lg font-medium text-white shadow-md transition-all hover:from-purple-700 hover:to-purple-600"
        >
          Kontakta oss
        </Link>
      </div>

      <section id="faq" className="py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Vanliga frågor om SEO</h2>
          <div className="mt-8 space-y-2">
            <details className="rounded-lg bg-gray-100 p-4">
              <summary className="cursor-pointer font-medium">Behöver jag SEO för min hemsida?</summary>
              <p className="mt- text-gray-600">
                Ja! Utan SEO kommer din hemsida vara svår att hitta på Google. SEO hjälper dig att synas för rätt kunder
                och driva trafik till din webbplats.
              </p>
            </details>

            <details className="rounded-lg bg-gray-100 p-4">
              <summary className="cursor-pointer font-medium">Hur lång tid tar det innan SEO ger resultat?</summary>
              <p className="mt-2 text-gray-600">
                SEO är en långsiktig strategi och kan ta 3–6 månader innan du ser tydliga resultat. Dock kan teknisk SEO
                och prestandaoptimering ge snabbare förbättringar.
              </p>
            </details>

            <details className="rounded-lg bg-gray-100 p-4">
              <summary className="cursor-pointer font-medium">Vad är skillnaden mellan SEO och Google Ads?</summary>
              <p className="mt-2 text-gray-600">
                Google Ads är betalda annonser som ger omedelbara resultat, men kräver en budget. SEO är organiskt och
                ger långsiktiga resultat utan att du behöver betala för klick.
              </p>
            </details>

            <details className="rounded-lg bg-gray-100 p-4">
              <summary className="cursor-pointer font-medium">
                Vad är lokal SEO och hur hjälper det mitt företag?
              </summary>
              <p className="mt-2 text-gray-600">
                Lokal SEO hjälper din hemsida att synas när potentiella kunder söker efter tjänster i sitt närområde,
                till exempel <strong>&quot;snickare nära mig&quot;</strong> eller <strong>&quot;bästa frisören i Stockholm&quot;</strong>.
                Genom att optimera din webbplats och Google Business-profil ser vi till att ditt företag visas i lokala
                sökresultat och på Google Maps.
              </p>
            </details>
          </div>
        </div>
      </section>
    </Container>
  )
}
