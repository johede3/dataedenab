import { Metadata } from "next";

import About from "../components/About/About";

import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import { landingSections } from "./data/landing";

import Benefits from "../components/Benefits/Benefits";
import Hero from "../components/Hero/Hero";
import { ItemScroll } from "../components/Idea/ItemScroll";
import Pricing from "../components/Pricing/Pricing";
import Projects from "../components/Projects/Projects";
import Section from "../components/Section/Section";
import SEOSection from "../components/SEO/SEOSection";
import Container from "../components/UI/Container/Container";
import { getCTAContent, replaceCityPlaceholder } from "./utils";

export const metadata: Metadata = {
  title: "Webbutveckling, SEO & Apputveckling – Dataeden | Webbyrå i Sverige",
  description:
    "Dataeden är en webbyrå som hjälper företag i Sverige med professionell webbutveckling, SEO och apputveckling. Unika lösningar för företag som vill växa online.",
  keywords: [
    `Webbyrå`,
    `Webbdesign`,
    `Webbutveckling`,
    `Apputveckling`,
    "sökmotoroptimering",
    "SEO byrå",
    "hemsida företag",
    "köpa hemsida",
    "UX design",
    `Skapa hemsida`,
  ],
  twitter: {
    card: "summary_large_image",
    site: "@dataeden",
    title: "Dataeden – Webbutveckling, SEO & Digitala Lösningar i Sverige",
    description: "Vi skapar moderna hemsidor och appar för företag i hela Sverige.",
  },
  openGraph: {
    url: "https://dataeden.se/",
    title: "Dataeden – Webbutveckling & SEO för Företag i Sverige",
    description:
      "Unika hemsidor, appar och SEO-lösningar för företag som vill växa digitalt. Vi erbjuder webbutveckling och digital strategi i hela Sverige.",
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
            {section.id === "pricing" && <Pricing city={""} />}
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
