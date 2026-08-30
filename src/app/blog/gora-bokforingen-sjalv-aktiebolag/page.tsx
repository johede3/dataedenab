export const dynamic = "force-static";

import Link from "next/link";
import Container from "../../../components/UI/Container/Container";
import { FaCheck } from "react-icons/fa6";

const faq = [
  {
    question: "Är det svårt att göra bokföringen själv i ett aktiebolag?",
    answer:
      "Inte om bolaget är enkelt. Ett konsult- eller tjänste-AB med några fakturor i månaden, en ägarlön och vanlig svensk moms följer samma mönster varje månad, och moderna program föreslår konteringen åt dig. Det som kräver kunskap är avvikelserna – förmåner, periodiseringar, bokslutet – och där kan du ta punkthjälp av en redovisningskonsult i stället för att betala löpande byråarvode.",
  },
  {
    question: "Hur lång tid tar bokföringen per månad i ett litet AB?",
    answer:
      "För ett litet tjänstebolag med få transaktioner handlar det ofta om någon eller några timmar i månaden när rutinen sitter: fotografera eller mejla in underlag löpande, stäm av banken, kör lönen, godkänn momsen. Volymen avgör – hundratals kvitton eller banktransaktioner ändrar kalkylen helt.",
  },
  {
    question: "När bör man anlita en redovisningskonsult i stället?",
    answer:
      "När tiden kostar mer än arvodet, när bolaget har komplexa delar (lager, många anställda, koncern, ovanliga momsfrågor) – eller för punktinsatser som bokslut och årsredovisning även om du sköter det löpande själv. Många små AB landar i hybridmodellen: löpande bokföring själv, årsavslut med professionell hjälp.",
  },
];

export const metadata = {
  title: "Göra bokföringen själv i ett litet AB? Så funkar det | Dataeden",
  description:
    "Kan man sköta bokföringen själv i ett aktiebolag? Ja – om bolaget är enkelt. Här är månadsrutinen, verktygen och gränsen för när du bör ta hjälp.",
  openGraph: {
    title: "Göra bokföringen själv i ett litet AB? Så funkar det",
    description:
      "Kan man sköta bokföringen själv i ett aktiebolag? Ja – om bolaget är enkelt. Här är månadsrutinen, verktygen och gränsen för när du bör ta hjälp.",
    url: "https://dataeden.se/blog/gora-bokforingen-sjalv-aktiebolag",
    type: "article",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Göra bokföringen själv i ett litet aktiebolag",
      },
    ],
  },
};

export default function DiyBookkeepingBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Göra bokföringen själv i ett litet AB? Så funkar det",
            description:
              "Månadsrutinen för dig som sköter bokföringen själv i ett litet aktiebolag – och gränsen för när en redovisningskonsult är rätt val.",
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
                Göra bokföringen själv i ett litet AB? <span className="text-primary">Så funkar det</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300">
                Många småföretagare betalar byråarvode för något de hade klarat själva på ett par timmar i månaden. Andra
                borde absolut inte röra bokföringen. Här är hur du vet vilken du är.
              </p>
            </header>

            <div className="mx-auto max-w-none space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-xl leading-relaxed">
                Ett aktiebolag med en ägare, några kundfakturor i månaden och vanlig svensk moms är i grunden ett
                repetitivt system: samma typer av händelser återkommer månad efter månad. Det är precis den sortens
                arbete som moderna bokföringsprogram automatiserat längst – programmet föreslår konteringen och du
                granskar. Utmaningen är inte att bokföra rätt i vardagen, utan att veta var din gräns går.
              </p>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Månadsrutinen som håller</h2>
              <ul className="my-6 list-none space-y-6 pl-0">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Fånga underlagen direkt.</strong> Fota kvittot eller
                    vidarebefordra fakturamejlet till programmet samma dag. Nästan alla bokföringsproblem i små bolag
                    börjar med underlag som försvann.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Stäm av banken varje månad.</strong> Varje rad på
                    företagskontot ska matcha en händelse i bokföringen – en faktura, ett inköp, en lön. Stämmer saldot
                    på kontoutdraget mot bokföringen är du i princip klar.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Kör lönen på fast dag.</strong> Lönebesked,
                    arbetsgivardeklaration till Skatteverket och betalning av skatt och avgifter – samma datum varje
                    månad, så blir det aldrig en brandkårsutryckning.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Låt momsen bygga på sig själv.</strong> Sköter du
                    punkterna ovan är momsdeklarationen mest en kontroll – siffrorna finns redan i bokföringen.
                  </span>
                </li>
              </ul>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Verktyget avgör tröskeln</h2>
              <p>
                Gör-det-själv står och faller med att programmet är byggt för det. Leta efter tre saker: att programmet
                föreslår konteringar som du godkänner (i stället för att du ska kunna kontoplanen utantill), att lön med
                AGI ingår utan tillägg, och att du kan exportera SIE-filer så att en konsult kan ta över när det behövs.
                Vi har jämfört alternativen i detalj i{" "}
                <Link href="/blog/basta-bokforingsprogram-smaforetag" className="text-primary hover:underline">
                  bästa bokföringsprogram för småföretag 2026
                </Link>{" "}
                – för ett litet AB som sköter allt själv är{" "}
                <a href="https://www.saldy.se" className="text-primary hover:underline">Saldy</a> (69 kr/mån, byggt av
                Dataedens grundare – full transparens) det billigaste alternativet vi hittat där hela månadsrutinen ovan
                ingår i priset.
              </p>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Där går gränsen</h2>
              <p>
                Gör inte allt själv av princip. Bokslut och årsredovisning är den klassiska punktinsatsen att köpa – en
                fristående tjänst kostar runt 1 800 kr per år, en konsult något mer, och båda är billiga försäkringar mot
                fel som är dyra att rätta. Och har bolaget lager, kassaregister, flera anställda med kollektivavtal
                eller udda momssituationer är löpande professionell hjälp värd varenda krona. En bra tumregel: sköt det
                repetitiva själv, köp expertisen för det ovanliga.
              </p>

              <p>
                Osäker på var kostnadsfällorna sitter i programvalet? Läs vår genomgång:{" "}
                <Link href="/blog/billigt-bokforingsprogram-aktiebolag" className="text-primary hover:underline">
                  billigt bokföringsprogram för aktiebolag – vad räcker egentligen?
                </Link>
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
