"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { getCityCategory, getPreposition } from "../../app/utils";

type HeroSEOProps = {
  city: string;
};

const HeroSEO: React.FC<HeroSEOProps> = ({ city }) => {
  const isNoCity = city.trim() === "";
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  let heroTitle, heroHighlight, heroHeading2, heroDescription, ctaText;
  if (isNoCity) {
    heroTitle = "SEO – Stärk din digitala närvaro";
    heroHighlight = "";
    heroHeading2 = "";
    heroDescription =
      "Vi hjälper företag att optimera sina hemsidor med strategier som ökar din synlighet på Google och genererar fler kunder.";
    ctaText = "Boka en kostnadsfri konsultation";
  } else {
    const cityCategory = getCityCategory(city);
    const isKungsbacka = city.toLowerCase() === "kungsbacka";

    heroTitle = isKungsbacka
      ? "Lokal SEO som Gör Dig Störst"
      : cityCategory === "large"
      ? `SEO ${getPreposition(city)} ${city} –`
      : cityCategory === "growing"
      ? `SEO ${getPreposition(city)} ${city} – Ta ledningen online`
      : `SEO ${getPreposition(city)} ${city} –`;
    heroHighlight = isKungsbacka
      ? ` i Kungsbacka`
      : cityCategory === "large"
      ? ` Dominera Google`
      : cityCategory === "growing"
      ? ` innan konkurrensen`
      : ` Få fler kunder`;
    heroHeading2 = isKungsbacka
      ? ""
      : cityCategory === "large"
      ? ` & slå konkurrenterna.`
      : cityCategory === "growing"
      ? ``
      : ` från Google lokalt`;
    heroDescription = isKungsbacka
      ? "Sluta konkurrera med Göteborg. Dominera din lokala marknad. Vi hjälper dig att bli det självklara valet i Kungsbacka."
      : cityCategory === "large"
      ? `Behöver du fler kunder i ${city}? Vi hjälper företag att ranka högre och stärka sitt varumärke online genom avancerade SEO-strategier.`
      : cityCategory === "growing"
      ? `SEO är en nyckel för tillväxt i ${city}. Vi hjälper företag att optimera sina hemsidor och ta en ledande position innan konkurrensen hårdnar.`
      : `SEO i ${city} hjälper småföretag att synas på Google, locka fler kunder och växa online med minimal konkurrens.`;
    ctaText = isKungsbacka
      ? "Låt oss ta en kaffe och prata SEO"
      : cityCategory === "large"
      ? "Boka en expertanalys"
      : cityCategory === "growing"
      ? "Ta din webbplats till toppen"
      : "Se hur du kan synas bättre";
  }

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

      {/* Content */}
      <div className="max-w-3xl text-center">
        <h1 className="text-foreground mx-auto text-3xl font-bold md:text-5xl md:leading-tight">
          {heroTitle}
          <span className="text-primary">{heroHighlight}</span>
          {heroHeading2}
        </h1>

        <p className="mx-auto mt-4 text-lg leading-relaxed text-gray-700 md:text-xl">{heroDescription}</p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/kontakt"
            className="rounded-full bg-primary px-6 py-3 text-lg font-medium text-background shadow-lg transition-all hover:bg-primary-hover"
          >
            {ctaText}
          </Link>
          <Link
            href="#seo-content"
            className="rounded-full border border-gray-400 px-6 py-3 text-lg text-gray-700 transition-all hover:border-gray-600 hover:bg-gray-100"
          >
            Läs mer om SEO
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#seo-content"
        className="absolute bottom-6 animate-[shake_0.5s_ease-in-out_0.5s_1] transition-transform duration-300 hover:scale-110"
      >
        <FiChevronDown className="text-gray-600 hover:text-primary" size={48} />
      </Link>

      {/* Shake Animation */}
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
  );
};

export default HeroSEO;
