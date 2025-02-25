import {
  FiCode,
  FiEdit,
  FiGlobe,
  FiLock,
  FiMonitor,
  FiSettings,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi"
import { IBenefit } from "../types"

export const benefits: IBenefit[] = [
  {
    title: "Modern och responsiv webbutveckling i {{city}}",
    description:
      "Vi skapar skräddarsydda, SEO-optimerade och mobilvänliga webbplatser för företag i {{city}} som vill synas och växa online.",
    bullets: [
      {
        title: "Mobilanpassning & SEO",
        description: "Dina kunder hittar dig lättare och får en sömlös upplevelse på alla enheter.",
        icon: <FiSmartphone size={26} />,
      },
      {
        title: "Snabb laddningstid & prestandaoptimering",
        description:
          "Vi bygger snabba, lätta och optimerade webbplatser för bättre användarupplevelse och högre ranking.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Skräddarsydd design efter ditt varumärke",
        description: "Unik design och UX/UI-anpassning för att matcha din affärsmodell och målgrupp.",
        icon: <FiMonitor size={26} />,
      },
      {
        title: "Ingen WordPress – 100% skräddarsytt",
        description: "Vi bygger dina lösningar från grunden utan tunga sidbyggare eller onödiga plugins.",
        icon: <FiEdit size={26} />,
      },
    ],
    imageSrc: "/images/web-development.png",
  },

  {
    title: "Apputveckling för iOS & Android – {{city}}",
    description:
      "Vi bygger prestandaoptimerade, användarvänliga appar för företag som vill expandera digitalt– från idé till lansering.",
    bullets: [
      {
        title: "Native & Hybrid-appar",
        description: "Vi utvecklar både plattformsspecifika och korsplattformslösningar.",
        icon: <FiGlobe size={26} />,
      },
      {
        title: "Användarfokuserad UX/UI",
        description: "Intuitiv och snygg appdesign som engagerar och ökar konverteringarna.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Integrationer & API:er",
        description: "Koppla din app till betalningslösningar, externa system och databaser för full funktionalitet.",
        icon: <FiCode size={26} />,
      },
    ],
    imageSrc: "/images/app-development2.png",
  },
  {
    title: "Säkerhet & prestanda för din hemsida eller app",
    description:
      "Vi säkerställer att din hemsida eller app är snabb, säker och optimerad för både användare och sökmotorer.",
    bullets: [
      {
        title: "SSL & dataskydd",
        description: "Skydda din webbplats med SSL-certifikat och GDPR-anpassad datasäkerhet.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Hosting & drift med hög prestanda",
        description: "Vi hjälper dig att välja rätt hostinglösning för stabil och snabb drift.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "Prestandaanalys & optimering",
        description: "Analysera och förbättra din webbplats hastighet med PageSpeed Insights och avancerad optimering.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/security-performance.png",
  },
]
