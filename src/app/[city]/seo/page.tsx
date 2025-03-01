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

export default async function SEOPage({ params }: { params: Promise<{ city: keyof typeof cities }> }) {
  const { city } = await params;
  const cityData = cities[city];
  if (!cityData) return notFound();

  const cityCategory = getCityCategory(cityData.name);

  const { title, description, benefits, strategies } = generateCitySEOData(cityData.name);

  return (
    <>
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
