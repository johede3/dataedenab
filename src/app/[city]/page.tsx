import { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "../../components/About/About";
import Benefits, { replaceCityPlaceholder } from "../../components/Benefits/Benefits";
import CTA from "../../components/CTA/CTA";
import Hero from "../../components/Hero/Hero";
import { ItemScroll } from "../../components/Idea/ItemScroll";
import Pricing from "../../components/Pricing/Pricing";
import { Projects } from "../../components/Projects/Projects";
import Section from "../../components/Section/Section";
import SEOSection from "../../components/SEO/SEOSection";
import Container from "../../components/UI/Container/Container";
import { landingSections } from "../data/landing";
import { getPreposition } from "../utils";

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
  skovde: {
    name: "Skövde",
    title: "Dataeden – Webbutveckling i Skövde",
    description: "Vi skapar moderna och SEO-optimerade hemsidor för företag i Skövde.",
  },
  vanersborg: {
    name: "Vänersborg",
    title: "Dataeden – Webbutveckling i Vänersborg",
    description: "Skräddarsydd webbutveckling och digitala lösningar för företag i Vänersborg.",
  },
  lidkoping: {
    name: "Lidköping",
    title: "Dataeden – Webbutveckling i Lidköping",
    description: "Professionella hemsidor och digitala lösningar för företag i Lidköping.",
  },
  mariestad: {
    name: "Mariestad",
    title: "Dataeden – Webbutveckling i Mariestad",
    description: "SEO-optimerade hemsidor och digitala lösningar för företag i Mariestad.",
  },
  lysekil: {
    name: "Lysekil",
    title: "Dataeden – Webbutveckling på Lysekil",
    description: "Vi bygger mobilanpassade och SEO-optimerade hemsidor för företag på Lysekil.",
  },
  stromstad: {
    name: "Strömstad",
    title: "Dataeden – Webbutveckling i Strömstad",
    description: "Få fler kunder online med en modern och sökmotorvänlig hemsida i Strömstad.",
  },
  falkoping: {
    name: "Falköping",
    title: "Dataeden – Webbutveckling i Falköping",
    description: "Skräddarsydda hemsidor för företag i Falköping – optimerade för både desktop och mobil.",
  },
  hjo: {
    name: "Hjo",
    title: "Dataeden – Webbutveckling på Hjo",
    description: "Bygg en stark digital närvaro med en professionell hemsida för ditt företag i Hjo.",
  },
  ulricehamn: {
    name: "Ulricehamn",
    title: "Dataeden – Webbutveckling i Ulricehamn",
    description: "SEO-optimerade och konverteringsvänliga hemsidor för företag i Ulricehamn.",
  },
  munkedal: {
    name: "Munkedal",
    title: "Dataeden – Webbutveckling i Munkedal",
    description: "Vi hjälper företag i Munkedal att synas online med moderna och snabba hemsidor.",
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

  return (
    <>
      <Hero city={cityData.name} />
      <Container>
        {landingSections.map((section) => (
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

        <section id="faq" className="flex flex-col gap-2">
          <details className="p-4 bg-gray-100 rounded-lg">
            <summary className="font-medium cursor-pointer">Hur får jag mitt företag att synas på Google?</summary>
            <p className="mt-2 text-gray-600">
              För att synas på Google behöver du en hemsida som laddar snabbt, funkar på mobilen och har rätt texter och
              bilder. Vi hjälper dig att komma högre upp i sökresultaten utan att du behöver betala för annonser.
            </p>
          </details>

          <details className="p-4 bg-gray-100 rounded-lg">
            <summary className="font-medium cursor-pointer">Måste jag ha SEO på min hemsida?</summary>
            <p className="mt-2 text-gray-600">
              Ja, om du vill att folk ska hitta ditt företag på Google. Utan SEO hamnar din hemsida långt ner i
              sökresultaten och kunderna hittar dina konkurrenter istället. Vi kan hjälpa dig att ranka högre.
            </p>
          </details>

          <details className="p-4 bg-gray-100 rounded-lg">
            <summary className="font-medium cursor-pointer">Kan jag göra en hemsida själv?</summary>
            <p className="mt-2 text-gray-600">
              Ja, det finns gratis verktyg som Wix och WordPress, men de har begränsningar. En proffsig hemsida byggd av
              en webbyrå ser bättre ut, laddar snabbare och får fler kunder.
            </p>
          </details>
        </section>

        <CTA city={cityData.name} />
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}
