import { IMenuItem, ISocials } from "../types"

const baseUrl = "/"

export const footerDetails: {
  subheading: string
  quickLinks: IMenuItem[]
  email: string
  telephone?: string
  socials: ISocials
  contactHeader: string
  quickLinksHeader: string
} = {
  subheading: "Professionell webbutveckling och apputveckling för småföretag och startups i Göteborg & Sverige.",
  quickLinks: [
    { text: "Varför välja oss?", url: `${baseUrl}#features` },
    { text: "Tidigare projekt", url: `${baseUrl}#projects` },
    { text: "Om Dataeden", url: `${baseUrl}#about` },
    { text: "Vanliga frågor", url: `${baseUrl}#faq` },
    { text: "Kontakta oss", url: `${baseUrl}#cta` },
  ],
  email: "kontakt@dataeden.se",
  socials: {
    linkedin: "https://www.linkedin.com/in/johannesedenholm",
  },
  contactHeader: "Kontaktuppgifter",
  quickLinksHeader: "Snabblänkar",
}
