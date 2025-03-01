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
} from "react-icons/fi";
import { IBenefit } from "../types";
import { getCityCategory, getPreposition } from "../utils";

export const getBenefits = (city: string): IBenefit[] => {
  const cityCategory = getCityCategory(city);

  return [
    {
      title:
        cityCategory === "large"
          ? `Webbutveckling för företag – Skalbara & SEO-anpassade lösningar`
          : cityCategory === "growing"
          ? `Prisvärd webbutveckling ${getPreposition(city)} ${city} – Bli synlig online`
          : cityCategory === "small"
          ? `Webbdesign & SEO för småföretag ${getPreposition(city)} ${city}`
          : `Professionell webbutveckling ${getPreposition(city)} ${city}`,
      description:
        cityCategory === "large"
          ? `Vi skapar SEO-optimerade hemsidor för företag som vill konkurrera digitalt och generera fler kunder via Google.`
          : cityCategory === "growing"
          ? `Moderna och prisvärda hemsidor för företag – byggda för att ranka högt på Google och ge dig fler kunder.`
          : cityCategory === "small"
          ? `Lokala företag behöver synlighet. Vi bygger lättskötta, SEO-optimerade hemsidor som gör att du syns bättre på Google.`
          : `Vi hjälper företag att växa digitalt genom snabba, responsiva och sökmotoroptimerade hemsidor.`,
      bullets: [
        {
          title: "Mobilanpassad upplevelse",
          description: `En modern webbplats måste fungera felfritt på alla skärmar. Vi ser till att din sida är responsiv och optimerad för mobilanvändare.`,
          icon: <FiSmartphone size={26} />,
        },
        {
          title: "Snabb laddningstid & prestandaoptimering",
          description: `Optimerade hemsidor för högre ranking och snabbare konverteringar.`,
          icon: <FiZap size={26} />,
        },
        {
          title: cityCategory === "large" ? "Skalbara & avancerade lösningar" : "Unik design efter ditt varumärke",
          description:
            cityCategory === "large"
              ? `Perfekt för företag ${getPreposition(city)} ${city} som behöver en komplex, skalbar webblösning.`
              : `Unik design och UX/UI-anpassning för att matcha din affärsmodell och målgrupp.`,
          icon: <FiMonitor size={26} />,
        },
        {
          title: "Ingen WordPress – 100% skräddarsytt",
          description: `Vi skapar lösningar från grunden utan tunga sidbyggare eller onödiga plugins.`,
          icon: <FiEdit size={26} />,
        },
      ],
      imageSrc: "/assets/web-development.png",
    },
    {
      title:
        cityCategory === "large"
          ? `Apputveckling ${getPreposition(city)} ${city} – Digitalisera din affärsidé`
          : cityCategory === "growing"
          ? `Apputveckling för företag ${getPreposition(city)} ${city} – Från idé till lansering`
          : cityCategory === "small"
          ? `Utveckla en app för ditt företag ${getPreposition(city)} ${city}`
          : `Vi utvecklar appar för företag ${getPreposition(city)} ${city}`,
      description:
        cityCategory === "large"
          ? `Vi bygger native & hybrid-appar för företag som vill ta sin verksamhet till nästa nivå.`
          : cityCategory === "growing"
          ? `Få en anpassad och användarvänlig app som hjälper ditt företag att växa digitalt.`
          : cityCategory === "small"
          ? `En app kan göra ditt företag mer tillgängligt. Vi hjälper dig att ta fram en skräddarsydd lösning.`
          : `Vi utvecklar moderna appar för företag som vill expandera digitalt.`,
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
      title:
        cityCategory === "large"
          ? `SEO byrå ${getPreposition(city)} ${city} – Få fler kunder via Google`
          : cityCategory === "growing"
          ? `Sökmotoroptimering (SEO) för företag ${getPreposition(city)} ${city}`
          : cityCategory === "small"
          ? `Lokal SEO ${getPreposition(city)} ${city} – Syns bättre på Google`
          : `SEO-strategier för företag ${getPreposition(city)} ${city}`,
      description:
        cityCategory === "large"
          ? `Vi hjälper företag att ranka högre på Google genom teknisk SEO, content-optimering och länkstrategier.`
          : cityCategory === "growing"
          ? `Sökmotoroptimering hjälper företag att öka sin synlighet och attrahera fler kunder.`
          : cityCategory === "small"
          ? `Vill du synas bättre? Vår lokala SEO-strategi hjälper småföretag att få fler kunder genom Google.`
          : `Få fler kunder med en SEO-anpassad hemsida och bättre synlighet i sökmotorer.`,
      bullets: [
        {
          title: "Sökordsanalys & strategi",
          description: `Vi identifierar de bästa sökorden för företag ${getPreposition(
            city,
          )} ${city} och bygger en SEO-strategi som ger resultat.`,
          icon: <FiTrendingUp size={26} />,
        },
        {
          title: "On-page & Off-page optimering",
          description: "Förbättra både innehåll och tekniska aspekter av din webbplats för bättre ranking.",
          icon: <FiSettings size={26} />,
        },
        {
          title: "Lokal SEO",
          description: `Optimera din närvaro för lokala sökningar så att kunder enkelt hittar dig.`,
          icon: <FiMapPin size={26} />,
        },
      ],
      imageSrc: "/assets/seo-services.png",
    },
  ];
};
