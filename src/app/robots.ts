import { MetadataRoute } from "next";
import aiBots from "../../netlify/ai-bots.json";

export default function robots(): MetadataRoute.Robots {
  const aiAgents = aiBots as string[];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiAgents.map((agent) => ({
        userAgent: agent,
        disallow: "/",
      })),
    ],
    sitemap: "https://dataeden.se/sitemap.xml",
  };
}
