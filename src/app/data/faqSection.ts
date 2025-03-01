import { growingCities, largeBusinessCities, smallLocalCities } from "../utils";

const getCityCategory = (city: string) => {
  if (largeBusinessCities.includes(city)) return "large";
  if (growingCities.includes(city)) return "growing";
  if (smallLocalCities.includes(city)) return "small";
  return "default";
};

export const faqSection = (city: string) => {
  const cityCategory = getCityCategory(city);

  return [
    {
      question: "Hur får jag mitt företag att synas på Google?",
      answer:
        cityCategory === "large"
          ? `I en konkurrensutsatt marknad som ${city} är SEO avgörande. Vi optimerar din webbplats så att du rankar högre än konkurrenterna och syns för fler kunder.`
          : cityCategory === "growing"
          ? `Företag i ${city} börjar inse vikten av digital synlighet. Med rätt SEO-strategi kan du ta en stark position på Google innan konkurrensen hårdnar.`
          : cityCategory === "small"
          ? `I ${city} är det ofta färre företag som satsar på SEO – vilket betyder att du har en fantastisk möjlighet att dominera sökresultaten lokalt.`
          : `En snabb och SEO-optimerad hemsida hjälper dig att synas högre på Google och få fler kunder.`,
    },
    {
      question: "Måste jag ha SEO på min hemsida?",
      answer:
        cityCategory === "large"
          ? `Ja! Företag i ${city} som inte optimerar sin SEO riskerar att bli omsprungna av konkurrenter. Vi hjälper dig att hålla dig i topp i sökresultaten.`
          : cityCategory === "growing"
          ? `SEO är extra viktigt i ${city} eftersom fler företag satsar på digital marknadsföring. Vi ser till att du syns där kunderna söker.`
          : cityCategory === "small"
          ? `SEO kan göra enorm skillnad i ${city}, där konkurrensen är låg. Med rätt optimering kan ditt företag bli det första kunder ser på Google.`
          : `SEO hjälper företag att synas och konkurrera bättre online. Vi gör din hemsida sökmotorvänlig.`,
    },
    {
      question: "Kan jag göra en hemsida själv?",
      answer:
        cityCategory === "large"
          ? `Många företag i ${city} testar DIY-lösningar men inser snabbt att en professionell hemsida ger bättre konvertering och ranking på Google.`
          : cityCategory === "growing"
          ? `Du kan bygga en hemsida själv, men företag i ${city} som satsar på en professionell lösning får ofta bättre resultat.`
          : cityCategory === "small"
          ? `En egenbyggd hemsida fungerar ibland, men företag i ${city} som investerar i en riktig webbplats vinner ofta fler kunder online.`
          : `Ja, det finns verktyg som Wix och WordPress, men de har begränsningar. En hemsida byggd av en professionell webbyrå i ${city} är snabbare, snyggare och konverterar bättre.`,
    },
    {
      question: "Vad kostar det att skapa en hemsida?",
      answer:
        cityCategory === "large"
          ? `I ${city} varierar hemsidepriser beroende på funktioner och SEO-anpassning. Vi erbjuder skräddarsydda lösningar för företag i alla branscher.`
          : cityCategory === "growing"
          ? `Priser för hemsidor i ${city} beror på behov. Vi erbjuder både enklare och mer avancerade lösningar för växande företag.`
          : cityCategory === "small"
          ? `Småföretag i ${city} behöver en prisvärd och effektiv hemsida. Vi har lösningar som passar mindre verksamheter.`
          : `En hemsida kan kosta allt från 5 000 kr för en enkel version till över 50 000 kr för en avancerad webblösning.`,
    },
    {
      question: "Hur lång tid tar det att bygga en hemsida?",
      answer:
        cityCategory === "large"
          ? `I ${city} kan större projekt ta 4–6 veckor, men en enklare företagswebb kan vara klar på 2 veckor. Vi jobbar snabbt och effektivt.`
          : cityCategory === "growing"
          ? `Tidsramen beror på omfattningen, men i ${city} brukar vi kunna lansera en ny hemsida inom 2–4 veckor.`
          : cityCategory === "small"
          ? `Behöver du en hemsida snabbt i ${city}? Vi kan ha en färdig lösning redo på så lite som en vecka.`
          : `En enklare hemsida kan vara klar inom några dagar, medan större projekt kan ta några veckor.`,
    },
    {
      question: "Vad ingår i en professionell hemsida?",
      answer:
        cityCategory === "large"
          ? `Vi skapar en SEO-optimerad, snabb och responsiv hemsida anpassad för företag i ${city}. Hosting, säkerhet och optimering ingår.`
          : cityCategory === "growing"
          ? `När du beställer en hemsida hos oss får du en modern, SEO-anpassad webbplats optimerad för företag i ${city}.`
          : cityCategory === "small"
          ? `Vi ser till att ditt företag i ${city} får en snabb, enkel och sökmotoroptimerad hemsida – allt inkluderat.`
          : `Alla våra hemsidor är responsiva, SEO-optimerade och byggda för att konvertera fler besökare till kunder.`,
    },
  ];
};
