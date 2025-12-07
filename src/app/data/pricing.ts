import { getCityCategory } from "../utils";

export const getPricingPlans = (city: string) => {
  const cityCategory = getCityCategory(city);

  return [
    {
      title:
        cityCategory === "large"
          ? "Bas – Startklar företagshemsida"
          : cityCategory === "growing"
            ? "Bas – Prisvärd webbplats för företag"
            : "Bas – Enkel & mobilanpassad hemsida",
      description:
        cityCategory === "large"
          ? "En professionell och SEO-optimerad hemsida som ger ditt företag en stark digital närvaro."
          : cityCategory === "growing"
            ? "Få en modern och snabb hemsida med grundläggande SEO – perfekt för företag som vill växa."
            : "Enkel och snygg hemsida som hjälper ditt företag att synas bättre lokalt.",
      features: [
        "✔ Mobilvänlig design – perfekt på alla skärmar",
        cityCategory === "large"
          ? "✔ Grundläggande SEO + teknisk optimering för Google"
          : "✔ Grundläggande SEO för att synas i lokala sökningar",
        "✔ Kontaktformulär & enkel innehållshantering",
      ],
    },
    {
      title:
        cityCategory === "large"
          ? "Premium – Avancerad webblösning"
          : cityCategory === "growing"
            ? "Premium – Skräddarsydd hemsida med smarta funktioner"
            : "Premium – Fler funktioner & bättre synlighet",
      description:
        cityCategory === "large"
          ? "En interaktiv och funktionsrik webbplats, perfekt för företag som vill ligga i framkant digitalt."
          : cityCategory === "growing"
            ? "Skapa en hemsida med anpassade funktioner som gör det enklare att driva din verksamhet online."
            : "En utbyggbar hemsida med fler funktioner och bättre SEO-anpassning.",
      features: [
        cityCategory === "large"
          ? "✔ Avancerad SEO + content-strategi för bättre ranking"
          : "✔ SEO-optimerad för högre synlighet i Google",
        "✔ Integrationer (ex. Stripe, bokningssystem, CRM)",
        "✔ Skräddarsydd design och interaktiv funktionalitet",
      ],
    },
    {
      title:
        cityCategory === "large"
          ? "Pro – Hosting, support & prestandaoptimering"
          : cityCategory === "growing"
            ? "Pro – Drift, underhåll & support"
            : "Pro – Smidig drift & löpande uppdateringar",
      description:
        cityCategory === "large"
          ? "Håll din webbplats snabb, säker och uppdaterad med kontinuerlig optimering och support."
          : cityCategory === "growing"
            ? "Vi ser till att din hemsida fungerar felfritt och håller sig uppdaterad över tid."
            : "Säker hosting och teknisk support så att du kan fokusera på ditt företag.",
      features: [
        "✔ Hosting med hög prestanda & SSL-certifikat",
        "✔ Löpande uppdateringar och säkerhetskontroller",
        cityCategory === "large"
          ? "✔ Teknisk support + vidareutveckling vid behov"
          : "✔ Teknisk support och optimering vid behov",
      ],
    },
  ];
};

export const pricingDetails = {
  offertCTA: "Få en gratis offert & rådgivning",
};
