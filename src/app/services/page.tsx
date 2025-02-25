import { Metadata } from "next";
import { JSX } from "react";
import { FiCheckCircle, FiCode, FiGlobe, FiShield, FiSmartphone, FiTrendingUp, FiUsers } from "react-icons/fi";
import CTA from "../../components/CTA/CTA";
import Section from "../../components/Section/Section";
import HeroServices from "../../components/Services/Hero";
import ServicesTab from "../../components/Services/ServicesTab";
import Container from "../../components/UI/Container/Container";

const iconMap: { [key: string]: JSX.Element } = {
  FiGlobe: <FiGlobe size={28} />,
  FiTrendingUp: <FiTrendingUp size={28} />,
  FiCheckCircle: <FiCheckCircle size={28} />,
  FiSmartphone: <FiSmartphone size={28} />,
  FiCode: <FiCode size={28} />,
  FiUsers: <FiUsers size={28} />,
  FiShield: <FiShield size={28} />,
};

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
};

export default function Services() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <HeroServices />

      <Container>
        {/* 🔥 Interaktiv sektion - Tjänster med tabs */}
        <Section id="services" title="Våra tjänster" description="Välj en kategori för att läsa mer.">
          <ServicesTab />
        </Section>

        {/* 🔥 Call to Action */}
        <CTA />
      </Container>
    </>
  );
}
