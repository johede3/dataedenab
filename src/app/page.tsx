import { Metadata } from "next"
import Link from "next/link"

import Benefits from "../components/Benefits/Benefits"
import CTA from "../components/CTA/CTA"
import FAQ from "../components/FAQ/FAQ"
import { landingSections } from "./data/landing"

import Hero from "../components/Hero/Hero"
import { ItemScroll } from "../components/Idea/ItemScroll"
import Pricing from "../components/Pricing/Pricing"
import { Projects } from "../components/Projects/Projects"
import Section from "../components/Section/Section"
import SEOSection from "../components/SEO/SEOSection"
import Container from "../components/UI/Container/Container"

export const metadata: Metadata = {
  title: "Dataeden – Skräddarsydda Webb- och Applösningar för Småföretag",
  description:
    "Vi hjälper småföretag i Göteborg att växa online med moderna webblösningar. Från hemsidor till appar – vi bygger din digitala framtid.",
  twitter: {
    card: "summary_large_image",
    site: "@dataeden",
    title: "Dataeden – Professionell Webbutveckling i Göteborg",
    description: "Från hemsidor till appar – vi hjälper småföretag att lyckas online.",
  },
  openGraph: {
    url: "https://dataeden.se/",
    title: "Dataeden – Webbutveckling för Småföretag",
    description: "Skräddarsydda hemsidor & appar för företag i Göteborg.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://dataeden.se/images/og-image.jpg", // Uppdatera till din bild
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Hero />

      <Container>
        {landingSections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} description={section.description}>
            {section.id === "features" && <Benefits />}
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
            {section.id === "about" && (
              <div className="mx-auto max-w-3xl text-center">
                <div className="text-lg text-gray-600">
                  <strong>Dataeden</strong> drivs av <strong>Johannes Edenholm</strong>, en erfaren webbutvecklare med
                  en passion för att hjälpa småföretag synas online. Vi skapar moderna, skräddarsydda hemsidor och
                  digitala lösningar som är snabba, användarvänliga och anpassade efter dina behov.
                  <br />
                  <br />
                  Vi tror på att kombinationen av <strong>snygg design och intuitiv UX</strong> är nyckeln till att
                  engagera besökare och stärka varumärken online. Med ett öga för detaljer och en förståelse för hur
                  människor interagerar med digitala gränssnitt, skapar vi lösningar som är både visuellt tilltalande
                  och enkla att använda.
                  <br />
                  <br />
                  Oavsett om du behöver en helt ny hemsida, en uppdatering av din nuvarande eller en specialbyggd
                  webbapp, så hjälper vi dig – från idé till färdig lösning.
                </div>

                <div className="mt-6 flex justify-center">
                  <Link
                    href="/kontakt"
                    className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-all hover:bg-purple-700"
                  >
                    Kontakta oss
                  </Link>
                </div>
              </div>
            )}
          </Section>
        ))}

        <FAQ />
        <CTA />
      </Container>
    </>
  )
}
