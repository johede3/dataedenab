import { ILanding } from "../types";
import { getCityCategory, getPreposition } from "../utils";

const cityHash = (city: string) => {
  let hash = 0;
  for (let i = 0; i < city.length; i++) {
    hash = city.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 5; // Generates a value between 0-4
};

export const landingSections = (city: string): ILanding[] => {
  const variation = cityHash(city);
  const cityCategory = getCityCategory(city);

  return [
    {
      id: "features",
      title:
        city.trim() === ""
          ? "Varför behöver företag en professionell hemsida?"
          : cityCategory === "large"
          ? `Webbutveckling ${getPreposition(city)} ${city} – Skalbara lösningar för företag`
          : cityCategory === "growing"
          ? `Så hjälper vi företag ${getPreposition(city)} ${city} att växa digitalt`
          : cityCategory === "small"
          ? `Hemsidor för småföretag – Syns bättre lokalt`
          : variation === 0
          ? `Webbyrå ${getPreposition(city)} ${city} – Vi hjälper dig att synas`
          : `Varför behöver ditt företag en professionell hemsida?`,
      description:
        cityCategory === "large"
          ? `I en storstad som ${city} är konkurrensen hög. Vi bygger SEO-optimerade hemsidor och appar för att ge ditt företag ett digitalt försprång.`
          : cityCategory === "growing"
          ? `Många företag ${getPreposition(
              city,
            )} ${city} växer snabbt och behöver en modern digital närvaro. Vi bygger snabba, responsiva hemsidor som gör att du syns bättre i Google-sökningar.`
          : cityCategory === "small"
          ? `Lokala företag ${getPreposition(
              city,
            )} ${city} behöver synlighet. En SEO-anpassad hemsida hjälper dig att få fler kunder direkt från Google.`
          : `Vi skapar SEO-optimerade webbplatser som hjälper företag att konvertera besökare till kunder.`,
    },
    {
      id: "seo",
      title:
        variation === 0
          ? `SEO byrå ${getPreposition(city)} ${city} – Öka din synlighet`
          : variation === 1
          ? `Så rankar företag högre på Google`
          : variation === 2
          ? `Sökmotoroptimering ${getPreposition(city)} ${city} – Fler besökare & fler kunder`
          : variation === 3
          ? `Google-ranking: Så lyckas företag ${getPreposition(city)} ${city}`
          : `SEO-strategier för företag ${getPreposition(city)} ${city}`,
      description:
        cityCategory === "large"
          ? `${getPreposition(
              city,
            )} ${city} söker tusentals företag varje månad efter SEO-tjänster. Vi hjälper dig att ranka högre och konvertera fler besökare.`
          : cityCategory === "growing"
          ? `SEO är en av de mest effektiva sätten att synas digitalt. Med teknisk SEO & content-optimering hjälper vi dig att klättra i Google-resultaten.`
          : cityCategory === "small"
          ? `Småföretag i ${city} kan konkurrera digitalt med rätt SEO-strategi. Vi ser till att du syns lokalt och får fler kunder genom sökmotoroptimering.`
          : `Vill du ha fler kunder? Våra SEO-strategier gör att du syns bättre på Google.`,
    },
    {
      id: "idea",
      title: "",
      description: "",
    },
    {
      id: "pricing",
      title:
        variation === 0
          ? `Vad kostar en hemsida?`
          : variation === 1
          ? `Hemsida pris ${getPreposition(city)} ${city} – Se våra paket`
          : variation === 2
          ? `Webbutveckling i ${city} – Pris och tjänster`
          : variation === 3
          ? `Så mycket kostar en SEO-optimerad hemsida`
          : `Webbyrå ${getPreposition(city)} ${city} – Priser & lösningar`,
      description:
        cityCategory === "large"
          ? `Företag i ${city} investerar i SEO-optimerade hemsidor för att få bättre digital synlighet. Se våra prisplaner och vad som ingår.`
          : cityCategory === "growing"
          ? `Vi erbjuder prisvärda webblösningar för företag. Se våra paket och anpassa din hemsida efter dina behov.`
          : cityCategory === "small"
          ? `En hemsida behöver inte vara dyr! Vi bygger lokalanpassade hemsidor för företag till rimliga priser.`
          : `Vad påverkar priset på en hemsida? Se våra olika alternativ och välj en lösning som passar ditt företag.`,
    },
    {
      id: "projects",
      title:
        variation === 0
          ? `Se våra tidigare projekt`
          : variation === 1
          ? `Exempel på hemsidor & appar vi byggt`
          : variation === 2
          ? `Inspiration – Se våra kundcase`
          : variation === 3
          ? `Så har vi hjälpt företag`
          : `Se exempel på våra webbprojekt`,
      description:
        variation === 0
          ? `Vi har hjälpt företag att digitalisera sin verksamhet. Se våra referensprojekt här.`
          : `Kolla in våra kundcase och projekt för företag i olika branscher.`,
    },
    {
      id: "about",
      title: "Vilka är vi? Lär känna Dataeden",
      description:
        "Vi är en webbyrå som hjälper företag att växa genom modern webbutveckling, apputveckling och sökmotoroptimering.",
    },
  ];
};
