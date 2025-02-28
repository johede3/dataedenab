import {
  FiCode,
  FiEdit,
  FiGlobe,
  FiMapPin,
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
    title: "Prisvärd webbutveckling för småföretag {{city}}",
    description:
      "Vi erbjuder skräddarsydda, SEO-optimerade och mobilvänliga webbplatser för företag {{city}} som vill öka sin online-närvaro.",
    bullets: [
      {
        title: "Mobilanpassning & SEO",
        description: "Gör det enkelt för dina kunder att hitta dig och få en sömlös upplevelse på alla enheter.",
        icon: <FiSmartphone size={26} />,
      },
      {
        title: "Snabb laddningstid & prestandaoptimering",
        description: "Vi bygger snabba och optimerade webbplatser för bättre användarupplevelse och högre ranking.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Skräddarsydd design efter ditt varumärke",
        description: "Unik design och UX/UI-anpassning för att matcha din affärsmodell och målgrupp.",
        icon: <FiMonitor size={26} />,
      },
      {
        title: "Ingen WordPress – 100% skräddarsytt",
        description: "Vi skapar lösningar från grunden utan tunga sidbyggare eller onödiga plugins.",
        icon: <FiEdit size={26} />,
      },
    ],
    imageSrc: "/assets/web-development.png",
  },
  {
    title: "Apputveckling för småföretag {{city}}",
    description:
      "Vi utvecklar användarvänliga appar för företag som vill expandera digitalt – från idé till lansering.",
    bullets: [
      {
        title: "Native & Hybrid-appar",
        description: "Vi skapar både plattformsspecifika och korsplattformslösningar.",
        icon: <FiGlobe size={26} />,
      },
      {
        title: "Användarfokuserad UX/UI",
        description: "Intuitiv och attraktiv appdesign som engagerar och ökar konverteringarna.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Integrationer & API:er",
        description: "Koppla din app till betalningslösningar, externa system och databaser för full funktionalitet.",
        icon: <FiCode size={26} />,
      },
    ],
    imageSrc: "/assets/app-development.png",
  },
  {
    title: "Sökmotoroptimering (SEO) för småföretag {{city}}",
    description:
      "Vi hjälper ditt företag att synas bättre på Google och andra sökmotorer, vilket leder till ökad trafik och fler kunder.",
    bullets: [
      {
        title: "Sökordsanalys & strategi",
        description: "Identifiera de bästa sökorden för din verksamhet och skapa en effektiv SEO-strategi.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "On-page & Off-page optimering",
        description: "Förbättra både innehåll och tekniska aspekter av din webbplats för bättre ranking.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "Lokal SEO",
        description: "Optimera din närvaro för lokala sökningar så att kunder {{city}} enkelt hittar dig.",
        icon: <FiMapPin size={26} />,
      },
    ],
    imageSrc: "/assets/seo-services.png",
  },
]
