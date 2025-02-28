import { IFAQ } from "../types"

export const faqDetails = {
  heading: "Vanliga frågor – Hemsidor, Appar & Webbutveckling",
  subheading:
    "Här hittar du svar på vanliga frågor om våra tjänster inom webbutveckling, SEO och digitala lösningar. Hittar du inte det du söker? Kontakta oss!",
  contactEmail: "kontakt@dataeden.se",
}

export const faqs: IFAQ[] = [
  {
    question: "Hur mycket kostar en hemsida?",
    answer:
      "Priset varierar beroende på design, funktioner och omfattning. Vi erbjuder skräddarsydda lösningar baserade på dina behov. Kontakta oss för en gratis offert!",
  },
  {
    question: "Hur lång tid tar det att bygga en hemsida?",
    answer:
      "Byggtiden beror på projektets omfattning. En enklare företagshemsida kan vara klar inom 1–2 veckor, medan mer avancerade lösningar tar längre tid. Vi skapar en tydlig tidsplan tillsammans innan projektstart.",
  },
  {
    question: "Kan jag uppdatera hemsidan själv efteråt?",
    answer:
      "Ja! Vi bygger hemsidor där du enkelt kan ändra text och bilder själv, utan att behöva kunna programmera. Om du föredrar kan vi också sköta uppdateringarna åt dig.",
  },
  {
    question: "Vilka typer av företag hjälper du?",
    answer:
      "Vi arbetar med småföretag, startups, restauranger, e-handelsbutiker och lokala företag {{city}} som vill synas online och växa digitalt.",
  },
  {
    question: "Behöver jag webbhotell och domän för min hemsida?",
    answer:
      "Ja, men om du inte redan har det hjälper vi dig att välja rätt domän och webbhotell samt att sätta upp allt tekniskt åt dig.",
  },
]
