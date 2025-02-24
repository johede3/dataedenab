import {
  FiCode,
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
    title: "Modern och responsiv webbutveckling",
    description:
      "Vi skapar skräddarsydda, mobilvänliga och snabboptimerade webbplatser för företag som vill sticka ut online.",
    bullets: [
      {
        title: "Mobilanpassning & SEO",
        description: "Dina kunder hittar dig lättare och får en sömlös upplevelse på alla enheter.",
        icon: <FiSmartphone size={26} />,
      },
      {
        title: "Snabb laddningstid",
        description: "Våra optimerade lösningar ser till att din webbplats laddas blixtsnabbt.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Skräddarsydd design",
        description: "Unik design anpassad efter ditt varumärke och dina affärsbehov.",
        icon: <FiMonitor size={26} />,
      },
    ],
    imageSrc: "/images/web-development.png",
  },
  {
    title: "Apputveckling för iOS & Android",
    description: "Vi bygger användarvänliga och prestandaoptimerade appar – från idé till lansering.",
    bullets: [
      {
        title: "Native & Hybrid-appar",
        description: "Vi utvecklar både plattformsspecifika och korsplattformslösningar.",
        icon: <FiGlobe size={26} />,
      },
      {
        title: "Användarfokuserad UX/UI",
        description: "Vi designar appar som är enkla och engagerande att använda.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Integrationer & API:er",
        description: "Vi kopplar din app till externa tjänster och databaser för maximal funktionalitet.",
        icon: <FiCode size={26} />,
      },
    ],
    imageSrc: "/images/app-development.png",
  },
  {
    title: "Säkerhet & prestanda",
    description:
      "Vi säkerställer att din webbplats eller app är snabb, säker och optimerad för både användare och sökmotorer.",
    bullets: [
      {
        title: "SSL & dataskydd",
        description: "Vi implementerar bästa säkerhetspraxis för att skydda din och dina kunders data.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Hosting & drift",
        description: "Vi hjälper dig att välja en stabil hostinglösning med hög prestanda.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "Prestandaanalys",
        description: "Vi mäter och optimerar för att säkerställa snabba laddningstider och stabil drift.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/security-performance.png",
  },
]
