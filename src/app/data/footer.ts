import { sitemapCities } from "../sitemap";
import { IMenuItem, ISocials } from "../types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone?: string;
  socials: ISocials;
  contactHeader: string;
  quickLinksHeader: string;
  locations: typeof sitemapCities;
  locationsHeader: string;
} = {
  subheading: "Professionell webbutveckling och apputveckling för småföretag och startups i Sverige.",
  quickLinks: [
    { text: "Om Dataeden", url: `#about` },
    { text: "Varför välja oss?", url: `#features` },
    { text: "Tidigare projekt", url: `#projects` },
    { text: "Vanliga frågor", url: `#faq` },
    { text: "Kontakta oss", url: `#cta` },
  ],
  locations: sitemapCities,
  email: "kontakt@dataeden.se",
  socials: {
    linkedin: "https://www.linkedin.com/in/johannesedenholm",
  },
  contactHeader: "Kontaktuppgifter",
  quickLinksHeader: "Snabblänkar",
  locationsHeader: "Vi arbetar i dessa områden",
};
