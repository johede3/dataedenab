import { JSX } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { sitemapCities } from "./sitemap";

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
  switch (platformName) {
    case "facebook": {
      return <FaFacebook size={24} className="min-w-fit" />;
    }
    case "github": {
      return <FaGithub size={24} className="min-w-fit" />;
    }
    case "instagram": {
      return <FaInstagram size={24} className="min-w-fit" />;
    }
    case "linkedin": {
      return <FaLinkedin size={24} className="min-w-fit" />;
    }
    case "threads": {
      return <FaThreads size={24} className="min-w-fit" />;
    }
    case "twitter": {
      return <FaTwitter size={24} className="min-w-fit" />;
    }
    case "youtube": {
      return <FaYoutube size={24} className="min-w-fit" />;
    }
    case "x": {
      return <FaXTwitter size={24} className="min-w-fit" />;
    }
    default:
      console.log("Platform name not supported, no icon is returned:", platformName);
      return null;
  }
};

export function getPreposition(city: string): string {
  if (!city) return "";
  const citiesWithPa = ["Orust", "Tjörn", "Lysekil", "Hjo"];
  return citiesWithPa.includes(city) ? "på" : "i";
}

export function getFullCity(city: string): string {
  const citiesWithPa = ["Orust", "Tjörn", "Lysekil", "Hjo"];
  return citiesWithPa.includes(city) ? `på ${city}` : `i ${city}`;
}

export const largeBusinessCities = ["Göteborg", "Borås", "Trollhättan", "Skövde", "Uddevalla"];
export const growingCities = [
  "Kungsbacka",
  "Mölndal",
  "Partille",
  "Lerum",
  "Ale",
  "Stenungsund",
  "Vänersborg",
  "Lidköping",
  "Mariestad",
  "Alingsås",
];

export const smallLocalCities = [
  "Orust",
  "Tjörn",
  "Lysekil",
  "Strömstad",
  "Falkoping",
  "Hjo",
  "Ulricehamn",
  "Munkedal",
];

export const getCTAContent = (slug: string) => {
  if (largeBusinessCities.includes(slug)) {
    return {
      title: "Vill du ha en unik digital lösning?",
      button: "Kontakta oss för ett premiumförslag",
    };
  }

  if (growingCities.includes(slug)) {
    return {
      title: "Få en snygg & snabb hemsida som gör att du syns!",
      button: "Boka en gratis konsultation",
    };
  }

  if (smallLocalCities.includes(slug)) {
    return {
      title: "Låt ditt lokala företag synas på Google!",
      button: "Få en hemsida som ger fler kunder",
    };
  }

  return {
    title: "Bygg en hemsida som konverterar",
    button: "Få en gratis offert",
  };
};

export const getFeaturesByCityType = (slug: string) => {
  if (largeBusinessCities.includes(slug)) {
    return {
      title: `Dominerar din marknad i ${slug.charAt(0).toUpperCase() + slug.slice(1)} med en kraftfull webbplats`,
      description: `I en konkurrensutsatt marknad är det viktigt att sticka ut. Vi bygger SEO-optimerade, högpresterande webbplatser för företag i ${slug}.`,
    };
  }

  if (growingCities.includes(slug)) {
    return {
      title: `Väx online med en professionell hemsida i ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
      description: `Marknaden i ${slug} växer – se till att ditt företag syns digitalt. Vi hjälper dig med en snabb, modern och SEO-optimerad webbplats.`,
    };
  }

  if (smallLocalCities.includes(slug)) {
    return {
      title: `Få fler lokala kunder i ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
      description: `Dina kunder söker efter lokala tjänster i ${slug}. Med en SEO-optimerad hemsida ser vi till att ditt företag hittas av rätt personer.`,
    };
  }

  return {
    title: `Varför behöver företag i ${slug} en professionell hemsida?`,
    description: `Vi skapar moderna, mobilanpassade och SEO-optimerade webbplatser som gör att företag i ${slug} syns på Google och lockar fler kunder.`,
  };
};

export const getCityCategory = (city: string) => {
  if (largeBusinessCities.includes(city)) return "large";
  if (growingCities.includes(city)) return "growing";
  if (smallLocalCities.includes(city)) return "small";
  return "default";
};

export const replaceCityPlaceholder = (text: string, city = "") => {
  return text.replace(/{{city}}/g, city);
};

export function getNearbyCities(currentSlug: string, count = 4) {
  const otherCities = sitemapCities.filter((city) => city.slug !== currentSlug);
  // Shuffle + pick first N
  const shuffled = otherCities.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// utils/cityClusters.ts
export const cityClusters: Record<string, { main: string; nearby: string[] }> = {
  // Göteborgsregionen
  goteborg: { main: "Göteborg", nearby: ["molndal", "partille", "lerum", "ale", "kungalv", "kungsbacka"] },
  molndal: { main: "Mölndal", nearby: ["goteborg", "partille", "kungsbacka"] },
  partille: { main: "Partille", nearby: ["goteborg", "molndal", "lerum"] },
  lerum: { main: "Lerum", nearby: ["goteborg", "partille", "ale"] },
  ale: { main: "Ale", nearby: ["goteborg", "kungalv", "lerum"] },
  kungalv: { main: "Kungälv", nearby: ["goteborg", "ale", "stenungsund"] },
  kungsbacka: { main: "Kungsbacka", nearby: ["goteborg", "molndal"] },

  // Norra Bohuslän & Västkusten
  stromstad: { main: "Strömstad", nearby: ["munkedal", "lysekil", "uddevalla"] },
  lysekil: { main: "Lysekil", nearby: ["uddevalla", "stromstad", "munkedal"] },
  munkedal: { main: "Munkedal", nearby: ["uddevalla", "stromstad", "lysekil"] },
  uddevalla: { main: "Uddevalla", nearby: ["munkedal", "stenungsund", "lysekil"] },
  stenungsund: { main: "Stenungsund", nearby: ["kungalv", "tjorn", "uddevalla"] },
  tjorn: { main: "Tjörn", nearby: ["stenungsund", "orust"] },
  orust: { main: "Orust", nearby: ["tjorn", "stenungsund"] },

  // Sjuhärad / Boråsregionen
  boras: { main: "Borås", nearby: ["ulricehamn", "alingsas"] },
  ulricehamn: { main: "Ulricehamn", nearby: ["boras", "alingsas"] },
  alingsas: { main: "Alingsås", nearby: ["boras", "lerum", "ulricehamn"] },

  // Skaraborg
  skovde: { main: "Skövde", nearby: ["falkoping", "mariestad", "lidkoping"] },
  mariestad: { main: "Mariestad", nearby: ["skovde", "lidkoping", "falkoping"] },
  falkoping: { main: "Falköping", nearby: ["skovde", "mariestad", "hjo"] },
  hjo: { main: "Hjo", nearby: ["falkoping", "skovde"] },
  lidkoping: { main: "Lidköping", nearby: ["mariestad", "vanersborg", "skovde"] },
  vanersborg: { main: "Vänersborg", nearby: ["trollhattan", "lidkoping"] },
  trollhattan: { main: "Trollhättan", nearby: ["vanersborg", "uddevalla"] },
};
