import { Metadata } from "next"
import { notFound } from "next/navigation"
import About from "../../components/About/About"
import Benefits, { replaceCityPlaceholder } from "../../components/Benefits/Benefits"
import CTA from "../../components/CTA/CTA"
import FAQ from "../../components/FAQ/FAQ"
import Hero from "../../components/Hero/Hero"
import { ItemScroll } from "../../components/Idea/ItemScroll"
import Pricing from "../../components/Pricing/Pricing"
import { Projects } from "../../components/Projects/Projects"
import Section from "../../components/Section/Section"
import SEOSection from "../../components/SEO/SEOSection"
import Container from "../../components/UI/Container/Container"
import { landingSections } from "../data/landing"

// Definiera alla städer du vill stödja
const cities = {
  goteborg: {
    name: "Göteborg",
    title: "Dataeden – Webbutveckling i Göteborg",
    description: "Skräddarsydda hemsidor & appar för företag i Göteborg.",
  },
  kungalv: {
    name: "Kungälv",
    title: "Dataeden – Webbutveckling i Kungälv",
    description: "Hemsidor & appar för företag i Kungälv – vi bygger din digitala framtid.",
  },
  orust: {
    name: "Orust",
    title: "Dataeden – Webbutveckling på Orust",
    description: "Vi hjälper företag på Orust att etablera sig online med professionella hemsidor.",
  },
  kungsbacka: {
    name: "Kungsbacka",
    title: "Dataeden – Webbutveckling i Kungsbacka",
    description: "Vi hjälper företag i Kungsbacka att etablera sig online med professionella hemsidor.",
  },
}

type Props = { params: { city: keyof typeof cities } }

// SEO Metadata för varje stad
// 📌 **Dynamiskt generera metadata**
export function generateMetadata({ params }: Props): Metadata {
  const cityData = cities[params.city]
  if (!cityData) return notFound()

  return {
    title: cityData.title,
    description: cityData.description,
    keywords: [
      `Webbutveckling ${cityData.name}`,
      `Hemsidor småföretag ${cityData.name}`,
      `Skräddarsydda webblösningar ${cityData.name}`,
      `Webbdesign ${cityData.name}`,
      "SEO optimering",
      "Webbapplikationer",
      "Mobilanpassade hemsidor",
      "E-handelslösningar",
    ],
    openGraph: {
      url: `https://dataeden.se/${params.city}`,
      title: cityData.title,
      description: cityData.description,
      siteName: "Dataeden",
      images: [
        {
          width: 1200,
          height: 630,
          url: "https://dataeden.se/images/og-image.jpg", // Uppdatera till din bild
          alt: `Webbutveckling i ${cityData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cityData.title,
      description: cityData.description,
      images: ["https://dataeden.se/images/og-image.jpg"], // Samma som OG-bild
    },
  }
}

export default function CityPage({ params }: Props) {
  const cityData = cities[params.city]
  if (!cityData) return notFound()

  return (
    <>
      <Hero city={cityData.name} />
      <Container>
        {landingSections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={replaceCityPlaceholder(section.title, cityData.name)}
            description={replaceCityPlaceholder(section.description, cityData.name)}
          >
            {section.id === "features" && <Benefits city={cityData.name} />}
            {section.id === "seo" && <SEOSection />}

            {section.id === "idea" && (
              <ItemScroll
                dict={{
                  first_text: "Från idé till verklighet –",
                  second_text1: "Din hemsida kan vara redo på ",
                  second_text2: "!",
                  time_text: "några dagar",
                }}
              />
            )}
            {section.id === "pricing" && <Pricing />}
            {section.id === "projects" && (
              <div className="w-full overflow-x-hidden">
                <Projects />
              </div>
            )}
            {section.id === "about" && <About />}
          </Section>
        ))}

        <FAQ city={cityData.name} />
        <CTA city={cityData.name} />
      </Container>
    </>
  )
}

// Generera statiska sidor vid build-time
export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}
