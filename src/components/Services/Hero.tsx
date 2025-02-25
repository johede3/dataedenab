"use client"
import Link from "next/link"
import React from "react"
import { FiChevronDown } from "react-icons/fi"
import { servicesSectionsText } from "../../app/data/services"

const HeroServices: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-grey-100 relative mb-10 flex h-screen items-center justify-center px-5 py-32 md:py-40"
    >
      <div className="absolute top-0 bottom-0 left-0 -z-10 w-full">
        <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[1px]"></div>

      <div className="text-center">
        <h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-2xl md:text-6xl md:leading-tight">
          {servicesSectionsText.title} <span className="text-purple-600"> {servicesSectionsText.highlitedText}</span>
        </h1>

        {/* Förbättrad undertext */}
        <p className="text-foreground mx-auto mt-4 max-w-lg">{servicesSectionsText.subtext}</p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/kontakt"
            className="rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-purple-700"
          >
            {servicesSectionsText.CTA}
          </Link>
        </div>
      </div>
      <Link
        href="#webbutveckling"
        className="absolute bottom-0 animate-[shake_0.5s_ease-in-out_0.5s_1] transition-transform duration-300 hover:scale-110"
      >
        <FiChevronDown className="text-black hover:text-purple-600" size={52} />
      </Link>

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

export default HeroServices
