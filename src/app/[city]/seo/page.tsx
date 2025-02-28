"use server";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaBolt,
  FaChartLine,
  FaLocationDot,
  FaMagnifyingGlass,
  FaMoneyBillWave,
  FaPenNib,
  FaWrench,
} from "react-icons/fa6";
import HeroSEO from "../../../components/SEO/Hero";
import Container from "../../../components/UI/Container/Container";
import { getPreposition } from "../../utils";

const cities = {
  goteborg: {
    name: "Göteborg",
    title: "SEO i Göteborg – Få fler kunder via Google | Dataeden",
    description: "Letar du efter SEO i Göteborg? Vi optimerar hemsidor så att du rankar högre och når fler kunder.",
  },
  kungalv: {
    name: "Kungälv",
    title: "SEO i Kungälv – Rank högre & väx online | Dataeden",
    description:
      "Behöver du synas bättre på Google i Kungälv? Vi skapar SEO-optimerade hemsidor för långsiktig tillväxt.",
  },
  orust: {
    name: "Orust",
    title: "SEO på Orust – Syns där dina kunder söker | Dataeden",
    description:
      "Vill du bli hittad av fler kunder på Orust? Vi hjälper dig att få bättre synlighet och fler besökare från Google.",
  },
  kungsbacka: {
    name: "Kungsbacka",
    title: "SEO i Kungsbacka – Ta din webbplats till toppen | Dataeden",
    description: "Få fler kunder från Google i Kungsbacka. Vi skapar snabba, mobilvänliga och SEO-optimerade hemsidor.",
  },
  molndal: {
    name: "Mölndal",
    title: "SEO i Mölndal – Få fler besökare & leads | Dataeden",
    description:
      "Optimera din hemsida för Google i Mölndal. Vi ser till att du rankar högre och attraherar fler kunder.",
  },
  partille: {
    name: "Partille",
    title: "SEO i Partille – Mer trafik, fler affärer | Dataeden",
    description:
      "Vill du synas högre i Google-sökningar i Partille? Vi hjälper dig att förbättra din SEO och öka trafiken.",
  },
  lerum: {
    name: "Lerum",
    title: "SEO i Lerum – Digital synlighet för företag | Dataeden",
    description: "Vi optimerar hemsidor i Lerum för att synas bättre på Google och attrahera fler kunder.",
  },
  ale: {
    name: "Ale",
    title: "SEO i Ale – Syns bättre lokalt & nationellt | Dataeden",
    description: "Få en SEO-optimerad hemsida i Ale som hjälper dig att ranka högre på Google och få fler besökare.",
  },
  stenungsund: {
    name: "Stenungsund",
    title: "SEO i Stenungsund – Öka din synlighet online | Dataeden",
    description: "Vill du ranka högre på Google i Stenungsund? Vi bygger hemsidor som optimeras för att synas bättre.",
  },
  tjorn: {
    name: "Tjörn",
    title: "SEO på Tjörn – Fler besökare, bättre placering | Dataeden",
    description: "Få fler kunder på Tjörn genom SEO-optimerad webbutveckling. Vi skapar hemsidor som rankar högre.",
  },
  boras: {
    name: "Borås",
    title: "SEO i Borås – Bli synlig i sökresultaten | Dataeden",
    description: "Öka din digitala närvaro i Borås med en SEO-optimerad hemsida som lockar fler kunder.",
  },
  trollhattan: {
    name: "Trollhättan",
    title: "SEO i Trollhättan – Få fler kunder via Google | Dataeden",
    description:
      "Vill du ranka högre på Google i Trollhättan? Vi bygger sökmotorvänliga hemsidor för bättre synlighet.",
  },
  uddevalla: {
    name: "Uddevalla",
    title: "SEO i Uddevalla – Rank högre & konvertera bättre | Dataeden",
    description: "Vi optimerar hemsidor i Uddevalla så att du får fler besökare och kunder från Google.",
  },
  alingsas: {
    name: "Alingsås",
    title: "SEO i Alingsås – Mer synlighet, fler kunder | Dataeden",
    description: "Behöver du synas bättre i Alingsås? Vi optimerar din hemsida så att fler hittar dig via Google.",
  },
  skovde: {
    name: "Skövde",
    title: "SEO i Skövde – Fler besökare & bättre ranking | Dataeden",
    description: "Vi hjälper företag i Skövde att synas bättre på Google med optimerade hemsidor och smart SEO.",
  },
  vanersborg: {
    name: "Vänersborg",
    title: "SEO i Vänersborg – Ta din webbplats till toppen | Dataeden",
    description: "Få fler kunder via Google i Vänersborg med en SEO-anpassad hemsida som konverterar.",
  },
  lidkoping: {
    name: "Lidköping",
    title: "SEO i Lidköping – Syns där dina kunder söker | Dataeden",
    description: "Vi skapar moderna, snabba och SEO-optimerade hemsidor för företag i Lidköping.",
  },
  mariestad: {
    name: "Mariestad",
    title: "SEO i Mariestad – Bli hittad på Google | Dataeden",
    description: "Optimera din digitala närvaro i Mariestad med en hemsida som rankar högt och konverterar.",
  },
  lysekil: {
    name: "Lysekil",
    title: "SEO på Lysekil – Öka din synlighet online | Dataeden",
    description: "Fler kunder och bättre placeringar på Google för företag på Lysekil med SEO-optimerade hemsidor.",
  },
  stromstad: {
    name: "Strömstad",
    title: "SEO i Strömstad – Bli synlig i Google-sökningar | Dataeden",
    description: "Vill du ha fler kunder i Strömstad? Vi hjälper dig att synas bättre i Google-sökningar.",
  },
  falkoping: {
    name: "Falköping",
    title: "SEO i Falköping – Mer trafik, fler affärer | Dataeden",
    description: "SEO-anpassade hemsidor i Falköping – optimala för företag som vill växa digitalt.",
  },
  hjo: {
    name: "Hjo",
    title: "SEO på Hjo – Synlighet och fler kunder | Dataeden",
    description: "Få en SEO-optimerad hemsida på Hjo som gör att fler hittar dig online.",
  },
  ulricehamn: {
    name: "Ulricehamn",
    title: "SEO i Ulricehamn – Få fler besökare & leads | Dataeden",
    description: "Vi optimerar hemsidor i Ulricehamn för att maximera synlighet och konverteringar.",
  },
  munkedal: {
    name: "Munkedal",
    title: "SEO i Munkedal – Digital närvaro & högre ranking | Dataeden",
    description: "Behöver du bättre placering på Google i Munkedal? Vi skapar optimerade hemsidor för ökad synlighet.",
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
    openGraph: {
      url: `https://dataeden.se/${cityData.name}/seo`,
      title: `SEO i ${cityData.name} – Få fler besökare & kunder online`,
      description: `Vill du synas bättre på Google i ${cityData.name}? Vi bygger snabba, mobilvänliga hemsidor med SEO-struktur för högre ranking.`,
      images: [
        {
          url: "https://dataeden.se/favi/android-chrome-512x512.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// SEO-sida som laddar rätt innehåll för varje stad
export default async function SEOPage({ params }: { params: { city: keyof typeof cities } }) {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return notFound();

  const benefits = [
    {
      icon: FaMagnifyingGlass,
      title: "Syns högre på Google",
      text: `Fler kunder hittar dig när de söker efter dina tjänster i ${cityData.name}.`,
    },
    {
      icon: FaChartLine,
      title: "Ökad försäljning",
      text: "Organisk trafik från Google konverterar bättre än betalda annonser.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Gratis trafik",
      text: "Till skillnad från annonser ger SEO dig gratis, långsiktig trafik – utan att du behöver betala för varje klick.",
    },
  ];

  const strategies = [
    {
      icon: FaWrench,
      title: "On-page SEO – Strukturerad och sökoptimerad hemsida",
      description:
        "Vi bygger sidor med rätt struktur, rubriker och innehåll så att Google enkelt kan förstå och ranka din webbplats.",
      points: [
        "SEO-optimerade titlar och rubriker",
        "Säljande meta-beskrivningar som ökar klick",
        "Effektiv internlänkning för bättre indexering",
      ],
    },
    {
      icon: FaBolt,
      title: "Teknisk SEO – Snabba och mobilvänliga hemsidor",
      description:
        "Vi optimerar din hemsida för snabb laddning, mobilanpassning och säkerhet – viktiga faktorer för högre ranking på Google.",
      points: [
        "Laddningstid under 2 sekunder för bättre SEO",
        "Mobilanpassad design (Mobile-first)",
        "SSL/HTTPS för säkerhet och förtroende",
      ],
    },
    {
      icon: FaLocationDot,
      title: `Lokal SEO – Byggd för att synas ${getPreposition(cityData.name)} ${cityData.name}`,
      description:
        "Din hemsida optimeras för lokala sökningar, så att potentiella kunder hittar dig när de söker efter dina tjänster.",
      points: [
        "Strukturerat innehåll med lokala sökord",
        "Optimerad sidstruktur för Google",
        "SEO-vänlig webbadress och metadata",
      ],
    },
    {
      icon: FaPenNib,
      title: "SEO-anpassat innehåll – Texter som rankar på Google",
      description:
        "Vi skapar sökmotorvänliga texter som både engagerar besökare och hjälper din hemsida att synas högre i sökresultaten.",
      points: [
        "Strukturerade texter med rätt sökord",
        "Naturliga rubriker som ökar läsbarheten",
        "Optimerad textlängd och nyckelordsdensitet",
      ],
    },
  ];

  return (
    <>
      <HeroSEO city={cityData.name} />
      <Container>
        <section id="seo-content">
          <div className="mx-auto max-w-5xl lg:px-0">
            <div className=" mt-16 space-y-16">
              {/* SEO Sektion */}
              <div className=" text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  SEO {getPreposition(cityData.name)} {cityData.name} – Maximera din synlighet och kundtillväxt
                </h2>
                <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Behöver du fler kunder från Google? Vi hjälper dig att få mer synlighet, trafik och affärer genom
                  strategisk SEO.
                </p>
              </div>

              {/* SEO Fördelar - Kortlayout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-gray-700 dark:text-gray-300">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
                    >
                      <div className="flex justify-center mb-4">
                        <Icon className="text-4xl text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-center">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* SEO Strategier - Enhetlig Sektion */}
              <div className=" bg-white dark:bg-gray-900   dark:border-gray-700 p-12 rounded-xl mt-16">
                <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-10">
                  {/* Text */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                      Vill du ranka högre på Google {getPreposition(cityData.name)} {cityData.name}?
                    </h2>
                    <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
                      För att synas högre i sökresultaten krävs mer än bara sökord. En framgångsrik SEO-strategi
                      inkluderar optimering av innehåll, tekniska justeringar och strategisk länkbyggnad. Vi hjälper dig
                      att förbättra alla dessa aspekter, så att du kan attrahera fler lokala kunder och växa din
                      verksamhet.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                      Många tror att SEO bara handlar om sökord, men en välgjord strategi täcker allt från sidstruktur
                      och laddningshastighet till lokal synlighet och backlinks.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-semibold">
                      Här är några av de viktigaste faktorerna som påverkar din ranking:
                    </p>
                  </div>
                </div>

                {/* SEO Strategier - Korta boxar direkt under texten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  {strategies.map((strategy, index) => {
                    const Icon = strategy.icon;
                    return (
                      <div
                        key={index}
                        className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg flex flex-col gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <Icon className="text-4xl text-purple-600" />
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{strategy.title}</h3>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300">{strategy.description}</p>
                        <ul className="mt-4 space-y-2 text-lg">
                          {strategy.points.map((point, i) => (
                            <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                              <span className="mr-2 text-green-500">✓</span> {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Sektion - Avslut med en bred block */}
              <div className="bg-purple-700 dark:bg-purple-900 text-white p-6 md:p-12 rounded-xl shadow-md mt-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Vill du synas högst på Google? Börja din SEO-resa idag!
                </h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">
                  Vill du veta hur din hemsida presterar? Boka en gratis SEO-analys och få konkreta förbättringsförslag.
                </p>

                {/* Knappar - Mobilvänlig layout */}
                <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                  <Link
                    href="/kontakt"
                    className="rounded-full bg-white text-purple-700 px-8 py-3 text-md font-medium shadow-md transition-all hover:bg-gray-200"
                  >
                    Boka en kostnadsfri SEO-analys
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-full border border-white text-white px-8 py-3 text-md font-medium shadow-md transition-all hover:bg-white hover:text-purple-700"
                  >
                    Läs mer om våra tjänster
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <section id="faq" className="py-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center">
                  Vanliga frågor om SEO {getPreposition(cityData.name)} {cityData.name}
                </h2>
                <div className="mt-8 space-y-2">
                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">
                      Hur kommer min hemsida högre upp på Google?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      För att ranka högre på Google {getPreposition(cityData.name)} {cityData.name} behöver du
                      SEO-optimering. Vi ser till att din hemsida har rätt sökord, laddar snabbt, är mobilvänlig och har
                      bra innehåll.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">Hur lång tid tar det innan SEO fungerar?</summary>
                    <p className="mt-2 text-gray-600">
                      SEO är en långsiktig strategi. Oftast tar det 3–6 månader innan du ser tydliga resultat. Men
                      teknisk SEO och optimeringar kan ge snabbare förbättringar.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">
                      Behöver mitt företag SEO om jag redan har en hemsida?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Ja! Att ha en hemsida räcker inte för att synas på Google. Utan SEO kan din hemsida hamna långt
                      ner i sökresultaten och dina konkurrenter får kunderna istället.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">Hur gör man en hemsida som syns på Google?</summary>
                    <p className="mt-2 text-gray-600">
                      För att en hemsida ska synas på Google måste den ha rätt sökord, bra laddningstid och vara
                      mobilanpassad. Vi hjälper dig att optimera din hemsida så att du når fler kunder{" "}
                      {getPreposition(cityData.name)} {cityData.name}.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">
                      Vad är skillnaden mellan SEO och Google Ads?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Google Ads är betalda annonser som ger omedelbara resultat, men försvinner så fort du slutar
                      betala. SEO är en långsiktig strategi som ger gratis trafik från Google över tid.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">Hur fungerar lokal SEO i {cityData.name}?</summary>
                    <p className="mt-2 text-gray-600">
                      Lokal SEO gör att du syns på Google när någon söker efter tjänster {getPreposition(cityData.name)}{" "}
                      {cityData.name}. Vi optimerar din webbplats för sökningar som{" "}
                      <strong>"SEO {cityData.name}"</strong> och hjälper dig att synas på Google Maps.
                    </p>
                  </details>

                  <details className="p-4 bg-gray-100 rounded-lg">
                    <summary className="font-medium cursor-pointer">Hur vet jag om SEO fungerar?</summary>
                    <p className="mt-2 text-gray-600">
                      Vi mäter dina SEO-resultat genom Google Analytics och sökordsrapporter. Du kan se hur många fler
                      besökare och kunder du får från Google {getPreposition(cityData.name)} {cityData.name}.
                    </p>
                  </details>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Container>
    </>
  );
}
