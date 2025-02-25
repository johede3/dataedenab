import { MetadataRoute } from "next";

// Lista över städer vi stödjer
export const cities = [
  { name: "Göteborg", slug: "goteborg" },
  { name: "Kungälv", slug: "kungalv" },
  { name: "Orust", slug: "orust" },
  { name: "Kungsbacka", slug: "kungsbacka" },
  { name: "Mölndal", slug: "molndal" },
  { name: "Partille", slug: "partille" },
  { name: "Lerum", slug: "lerum" },
  { name: "Ale", slug: "ale" },
  { name: "Stenungsund", slug: "stenungsund" },
  { name: "Tjörn", slug: "tjorn" },
  { name: "Borås", slug: "boras" },
  { name: "Trollhättan", slug: "trollhattan" },
  { name: "Uddevalla", slug: "uddevalla" },
  { name: "Alingsås", slug: "alingsas" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dataeden.se";

  // Statiska sidor
  const pages = ["", "kontakt", "services", "search-engine-optimization"];

  // Skapa en lista med alla sidor (statiska + dynamiska städer)
  const allPages = [...pages.map((page) => `${baseUrl}/${page}`), ...cities.map((city) => `${baseUrl}/${city.slug}`)];

  // Returnera rätt format för Next.js sitemap
  return allPages.map((url) => ({
    url,
    lastModified: new Date().toISOString(),
  }));
}
