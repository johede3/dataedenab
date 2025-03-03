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
