import { Metadata } from "next"

import About from "../components/About/About"
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
      <Hero city={"Göteborg med omnejd"} />

      <Container>
        {landingSections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} description={section.description}>
            {section.id === "features" && <Benefits city={"Göteborg med omnejd"} />}
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

        <FAQ city="Göteborg med omnejd" />
        <CTA city={"Göteborg med omnejd"} />
      </Container>
    </>
  )
}
