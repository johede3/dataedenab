import { IconType } from "react-icons";
import {
  FaChartLine,
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMobileScreenButton,
  FaPenNib,
  FaRocket,
} from "react-icons/fa6";
import { getPreposition } from "../utils";

export interface WebbyraBenefit {
  icon: IconType;
  title: string;
  text: string;
}

export interface WebbyraStep {
  icon: IconType;
  title: string;
  text: string;
}

export interface WebbyraSubsection {
  title: string;
  text: string;
}

export interface WebbyraSection {
  title: string;
  content: string;
  subsections?: WebbyraSubsection[];
  steps?: WebbyraStep[];
}

export interface WebbyraFAQ {
  question: string;
  answer: string;
}

export interface WebbyraData {
  title: string;
  description: string;
  benefits: WebbyraBenefit[];
  sections: WebbyraSection[];
  faq?: WebbyraFAQ[];
}

export const generateCityWebbyraData = (city: string): WebbyraData => {
  const normalizedCity = city.toLowerCase().replace("å", "a").replace("ä", "a").replace("ö", "o");
  if (normalizedCity === "boras") {
    return {
      title: "Mer än Bara en Snygg Fasad: En Hemsida som Jobbar för Dig",
      description:
        "I en stad känd för design, innovation och handel duger inte en vanlig hemsida. Ditt företag i Borås behöver en digital närvaro som är lika driven och framåt som staden själv. En hemsida är mer än en digital broschyr – det är din främsta säljare, din bästa marknadsförare och ditt viktigaste verktyg för att bygga kundrelationer.\n\nSom en lokal webbyrå för Borås förstår vi detta. Vi bygger inte bara tekniskt avancerade och snygga hemsidor; vi skapar digitala plattformar som driver tillväxt, attraherar rätt kunder och omvandlar besökare till affärer.",
      benefits: [
        {
          icon: FaLightbulb,
          title: "Strategisk Webbdesign",
          text: "Vi skapar en design som guidar besökaren mot dina mål – boka möte, begära offert eller genomföra köp. Vi ser till att din hemsida i Borås talar direkt till din målgrupp.",
        },
        {
          icon: FaRocket,
          title: "Teknisk Prestanda",
          text: "En långsam hemsida är ineffektiv. Vi använder modern teknik för blixtsnabb laddning och felfri funktion på alla enheter – avgörande för både användare och Google.",
        },
        {
          icon: FaChartLine,
          title: "Grundläggande SEO",
          text: "Vi implementerar SEO från dag ett. Det ger dig en solid grund för digital synlighet och gör det lättare för kunder i Borås att hitta just dig.",
        },
      ],
      sections: [
        {
          title: "Specialister på E-handel i Borås",
          content:
            "Med en stolt historia inom textil och som ett modernt centrum för e-handel, ställer Borås unika krav på digitala lösningar. Vi har specialiserat oss på att bygga kraftfulla och användarvänliga e-handelsplattformar som hjälper lokala företag att sälja sina produkter online, både lokalt och globalt.",
          subsections: [
            {
              title: "Säljande Produktsidor",
              text: "Vi designar produktsidor optimerade för konvertering med högkvalitativa bilder och en enkel köpprocess.",
            },
            {
              title: "Säkra Betalningslösningar",
              text: "Vi integrerar pålitliga system som Klarna, Swish och kortbetalningar för att skapa trygghet för dina kunder.",
            },
            {
              title: "Skalbar Plattform",
              text: "Oavsett om du precis har börjat eller har tusentals produkter, bygger vi en plattform som växer med dig.",
            },
          ],
        },
        {
          title: "Vår Process: Tydliga Steg, Inga Konstigheter",
          content:
            "Transparens och kommunikation är nyckeln till ett framgångsrikt projekt. Vi följer en beprövad process för att säkerställa att vi levererar rätt lösning i tid och inom budget.",
          steps: [
            {
              icon: FaCompass,
              title: "Strategi & Planering",
              text: "Vi sätter oss ner tillsammans för att förstå dina affärsmål, din målgrupp och dina konkurrenter.",
            },
            {
              icon: FaCode,
              title: "Design & Utveckling",
              text: "Vi skapar ett visuellt utkast och när det är godkänt börjar vi bygga själva hemsidan.",
            },
            {
              icon: FaPenNib,
              title: "Innehåll & SEO",
              text: "Vi hjälper dig att fylla sidan med engagerande och sökmotoroptimerat innehåll.",
            },
            {
              icon: FaRocket,
              title: "Lansering & Uppföljning",
              text: "Efter tester lanserar vi sidan och följer upp för att säkerställa att du är 100 % nöjd.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Vad kostar en ny hemsida?",
          answer:
            "Priset beror helt på projektets omfattning, från en enklare företagssida till en avancerad e-handel. Kontakta oss för en kostnadsfri och skräddarsydd offert.",
        },
        {
          question: "Hur lång tid tar det att bygga en hemsida?",
          answer:
            "En typisk tidslinje är 4-8 veckor, beroende på projektets komplexitet och hur snabbt vi får in material från dig.",
        },
        {
          question: "Behöver jag teknisk kunskap?",
          answer:
            "Absolut inte. Vi hanterar all teknik och levererar en färdig lösning som är enkel för dig att använda och uppdatera.",
        },
      ],
    };
  }

  // Default data for other cities
  return {
    title: `Webbyrå ${getPreposition(city)} ${city} – Moderna hemsidor`,
    description: `Vi hjälper företag ${getPreposition(city)} ${city} att bygga snabba, mobilvänliga och SEO-optimerade hemsidor som driver tillväxt.`,
    benefits: [
      {
        icon: FaCode,
        title: "Modern teknik",
        text: "Vi använder de senaste ramverken för att bygga framtidssäkrade lösningar.",
      },
      {
        icon: FaChartLine,
        title: "SEO-fokus",
        text: "Alla våra hemsidor byggs med sökmotoroptimering i grunden.",
      },
      {
        icon: FaMobileScreenButton,
        title: "Responsiv design",
        text: "Din sida kommer att fungera perfekt på både mobiler, surfplattor och datorer.",
      },
    ],
    sections: [
      {
        title: "Varför välja vår webbyrå?",
        content: `Som din lokala partner ${getPreposition(city)} ${city} förstår vi vikten av en stark digital närvaro. Vi kombinerar design med teknik för att skapa hemsidor som inte bara ser bra ut utan också ger resultat.`,
      },
    ],
  };
};
