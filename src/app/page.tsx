import { Metadata } from "next";

import About from "../components/About/About";
import Benefits, { replaceCityPlaceholder } from "../components/Benefits/Benefits";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import { landingSections } from "./data/landing";

import Hero from "../components/Hero/Hero";
import { ItemScroll } from "../components/Idea/ItemScroll";
import Pricing from "../components/Pricing/Pricing";
import { Projects } from "../components/Projects/Projects";
import Section from "../components/Section/Section";
import SEOSection from "../components/SEO/SEOSection";
import Container from "../components/UI/Container/Container";
import { getCTAContent } from "./utils";

export const metadata: Metadata = {
  title: " Webbutveckling & Digitala Lösningar i Västra Götaland – Dataeden",
  description:
    "Vi hjälper småföretag i Göteborg, Kungälv, Kungsbacka och hela Västra Götaland att växa online med moderna hemsidor och appar.",
  keywords: [
    `Webbutveckling `,
    `Hemsida småföretag`,
    `Webbdesign`,
    "Webbapplikationer",
    `Webbyrå`,
    "Egen hemsida",
    `Apputveckling`,
    `Skapa hemsida`,
    `Synas på Google `,
  ],
  twitter: {
    card: "summary_large_image",
    site: "@dataeden",
    title: "Dataeden – Professionell Webbutveckling i Västra Götaland",
    description: "Från hemsidor till appar – vi hjälper småföretag att lyckas online.",
  },
  openGraph: {
    url: "https://dataeden.se/",
    title: "Dataeden – Webbutveckling för Småföretag i Västra Götaland",
    description: "Skräddarsydda hemsidor & appar för företag i Göteborg, Kungälv, Kungsbacka och fler orter.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://dataeden.se/images/logo.png",
      },
    ],
  },
};

export default function Web() {
  const sections = landingSections("");
  const cta = getCTAContent("Göteborg");
  return (
    <>
      <Hero city={""} />

      <Container>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={replaceCityPlaceholder(section.title, "")}
            description={replaceCityPlaceholder(section.description, "")}
          >
            {section.id === "features" && <Benefits city={""} />}
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

        <FAQ city="" />
        <CTA title={cta.title} buttonText={cta.button} />
      </Container>
    </>
  );
}
