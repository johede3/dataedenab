import { Metadata } from "next"
import { FiCheckCircle, FiCode, FiGlobe, FiShield, FiSmartphone, FiTrendingUp, FiUsers } from "react-icons/fi"
import CTA from "../../components/CTA/CTA"
import Section from "../../components/Section/Section"
import Container from "../../components/UI/Container/Container"

export const metadata: Metadata = {
  title: "Våra tjänster – Webbutveckling & Apputveckling | Dataeden",
  description:
    "Upptäck våra tjänster inom webbutveckling, apputveckling och digitala lösningar för småföretag. Vi skapar skräddarsydda, moderna och SEO-optimerade lösningar.",
  openGraph: {
    url: "https://dataeden.se/tjanster",
    title: "Våra tjänster – Webbutveckling & Apputveckling",
    description:
      "Upptäck våra tjänster inom webbutveckling, apputveckling och digitala lösningar för småföretag. Vi skapar skräddarsydda, moderna och SEO-optimerade lösningar.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://dataeden.se/images/services-og.jpg",
      },
    ],
  },
}

export default function Services() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section id="hero" className="relative flex items-center justify-center px-5 pt-32 pb-0 md:pt-40">
        <div className="absolute top-0 bottom-0 left-0 -z-10 w-full">
          <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="text-center">
          <h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-2xl md:text-6xl md:leading-tight">
            Våra <span className="text-purple-600">Tjänster</span>
          </h1>

          {/* Förbättrad undertext */}
          <p className="text-foreground mx-auto mt-4 max-w-lg">
            Vi hjälper företag att lyckas online med skräddarsydda webbplatser, appar och digitala lösningar. Modern
            design, snabb prestanda och smarta funktioner – vi har allt du behöver.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/kontakt"
              className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-purple-700"
            >
              Boka en gratis konsultation
            </a>
          </div>
        </div>
      </section>

      <Container>
        {/* 🔹 WEB DEVELOPMENT SECTION */}
        <Section
          id="webbutveckling"
          title="Webbutveckling – Hemsidor som konverterar"
          description="Professionell och mobilanpassad webbutveckling för företag som vill växa online."
        >
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <ServiceCard
              icon={<FiGlobe size={28} />}
              title="Responsiva & moderna hemsidor"
              description="Anpassade hemsidor som ser bra ut och fungerar perfekt på alla enheter."
            />
            <ServiceCard
              icon={<FiTrendingUp size={28} />}
              title="SEO-optimering för Google"
              description="Bättre synlighet och fler kunder genom smart sökmotoroptimering."
            />
            <ServiceCard
              icon={<FiCheckCircle size={28} />}
              title="Snabb & säker drift"
              description="Vi ser till att din hemsida laddar blixtsnabbt och skyddas från hot."
            />
          </div>
        </Section>

        {/* 🔹 APP DEVELOPMENT SECTION */}
        <Section
          id="apputveckling"
          title="Apputveckling – iOS & Android"
          description="Smarta, skalbara appar för ditt företag."
        >
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <ServiceCard
              icon={<FiSmartphone size={28} />}
              title="Native & hybrid-appar"
              description="Utveckling av appar för både iOS och Android – native eller med React Native."
            />
            <ServiceCard
              icon={<FiCode size={28} />}
              title="API & dataintegration"
              description="Koppla din app till externa system och datakällor för full funktionalitet."
            />
            <ServiceCard
              icon={<FiUsers size={28} />}
              title="Engagerande UX & UI"
              description="Vi skapar intuitiva appar som användare älskar att använda."
            />
          </div>
        </Section>

        {/* 🔹 TRUST ELEMENTS */}
        {/* 🔹 TRUST ELEMENTS */}
        <Section
          id="trovärdighet"
          title="Varför välja oss?"
          description="Vi levererar moderna digitala lösningar som är optimerade för tillväxt och prestanda."
        >
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <TrustCard
              icon={<FiShield size={28} />}
              title="5+ års erfarenhet"
              description="Vi har byggt skräddarsydda webb- och applösningar för startups och småföretag."
            />
            <TrustCard
              icon={<FiUsers size={28} />}
              title="Fokus på användarupplevelse"
              description="Vi skapar lösningar med modern UX och intuitiv design för bättre kundengagemang."
            />
            <TrustCard
              icon={<FiTrendingUp size={28} />}
              title="SEO & prestandaoptimerade"
              description="Våra webbplatser är snabba, sökmotoroptimerade och anpassade för att konvertera."
            />
          </div>
        </Section>

        {/* 🔥 CALL TO ACTION */}
        <CTA />
      </Container>
    </>
  )
}

/* COMPONENTS FOR UI CARDS */
function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg p-6 text-center shadow-lg dark:bg-gray-800">
      <div className="text-purple-600">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function TrustCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-900">
      <div className="text-green-500">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
