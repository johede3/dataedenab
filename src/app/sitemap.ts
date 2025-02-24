import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dataeden.se"

  const pages = ["", "kontakt", "services", "search-engine-optimization"]

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
  }))
}
