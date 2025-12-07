
import React from "react";
import FAQ from "src/components/FAQ/FAQ";
import RestaurantDemoSection from "src/components/RestaurantDemoSection";
import Container from "src/components/UI/Container/Container";

const RestaurantPage: React.FC = () => {
  const faqItems = [
    {
      question: "Hur fungerar beställningssystemet för mina kunder?",
      answer:
        "Kunder besöker din hemsida, väljer rätter från menyn och lägger en beställning direkt i webbläsaren. Systemet är mobilvänligt och kräver ingen appinstallation.",
    },
    {
      question: "Kan jag anpassa menyn och ta emot betalningar online?",
      answer:
        "Absolut! Du kan enkelt uppdatera din meny via adminpanelen. Vi integrerar även med vanliga betallösningar som Swish och Stripe för smidiga onlinebetalningar.",
    },
    {
      question: "Vad ingår i installationen och vad kostar det?",
      answer:
        "Installationen inkluderar import av din meny, anpassning av designen och koppling till din domän. Engångsavgiften är från 19 900 kr, med en månadskostnad för drift och support från 199 kr.",
    },
  ];

  return (
    <main>
      <RestaurantDemoSection />
      <Container>
        <FAQ faqItems={faqItems} />
      </Container>
    </main>
  );
};

export default RestaurantPage;

