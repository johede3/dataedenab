export const dynamic = "force-static";

import Link from "next/link";
import Container from "../../../components/UI/Container/Container";

export function generateMetadata() {
  return {
    title: "Webbyrå Borås – Hemsidor Som Säljer",
    description:
      "Från idé till lönsam hemsida i Borås. Vi hjälper lokala företag att dominera den digitala marknaden med moderna, säljande hemsidor.",
    openGraph: {
      url: "https://dataeden.se/boras/webbyra",
      type: "website",
      title: "Webbyrå Borås – Hemsidor Som Säljer",
      description:
        "Från idé till lönsam hemsida i Borås. Vi hjälper lokala företag att dominera den digitala marknaden med moderna, säljande hemsidor.",
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

export default function BorasWebbyraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dataeden – Webbyrå Borås",
            image: "https://dataeden.se/favi/android-chrome-512x512.png",
            "@id": "https://dataeden.se/boras/webbyra",
            url: "https://dataeden.se/boras/webbyra",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Borås",
              addressCountry: "SE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 57.721,
              longitude: 12.9401,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Webbutveckling & E-handel i Borås",
            provider: {
              "@type": "Organization",
              name: "Dataeden",
            },
            areaServed: {
              "@type": "City",
              name: "Borås",
            },
            description: "Professionell webbutveckling, e-handel och SEO för företag i Borås.",
          }),
        }}
      />
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
                name: "Webbyrå i Borås",
                item: "https://dataeden.se/boras/webbyra",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-grey-100 relative flex items-center justify-center px-5 py-32 md:py-40">
        <div className="absolute top-0 bottom-0 left-0 -z-10 w-full">
          <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <div className="max-w-5xl text-center">
          <h1 className="text-foreground text-4xl font-bold md:text-6xl md:leading-tight">
            Från Idé till <span className="text-primary">Lönsam Hemsida</span> i Borås
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
            I en stad känd för design, innovation och handel duger inte en vanlig hemsida. Ditt företag i Borås behöver
            en digital närvaro som är lika driven och framåt som staden själv. En hemsida är mer än en digital broschyr
            – det är din främsta säljare, din bästa marknadsförare och ditt viktigaste verktyg för att bygga
            kundrelationer.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-8 py-4 text-xl font-medium text-background shadow-lg transition-all hover:bg-primary-hover"
            >
              Starta ditt projekt idag
            </Link>
          </div>
        </div>
      </section>

      <Container>
        <div className="mx-auto max-w-5xl py-16">
          <section className="mb-24">
            <p className="mb-12 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Som en lokal webbyrå för Borås förstår vi detta. Vi bygger inte bara tekniskt avancerade och snygga
              hemsidor; vi skapar digitala plattformar som driver tillväxt, attraherar rätt kunder och omvandlar
              besökare till affärer.
            </p>

            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
              Mer än Bara en Snygg Fasad: En Hemsida som Jobbar för Dig
            </h2>
            <p className="mb-12 text-xl text-gray-700 dark:text-gray-300">
              Många webbyråer fokuserar enbart på det visuella. För oss är designen bara början. En framgångsrik hemsida
              måste leverera mätbara resultat. Därför bygger vi varje webbplats med tre kärnprinciper i fokus:
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Strategisk Webbdesign</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Vi skapar en design som inte bara är visuellt tilltalande utan också strategiskt utformad för att
                  guida besökaren mot ett specifikt mål – oavsett om det är att boka ett möte, begära en offert eller
                  genomföra ett köp. Vi ser till att din hemsida i Borås talar direkt till din målgrupp.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Teknisk Prestanda</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  En långsam hemsida är en ineffektiv hemsida. Vi använder modern teknik för att säkerställa att din
                  webbplats laddar blixtsnabbt, är säker och fungerar felfritt på alla enheter. Detta är avgörande både
                  för användarupplevelsen och för din ranking på Google.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Grundläggande Sökmotoroptimering (SEO)
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Vad är poängen med en fantastisk hemsida om ingen kan hitta den? Vi implementerar grundläggande SEO
                  från dag ett, vilket ger dig en solid grund att bygga din digitala synlighet på och gör det lättare
                  för kunder i Borås att hitta just dig.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24 rounded-2xl bg-gray-50 p-8 md:p-12 dark:bg-gray-900">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
              Specialister på E-handel i Borås
            </h2>
            <p className="mb-8 text-xl text-gray-700 dark:text-gray-300">
              Med en stolt historia inom textil och som ett modernt centrum för e-handel, ställer Borås unika krav på
              digitala lösningar. Vi har specialiserat oss på att bygga kraftfulla och användarvänliga
              e-handelsplattformar som hjälper lokala företag att sälja sina produkter online, både lokalt och globalt.
            </p>

            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Vad Vår E-handelslösning Innebär för Dig:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Säljande Produktsidor:</strong> Vi designar produktsidor som är optimerade för konvertering,
                  med högkvalitativa bilder, tydlig information och en enkel köpprocess.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Säkra Betalningslösningar:</strong> Vi integrerar säkra och pålitliga betalningssystem som
                  Klarna, Swish och kortbetalningar för att skapa trygghet för dina kunder.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Skalbar Plattform:</strong> Oavsett om du precis har börjat eller har tusentals produkter,
                  bygger vi en e-handelsplattform som kan växa i takt med ditt företag.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-24">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
              Vår Process: Tydliga Steg, Inga Konstigheter
            </h2>
            <p className="mb-12 text-xl text-gray-700 dark:text-gray-300">
              Transparens och kommunikation är nyckeln till ett framgångsrikt projekt. Vi följer en beprövad process för
              att säkerställa att vi levererar rätt lösning i tid och inom budget.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 p-8 shadow-sm dark:border-gray-800">
                <div className="mb-4 text-2xl font-bold text-primary">01. Strategi & Planering</div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Först sätter vi oss ner tillsammans för att förstå dina affärsmål, din målgrupp och dina konkurrenter.
                  Vi skapar en tydlig plan och en strategi för din nya hemsida.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 p-8 shadow-sm dark:border-gray-800">
                <div className="mb-4 text-2xl font-bold text-primary">02. Design & Utveckling</div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Våra designers skapar ett visuellt utkast som vi förfinar baserat på din feedback. När designen är
                  godkänd börjar våra utvecklare bygga själva hemsidan.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 p-8 shadow-sm dark:border-gray-800">
                <div className="mb-4 text-2xl font-bold text-primary">03. Innehåll & SEO</div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Vi hjälper dig att fylla sidan med engagerande och sökmotoroptimerat innehåll som talar till dina
                  kunder.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 p-8 shadow-sm dark:border-gray-800">
                <div className="mb-4 text-2xl font-bold text-primary">04. Lansering & Uppföljning</div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Efter noggranna tester lanserar vi din nya hemsida. Men vårt jobb slutar inte där. Vi ser till att
                  allt fungerar som det ska och följer upp för att säkerställa att du är 100 % nöjd.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
              Vanliga Frågor om Hemsidor i Borås
            </h2>
            <div className="mx-auto max-w-3xl space-y-6">
              <details className="group rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-gray-900 dark:text-gray-100">
                  Vad kostar en ny hemsida?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                  Priset beror helt på projektets omfattning, från en enklare företagssida till en avancerad e-handel.
                  Kontakta oss för en kostnadsfri och skräddarsydd offert baserad på dina behov.
                </p>
              </details>

              <details className="group rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-gray-900 dark:text-gray-100">
                  Hur lång tid tar det att bygga en hemsida?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                  En typisk tidslinje är 4-8 veckor, men detta kan variera beroende på projektets komplexitet och hur
                  snabbt vi får in allt material (texter, bilder etc.) från dig.
                </p>
              </details>

              <details className="group rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-gray-900 dark:text-gray-100">
                  Behöver jag teknisk kunskap?
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                  Absolut inte. Vi hanterar all teknik och levererar en färdig lösning som är enkel för dig att använda
                  och uppdatera om du så önskar.
                </p>
              </details>
            </div>
          </section>

          <section className="rounded-3xl bg-primary-hover p-12 text-center text-background shadow-xl dark:bg-purple-900">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Är Du Redo för en Hemsida som Jobbar Lika Hårt Som Du Gör?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-xl opacity-90">
              Sluta se din hemsida som en kostnad – se den som din viktigaste investering för tillväxt. Låt oss på
              Dataeden vara din digitala partner i Borås. Vi är redo att hjälpa dig att bygga en hemsida som inte bara
              imponerar på besökare, utan som också levererar verkliga affärsresultat.
            </p>
            <Link
              href="/kontakt"
              className="inline-block rounded-full bg-background px-10 py-4 text-xl font-semibold text-primary shadow-lg transition-all hover:bg-gray-100"
            >
              Kontakta oss idag för en kostnadsfri offert och konsultation
            </Link>
          </section>
        </div>
      </Container>
    </>
  );
}
