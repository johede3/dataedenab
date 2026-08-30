export const dynamic = "force-static";

import Link from "next/link";
import Container from "../../components/UI/Container/Container";
import { FaArrowRight } from "react-icons/fa6";

const posts = [
  {
    slug: "basta-bokforingsprogram-smaforetag",
    category: "Ekonomi",
    title: "Bästa bokföringsprogram för småföretag 2026 – vi jämförde priserna",
    description:
      "Från-priser ljuger. Vi räknade ut vad fyra populära bokföringsprogram faktiskt kostar ett litet företag under ett helt år – med fakturering, lön och årsredovisning inräknat.",
    date: "2026-08-30",
    dateLabel: "30 augusti 2026",
  },
  {
    slug: "billigt-bokforingsprogram-aktiebolag",
    category: "Ekonomi",
    title: "Billigt bokföringsprogram för aktiebolag – vad räcker egentligen?",
    description:
      "Grundpriset är sällan problemet. Det är tilläggen som avgör om ditt bokföringsprogram kostar 800 eller 8 000 kr om året. Så hittar du kostnadsfällorna.",
    date: "2026-08-30",
    dateLabel: "30 augusti 2026",
  },
  {
    slug: "gora-bokforingen-sjalv-aktiebolag",
    category: "Ekonomi",
    title: "Göra bokföringen själv i ett litet AB? Så funkar det",
    description:
      "Många småföretagare betalar byråarvode för något de hade klarat själva på ett par timmar i månaden. Här är månadsrutinen – och gränsen för när du bör ta hjälp.",
    date: "2026-08-30",
    dateLabel: "30 augusti 2026",
  },
  {
    slug: "vad-kostar-seo-i-sverige",
    category: "SEO",
    title: "Vad kostar SEO i Sverige? En ärlig guide för företagare",
    description:
      "Funderar du på sökmotoroptimering men tvekar inför kostnaden? Vi går igenom prismodeller, timpriser och vad du faktiskt får för pengarna.",
    date: "2024-03-20",
    dateLabel: "20 mars 2024",
  },
];

export const metadata = {
  title: "Blogg – guider för småföretagare om webb, SEO och ekonomi | Dataeden",
  description:
    "Raka guider för dig som driver ett litet företag: vad SEO kostar, vilket bokföringsprogram som passar och hur du sköter siffrorna själv.",
  openGraph: {
    title: "Dataedens blogg – guider för småföretagare",
    description:
      "Raka guider för dig som driver ett litet företag: vad SEO kostar, vilket bokföringsprogram som passar och hur du sköter siffrorna själv.",
    url: "https://dataeden.se/blog",
    type: "website",
    images: [
      {
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Dataedens blogg",
      },
    ],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Dataedens blogg",
            description: "Guider för småföretagare om webb, SEO och ekonomi.",
            url: "https://dataeden.se/blog",
            publisher: {
              "@type": "Organization",
              name: "Dataeden",
              logo: { "@type": "ImageObject", url: "https://dataeden.se/logo.png" },
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `https://dataeden.se/blog/${post.slug}`,
              datePublished: post.date,
            })),
          }),
        }}
      />

      <section className="pb-24 pt-32 md:pt-48">
        <Container>
          <div className="mx-auto max-w-4xl">
            <header className="mb-16 text-center">
              <span className="mb-8 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Blogg</span>
              <h1 className="text-foreground mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Guider för <span className="text-primary">småföretagare</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-700 dark:text-gray-300">
                Raka svar om webb, SEO och ekonomi – skrivna för dig som driver ett litet företag och vill kunna räkna
                efter själv.
              </p>
            </header>

            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-gray-200 bg-gray-50/50 p-8 transition-all hover:border-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
                >
                  <div className="mb-3 flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span>
                    <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                      {post.dateLabel}
                    </time>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-primary dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{post.description}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary">
                    Läs artikeln <FaArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
