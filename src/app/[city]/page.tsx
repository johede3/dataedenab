import { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "../../components/About/About";
import Benefits, { replaceCityPlaceholder } from "../../components/Benefits/Benefits";
import CTA from "../../components/CTA/CTA";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import { ItemScroll } from "../../components/Idea/ItemScroll";
import Pricing from "../../components/Pricing/Pricing";
import { Projects } from "../../components/Projects/Projects";
import Section from "../../components/Section/Section";
import SEOSection from "../../components/SEO/SEOSection";
import Container from "../../components/UI/Container/Container";
import { landingSections } from "../data/landing";
import { getCTAContent, getPreposition } from "../utils";

const cities = {
  goteborg: {
    name: "Göteborg",
    title: "SEO Göteborg – Webbutveckling & Sökmotoroptimering | Dataeden",
    description:
      "Dataeden är en webbyrå i Göteborg som bygger SEO-optimerade hemsidor för företag. Skapa en snabb & mobilvänlig hemsida idag!",
  },
  kungalv: {
    name: "Kungälv",
    title: "Webbyrå i Kungälv – Skapa Hemsida & SEO-tjänster | Dataeden",
    description: "Få en snygg, snabb & SEO-optimerad hemsida i Kungälv. Vi hjälper företag att ranka högre på Google.",
  },
  orust: {
    name: "Orust",
    title: "Webbutveckling på Orust – SEO & Hemsidor | Dataeden",
    description: "Dataeden skapar moderna, SEO-optimerade hemsidor för företag på Orust. Kontakta oss för en offert!",
  },
  kungsbacka: {
    name: "Kungsbacka",
    title: "Webbyrå i Kungsbacka – Sökmotoroptimering & Hemsidor | Dataeden",
    description:
      "Behöver du en hemsida? Vi skapar SEO-optimerade webbplatser som får företag i Kungsbacka att synas online.",
  },
  molndal: {
    name: "Mölndal",
    title: "Webbutveckling i Mölndal – Skapa Hemsida som Syns | Dataeden",
    description: "Bygg en snabb, responsiv & SEO-optimerad hemsida i Mölndal. Vi hjälper företag att lyckas digitalt!",
  },
  partille: {
    name: "Partille",
    title: "Webbyrå i Partille – SEO-optimerade Hemsidor | Dataeden",
    description: "Få en mobilvänlig hemsida i Partille. Våra SEO-experter hjälper dig att synas högre på Google.",
  },
  lerum: {
    name: "Lerum",
    title: "Webbutveckling i Lerum – SEO-optimerade Hemsidor | Dataeden",
    description:
      "Vi skapar snabba, mobilvänliga och SEO-optimerade hemsidor för företag i Lerum. Öka din synlighet på Google!",
  },
  ale: {
    name: "Ale",
    title: "SEO byrå i Ale – Sökmotoroptimering & Webbutveckling | Dataeden",
    description: "Behöver du en SEO-optimerad hemsida? Vi hjälper företag i Ale att skapa bättre synlighet på Google.",
  },
  stenungsund: {
    name: "Stenungsund",
    title: "Webbutveckling i Stenungsund – SEO & Sökmotoroptimering | Dataeden",
    description:
      "Få fler kunder online med en SEO-optimerad hemsida och webbutveckling i Stenungsund. Kontakta oss idag!",
  },
  tjorn: {
    name: "Tjörn",
    title: "SEO Tjörn – Webbutveckling & Digital Marknadsföring | Dataeden",
    description:
      "Vi hjälper företag på Tjörn att bygga snygga, responsiva och SEO-anpassade hemsidor för bättre synlighet online.",
  },
  boras: {
    name: "Borås",
    title: "Webbyrå i Borås – Skapa en SEO-optimerad Hemsida | Dataeden",
    description:
      "Behöver du en ny hemsida i Borås? Vi bygger sökmotorvänliga och mobilanpassade webbplatser för företag.",
  },
  trollhattan: {
    name: "Trollhättan",
    title: "Webbutveckling i Trollhättan – SEO & Hemsida Pris | Dataeden",
    description: "Vill du ha en ny hemsida i Trollhättan? Vi bygger SEO-optimerade hemsidor till transparenta priser.",
  },
  uddevalla: {
    name: "Uddevalla",
    title: "SEO Uddevalla – Webbutveckling & Sökmotoroptimering | Dataeden",
    description:
      "Bygg en professionell hemsida i Uddevalla med smart SEO. Vi hjälper dig att öka din synlighet online.",
  },
  alingsas: {
    name: "Alingsås",
    title: "Webbutveckling i Alingsås – SEO & Digital Marknadsföring | Dataeden",
    description:
      "Dataeden skapar SEO-optimerade webbplatser som hjälper företag i Alingsås att synas bättre på Google.",
  },
  skovde: {
    name: "Skövde",
    title: "SEO Skövde – Webbutveckling & Sökmotoroptimering | Dataeden",
    description: "Vill du synas bättre på Google? Vi erbjuder webbutveckling och SEO-tjänster i Skövde.",
  },
  vanersborg: {
    name: "Vänersborg",
    title: "Webbutveckling i Vänersborg – SEO & Hemsidor | Dataeden",
    description: "Dataeden skapar SEO-optimerade hemsidor för företag i Vänersborg. Kontakta oss för en offert.",
  },
  lidkoping: {
    name: "Lidköping",
    title: "SEO Lidköping – Webbutveckling & Digital Marknadsföring | Dataeden",
    description: "Bygg en hemsida i Lidköping som rankar högt på Google. SEO & webbutveckling för företag.",
  },
  mariestad: {
    name: "Mariestad",
    title: "SEO Mariestad – Webbutveckling & Sökmotoroptimering | Dataeden",
    description: "Få en SEO-optimerad hemsida i Mariestad och förbättra din digitala synlighet med Dataeden.",
  },
  lysekil: {
    name: "Lysekil",
    title: "Webbutveckling på Lysekil – SEO & Digital Marknadsföring | Dataeden",
    description: "Vi skapar snabba, mobilvänliga hemsidor för företag på Lysekil. SEO-optimerade för bästa synlighet!",
  },
  stromstad: {
    name: "Strömstad",
    title: "SEO Strömstad – Webbutveckling & Hemsidor | Dataeden",
    description: "Få fler kunder med en modern och sökmotorvänlig hemsida i Strömstad. Vi hjälper dig synas online.",
  },
  falkoping: {
    name: "Falköping",
    title: "Webbutveckling i Falköping – SEO & Mobilanpassade Hemsidor | Dataeden",
    description: "Bygg en modern hemsida i Falköping. SEO-optimerade för både desktop och mobil.",
  },
  hjo: {
    name: "Hjo",
    title: "Webbutveckling i Hjo – Skapa Hemsida med SEO | Dataeden",
    description: "Dataeden skapar moderna, SEO-optimerade hemsidor för företag i Hjo. Kontakta oss idag!",
  },
  ulricehamn: {
    name: "Ulricehamn",
    title: "SEO Ulricehamn – Webbutveckling & Digital Marknadsföring | Dataeden",
    description: "Vill du synas högre på Google? Vi erbjuder SEO & webbutveckling i Ulricehamn.",
  },
  munkedal: {
    name: "Munkedal",
    title: "Webbutveckling i Munkedal – SEO-optimerade Hemsidor | Dataeden",
    description: "Bygg en snygg och snabb hemsida i Munkedal. SEO-optimerad för bättre ranking på Google.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: keyof typeof cities }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return notFound();

  return {
    title: cityData.title,
    description: cityData.description,
    keywords: [
      `Webbutveckling ${cityData.name}`,
      `Hemsidor småföretag ${cityData.name}`,
      `Webbdesign ${cityData.name}`,
      "Vad är SEO?",
      "Webbapplikationer",
      `Webbyrå ${cityData.name}`,
      `Hur gör jag en hemsida för mitt företag?`,
      `Bästa webbyrån ${getPreposition(cityData.name)} ${cityData.name}`,
      `Synas på Google ${getPreposition(cityData.name)} ${cityData.name}`,
      `Billig hemsida för småföretag`,
    ],
    openGraph: {
      url: `https://dataeden.se/${city}`,
      title: cityData.title,
      description: cityData.description,
      siteName: "Dataeden",
      images: [
        {
          width: 1200,
          height: 630,
          url: "https://dataeden.se/images/logo.png",
          alt: `Webbutveckling ${getPreposition(cityData.name)} ${cityData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cityData.title,
      description: cityData.description,
      images: ["https://dataeden.se/images/logo.png"],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: keyof typeof cities }> }) {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return notFound();

  const sections = landingSections(cityData.name);
  const cta = getCTAContent(cityData.name);

  return (
    <>
      <Hero city={cityData.name} />
      <Container>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={replaceCityPlaceholder(section.title, cityData.name ? getPreposition(cityData.name) : "")}
            description={replaceCityPlaceholder(
              section.description,
              cityData.name ? getPreposition(cityData.name) : "",
            )}
          >
            {section.id === "features" && <Benefits city={cityData.name} />}
            {section.id === "seo" && <SEOSection city={cityData.name} />}
            {section.id === "idea" && (
              <ItemScroll
                dict={{
                  first_text: "Från idé till verklighet –",
                  second_text1: "Din hemsida kan vara redo på ",
                  time_text: "några dagar",
                  second_text2: "!",
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

        <CTA title={cta.title} buttonText={cta.button} city={cityData.name} />
      </Container>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}
