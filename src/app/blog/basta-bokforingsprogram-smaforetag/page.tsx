export const dynamic = "force-static";

import Link from "next/link";
import Container from "../../../components/UI/Container/Container";
import { FaCheck } from "react-icons/fa6";

const faq = [
  {
    question: "Vilket bokföringsprogram är bäst för ett litet företag?",
    answer:
      "Det beror på vad du väger tyngst. I vår jämförelse har Saldy lägst totalpris för ett litet AB (149 kr/mån, 99 kr första året, där bokföring, fakturering, lön, moms och K2-årsredovisning ingår), Fortnox har störst ekosystem och flest integrationer, och Bokio är starkast om du vill ha bank och bokföring hos samma leverantör. Jämför alltid totalpriset för ett helt år vid din volym, inte grundpriset.",
  },
  {
    question: "Vad kostar ett bokföringsprogram per månad?",
    answer:
      "Mellan 149 och 549 kr per månad exklusive moms till ordinarie pris bland programmen i den här jämförelsen. Men månadspriset säger inte allt: lön per lönebesked, avgift per faktura, tolkning av kvitton efter en fri kvot och årsredovisning som tillägg kan mer än dubbla totalkostnaden. Räkna alltid på tolv månader med dina volymer.",
  },
  {
    question: "Behöver jag automatisk bankkoppling?",
    answer:
      "Inte nödvändigtvis. Med några få transaktioner i månaden fungerar det bra att importera eller klistra in bankraderna, vilket är så till exempel Saldy jobbar. Har du många transaktioner varje dag sparar en automatisk bankkoppling verklig tid – då är Bokio (bankkopplingen ingår i Premium) eller Fortnox bättre val.",
  },
];

export const metadata = {
  title: "Bästa bokföringsprogram för småföretag 2026 – vi jämförde priserna | Dataeden",
  description:
    "Vilket bokföringsprogram passar ett litet företag 2026? Vi jämför Saldy, Bokio, Fortnox och Spiris med verifierade priser – hela årskostnaden, inte bara från-priset.",
  openGraph: {
    title: "Bästa bokföringsprogram för småföretag 2026 – vi jämförde priserna",
    description:
      "Vilket bokföringsprogram passar ett litet företag 2026? Vi jämför Saldy, Bokio, Fortnox och Spiris med verifierade priser – hela årskostnaden, inte bara från-priset.",
    url: "https://dataeden.se/blog/basta-bokforingsprogram-smaforetag",
    type: "article",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Bästa bokföringsprogram för småföretag 2026",
      },
    ],
  },
};

export default function BestBookkeepingSoftwareBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Bästa bokföringsprogram för småföretag 2026 – vi jämförde priserna",
            description:
              "Jämförelse av bokföringsprogram för svenska småföretag 2026: Saldy, Bokio, Fortnox och Spiris med hela årskostnaden uträknad.",
            image: "https://dataeden.se/favi/android-chrome-512x512.png",
            author: { "@type": "Organization", name: "Dataeden" },
            publisher: {
              "@type": "Organization",
              name: "Dataeden",
              logo: { "@type": "ImageObject", url: "https://dataeden.se/logo.png" },
            },
            datePublished: "2026-08-30",
            dateModified: "2026-11-09",
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
                Bästa bokföringsprogram för småföretag 2026 – <span className="text-primary">vi jämförde priserna</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300">
                Från-priser ljuger. Vi räknade ut vad fyra populära program faktiskt kostar ett litet företag under ett helt
                år – med fakturering, lön och årsredovisning inräknat.
              </p>
            </header>

            <div className="mx-auto max-w-none space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-xl leading-relaxed">
                Vi på Dataeden bygger hemsidor och SEO åt småföretagare, och en fråga dyker upp förvånansvärt ofta i
                kundsamtalen: &quot;vilket bokföringsprogram ska jag ta?&quot; Så vi satte oss ner och räknade – inte på
                från-priserna i annonserna, utan på vad ett litet aktiebolag som fakturerar kunder och betalar ut en
                ägarlön faktiskt betalar under tolv månader.
              </p>

              <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-base">
                  <strong className="text-gray-900 dark:text-white">Full transparens:</strong> bokföringsprogrammet Saldy
                  byggs av Dataedens grundare. Vi har därför redovisat alla siffror öppet så att du kan räkna efter själv –
                  varje pris är kontrollerat mot respektive leverantörs officiella prissida den 9 november 2026, exklusive
                  moms och utan kampanjrabatter. Första versionen av jämförelsen publicerades 30 augusti 2026.
                </p>
              </div>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Årskostnaden – inte månadspriset</h2>
              <p>
                Vårt räkneexempel: ett litet AB med en person, två kundfakturor i månaden som skickas med e-post, en
                egen lön med arbetsgivardeklaration varje månad och en K2-årsredovisning. Där årsredovisningen inte
                ingår i programmet räknar vi med tjänsten Årsredovisning Online (1 795 kr/år), så att alla program
                jämförs mot samma årsavslut.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-base">
                  <thead>
                    <tr className="border-b-2 border-gray-300 text-left dark:border-gray-700">
                      <th className="py-3 pr-4 font-bold text-gray-900 dark:text-white">Program</th>
                      <th className="py-3 pr-4 font-bold text-gray-900 dark:text-white">Månadspris</th>
                      <th className="py-3 pr-4 font-bold text-gray-900 dark:text-white">12 mån + årsredovisning</th>
                      <th className="py-3 font-bold text-gray-900 dark:text-white">Kommentar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <td className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Saldy</td>
                      <td className="py-3 pr-4">149 kr (99 kr första året*)</td>
                      <td className="py-3 pr-4">1 788 kr (1 188 kr första året*)</td>
                      <td className="py-3">
                        Fakturering, lön, moms, bokslut, K2-årsredovisning och INK2 ingår. Ingen bindningstid.
                        Årsredovisningen skickar du själv till Bolagsverket.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <td className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Fortnox Mini</td>
                      <td className="py-3 pr-4">238 kr (inkl. Access)</td>
                      <td className="py-3 pr-4">5 237 kr</td>
                      <td className="py-3">
                        Fakturor 4,90 kr/st via Fakturaservice. Enkel lön 39 kr/mån. Access-avgiften stiger med antalet
                        verifikat.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <td className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Bokio Premium</td>
                      <td className="py-3 pr-4">359 kr (årsbetalning)</td>
                      <td className="py-3 pr-4">6 103 kr</td>
                      <td className="py-3">Fakturering, bankkoppling och lön för en person ingår.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Spiris Driva</td>
                      <td className="py-3 pr-4">349 kr</td>
                      <td className="py-3 pr-4">6 571 kr</td>
                      <td className="py-3">Egen lön 49 kr/lönebesked. Tio kvittotolkningar per månad ingår, sedan 3,90 kr/st.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-base">
                * Saldys ordinarie pris är 149 kr/mån. Bolag som läggs upp före 1 februari 2027 betalar 99 kr/mån de
                första tolv betalda månaderna.
              </p>

              <p>
                Två saker syns inte i tabellen. Fortnox Mini saknar Fakturering Plus, men den enklare faktureringen som
                ingår i Access räcker för några fakturor i månaden: 4,90 kr per faktura via Fakturaservice eller 39 kr
                om du skickar den själv. Vill du ha Fakturering Plus är det Liten (378 kr/mån inkl. Access) som gäller,
                och då kostar samma exempel minst 6 799 kr. Och Spiris Starta (199 kr/mån) har 100 verifikat per år, sedan
                35 kr per verifikat, plus 19 kr per skickad faktura, vilket gör det dyrare än Driva för de flesta som
                fakturerar varje månad.
              </p>

              <h2 className="mb-4 pt-8 text-3xl font-bold text-gray-900 dark:text-white">Vår rekommendation per situation</h2>
              <ul className="my-6 list-none space-y-6 pl-0">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Litet AB, sköter allt själv, vill betala minst:</strong>{" "}
                    <a href="https://www.saldy.se" className="text-primary hover:underline">Saldy</a>. En plan där allt
                    ingår, även bokslut, K2-årsredovisning och INK2, och ingen bindningstid. Begränsningarna: ingen
                    automatisk bankkoppling, utan bankraderna importeras eller klistras in, och årsredovisningen skickar
                    du själv till Bolagsverket.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Vill ha bank och bokföring på ett ställe:</strong>{" "}
                    Bokio, tack vare företagskontot och bankkopplingen som ingår i Premium.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Ska växa, anställa eller jobba med byrå:</strong>{" "}
                    Fortnox. Inte billigast, men störst ekosystem och det system flest redovisningsbyråer jobbar i.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaCheck size={12} />
                  </div>
                  <span>
                    <strong className="text-gray-900 dark:text-white">Många kvitton och vill ha fast pris:</strong> Spiris
                    Skala (549 kr/mån) med obegränsade tolkningar och egen lön inkluderad.
                  </span>
                </li>
              </ul>

              <p>
                Vill du gå djupare i vad ett AB faktiskt behöver – och vilka tillägg som brukar äta upp budgeten – har vi
                skrivit en egen genomgång:{" "}
                <Link href="/blog/billigt-bokforingsprogram-aktiebolag" className="text-primary hover:underline">
                  billigt bokföringsprogram för aktiebolag – vad räcker egentligen?
                </Link>{" "}
                Och funderar du på att sköta siffrorna själv finns vår guide om att{" "}
                <Link href="/blog/gora-bokforingen-sjalv-aktiebolag" className="text-primary hover:underline">
                  göra bokföringen själv i ett litet AB
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
