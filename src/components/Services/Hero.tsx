"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { servicesSectionsText } from "../../app/data/services";

const HeroServices: React.FC = () => {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

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

      <div className="text-center">
        <h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-2xl md:text-6xl md:leading-tight">
          {servicesSectionsText.title} <span className="text-primary">{servicesSectionsText.highlitedText}</span>
        </h1>
        <p className="text-foreground mx-auto mt-4 max-w-lg">{servicesSectionsText.subtext}</p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/kontakt"
            className="rounded-full bg-primary px-6 py-3 text-lg font-medium text-background shadow-lg transition-all hover:bg-primary-hover"
          >
            {servicesSectionsText.CTA}
          </Link>
        </div>
      </div>

      <Link
        href="#services"
        className="absolute bottom-0 animate-[shake_0.5s_ease-in-out_0.5s_1] transition-transform duration-300 hover:scale-110"
      >
        <FiChevronDown className="text-foreground hover:text-primary" size={52} />
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
  );
};

export default HeroServices;
