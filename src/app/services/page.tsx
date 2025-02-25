import { Metadata } from "next"
import { JSX } from "react"
import { FiCheckCircle, FiCode, FiGlobe, FiShield, FiSmartphone, FiTrendingUp, FiUsers } from "react-icons/fi"
import CTA from "../../components/CTA/CTA"
import Section from "../../components/Section/Section"
import HeroServices from "../../components/Services/Hero"
import Container from "../../components/UI/Container/Container"
import { servicesDetails } from "../data/services"

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
      <HeroServices />

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
