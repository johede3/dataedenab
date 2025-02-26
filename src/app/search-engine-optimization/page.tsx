import { Metadata } from "next";
import Link from "next/link";
import { FiGlobe, FiSearch, FiTrendingUp } from "react-icons/fi";
import Section from "../../components/Section/Section";
import Container from "../../components/UI/Container/Container";
import { seoBenefits, seoSections, seoSeen } from "../data/seo";

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
};

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
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
                {section.title}
              </h2>
            )}

            {section.description && section.id !== "seo-synas" && (
              <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
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
              <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pb-16 rounded-xl">
                <div className="mx-auto max-w-4xl px-6 lg:px-0 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{section.description}</p>

                  {/* 🔥 Steg-baserad layout */}
                  <div className="mt-12 space-y-10">
                    {seoSeen.map((item, index) => (
                      <div key={index} className="flex items-start text-left">
                        {/* 🔥 Stor siffra istället för ikon */}
                        <div className="p-6 md:p-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white text-xl font-bold mr-6">
                          {index + 1}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                          <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 🔥 SEO-fördelar med annan layout och bredare grid för bättre balans */}
            {section.id === "seo-benefits" && (
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 max-w-6xl mx-auto">
                {seoBenefits.map((item, index) => {
                  const IconComponent =
                    item.icon === "FiTrendingUp" ? FiTrendingUp : item.icon === "FiGlobe" ? FiGlobe : FiSearch;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-6 shadow-md rounded-xl bg-white dark:bg-gray-800 transition-transform duration-200 hover:scale-105 max-w-[360px] mx-auto"
                    >
                      {/* 🔥 Mindre ikon, bättre spacing */}
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                        <IconComponent size={24} />
                      </div>

                      {/* 🔥 Justerade rubriker */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>

                      {/* 🔥 Kompaktare text */}
                      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
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
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl font-bold text-center">Vanliga frågor om SEO</h2>
          <div className="mt-8 space-y-2">
            <details className="p-4 bg-gray-100 rounded-lg">
              <summary className="font-medium cursor-pointer">Behöver jag SEO för min hemsida?</summary>
              <p className="mt- text-gray-600">
                Ja! Utan SEO kommer din hemsida vara svår att hitta på Google. SEO hjälper dig att synas för rätt kunder
                och driva trafik till din webbplats.
              </p>
            </details>

            <details className="p-4 bg-gray-100 rounded-lg">
              <summary className="font-medium cursor-pointer">Hur lång tid tar det innan SEO ger resultat?</summary>
              <p className="mt-2 text-gray-600">
                SEO är en långsiktig strategi och kan ta 3–6 månader innan du ser tydliga resultat. Dock kan teknisk SEO
                och prestandaoptimering ge snabbare förbättringar.
              </p>
            </details>

            <details className="p-4 bg-gray-100 rounded-lg">
              <summary className="font-medium cursor-pointer">Vad är skillnaden mellan SEO och Google Ads?</summary>
              <p className="mt-2 text-gray-600">
                Google Ads är betalda annonser som ger omedelbara resultat, men kräver en budget. SEO är organiskt och
                ger långsiktiga resultat utan att du behöver betala för klick.
              </p>
            </details>

            <details className="p-4 bg-gray-100 rounded-lg">
              <summary className="font-medium cursor-pointer">
                Vad är lokal SEO och hur hjälper det mitt företag?
              </summary>
              <p className="mt-2 text-gray-600">
                Lokal SEO hjälper din hemsida att synas när potentiella kunder söker efter tjänster i sitt närområde,
                till exempel <strong>"snickare nära mig"</strong> eller <strong>"bästa frisören i Stockholm"</strong>.
                Genom att optimera din webbplats och Google Business-profil ser vi till att ditt företag visas i lokala
                sökresultat och på Google Maps.
              </p>
            </details>
          </div>
        </div>
      </section>
    </Container>
  );
}
