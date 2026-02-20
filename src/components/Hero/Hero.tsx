import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

import { heroDetails } from "../../app/data/hero";
import { getPreposition, replaceCityPlaceholder } from "../../app/utils";

type HeroProps = {
  city?: string;
};

const Hero: React.FC<HeroProps> = ({ city }) => {
  const hero = useMemo(() => heroDetails(city || ""), [city]);

  const cityPreposition = useMemo(() => (city ? `${getPreposition(city)} ${city} ` : ""), [city]);

  return (
    <section id="hero" className="relative flex items-center justify-center px-5 pt-26 pb-0 md:pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="text-center">
        <h1 className="text-foreground mx-auto max-w-xl text-4xl font-bold md:max-w-5xl md:text-6xl md:leading-tight">
          {replaceCityPlaceholder(hero.heading, cityPreposition)}
          <span className="text-primary">{hero.highlight}</span> {hero.heading2}
        </h1>
        <p className="text-foreground mx-auto mt-4 max-w-xl">{replaceCityPlaceholder(hero.subheading, city)}</p>

        {/* CTA Buttons */}
        <div className="mx-auto mt-6 flex w-fit flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <Link
            href="/kontakt"
            className="w-full text-nowrap rounded-full bg-primary px-6 py-3 text-lg font-medium text-background shadow-md transition-all hover:bg-primary-hover"
          >
            {hero.offertCTA}
          </Link>
          <Link
            href="/services"
            className="text-nowrap w-full rounded-full border border-gray-400 px-6 py-3 text-center text-lg text-gray-700 transition-all hover:border-gray-600 hover:bg-gray-100 md:w-auto dark:border-gray-500 dark:text-gray-300 dark:hover:border-gray-300 dark:hover:bg-gray-800"
          >
            {hero.servicesCTA}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 mx-auto mt-12 md:mt-16 max-w-96">
          <Image
            src={hero.centerImageSrc}
            width={891}
            height={968}
            priority
            alt="Webb & App Mockup"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
