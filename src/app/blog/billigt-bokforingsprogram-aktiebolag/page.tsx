export const dynamic = "force-static";

import Link from "next/link";
import Container from "../../../components/UI/Container/Container";

const faq = [
  {
    question: "Vad är det billigaste sättet att sköta bokföringen i ett aktiebolag?",
    answer:
      "Att göra den löpande bokföringen själv i ett program där fakturering, lön och moms ingår i priset, och köpa årsredovisningen som en separat tjänst. I vårt räkneexempel landar det på cirka 2 600 kr per år exklusive moms med Saldy plus Årsredovisning Online. En redovisningsbyrå som gör samma sak kostar typiskt 10 000–30 000 kr per år.",
  },
  {
    question: "Vilka dolda kostnader ska jag se upp med i bokföringsprogram?",
    answer:
      "De fyra vanligaste: fakturering som säljs som tillägg, lön som kostar per lönebesked, tolkning av kvitton som kostar per styck efter en fri månadskvot, och årsredovisning som separat köp. Var för sig låter de billiga – tillsammans kan de göra ett 199-kronorsprogram dyrare än ett 359-kronorsprogram.",
  },
  {
    question: "Är gratis bokföringsprogram ett bra alternativ för ett AB?",
    answer:
      "Var försiktig. Ett AB måste hantera fakturering, egen lön med arbetsgivardeklaration och en årsredovisning varje år – och det är oftast precis de delarna som ligger utanför gratisplanerna. Räkna alltid totalkostnaden för tolv månader med allt ditt bolag faktiskt behöver, innan du jämför mot betalalternativen.",
  },
];

export const metadata = {
  title: "Billigt bokföringsprogram för aktiebolag – vad räcker egentligen? | Dataeden",
  description:
    "Ett billigt bokföringsprogram för AB kan bli dyrt när tilläggen räknas in. Vi går igenom vad ett litet aktiebolag faktiskt behöver – och var kostnadsfällorna sitter.",
  openGraph: {
    title: "Billigt bokföringsprogram för aktiebolag – vad räcker egentligen?",
    description:
      "Ett billigt bokföringsprogram för AB kan bli dyrt när tilläggen räknas in. Vi går igenom vad ett litet aktiebolag faktiskt behöver – och var kostnadsfällorna sitter.",
    url: "https://dataeden.se/blog/billigt-bokforingsprogram-aktiebolag",
    type: "article",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Billigt bokföringsprogram för aktiebolag",
      },
    ],
  },
};

export default function CheapBookkeepingSoftwareBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Billigt bokföringsprogram för aktiebolag – vad räcker egentligen?",
            description:
              "Vad ett litet aktiebolag faktiskt behöver av sitt bokföringsprogram, var kostnadsfällorna sitter och hur du räknar ut den verkliga årskostnaden.",
            image: "https://dataeden.se/favi/android-chrome-512x512.png",
            author: { "@type": "Organization", name: "Dataeden" },
            publisher: {
              "@type": "Organization",
              name: "Dataeden",
              logo: { "@type": "ImageObject", url: "https://dataeden.se/logo.png" },
            },
            datePublished: "2026-08-30",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />

      <article className="pb-24 pt-32 md:pt-48">
        <Container>
          <div className="mx-auto max-w-4xl">
            <header className="mb-12 text-center">
              <span className="mb-8 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Blogg</span>
              <h1 className="text-foreground mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Billigt bokföringsprogram för aktiebolag – <span className="text-primary">vad räcker egentligen?</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300">
                Grundpriset är sällan problemet. Det är tilläggen som avgör om ditt bokföringsprogram kostar 800 eller
                8 000 kr om året.
              </p>
            </header>

            <div className="mx-auto max-w-none space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-xl leading-relaxed">
                Många av våra webbkunder driver små aktiebolag, och när bokföringen kommer på tal är frågan nästan alltid
                densamma: &quot;vad är billigast som ändå funkar?&quot; Det ärliga svaret är att &quot;billigast&quot;
                inte går att läsa ut ur ett månadspris. Ett AB har fyra återkommande skyldigheter som programmet måste
                klara – och det är där prislapparna gömmer sig.
              </p>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">
                Fyra saker ett litet AB inte kommer undan
              </h2>
              <div className="space-y-8 pt-4">
                <div className="border-l-4 border-primary/30 py-1 pl-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">1. Fakturera kunder</h3>
                  <p>
                    Låter självklart, men flera program säljer faktureringen separat. Bokios Basic-plan tar 89 kr/mån
                    extra för fakturering, Spiris Starta tar 19 kr per skickad faktura och Fortnox minsta paket Mini
                    innehåller ingen fakturering alls. Kontrollera att fakturering ingår i det pris du jämför.
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 py-1 pl-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">2. Betala ut lön med AGI</h3>
                  <p>
                    Tar du ägarlön behöver du lönebesked och arbetsgivardeklaration till Skatteverket varje månad. Hos
                    Fortnox kostar det 39 kr per lönebesked, hos Spiris 49 kr, hos Bokio kräver det Premium-planen. Det är
                    468–588 kr om året som sällan syns i annonspriset.
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 py-1 pl-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">3. Hantera kvitton och underlag</h3>
                  <p>
                    Automatisk tolkning av kvitton är standard numera – men ofta med en kvot. Fortnox och Spiris Driva
                    inkluderar tio tolkningar per månad och tar sedan 4,90 respektive 3,90 kr per styck. Med många
                    småkvitton flyttar det totalen mer än man tror.
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 py-1 pl-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">4. Upprätta årsredovisning</h3>
                  <p>
                    Varje AB måste lämna in en årsredovisning – det är inte valfritt. Fristående tjänster som
                    Årsredovisning Online kostar 1 795 kr/år för K2 med digital inlämning och INK2, Spiris eget tillägg
                    kostar 1 896 kr/år. Den posten ska alltid in i din kalkyl, oavsett program.
                  </p>
                </div>
              </div>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Räkneexemplet: 828 kr mot 5 000 kr</h2>
              <p>
                När vi räknade på ett litet enpersons-AB med allt ovan inräknat (priser kontrollerade 30 augusti 2026,
                exklusive moms) blev spannet stort: den löpande delen kostar 828 kr per år med{" "}
                <a href="https://www.saldy.se/priser" className="text-primary hover:underline">Saldy</a> (69 kr/mån där
                fakturering, lön, AGI och moms ingår, utan bindningstid) och cirka 4 300–5 000 kr per år med Bokio
                Premium, Spiris Driva eller Fortnox Liten när lönebeskeden räknas in. Årsredovisningen tillkommer med
                knappt 1 800 kr oavsett väg.
              </p>

              <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-base">
                  <strong className="text-gray-900 dark:text-white">Transparens:</strong> Saldy byggs av Dataedens
                  grundare. Siffrorna ovan är hämtade från respektive leverantörs officiella prissida så att du kan
                  kontrollera dem själv – och för vissa bolag är ett dyrare program rätt val, vilket vi skriver öppet i
                  vår{" "}
                  <Link href="/blog/basta-bokforingsprogram-smaforetag" className="text-primary hover:underline">
                    jämförelse av bokföringsprogram för småföretag
                  </Link>
                  .
                </p>
              </div>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">När du INTE ska välja billigast</h2>
              <p>
                Ett lågt pris förutsätter oftast ett enkelt bolag. Har du butik med kassaregister, lager, anställda med
                kollektivavtal eller hundratals banktransaktioner i månaden är ett större system som Fortnox eller Bokio
                värt sina pengar – automatisk bankkoppling och full lönehantering sparar då mer tid än prisskillnaden
                kostar. Billigast är bara bäst när det billiga programmet faktiskt täcker ditt bolags vardag.
              </p>

              <p>
                Nästa steg om du vill sköta siffrorna själv:{" "}
                <Link href="/blog/gora-bokforingen-sjalv-aktiebolag" className="text-primary hover:underline">
                  vår guide till att göra bokföringen själv i ett litet AB
                </Link>
                .
              </p>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Vanliga frågor</h2>
              <div className="space-y-8">
                {faq.map((item) => (
                  <div key={item.question} className="border-l-4 border-primary/30 py-1 pl-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
