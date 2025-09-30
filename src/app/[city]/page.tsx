import { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "../../components/About/About";
import Benefits from "../../components/Benefits/Benefits";
import CTA from "../../components/CTA/CTA";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import { ItemScroll } from "../../components/Idea/ItemScroll";
import NearbyCities from "../../components/NearbyCities";
import Pricing from "../../components/Pricing/Pricing";
import Projects from "../../components/Projects/Projects";
import Section from "../../components/Section/Section";
import SEOSection from "../../components/SEO/SEOSection";
import Container from "../../components/UI/Container/Container";
import { faqSection } from "../data/faqSection";
import { landingSections } from "../data/landing";
import { getCityCategory, getCTAContent, getPreposition, replaceCityPlaceholder } from "../utils";

const cities = {
  goteborg: {
    name: "Göteborg",
    title: "Webbutveckling Göteborg – Klar på 7 dagar",
    description:
      "Webbutveckling i Göteborg för företag. Snabb leverans, SEO-struktur och premiumstöd. Boka gratis rådgivning idag.",
  },
  kungalv: {
    name: "Kungälv",
    title: "Webbutveckling Kungälv – Fast pris från 9 900 kr",
    description:
      "Webbutveckling i Kungälv med tydliga paket och priser. Mobilvänlig, snabb och SEO-optimerad. Få en gratis offert idag.",
  },
  orust: {
    name: "Orust",
    title: "Webbutveckling Orust – Lokalt fokus & snabba sidor",
    description:
      "Webbutveckling på Orust för lokala företag. Snabb leverans, Google-vänlig struktur och tydliga priser. Begär en gratis offert.",
  },
  kungsbacka: {
    name: "Kungsbacka",
    title: "Webbutveckling Kungsbacka – Snabb, SEO-optimerad hemsida",
    description:
      "Webbutveckling i Kungsbacka som ger fler kunder. Snabb, mobilvänlig och SEO-klar. Boka gratis rådgivning – start inom 7 dagar.",
  },
  molndal: {
    name: "Mölndal",
    title: "Webbutveckling Mölndal – Start klart på 7 dagar",
    description:
      "Webbutveckling i Mölndal för företag. Snabb leverans, hög prestanda och SEO-struktur som konverterar. Få en gratis offert.",
  },
  partille: {
    name: "Partille",
    title: "Webbutveckling Partille – Tydliga paket & priser",
    description:
      "Webbutveckling i Partille. Snygg design, snabb laddning och lokalt anpassad SEO. Begär offert – vi startar snabbt.",
  },
  lerum: {
    name: "Lerum",
    title: "Webbutveckling Lerum – Modern, mobilvänlig design",
    description:
      "Webbutveckling i Lerum som syns på Google. Modern design, mobilvänlighet och tydliga priser. Boka gratis rådgivning idag.",
  },
  ale: {
    name: "Ale",
    title: "Webbutveckling Ale – Prisvärd kvalitet för företag",
    description:
      "Webbutveckling i Ale med fokus på konvertering. Snabba, SEO-optimerade sidor till rätt pris. Få en gratis offert nu.",
  },
  stenungsund: {
    name: "Stenungsund",
    title: "Webbutveckling Stenungsund – Google Maps & lokala leads",
    description:
      "Webbutveckling i Stenungsund som driver lokala sökningar. Snabb, mobilvänlig och SEO-klar. Kontakta oss för gratis rådgivning.",
  },
  tjorn: {
    name: "Tjörn",
    title: "Webbutveckling Tjörn – Snabb leverans & support",
    description:
      "Webbutveckling på Tjörn för företag. Snabb leverans, tydliga priser och lokalt anpassad SEO. Få en kostnadsfri offert.",
  },
  boras: {
    name: "Borås",
    title: "Webbutveckling Borås – B2B-fokus som konverterar",
    description:
      "Webbutveckling i Borås för företag. Hög prestanda, SEO-struktur och mätbara resultat. Boka gratis rådgivning idag.",
  },
  trollhattan: {
    name: "Trollhättan",
    title: "Webbutveckling Trollhättan – Resultatdriven SEO-struktur",
    description:
      "Webbutveckling i Trollhättan som rankar och konverterar. Snabba, mobilvänliga sidor med lokal SEO. Få en gratis offert.",
  },
  uddevalla: {
    name: "Uddevalla",
    title: "Webbutveckling Uddevalla – Hastighet & konvertering",
    description:
      "Webbutveckling i Uddevalla för företag. Snabb laddning, modern design och SEO som ger fler kunder. Kontakta oss för offert.",
  },
  alingsas: {
    name: "Alingsås",
    title: "Webbutveckling Alingsås – Smarta paket, tydliga priser",
    description:
      "Webbutveckling i Alingsås som ger resultat. Mobilvänlig, SEO-optimerad och snabb leverans. Boka gratis rådgivning.",
  },
  skovde: {
    name: "Skövde",
    title: "Webbutveckling Skövde – Prestanda & SEO i toppklass",
    description:
      "Webbutveckling i Skövde för företag. Hög prestanda, säker teknik och SEO-struktur. Få en gratis offert – start snabbt.",
  },
  vanersborg: {
    name: "Vänersborg",
    title: "Webbutveckling Vänersborg – Syns lokalt, väx online",
    description:
      "Webbutveckling i Vänersborg som driver lokala sökningar. Snabba, snygga och SEO-optimerade sidor. Kontakta oss för offert.",
  },
  lidkoping: {
    name: "Lidköping",
    title: "Webbutveckling Lidköping – Design som ger fler kunder",
    description:
      "Webbutveckling i Lidköping. Snygg design, snabba laddtider och tydliga priser. Boka gratis rådgivning i dag.",
  },
  mariestad: {
    name: "Mariestad",
    title: "Webbutveckling Mariestad – Snygg, snabb & SEO-klar",
    description:
      "Webbutveckling i Mariestad för företag. Mobilvänlig, snabb och byggd för Google. Få en gratis offert – vi startar snabbt.",
  },
  lysekil: {
    name: "Lysekil",
    title: "Webbutveckling Lysekil – Lokala referenser & resultat",
    description:
      "Webbutveckling i Lysekil som syns lokalt. Snabba, SEO-optimerade sidor som konverterar. Kontakta oss för gratis rådgivning.",
  },
  stromstad: {
    name: "Strömstad",
    title: "Webbutveckling Strömstad – Byggd för lokala sökningar",
    description:
      "Webbutveckling i Strömstad. Mobilvänlig design, lokal SEO och snabba leveranser. Begär en kostnadsfri offert idag.",
  },
  falkoping: {
    name: "Falköping",
    title: "Webbutveckling Falköping – Prisvärd, snabb leverans",
    description:
      "Webbutveckling i Falköping för företag. Snabb leverans, tydliga priser och SEO som ger fler kunder. Få en gratis offert.",
  },
  hjo: {
    name: "Hjo",
    title: "Webbutveckling Hjo – Enkel, effektiv & mobilvänlig",
    description:
      "Webbutveckling i Hjo som gör skillnad. Snabba, mobilvänliga sidor med SEO-struktur. Kontakta oss för gratis rådgivning.",
  },
  ulricehamn: {
    name: "Ulricehamn",
    title: "Webbutveckling Ulricehamn – Modern teknik & SEO",
    description:
      "Webbutveckling i Ulricehamn. Modern teknik, trygg drift och SEO-optimering. Begär offert – start inom 7 dagar.",
  },
  munkedal: {
    name: "Munkedal",
    title: "Webbutveckling Munkedal – Fast pris & snabb start",
    description:
      "Webbutveckling i Munkedal för företag. Tydliga paket, snabb leverans och lokal SEO. Få en gratis offert idag.",
  },
};

function getABVariant(slug: string): "A" | "B" {
  let sum = 0;
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i);
  return sum % 2 === 0 ? "A" : "B";
}

function getVariantUSP(variant: "A" | "B"): string {
  return variant === "A" ? "Klar på 7 dagar" : "Fast pris från 9\u00A0900 kr";
}

function buildTitle(cityName: string, slug: string): string {
  const usp = getVariantUSP(getABVariant(slug));
  return `Webbutveckling ${cityName} – ${usp}`;
}

function buildDescription(cityName: string): string {
  const prep = getPreposition(cityName);
  const category = getCityCategory(cityName);
  if (category === "large") {
    return `Webbutveckling ${prep} ${cityName} för företag. Snabb leverans, SEO-struktur och premiumstöd. Boka gratis rådgivning idag.`;
  }
  if (category === "growing") {
    return `Webbutveckling ${prep} ${cityName} för företag. Snabb leverans, SEO-struktur och tydliga priser. Boka gratis rådgivning idag.`;
  }
  if (category === "small") {
    return `Webbutveckling ${prep} ${cityName} för företag. Mobilvänlig, snabb och SEO-optimerad. Få en gratis offert idag.`;
  }
  return `Webbutveckling ${prep} ${cityName} för företag. Snabb, mobilvänlig och SEO-optimerad. Kontakta oss för gratis rådgivning.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: keyof typeof cities }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return notFound();

  const manualTitle = cityData.title && cityData.title.trim().length > 0 ? cityData.title : null;
  const manualDescription =
    cityData.description && cityData.description.trim().length > 0 ? cityData.description : null;
  const resolvedTitle = manualTitle || buildTitle(cityData.name, city);
  const resolvedDescription = manualDescription || buildDescription(cityData.name);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
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
      title: resolvedTitle,
      description: resolvedDescription,
      siteName: "Dataeden",
      images: [
        {
          width: 1200,
          height: 630,
          url: "https://dataeden.se/favi/android-chrome-512x512.png",
          alt: `Webbutveckling ${cityData.name}`,
        },
      ],
    },
    alternates: {
      canonical: `https://dataeden.se/${city}`,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: ["https://dataeden.se/favi/android-chrome-512x512.png"],
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
  const variantUSP = getVariantUSP(getABVariant(city));
  const faqEntities = faqSection(cityData.name).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Hem",
                item: "https://dataeden.se/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: `Webbutveckling ${cityPreposition} ${cityData.name}`,
                item: `https://dataeden.se/${city}`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Webbutveckling",
            serviceType: "Webbutveckling",
            areaServed: { "@type": "City", name: cityData.name },
            provider: { "@type": "Organization", name: "Dataeden", url: "https://dataeden.se" },
            offers: {
              "@type": "Offer",
              price: "9900",
              priceCurrency: "SEK",
              priceSpecification: { "@type": "PriceSpecification", price: 9900, priceCurrency: "SEK" },
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntities,
          }),
        }}
      />
      <Hero city={cityData.name} />
      <Container>
        <div className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300">
          {`Webbutveckling ${cityPreposition} ${cityData.name}. ${variantUSP}. Snabb, mobilvänlig och SEO-optimerad – boka gratis rådgivning.`}
        </div>
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

        <NearbyCities currentSlug={city} />
      </Container>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}
