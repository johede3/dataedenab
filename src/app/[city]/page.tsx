import { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "../../components/About/About";
import Benefits from "../../components/Benefits/Benefits";
import CTA from "../../components/CTA/CTA";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import { ItemScroll } from "../../components/Idea/ItemScroll";
import Pricing from "../../components/Pricing/Pricing";
import Projects from "../../components/Projects/Projects";
import Section from "../../components/Section/Section";
import SEOSection from "../../components/SEO/SEOSection";
import Container from "../../components/UI/Container/Container";
import { landingSections } from "../data/landing";
import { getCTAContent, getPreposition, replaceCityPlaceholder } from "../utils";

const cities = {
  goteborg: {
    name: "Göteborg",
    title: "Webbyrå Göteborg – Professionell Hemsida Företag | Dataeden",
    description:
      "Dataeden erbjuder unika hemsidor för företag i Göteborg med modern design och robust funktionalitet. Kontakta oss för en offert och ökad digital närvaro.",
  },
  kungalv: {
    name: "Kungälv",
    title: "Webbyrå Kungälv – Hemsida Företag för Lokala Aktörer | Dataeden",
    description:
      "I Kungälv skapar vi kostnadseffektiva hemsidor som stärker ditt företags digitala närvaro med modern design och enkel navigering. Få en lösning som passar dig!",
  },
  orust: {
    name: "Orust",
    title: "Webbutveckling Orust – Anpassade Hemsidor för Små Företag | Dataeden",
    description:
      "På Orust erbjuder vi unika och prisvärda hemsidelösningar med modern design, snabb laddning och enkel navigering – perfekt för lokala småföretag.",
  },
  kungsbacka: {
    name: "Kungsbacka",
    title: "Webbyrå Kungsbacka – Hemsida Företag med Lokal Förankring | Dataeden",
    description:
      "Vi bygger responsiva hemsidor i Kungsbacka som kombinerar snygg design med praktisk funktionalitet, vilket stärker ditt lokala varumärke. Begär offert idag!",
  },
  molndal: {
    name: "Mölndal",
    title: "Webbutveckling Mölndal – Hemsidor för Företag i Tillväxt | Dataeden",
    description:
      "Vi skapar moderna hemsidor för företag i Mölndal med fokus på användarvänlighet, konvertering och snabb laddning. Låt oss hjälpa dig att växa digitalt.",
  },
  partille: {
    name: "Partille",
    title: "Webbyrå Partille – Hemsida Företag med Modern Design | Dataeden",
    description:
      "Vi erbjuder skräddarsydda hemsidelösningar i Partille med responsiv design och optimerad funktionalitet, vilket stärker ditt företags digitala identitet.",
  },
  lerum: {
    name: "Lerum",
    title: "Webbutveckling Lerum – Prisvärda Hemsidor för Företag | Dataeden",
    description:
      "I Lerum levererar vi anpassade hemsidor med snygg design och praktisk funktionalitet, ideala för företag som vill öka sin online-närvaro.",
  },
  ale: {
    name: "Ale",
    title: "Webbyrå Ale – Hemsida Företag med Personlig Touch | Dataeden",
    description:
      "Vi utvecklar unika hemsidor för företag i Ale med modern design och användarvänliga lösningar, skräddarsydda efter dina specifika behov.",
  },
  stenungsund: {
    name: "Stenungsund",
    title: "Webbutveckling Stenungsund – Hemsidor för Lokala Aktörer | Dataeden",
    description:
      "Vi bygger professionella hemsidor i Stenungsund med tydlig design och enkel navigering, vilket hjälper ditt företag att stärka sin lokala närvaro.",
  },
  tjorn: {
    name: "Tjörn",
    title: "Webbutveckling Tjörn – Funktionella Hemsidor för Företag | Dataeden",
    description:
      "På Tjörn skapar vi eleganta och funktionella hemsidor som kombinerar modern design med praktiska lösningar för att driva din verksamhet framåt.",
  },
  boras: {
    name: "Borås",
    title: "Webbyrå Borås – Hemsida Företag för Tillväxt och Synlighet | Dataeden",
    description:
      "I Borås designar vi skräddarsydda hemsidor med modern layout och god användarupplevelse, anpassade för företag som vill växa och synas bättre online.",
  },
  trollhattan: {
    name: "Trollhättan",
    title: "Webbyrå Trollhättan – Hemsida Företag med Lokal Expertis | Dataeden",
    description:
      "Vi levererar skräddarsydda hemsidor i Trollhättan med fokus på både design och funktionalitet – en lösning för företag som vill stärka sin lokala marknad.",
  },
  uddevalla: {
    name: "Uddevalla",
    title: "Webbutveckling Uddevalla – Hemsida Företag med Modern Teknik | Dataeden",
    description:
      "Vi skapar responsiva och professionella hemsidor för företag i Uddevalla med modern teknik, användarvänlig design och snabba laddtider. Kontakta oss!",
  },
  alingsas: {
    name: "Alingsås",
    title: "Webbutveckling Alingsås – Hemsida Företag för Stark Digital Närvaro | Dataeden",
    description:
      "I Alingsås erbjuder vi unika hemsidelösningar som kombinerar modern design med praktisk funktionalitet, för att hjälpa ditt företag nå fler kunder online.",
  },
  skovde: {
    name: "Skövde",
    title: "Webbyrå Skövde – Hemsida Företag med Fokus på Användarupplevelse | Dataeden",
    description:
      "Vi designar och utvecklar hemsidor i Skövde med responsiv design och enkel navigering, skräddarsydda för att förbättra ditt företags digitala identitet.",
  },
  vanersborg: {
    name: "Vänersborg",
    title: "Webbutveckling Vänersborg – Hemsidor för Företag med Lokal Förankring | Dataeden",
    description:
      "Vi bygger användarvänliga hemsidor i Vänersborg med modern design och optimerad funktionalitet, vilket stärker ditt företags lokala närvaro. Hör av dig!",
  },
  lidkoping: {
    name: "Lidköping",
    title: "Webbutveckling Lidköping – Hemsida Företag med Kreativ Design | Dataeden",
    description:
      "I Lidköping skapar vi skräddarsydda hemsidor med kreativ design och praktisk funktionalitet, perfekta för företag som vill sticka ut digitalt.",
  },
  mariestad: {
    name: "Mariestad",
    title: "Webbutveckling Mariestad – Hemsidor för Företag med Modern Stil | Dataeden",
    description:
      "Vi erbjuder professionella hemsidor i Mariestad med modern design och tydlig navigering, vilket ger ditt varumärke en stark digital identitet.",
  },
  lysekil: {
    name: "Lysekil",
    title: "Webbutveckling Lysekil – Hemsida Företag med Användarvänlig Design | Dataeden",
    description:
      "I Lysekil utvecklar vi responsiva hemsidor med modern design och robust funktionalitet, designade för att skapa en stark digital närvaro för ditt företag.",
  },
  stromstad: {
    name: "Strömstad",
    title: "Webbutveckling Strömstad – Hemsida Företag med Lokal Känsla | Dataeden",
    description:
      "Vi skapar anpassade hemsidor för företag i Strömstad där modern design möter lokal insikt, vilket ger ditt företag en tydlig digital identitet.",
  },
  falkoping: {
    name: "Falköping",
    title: "Webbutveckling Falköping – Hemsida Företag med Funktionell Design | Dataeden",
    description:
      "I Falköping erbjuder vi skräddarsydda hemsidor med en funktionell och modern design, anpassade efter ditt företags specifika behov och mål.",
  },
  hjo: {
    name: "Hjo",
    title: "Webbutveckling Hjo – Hemsida Företag med Enkel Navigering | Dataeden",
    description:
      "Vi utvecklar användarvänliga hemsidor för företag i Hjo med tydlig design och praktisk funktionalitet, idealiska för små lokala aktörer.",
  },
  ulricehamn: {
    name: "Ulricehamn",
    title: "Webbyrå Ulricehamn – Hemsida Företag med Modern Teknik | Dataeden",
    description:
      "I Ulricehamn skapar vi professionella hemsidor med modern design och robust funktionalitet, optimerade för företag som vill växa digitalt.",
  },
  munkedal: {
    name: "Munkedal",
    title: "Webbutveckling Munkedal – Hemsida Företag med Prisvärda Lösningar | Dataeden",
    description:
      "Vi erbjuder anpassade hemsidor för företag i Munkedal med modern design och god användarvänlighet, levererade till konkurrenskraftiga priser.",
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
      `Webbyrå ${cityData.name}`,
      `Hemsida företag ${cityData.name}`,
      `Webbutveckling ${cityData.name}`,
      `SEO byrå ${cityData.name}`,
      `Sökmotoroptimering ${cityData.name}`,
      `Webbdesign ${cityData.name}`,
      `Apputveckling ${cityData.name}`,
      `Skapa hemsida ${cityData.name}`,
      `Köpa hemsida ${cityData.name}`,
      `Synas på Google ${cityData.name}`,
    ],
    openGraph: {
      url: `https://dataeden.se/${city}`,
      type: "website",
      title: `Webbutveckling & SEO ${getPreposition(cityData.name)} ${cityData.name} – Dataeden`,
      description: `Söker du en webbyrå ${getPreposition(cityData.name)} ${
        cityData.name
      }? Vi skapar moderna hemsidor, appar & SEO-strategier för företag som vill synas online.`,
      siteName: "Dataeden",
      images: [
        {
          width: 1200,
          height: 630,
          url: "https://dataeden.se/images/logo.png",
          alt: `Webbutveckling & SEO ${cityData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Webbutveckling & SEO ${getPreposition(cityData.name)} ${cityData.name} – Dataeden`,
      description: `Behöver ditt företag en hemsida eller bättre synlighet på Google? Dataeden hjälper företag ${getPreposition(
        cityData.name,
      )} ${cityData.name} att växa digitalt.`,
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
  const cityPreposition = getPreposition(cityData.name);

  return (
    <>
      <Hero city={cityData.name} />
      <Container>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={replaceCityPlaceholder(section.title, cityPreposition)}
            description={replaceCityPlaceholder(section.description, cityPreposition)}
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
            {section.id === "pricing" && <Pricing city={cityData.name} />}
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
