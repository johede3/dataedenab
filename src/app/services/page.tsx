import { Metadata } from "next"
import { JSX } from "react"
import { FiCheckCircle, FiCode, FiGlobe, FiShield, FiSmartphone, FiTrendingUp, FiUsers } from "react-icons/fi"
import CTA from "../../components/CTA/CTA"
import Section from "../../components/Section/Section"
import Container from "../../components/UI/Container/Container"
import { servicesDetails, servicesSectionsText } from "../data/services"

const iconMap: { [key: string]: JSX.Element } = {
  FiGlobe: <FiGlobe size={28} />,
  FiTrendingUp: <FiTrendingUp size={28} />,
  FiCheckCircle: <FiCheckCircle size={28} />,
  FiSmartphone: <FiSmartphone size={28} />,
  FiCode: <FiCode size={28} />,
  FiUsers: <FiUsers size={28} />,
  FiShield: <FiShield size={28} />,
}

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
        url: "https://dataeden.se/favi/android-chrome-512x512.png",
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
            {servicesSectionsText.title} <span className="text-purple-600"> {servicesSectionsText.highlitedText}</span>
          </h1>

          {/* Förbättrad undertext */}
          <p className="text-foreground mx-auto mt-4 max-w-lg">{servicesSectionsText.subtext}</p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/kontakt"
              className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-purple-700"
            >
              {servicesSectionsText.CTA}
            </a>
          </div>
        </div>
      </section>

      <Container>
        {servicesDetails.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} description={section.description}>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {section.services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={iconMap[service.icon]}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </Section>
        ))}

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
