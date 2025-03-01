import {
  FaBolt,
  FaChartLine,
  FaLocationDot,
  FaMagnifyingGlass,
  FaMoneyBillWave,
  FaPenNib,
  FaWrench,
} from "react-icons/fa6";
import { getCityCategory, getPreposition } from "../utils";

export const generateCitySEOData = (city: string) => {
  const cityCategory = getCityCategory(city);

  const seoTitle =
    cityCategory === "large"
      ? `SEO ${getPreposition(city)} ${city} – Stärk ditt varumärke och dominera Google`
      : cityCategory === "growing"
      ? `SEO ${getPreposition(city)} ${city} – Ta ledningen innan konkurrensen hårdnar`
      : `SEO ${getPreposition(city)} ${city} – Enkla knep för att synas på Google lokalt`;

  const seoDescription =
    cityCategory === "large"
      ? `Behöver du fler kunder ${getPreposition(
          city,
        )} ${city}? Vi hjälper dig att dominera sökresultaten och ta en ledande position på Google.`
      : cityCategory === "growing"
      ? `SEO är nyckeln till digital tillväxt ${getPreposition(
          city,
        )} ${city}. Investera nu för att säkra din plats i sökresultaten innan konkurrensen ökar.`
      : `Få fler kunder ${getPreposition(
          city,
        )} ${city} genom lokal SEO. Vi hjälper småföretag att synas på Google och locka fler kunder.`;

  const benefits = [
    {
      icon: FaMagnifyingGlass,
      title: "Syns högre på Google",
      text:
        cityCategory === "large"
          ? `För att konkurrera ${getPreposition(
              city,
            )} ${city} krävs avancerad SEO. Vi hjälper dig att ranka högre och stärka ditt varumärke online.`
          : cityCategory === "growing"
          ? `SEO ${getPreposition(city)} ${city} ger ditt företag en stark digital närvaro innan konkurrensen hårdnar.`
          : `Lokala företag ${getPreposition(
              city,
            )} ${city} har en fantastisk möjlighet att ta över Google-sökningar med rätt SEO.`,
    },
    {
      icon: FaChartLine,
      title: "Ökad försäljning",
      text:
        cityCategory === "large"
          ? "Organisk trafik i storstäder är värdefull – vi maximerar din konvertering och försäljning."
          : cityCategory === "growing"
          ? "SEO gör att fler potentiella kunder hittar dig i sökresultaten, vilket leder till högre försäljning."
          : "SEO är det mest kostnadseffektiva sättet att öka försäljningen för små företag i din stad.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Gratis trafik",
      text:
        cityCategory === "large"
          ? "SEO ger gratis, långsiktig trafik – perfekt för att konkurrera med andra stora företag i ${city}."
          : cityCategory === "growing"
          ? "Undvik dyra annonser – SEO ger en konstant ström av besökare till din hemsida."
          : "SEO gör att du slipper betala för varje klick och ändå får kunder till din hemsida.",
    },
  ];

  const strategies = [
    {
      icon: FaWrench,
      title: "On-page SEO – Strukturerad och sökoptimerad hemsida",
      description:
        cityCategory === "large"
          ? "Vi bygger sidor med avancerad SEO-struktur för att matcha konkurrensen i storstäder."
          : cityCategory === "growing"
          ? "Din hemsida optimeras med rätt sökord och struktur för att etablera dig på Google."
          : "Med rätt optimering kan din hemsida dominera lokala sökningar i din stad.",
      points: ["SEO-optimerade titlar och rubriker", "Säljande meta-beskrivningar", "Effektiv internlänkning"],
    },
    {
      icon: FaBolt,
      title: "Teknisk SEO – Snabba och mobilvänliga hemsidor",
      description:
        cityCategory === "large"
          ? "Vi optimerar din hemsida för snabb laddning, säkerhet och mobilanpassning."
          : cityCategory === "growing"
          ? "Snabbhet är en rankingfaktor. Vi ser till att din sida laddar snabbt och fungerar smidigt."
          : "Vi skapar snabba och responsiva hemsidor som rankar högt i Google-sökningar.",
      points: ["Laddningstid under 2 sekunder", "Mobilanpassad design", "SSL/HTTPS för säkerhet"],
    },
    {
      icon: FaLocationDot,
      title: `Lokal SEO – Syns ${getPreposition(city)} ${city}`,
      description:
        cityCategory === "large"
          ? "Vi optimerar din sida för lokal SEO så att du dominerar Google Maps och lokala sökningar."
          : cityCategory === "growing"
          ? "Bli den dominerande aktören i lokala sökresultat genom rätt SEO-strategi."
          : "Vi gör din hemsida synlig för lokala sökningar och optimerar den för små marknader.",
      points: ["Lokala sökord", "SEO-vänliga webbadresser", "Google My Business-optimering"],
    },
    {
      icon: FaPenNib,
      title: "SEO-anpassat innehåll",
      description:
        cityCategory === "large"
          ? "Vi skapar högkvalitativa texter optimerade för sökmotorer och användare i storstäder."
          : cityCategory === "growing"
          ? "SEO-optimerat innehåll anpassat för att etablera dig på marknaden."
          : "Anpassat SEO-innehåll för småföretag som vill ta över lokala sökningar.",
      points: ["Strukturerade texter med rätt sökord", "Optimerad läsbarhet", "SEO-vänlig textlängd"],
    },
  ];

  return {
    title: seoTitle,
    description: seoDescription,
    benefits,
    strategies,
  };
};
