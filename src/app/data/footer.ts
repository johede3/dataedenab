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
  subheading: "Bygger skräddarsydda webb- och applösningar för företag och entreprenörer.",
  quickLinks: [
    { text: "Varför oss?", url: `${baseUrl}#features` },
    { text: "Projekt", url: `${baseUrl}#projects` },
    { text: "Om oss", url: `${baseUrl}#about` },
    { text: "FAQ", url: `${baseUrl}#faq` },
    { text: "Kontakt", url: `${baseUrl}#cta` },
  ],
  email: "kontakt@dataeden.se",
  socials: {
    linkedin: "https://www.linkedin.com/in/johannesedenholm",
  },
  contactHeader: "Kontakt",
  quickLinksHeader: "Snabblänkar",
}
