export const heroDetails = (city: string) => {
  const cityHash = (city: string) => {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
      hash = city.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 3; // 3 strong variations
  };

  const variation = cityHash(city);

  return {
    heading:
      variation === 0
        ? `Webbyrå ${city} –`
        : variation === 1
          ? `Webbutveckling ${city} – Webbyrå med`
          : `Skapa hemsida ${city} –`,
    highlight:
      variation === 0
        ? ` Professionell webbutveckling`
        : variation === 1
          ? ` prestanda och konvertering`
          : ` Unika lösningar`,
    heading2: variation === 0 ? ` för ditt företag` : variation === 1 ? ` i fokus` : ` anpassad efter ditt varumärke`,
    subheading:
      variation === 0
        ? `Som webbyrå bygger vi responsiva, konverteringsoptimerade och mobilanpassade hemsidor med fokus på UX/UI och SEO.`
        : variation === 1
          ? `Vi skapar webblösningar för företag som vill ha en snabb, modern och synlig hemsida. UX/UI, webbutveckling och prestanda i ett paket.`
          : `Behöver du en ny webbplats? Vi bygger skräddarsydda, användarvänliga hemsidor med fokus på affärsnytta och sökmotoroptimering.`,
    offertCTA: "Få en gratis offert",
    servicesCTA: "Se våra tjänster",
    centerImageSrc: "/images/BSHsmall.webp",
  };
};
