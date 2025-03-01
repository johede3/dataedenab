import { FiGlobe, FiSearch, FiTrendingUp } from "react-icons/fi";
import { getCityCategory, getPreposition } from "../utils";

export const getSEOBenefits = (city: string) => {
  const cityCategory = getCityCategory(city);

  return [
    {
      title:
        cityCategory === "large"
          ? "Bättre synlighet – fler kunder"
          : cityCategory === "growing"
          ? "SEO-strategi som ger resultat"
          : "Lokalt anpassad sökmotoroptimering",
      description:
        cityCategory === "large"
          ? `Företag konkurrerar om topplaceringar i sökresultaten. Vi hjälper dig att ta täten med en SEO-strategi som konverterar besökare till kunder.`
          : cityCategory === "growing"
          ? `Med rätt optimering rankar du högre och når fler potentiella kunder. Vi analyserar din marknad och skapar en strategi som fungerar.`
          : `Syns du när kunder söker efter tjänster ${getPreposition(
              city,
            )} ${city}? Vi ser till att ditt företag hamnar i toppen av sökresultaten.`,
      icon: <FiTrendingUp size={26} />,
    },
    {
      title:
        cityCategory === "large"
          ? "Långsiktig SEO & strategisk optimering"
          : cityCategory === "growing"
          ? "Hitta rätt kunder i din bransch"
          : "Bli synlig där kunderna letar",
      description:
        cityCategory === "large"
          ? `Vi kombinerar on-page SEO, teknisk optimering och strategisk länkbyggnad för att stärka din digitala närvaro ${getPreposition(
              city,
            )} ${city}.`
          : cityCategory === "growing"
          ? `En genomtänkt SEO-strategi hjälper ditt företag att växa genom bättre ranking och fler besökare.`
          : `Genom lokal SEO optimerar vi din närvaro på kartor och sökresultat, så att kunder enkelt hittar ditt företag.`,
      icon: <FiGlobe size={26} />,
    },
    {
      title: "Prestandaoptimering & snabbare laddningstider",
      description:
        cityCategory === "large"
          ? `Snabba sidor rankar högre och ger bättre användarupplevelse. Vi optimerar din webbplats för hastighet, UX och Core Web Vitals.`
          : cityCategory === "growing"
          ? `En långsam webbplats kan påverka din placering i sökresultaten. Vi ser till att din sida laddar snabbt och fungerar på alla enheter.`
          : `Långsamma sidor tappar kunder. Vi förbättrar din webbplats prestanda så att du får fler besökare och högre konverteringar.`,
      icon: <FiSearch size={26} />,
    },
  ];
};
