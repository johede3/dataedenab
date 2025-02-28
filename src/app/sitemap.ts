import { MetadataRoute } from "next"

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
  { name: "Skövde", slug: "skovde" },
  { name: "Vänersborg", slug: "vanersborg" },
  { name: "Lidköping", slug: "lidkoping" },
  { name: "Mariestad", slug: "mariestad" },
  { name: "Lysekil", slug: "lysekil" },
  { name: "Strömstad", slug: "stromstad" },
  { name: "Falköping", slug: "falkoping" },
  { name: "Hjo", slug: "hjo" },
  { name: "Ulricehamn", slug: "ulricehamn" },
  { name: "Munkedal", slug: "munkedal" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dataeden.se"

  // Statiska sidor
  const pages = ["", "kontakt", "services", "search-engine-optimization"]

  // Generera URLs för alla sidor
  const allPages = [
    ...pages.map((page) => `${baseUrl}/${page}`),
    ...cities.flatMap((city) => [
      `${baseUrl}/${city.slug}`, // Stadens huvudsida
      `${baseUrl}/${city.slug}/seo`, // SEO-sidan för staden
    ]),
  ]

  // Returnera rätt format för Next.js sitemap
  return allPages.map((url) => ({
    url,
    lastModified: new Date().toISOString(),
  }))
}
