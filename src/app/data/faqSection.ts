export const faqSection = (city: string) => {
  const cityHash = (city: string) => {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
      hash = city.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 3; // 3 variations for diverse content
  };

  const variation = cityHash(city);

  return [
    {
      question: "Hur får jag mitt företag att synas på Google?",
      answer:
        variation === 0
          ? `För att synas på Google behöver du en snabb och SEO-optimerad hemsida. Vi hjälper företag i ${city} att förbättra sin synlighet genom sökmotoroptimering och smart webbutveckling.`
          : variation === 1
          ? `Vill du att fler kunder ska hitta ditt företag i ${city}? Vi skapar moderna, mobilvänliga webbplatser som rankar högt på Google och driver trafik till din verksamhet.`
          : `En hemsida som laddar snabbt, är responsiv och har rätt SEO-struktur är nyckeln till bättre synlighet i Google. Vi optimerar din webbplats så att du rankar högre.`,
    },
    {
      question: "Måste jag ha SEO på min hemsida?",
      answer:
        variation === 0
          ? `Ja, SEO är avgörande för att din hemsida ska synas i sökresultaten. Utan sökmotoroptimering riskerar du att hamna efter dina konkurrenter i ${city}.`
          : variation === 1
          ? `SEO hjälper dig att synas i Google och attrahera fler kunder. Vi är en erfaren SEO byrå i ${city} och hjälper företag att öka sin organiska trafik.`
          : `Om din hemsida inte är SEO-optimerad kan potentiella kunder istället hitta dina konkurrenter. Vi ser till att du får en sökmotorvänlig webbplats som rankar.`,
    },
    {
      question: "Kan jag göra en hemsida själv?",
      answer:
        variation === 0
          ? `Ja, det finns verktyg som Wix och WordPress, men de har begränsningar. En hemsida byggd av en professionell webbyrå i ${city} är snabbare, snyggare och konverterar bättre.`
          : variation === 1
          ? `Gratis hemsidebyggare kan fungera för enkla lösningar, men en skräddarsydd webbutveckling ger bättre prestanda, SEO och användarupplevelse.`
          : `Om du vill ha en riktigt snabb och mobilvänlig hemsida med stark SEO är det bäst att anlita en erfaren webbyrå. Vi skapar webblösningar som är optimerade från start.`,
    },
    {
      question: "Vad kostar det att skapa en hemsida?",
      answer:
        variation === 0
          ? `Priset på en hemsida varierar beroende på design, funktioner och SEO-optimering. En enklare företagswebb kan kosta från 5 000 kr medan en avancerad lösning kan ligga på 50 000+ kr.`
          : variation === 1
          ? `Vill du ha en prisvärd hemsida? Vi erbjuder olika paket beroende på om du vill ha en enklare webbplats eller en skräddarsydd webblösning.`
          : `Priset på webbutveckling beror på omfattningen. Vi erbjuder allt från enklare hemsidor till komplexa webblösningar med API-integrationer och e-handel.`,
    },
    {
      question: "Hur lång tid tar det att bygga en hemsida?",
      answer:
        variation === 0
          ? `En enklare hemsida kan vara klar på några dagar, medan en mer avancerad webbutveckling tar några veckor. Vi anpassar oss efter dina behov och ser till att du får en snabb leverans.`
          : variation === 1
          ? `Tidsramen beror på omfattningen. En enkel företagswebb kan lanseras inom 1-2 veckor, medan en mer avancerad lösning kan ta 4-6 veckor.`
          : `Behöver du en hemsida snabbt? Vi bygger snabba och moderna webbplatser och kan ha din webbplats redo på så lite som en vecka beroende på omfattningen.`,
    },
    {
      question: "Vad ingår i en professionell hemsida?",
      answer:
        variation === 0
          ? `Våra hemsidor inkluderar responsiv design, SEO-optimering, säker hosting och enkel innehållshantering. Vi bygger webbplatser som är både snygga och snabba.`
          : variation === 1
          ? `När du beställer en hemsida hos oss ingår allt du behöver – UX/UI-design, teknisk SEO, säkerhet, och optimerad prestanda för att ranka högt på Google.`
          : `En professionell hemsida ska vara snabb, responsiv och SEO-vänlig. Vi ser till att din webbplats har alla funktioner för att du ska lyckas online.`,
    },
  ];
};
