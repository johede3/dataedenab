import { Metadata } from "next"

import Benefits from "../components/Benefits/Benefits"
import Container from "../components/Container/Container"
import { Comments } from "../components/Landing/comments"
import CTA from "../components/Landing/CTA"
import FAQ from "../components/Landing/FAQ"
import Hero from "../components/Landing/Hero"
import Logos from "../components/Landing/Logos"
import Stats from "../components/Landing/Stats"
import Testimonials from "../components/Landing/Testimonials"
import { VideoScroll } from "../components/Landing/VideoScroll"
import Pricing from "../components/Pricing/Pricing"
import Section from "../components/Section/Section"

export const metadata: Metadata = {
  title: "Dataeden – Skräddarsydda Webb- och Applösningar för Småföretag",
  description:
    "Vi hjälper småföretag i Göteborg att växa online med moderna webblösningar. Från hemsidor till appar – vi bygger din digitala framtid.",
  twitter: {
    card: "summary_large_image",
    site: "@dataeden",
    title: "Dataeden – Professionell Webbutveckling i Göteborg",
    description: "Från hemsidor till appar – vi hjälper småföretag att lyckas online.",
  },
  openGraph: {
    url: "https://dataeden.se/",
    title: "Dataeden – Webbutveckling för Småföretag",
    description: "Skräddarsydda hemsidor & appar för företag i Göteborg.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://dataeden.se/images/og-image.jpg", // Uppdatera till din bild
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Hero />

      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Priser"
          description="Transparenta priser utan dolda avgifter. Anpassade lösningar för ditt företag."
        >
          <Pricing />
        </Section>

        <section className="container pt-8">
          <VideoScroll
            dict={{
              first_text: "Watch a Video, then",
              second_text1: "build your App in ",
              second_text2: "",
              time_text: "1 hour",
            }}
          />
        </section>

        <section className="w-full px-8 pt-10 sm:px-0 sm:pt-24 md:px-0 md:pt-24 xl:px-0 xl:pt-24">
          <div className="flex h-full w-full flex-col items-center pt-10 pb-[100px]">
            <div>
              <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl dark:text-zinc-100">
                What People Are Saying
              </h1>
            </div>
            <div className="mb-6 text-lg text-neutral-500 dark:text-neutral-400">
              Don’t just take our word for it. Here’s what real people are saying about Saasfly.
            </div>

            <div className="w-full overflow-x-hidden">
              <Comments />
            </div>
          </div>
        </section>

        <Section id="testimonials" title="Vad våra kunder säger" description="Se vad våra kunder tycker om oss.">
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  )
}
