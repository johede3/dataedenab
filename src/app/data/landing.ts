import { ILanding } from "../types";
import { getPreposition } from "../utils";

const cityHash = (city: string) => {
  let hash = 0;
  for (let i = 0; i < city.length; i++) {
    hash = city.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 5; // Generates a value between 0-4
};

export const landingSections = (city: string): ILanding[] => {
  const variation = cityHash(city);

  return [
    {
      id: "features",
      title:
        city.trim() === ""
          ? "Varför behöver företag en professionell hemsida?"
          : variation === 0
          ? `Webbutveckling ${getPreposition(city)} ${city} – Syns bättre på Google`
          : variation === 1
          ? `Så hjälper vi företag att växa digitalt`
          : variation === 2
          ? `Webbyrå ${getPreposition(city)} ${city} – Skapa en hemsida som rankar`
          : `Varför behöver ditt företag en professionell hemsida?`,
      description:
        variation === 0
          ? `En modern och SEO-optimerad hemsida gör att företag syns högre på Google och lockar fler kunder.`
          : variation === 1
          ? `Vi hjälper företag att bygga snabba, responsiva och SEO-anpassade webbplatser som ger bättre synlighet online.`
          : variation === 2
          ? `Vår webbyrå skapar sökmotorvänliga webbplatser för företag som vill växa digitalt.`
          : `Vill du ha fler kunder? Vi bygger SEO-optimerade hemsidor och hjälper dig att synas bättre i Google-sökningar.`,
    },
    {
      id: "seo",
      title:
        city.trim() === ""
          ? "Vill du ranka högre på Google?"
          : variation === 0
          ? `Sökmotoroptimering ${getPreposition(city)} ${city} – Så syns företag på Google`
          : variation === 1
          ? `SEO byrå ${getPreposition(city)} ${city} – Få fler besökare & kunder`
          : variation === 2
          ? `SEO-strategier för företag`
          : variation === 3
          ? `SEO tips & Sökmotoroptimering`
          : `Vill du ranka högre på Google?`,
      description:
        variation === 0
          ? `Vi är en SEO byrå som hjälper företag att synas högre på Google genom teknisk SEO och innehållsoptimering.`
          : variation === 1
          ? `Sökmotoroptimering hjälper företag att få fler organiska besökare och öka sin digitala synlighet.`
          : variation === 2
          ? `Få bättre placering på Google genom en skräddarsydd SEO-strategi anpassad för din bransch.`
          : variation === 3
          ? `Lär dig de bästa SEO tipsen och optimera din hemsida för sökmotorer.`
          : `Vi hjälper företag att synas på Google genom teknisk SEO, content-optimering och lokal synlighet.`,
    },
    {
      id: "idea",
      title:
        variation === 0
          ? `Behöver du en hemsida eller app?`
          : variation === 1
          ? `Skapa en modern hemsida ${getPreposition(city)} ${city}`
          : variation === 2
          ? `Webbutveckling & apputveckling`
          : variation === 3
          ? `Bygg en snabb & säker hemsida`
          : `Webbyrå ${getPreposition(city)} ${city} – Vi tar din idé till verklighet`,
      description: `Oavsett om du behöver en ny hemsida, en mobilapp eller en digital lösning, hjälper vi dig att ta fram en SEO-optimerad och användarvänlig plattform.`,
    },
    {
      id: "pricing",
      title:
        variation === 0
          ? `Hemsida pris ${getPreposition(city)} ${city} – Vad påverkar kostnaden?`
          : variation === 1
          ? `Webbutveckling – Vad kostar en hemsida?`
          : variation === 2
          ? `Vad ingår i en SEO-optimerad hemsida?`
          : variation === 3
          ? `Webbyrå ${getPreposition(city)} ${city} – Våra paket`
          : `Hemsida för företag ${getPreposition(city)} ${city} – Kostnad & alternativ`,
      description:
        variation === 0
          ? `Priset på en hemsida beror på flera faktorer, såsom design, funktioner och prestanda. Här kan du se våra olika paket och vad som påverkar kostnaden.`
          : variation === 1
          ? `Vad kostar en hemsida? Vi erbjuder både fasta paket och skräddarsydda lösningar anpassade efter ditt företags behov.`
          : variation === 2
          ? `En SEO-optimerad hemsida ger högre synlighet och fler kunder. Se vad som ingår i våra lösningar och hur de kan anpassas efter din budget.`
          : variation === 3
          ? `Vår webbyrå erbjuder prisvärda hemsidelösningar – från enkel företagswebb till avancerade digitala tjänster. Se våra alternativ här!`
          : `Vilken lösning passar ditt företag? Jämför våra webbpaket och se vad som ingår i Bas, Premium & Pro.`,
    },
    {
      id: "projects",
      title:
        variation === 0
          ? `Se våra tidigare projekt`
          : variation === 1
          ? `Inspiration från våra tidiagre projekt`
          : variation === 2
          ? `Se exempel på hemsidor & appar vi byggt`
          : variation === 3
          ? `Tidigare appar och webbutvecklingsprojekt`
          : `Se exempel på hemsidor och appar vi byggt`,
      description:
        variation === 1
          ? `Vi har hjälpt företag att digitalisera sin verksamhet. Se våra referensprojekt här.`
          : variation === 2
          ? `Ta del av kundcase och webbprojekt som vi har byggt för företag i olika branscher.`
          : `Se våra webbprojekt och hur vi har hjälpt företag att växa digitalt.`,
    },
    {
      id: "about",
      title: "Vilka är vi? Lär känna Dataeden",
      description:
        "Vi är en webbyrå som hjälper företag att växa genom modern webbutveckling, apputveckling och sökmotoroptimering.",
    },
  ];
};
