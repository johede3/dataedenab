import { Metadata } from "next";
import { FiCheckCircle, FiCode, FiGlobe, FiShield, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import CTA from "../../components/CTA/CTA";
import Section from "../../components/Section/Section";
import HeroServices from "../../components/Services/Hero";
import Container from "../../components/UI/Container/Container";

const services = [
  {
    id: "webbutveckling",
    title: "Hemsidor & Webbdesign",
    description: "Mobilanpassade och SEO-optimerade hemsidor för företag och privatpersoner.",
    details: [
      "Skräddarsydd design för ditt varumärke",
      "Optimerad för snabb prestanda och sökmotorer",
      "Responsiv och användarvänlig upplevelse",
    ],
    icon: <FiGlobe size={28} className="text-gray-700" />,
  },
  {
    id: "apputveckling",
    title: "Apputveckling - Web & Mobil",
    description: "Moderna webb- och mobilappar med hög prestanda och säkerhet.",
    details: [
      "Responsiva webbappar & PWA-lösningar",
      "Sömlösa integrationer och backend-stöd",
      "Användarvänlig design och optimerad UX",
    ],
    icon: <FiSmartphone size={28} className="text-gray-700" />,
  },
  {
    id: "ehandel",
    title: "Skräddarsydda E-handelslösningar",
    description: "Bygg en modern, skalbar webbutik med Next.js och Stripe-integration.",
    details: [
      "Snabba och optimerade webbutiker",
      "Flexibla betalningslösningar och checkout-flöden",
      "SEO-optimerade produkt- och landningssidor",
    ],
    icon: <FiTrendingUp size={28} className="text-gray-700" />,
  },
  {
    id: "seo",
    title: "SEO & Prestandaoptimering",
    description: "Hjälper dig att synas bättre och få fler besökare genom teknisk SEO.",
    details: [
      "Hastighetsoptimering & Core Web Vitals",
      "Struktur för bättre Google-ranking",
      "Mobilvänlighet och tillgänglighet",
    ],
    icon: <FiCheckCircle size={28} className="text-gray-700" />,
  },
  {
    id: "api",
    title: "API-integrationer & Automatisering",
    description: "Anpassade systemintegrationer och arbetsflöden för företag.",
    details: [
      "API-integrationer (betalningar, bokningssystem, CRM)",
      "Automatiserade processer och databaslösningar",
      "Säker och stabil systemarkitektur",
    ],
    icon: <FiCode size={28} className="text-gray-700" />,
  },
  {
    id: "support",
    title: "Underhåll & Support",
    description: "Långsiktig support, prestandaoptimering och teknisk rådgivning.",
    details: [
      "Löpande uppdateringar och säkerhetsförbättringar",
      "Övervakning och prestandaoptimering",
      "Teknisk support och rådgivning",
    ],
    icon: <FiShield size={28} className="text-gray-700" />,
  },
];

export const metadata: Metadata = {
  title: "Webbutveckling & Apputveckling – Skräddarsydda lösningar | Dataeden",
  description:
    "Vi bygger snabba, mobilanpassade hemsidor & appar för företag och privatpersoner. SEO-optimerade och anpassade efter dina behov.",
  openGraph: {
    url: "https://dataeden.se/services",
    title: "Webbutveckling & Apputveckling – Hemsidor som presterar",
    description:
      "Behöver du en modern hemsida eller app? Vi skapar skräddarsydda lösningar som är snabba, mobilvänliga och SEO-optimerade.",
    images: [{ width: 1200, height: 630, url: "https://dataeden.se/favi/android-chrome-512x512.png" }],
  },
};

export default function Services() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <HeroServices />

      <Container>
        {/* 🔥 Tjänster Grid */}
        <Section
          id="services"
          title="Våra tjänster"
          description="Vi skapar digitala lösningar anpassade efter dina behov."
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center text-center p-8 shadow-md rounded-lg bg-white transition-transform duration-200 hover:scale-101 hover:shadow-xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <ul className="mt-4 text-sm text-gray-600 space-y-2 text-left">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 🔥 FAQ */}
        <section id="faq" className="py-16">
          <div className="max-w-4xl mx-auto py-2">
            <h2 className="text-3xl font-bold text-center">Vanliga frågor om våra tjänster</h2>
            <div className="mt-8 space-y-2">
              <details className="p-4 bg-gray-100 rounded-lg">
                <summary className="font-medium cursor-pointer">
                  Hur mycket kostar en hemsida för ett litet företag?
                </summary>
                <p className="mt-2 text-gray-600">
                  En enkel företagshemsida kostar oftast mellan 7 000 och 15 000 kr, beroende på design, funktionalitet
                  och SEO-optimering. Mer avancerade webbplatser eller appar kostar mer. Kontakta oss för en offert!
                </p>
              </details>

              <details className="p-4 bg-gray-100 rounded-lg">
                <summary className="font-medium cursor-pointer">
                  Vad är skillnaden mellan en skräddarsydd hemsida och en hemsidebyggare som Wix?
                </summary>
                <p className="mt-2 text-gray-600">
                  En hemsidebyggare som Wix är en mallbaserad lösning där du är begränsad i design och funktioner. En
                  skräddarsydd hemsida byggs från grunden för att passa ditt företag, med bättre SEO, prestanda och
                  långsiktig skalbarhet.
                </p>
              </details>

              <details className="p-4 bg-gray-100 rounded-lg">
                <summary className="font-medium cursor-pointer">
                  Kan jag koppla bokningar och betalningar till min hemsida?
                </summary>
                <p className="mt-2 text-gray-600">
                  Ja! Vi kan integrera bokningssystem och betalningslösningar som Stripe, Klarna eller Swish direkt på
                  din hemsida för en smidig kundupplevelse.
                </p>
              </details>

              <details className="p-4 bg-gray-100 rounded-lg">
                <summary className="font-medium cursor-pointer">
                  Kan ni hjälpa till med att uppdatera och underhålla hemsidan efter lansering?
                </summary>
                <p className="mt-2 text-gray-600">
                  Ja, vi erbjuder löpande support, uppdateringar och säkerhetsförbättringar så att din hemsida alltid är
                  snabb, säker och uppdaterad.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 🔥 Call to Action */}
        <CTA />
      </Container>
    </>
  );
}
