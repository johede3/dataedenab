import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSEO from "../../../components/SEO/Hero";
import Container from "../../../components/UI/Container/Container";
import { generateCitySEOData } from "../../data/seoPage";
import { getCityCategory, getPreposition } from "../../utils";

const cities = {
  goteborg: {
    name: "Göteborg",
    title: "SEO byrå Göteborg – Öka din synlighet & kundbas | Dataeden",
    description:
      "Vi erbjuder strategisk SEO i Göteborg med beprövade metoder. Få bättre ranking på Google och nå rätt målgrupp. Kontakta oss idag!",
  },
  kungalv: {
    name: "Kungälv",
    title: "SEO i Kungälv – Dominera lokala sökresultat | Dataeden",
    description:
      "Vi hjälper företag i Kungälv att nå högre placeringar på Google med skräddarsydda SEO-strategier. Bli den självklara lokala aktören.",
  },
  orust: {
    name: "Orust",
    title: "SEO på Orust – Syns där kunderna söker | Dataeden",
    description:
      "Dataeden erbjuder SEO-tjänster för Orust med anpassade lösningar. Få din hemsida att synas bättre på Google och nå rätt målgrupp.",
  },
  kungsbacka: {
    name: "Kungsbacka",
    title: "SEO i Kungsbacka – Bli ledande med våra strategier | Dataeden",
    description:
      "Vi hjälper företag i Kungsbacka att förbättra sin Google-ranking med effektiva SEO-lösningar. Öka din synlighet och få fler kunder.",
  },
  molndal: {
    name: "Mölndal",
    title: "SEO i Mölndal – Optimera din digitala närvaro | Dataeden",
    description:
      "Få fler besökare och högre placeringar på Google. Våra SEO-tjänster i Mölndal är designade för att driva tillväxt och synlighet.",
  },
  partille: {
    name: "Partille",
    title: "SEO i Partille – Skräddarsydd optimering för lokala företag | Dataeden",
    description:
      "Dataeden hjälper företag i Partille att ranka högre på Google med anpassade SEO-strategier. Förbättra din digitala närvaro idag.",
  },
  lerum: {
    name: "Lerum",
    title: "SEO i Lerum – Stärk din lokala digitala närvaro | Dataeden",
    description:
      "Vi optimerar hemsidor i Lerum för att öka synligheten på Google. Få fler kunder genom lokalt anpassade SEO-tjänster.",
  },
  ale: {
    name: "Ale",
    title: "SEO i Ale – Kombinera lokal & nationell synlighet | Dataeden",
    description:
      "Dataeden erbjuder SEO-lösningar i Ale som ökar din ranking både lokalt och nationellt. Få fler kunder med strategisk optimering.",
  },
  stenungsund: {
    name: "Stenungsund",
    title: "SEO i Stenungsund – Maximera din synlighet på Google | Dataeden",
    description:
      "Vi optimerar din hemsida för att nå högre placeringar i Stenungsund. Få fler besökare och omvandla dem till kunder med våra tjänster.",
  },
  tjorn: {
    name: "Tjörn",
    title: "SEO på Tjörn – Öka din digitala räckvidd med Dataeden",
    description:
      "Få fler besökare och bättre ranking på Google i Tjörn med våra skräddarsydda SEO-strategier. Driv din digitala framgång med oss.",
  },
  boras: {
    name: "Borås",
    title: "SEO i Borås – Dominera lokala sökresultat med Dataeden",
    description:
      "Vi erbjuder SEO-tjänster i Borås som förbättrar din Google-ranking och ökar synligheten. Bli den självklara aktören i din bransch.",
  },
  trollhattan: {
    name: "Trollhättan",
    title: "SEO i Trollhättan – Förbättra din ranking & nå fler kunder | Dataeden",
    description:
      "Dataeden skapar SEO-strategier för Trollhättan som hjälper dig att synas bättre på Google. Öka din digitala närvaro idag.",
  },
  uddevalla: {
    name: "Uddevalla",
    title: "SEO i Uddevalla – Strategisk optimering för tillväxt | Dataeden",
    description:
      "Vi optimerar din hemsida för Google i Uddevalla med anpassade SEO-lösningar. Få bättre placeringar och fler kunder med Dataeden.",
  },
  alingsas: {
    name: "Alingsås",
    title: "SEO i Alingsås – Bättre ranking, fler kunder med Dataeden",
    description:
      "Våra SEO-tjänster i Alingsås ökar din synlighet på Google och hjälper dig att nå rätt målgrupp. Optimera din digitala strategi med oss.",
  },
  skovde: {
    name: "Skövde",
    title: "SEO i Skövde – Få din hemsida att synas bättre | Dataeden",
    description:
      "Dataeden erbjuder SEO-lösningar för företag i Skövde som vill nå högre placeringar på Google. Få fler kunder med rätt strategi.",
  },
  vanersborg: {
    name: "Vänersborg",
    title: "SEO i Vänersborg – Förbättra din Google-ranking med Dataeden",
    description:
      "Vi hjälper företag i Vänersborg att nå högre positioner på Google med effektiva SEO-strategier. Öka din digitala närvaro idag.",
  },
  lidkoping: {
    name: "Lidköping",
    title: "SEO i Lidköping – Syns där dina kunder söker | Dataeden",
    description:
      "Dataeden optimerar hemsidor i Lidköping för bättre Google-ranking. Få fler kunder med våra beprövade SEO-metoder och strategier.",
  },
  mariestad: {
    name: "Mariestad",
    title: "SEO i Mariestad – Maximera din synlighet och kundbas | Dataeden",
    description:
      "Vi erbjuder SEO-tjänster i Mariestad som ökar din ranking på Google. Få fler besökare och konvertera dem till kunder med våra lösningar.",
  },
  lysekil: {
    name: "Lysekil",
    title: "SEO på Lysekil – Syns bättre på Google med Dataeden",
    description:
      "Optimera din digitala närvaro i Lysekil med våra SEO-tjänster. Få en bättre Google-ranking och fler potentiella kunder.",
  },
  stromstad: {
    name: "Strömstad",
    title: "SEO i Strömstad – Öka din synlighet & nå fler kunder | Dataeden",
    description:
      "Dataeden skapar SEO-strategier för Strömstad som förbättrar din Google-ranking. Bli den ledande aktören med våra optimerade lösningar.",
  },
  falkoping: {
    name: "Falköping",
    title: "SEO i Falköping – Stärk din digitala närvaro med Dataeden",
    description:
      "Vi erbjuder SEO-tjänster i Falköping som ökar din ranking på Google och förbättrar din digitala synlighet. Kontakta oss för en offert.",
  },
  hjo: {
    name: "Hjo",
    title: "SEO på Hjo – Optimera din hemsida för bättre synlighet | Dataeden",
    description:
      "Våra SEO-lösningar för Hjo förbättrar din Google-ranking och hjälper dig att nå fler lokala kunder. Ta din digitala närvaro till nästa nivå.",
  },
  ulricehamn: {
    name: "Ulricehamn",
    title: "SEO i Ulricehamn – Effektiv optimering för lokala företag | Dataeden",
    description:
      "Vi erbjuder SEO-tjänster i Ulricehamn som höjer din ranking på Google. Få fler kunder med en strategisk och anpassad optimering.",
  },
  munkedal: {
    name: "Munkedal",
    title: "SEO i Munkedal – Öka din digitala synlighet med Dataeden",
    description:
      "Få bättre Google-ranking i Munkedal med våra SEO-strategier. Vi optimerar din hemsida så att du når rätt målgrupp och får fler kunder.",
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
      url: `https://dataeden.se/${city}/seo`,
      type: "website",
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

export default async function SEOPage({ params }: { params: Promise<{ city: keyof typeof cities }> }) {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return notFound();

  const cityCategory = getCityCategory(cityData.name);

  const { title, description, benefits, strategies } = generateCitySEOData(cityData.name);

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
                name: `SEO i ${cityData.name}`,
                item: `https://dataeden.se/${city}/seo`,
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hur kommer min hemsida högre upp på Google?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `SEO-optimering ${getPreposition(cityData.name)} ${
                    cityData.name
                  }: rätt sökord, snabb laddning, mobilvänlighet och bra innehåll.`,
                },
              },
              {
                "@type": "Question",
                name: "Hur lång tid tar det innan SEO fungerar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SEO är långsiktigt. Tydliga resultat syns ofta efter 3–6 månader.",
                },
              },
              {
                "@type": "Question",
                name: "Behöver mitt företag SEO om jag redan har en hemsida?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, utan SEO hamnar du ofta lägre i resultaten än konkurrenter.",
                },
              },
            ],
          }),
        }}
      />
      <HeroSEO city={cityData.name} />
      <Container>
        <section id="seo-content">
          <div className="mx-auto max-w-5xl lg:px-0">
            <div className="mt-16 space-y-16">
              {/* SEO Sektion */}
              <div className="text-center">
                <h2 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl dark:text-gray-100">
                  {title}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">{description}</p>
              </div>

              {/* SEO Fördelar - Kortlayout */}
              <div className="grid grid-cols-1 gap-6 text-lg text-gray-700 md:grid-cols-3 dark:text-gray-300">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-background p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className="mb-4 flex justify-center">
                        <Icon className="text-4xl text-primary" />
                      </div>
                      <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-center">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* SEO Strategier - Enhetlig Sektion */}
              <div className="mt-16 rounded-xl bg-background dark:border-gray-700 dark:bg-gray-900">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-1">
                  {/* Text */}
                  <div>
                    <h2 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl dark:text-gray-100">
                      Vill du ranka högre på Google {getPreposition(cityData.name)} {cityData.name}?
                    </h2>

                    <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
                      {cityCategory === "large"
                        ? `I en konkurrensutsatt marknad som ${cityData.name} är SEO inte längre en lyx – det är en absolut nödvändighet. Stora företag i ${cityData.name} investerar enorma summor i digital marknadsföring, och om din hemsida inte är optimerad för Google kommer du att förlora potentiella kunder till dina konkurrenter.`
                        : cityCategory === "growing"
                        ? `SEO i ${cityData.name} ger dig en unik möjlighet att positionera ditt företag digitalt innan konkurrensen blir för hård. Allt fler företag i området börjar förstå vikten av sökmotoroptimering – genom att agera nu kan du skapa en stark digital närvaro innan marknaden blir mättad.`
                        : `I ${cityData.name} har många företag ännu inte anpassat sig till digital marknadsföring. Detta ger dig en stor fördel! Med en genomtänkt SEO-strategi kan du snabbt dominera lokala sökresultat och säkerställa att ditt företag är det första kunder ser när de söker efter dina tjänster.`}
                    </p>

                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                      {cityCategory === "large"
                        ? `Vi optimerar allt från teknisk SEO, som laddningshastighet och mobilanpassning, till strategisk innehållsplanering och backlink-building. Vår SEO-strategi ser till att din hemsida inte bara rankar högt utan också konverterar besökare till faktiska kunder.`
                        : cityCategory === "growing"
                        ? `För att etablera dig digitalt i ${cityData.name} behöver du en SEO-strategi som kombinerar smart innehållsoptimering, teknisk SEO och lokal sökordsanpassning. Vi hjälper dig att implementera en strategi som både ökar din synlighet och stärker ditt varumärke online.`
                        : `SEO är inte komplicerat när det görs rätt. Vi hjälper småföretag i ${cityData.name} att enkelt förbättra sin ranking genom beprövade metoder såsom optimerade sidtitlar, strukturerade data och mobilvänlig design.`}
                    </p>

                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                      {cityCategory === "large"
                        ? `Visste du att 75% av användarna aldrig scrollar förbi den första sidan på Google? Om din hemsida inte syns bland de toppresultaten i ${cityData.name}, går du miste om potentiella affärer varje dag.`
                        : cityCategory === "growing"
                        ? `SEO är den mest kostnadseffektiva metoden för att driva in nya kunder i ${cityData.name}. Till skillnad från betald annonsering ger SEO långsiktig, gratis trafik som bygger upp din digitala närvaro på ett hållbart sätt.`
                        : `Fler och fler kunder letar efter lokala företag online. Om din hemsida inte är optimerad för Google kommer potentiella kunder istället att välja konkurrenter som syns högre i sökresultaten.`}
                    </p>

                    <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {cityCategory === "large"
                        ? "Här är några av de viktigaste SEO-faktorerna som gör att företag i stora städer som ${cityData.name} lyckas:"
                        : cityCategory === "growing"
                        ? `Dessa SEO-strategier hjälper företag i ${cityData.name} att ta ledningen på Google:`
                        : `SEO-faktorerna som gör att småföretag i ${cityData.name} snabbt kan synas på Google:`}
                    </p>

                    <ul className="mt-4 space-y-2 text-lg">
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2 text-green-500">✓</span>{" "}
                        {cityCategory === "large"
                          ? "Teknisk SEO: Optimering av laddningshastighet, mobilanpassning och strukturerad data."
                          : cityCategory === "growing"
                          ? `Lokal SEO: Synas i Google Maps och optimering av 'SEO ${cityData.name}' söktermer.`
                          : "On-page SEO: Optimerade sidtitlar, meta-beskrivningar och rätt sökord."}
                      </li>
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2 text-green-500">✓</span>{" "}
                        {cityCategory === "large"
                          ? "Avancerad innehållsstrategi: Skapa SEO-anpassade blogginlägg och landningssidor."
                          : cityCategory === "growing"
                          ? "Snabbindexering: Se till att Google indexerar din hemsida korrekt och snabbt."
                          : "Strukturerade data: Se till att Google förstår din webbplats innehåll bättre."}
                      </li>
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2 text-green-500">✓</span>{" "}
                        {cityCategory === "large"
                          ? "Länkstrategi: Skapa kvalitativa backlinks för ökad domänauktoritet."
                          : cityCategory === "growing"
                          ? "SEO-anpassade landningssidor: Optimering för lokala söktermer."
                          : "Kundrecensioner och omdömen: Stärker din trovärdighet online."}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SEO Strategies - Grid Section */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                  {strategies.map((strategy, index) => {
                    const Icon = strategy.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-4 rounded-lg bg-gray-50 p-8 shadow-lg dark:bg-gray-900"
                      >
                        <div className="flex items-center gap-4">
                          <Icon className="text-4xl text-primary" />
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{strategy.title}</h3>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                          {cityCategory === "large"
                            ? `${strategy.description} Detta är särskilt viktigt i en stad som ${cityData.name}, där konkurrensen om toppositionerna är hög.`
                            : cityCategory === "growing"
                            ? `${strategy.description} I ${cityData.name} har företag som satsat på SEO redan sett en markant ökning av sina digitala leads.`
                            : `${strategy.description} Med rätt strategi kan ditt företag i ${cityData.name} enkelt dominera Google-sökningar lokalt.`}
                        </p>
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
              <div className="mt-16 rounded-xl bg-primary-hover p-6 text-center text-background shadow-md md:p-12 dark:bg-purple-900">
                <h2 className="text-3xl leading-14 font-bold md:text-4xl">
                  {cityCategory === "large"
                    ? `Vill du slå dina konkurrenter ${getPreposition(cityData.name)} ${cityData.name} från Google?`
                    : cityCategory === "growing"
                    ? `Vill du synas på Google innan konkurrensen ökar ${getPreposition(cityData.name)} ${
                        cityData.name
                      }?`
                    : `Vill du dominera Google ${getPreposition(cityData.name)} ${cityData.name}? Börja idag!`}
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-xl">
                  {cityCategory === "large"
                    ? `SEO är inte bara en strategi – det är en nödvändighet ${getPreposition(cityData.name)} ${
                        cityData.name
                      }. Företag som rankar högst på Google får flest kunder. Vi hjälper dig att optimera din webbplats, driva mer trafik och öka din försäljning genom beprövade SEO-metoder.`
                    : cityCategory === "growing"
                    ? `SEO ${getPreposition(cityData.name)} ${
                        cityData.name
                      } ger dig en unik möjlighet att ta ledningen online innan konkurrensen hårdnar. Genom att optimera din webbplats idag kan du säkerställa en stabil och långsiktig tillväxt.`
                    : `Konkurrensen ${getPreposition(cityData.name)} ${
                        cityData.name
                      } är låg – vilket betyder att du snabbt kan klättra i Google-sökningar och ta över marknaden. SEO är den mest kostnadseffektiva metoden för att locka nya kunder online.`}
                </p>

                {/* Knappar - Mobilvänlig layout */}
                <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
                  <Link
                    href="/kontakt"
                    className="text-md rounded-full bg-background px-8 py-3 font-medium text-primary shadow-md transition-all hover:bg-gray-200"
                  >
                    {cityCategory === "large"
                      ? "Boka en expertanalys"
                      : cityCategory === "growing"
                      ? "Få en gratis SEO-analys"
                      : "Börja synas idag"}
                  </Link>
                  <Link
                    href="/services"
                    className="text-md rounded-full border border-background px-8 py-3 font-medium text-background shadow-md transition-all hover:bg-background hover:text-primary"
                  >
                    Läs mer om våra tjänster
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <section id="faq" className="py-16">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-3xl font-bold">
                  Vanliga frågor om SEO {getPreposition(cityData.name)} {cityData.name}
                </h2>
                <div className="mt-8 space-y-2">
                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">
                      Hur kommer min hemsida högre upp på Google?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      För att ranka högre på Google {getPreposition(cityData.name)} {cityData.name} behöver du
                      SEO-optimering. Vi ser till att din hemsida har rätt sökord, laddar snabbt, är mobilvänlig och har
                      bra innehåll.
                    </p>
                  </details>

                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">Hur lång tid tar det innan SEO fungerar?</summary>
                    <p className="mt-2 text-gray-600">
                      SEO är en långsiktig strategi. Oftast tar det 3–6 månader innan du ser tydliga resultat. Men
                      teknisk SEO och optimeringar kan ge snabbare förbättringar.
                    </p>
                  </details>

                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">
                      Behöver mitt företag SEO om jag redan har en hemsida?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Ja! Att ha en hemsida räcker inte för att synas på Google. Utan SEO kan din hemsida hamna långt
                      ner i sökresultaten och dina konkurrenter får kunderna istället.
                    </p>
                  </details>

                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">Hur gör man en hemsida som syns på Google?</summary>
                    <p className="mt-2 text-gray-600">
                      För att en hemsida ska synas på Google måste den ha rätt sökord, bra laddningstid och vara
                      mobilanpassad. Vi hjälper dig att optimera din hemsida så att du når fler kunder{" "}
                      {getPreposition(cityData.name)} {cityData.name}.
                    </p>
                  </details>

                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">
                      Vad är skillnaden mellan SEO och Google Ads?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Google Ads är betalda annonser som ger omedelbara resultat, men försvinner så fort du slutar
                      betala. SEO är en långsiktig strategi som ger gratis trafik från Google över tid.
                    </p>
                  </details>

                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">Hur fungerar lokal SEO i {cityData.name}?</summary>
                    <p className="mt-2 text-gray-600">
                      Lokal SEO gör att du syns på Google när någon söker efter tjänster {getPreposition(cityData.name)}{" "}
                      {cityData.name}. Vi optimerar din webbplats för sökningar som{" "}
                      <strong>&quot;SEO {cityData.name}&quot;</strong> och hjälper dig att synas på Google Maps.
                    </p>
                  </details>

                  <details className="rounded-lg bg-gray-100 p-4">
                    <summary className="cursor-pointer font-medium">Hur vet jag om SEO fungerar?</summary>
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

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}
