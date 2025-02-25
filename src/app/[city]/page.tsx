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
  molndal: {
    name: "Mölndal",
    title: "Dataeden – Webbutveckling i Mölndal",
    description: "Vi skapar moderna webbplatser för företag i Mölndal och Västra Götaland.",
  },
  partille: {
    name: "Partille",
    title: "Dataeden – Webbutveckling i Partille",
    description: "Hemsidor och digitala lösningar för företag i Partille.",
  },
  lerum: {
    name: "Lerum",
    title: "Dataeden – Webbutveckling i Lerum",
    description: "Vi bygger skräddarsydda hemsidor och appar för företag i Lerum.",
  },
  ale: {
    name: "Ale",
    title: "Dataeden – Webbutveckling i Ale",
    description: "SEO-optimerade hemsidor för företag i Ale och Västra Götaland.",
  },
  stenungsund: {
    name: "Stenungsund",
    title: "Dataeden – Webbutveckling i Stenungsund",
    description: "Professionell webbutveckling och SEO-tjänster för företag i Stenungsund.",
  },
  tjorn: {
    name: "Tjörn",
    title: "Dataeden – Webbutveckling på Tjörn",
    description: "Vi hjälper företag på Tjörn att bygga snygga och funktionella webbplatser.",
  },
  boras: {
    name: "Borås",
    title: "Dataeden – Webbutveckling i Borås",
    description: "Moderna, mobilanpassade hemsidor för företag i Borås.",
  },
  trollhattan: {
    name: "Trollhättan",
    title: "Dataeden – Webbutveckling i Trollhättan",
    description: "Skräddarsydda webblösningar för företag i Trollhättan.",
  },
  uddevalla: {
    name: "Uddevalla",
    title: "Dataeden – Webbutveckling i Uddevalla",
    description: "Professionell webbutveckling och SEO-optimerade hemsidor i Uddevalla.",
  },
  alingsas: {
    name: "Alingsås",
    title: "Dataeden – Webbutveckling i Alingsås",
    description: "Vi hjälper företag i Alingsås att digitalisera sin verksamhet med moderna webbplatser.",
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
      `Skräddarsydda webblösningar ${cityData.name}`,
      `Webbdesign ${cityData.name}`,
      "SEO optimering",
      "Webbapplikationer",
      "Mobilanpassade hemsidor",
      "E-handelslösningar",
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
          alt: `Webbutveckling i ${cityData.name}`,
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
        <CTA city={cityData.name} />
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}
