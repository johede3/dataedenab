"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import { FiChevronDown } from "react-icons/fi"
import { getPreposition } from "../../app/utils"

type HeroSEOProps = {
  city: string
}

const HeroSEO: React.FC<HeroSEOProps> = ({ city }) => {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
    }
    setVh()
    window.addEventListener("resize", setVh)
    return () => window.removeEventListener("resize", setVh)
  }, [])

  return (
    <section
      id="hero"
      className="bg-grey-100 relative mb-10 flex items-center justify-center px-5 py-32 md:py-40"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="absolute top-0 bottom-0 left-0 -z-10 w-full">
        <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[1px]"></div>

      {/* Innehåll */}
      <div className="max-w-3xl text-center">
        <h1 className="text-foreground mx-auto text-3xl font-bold md:text-5xl md:leading-tight">
          SEO {getPreposition(city)} {city} – Ta din webbplats till
          <span className="text-purple-600"> toppositioner på Google</span>
        </h1>

        <p className="mx-auto mt-4 text-lg leading-relaxed text-gray-700 md:text-xl">
          Vill du synas bättre på Google och attrahera fler kunder {getPreposition(city)} {city}? Vi hjälper småföretag
          och lokala verksamheter {getPreposition(city)} {city} att ranka
          <span className="text-purple-600"> högre på Google</span>, få mer trafik och öka sina affärer med beprövade
          SEO-strategier
        </p>

        {/* CTA-knappar */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/kontakt"
            className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-purple-700"
          >
            Boka en gratis SEO-analys
          </Link>
          <Link
            href="#seo-content"
            className="rounded-full border border-gray-400 px-6 py-3 text-lg text-gray-700 transition-all hover:border-gray-600 hover:bg-gray-100"
          >
            Läs mer om SEO
          </Link>
        </div>
      </div>

      {/* Scroll-indikator */}
      <Link
        href="#seo-content"
        className="absolute bottom-6 animate-[shake_0.5s_ease-in-out_0.5s_1] transition-transform duration-300 hover:scale-110"
      >
        <FiChevronDown className="text-gray-600 hover:text-purple-600" size={48} />
      </Link>

      {/* Shake-animation */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-4px);
          }
          50% {
            transform: translateY(4px);
          }
          75% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSEO
