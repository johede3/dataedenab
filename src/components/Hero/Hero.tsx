import Image from "next/image";
import Link from "next/link";
import React from "react";

import { heroDetails } from "../../app/data/hero";
import { getPreposition } from "../../app/utils";
import { replaceCityPlaceholder } from "../Benefits/Benefits";

type HeroProps = {
  city?: string;
};

const Hero: React.FC<HeroProps> = ({ city }) => {
  const hero = heroDetails(city ? city : "");
  return (
    <section id="hero" className="relative flex items-center justify-center px-5 pt-26 pb-0 md:pt-40">
      <div className="absolute top-0 bottom-0 left-0 -z-10 w-full">
        <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]"></div>

      <div className="text-center">
        <h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-4xl md:text-6xl md:leading-tight">
          {replaceCityPlaceholder(hero.heading, city ? `${getPreposition(city)} ${city} ` : "")}
          <span className="text-purple-600">{hero.highlight}</span>
          <br />
          {hero.heading2}
        </h1>
        <p className="text-foreground mx-auto mt-4 max-w-lg">{replaceCityPlaceholder(hero.subheading, city)}</p>
        {/* CTA-knappar */}
        <div className="mx-auto mt-6 flex w-fit flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <Link
            href="/kontakt"
            className="w-full text-nowrap rounded-full bg-purple-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-all hover:bg-purple-700"
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
        <Image
          src={hero.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority
          alt="Webb & App Mockup"
          className={`relative z-10 mx-auto ${city !== "" ? "mt-12" : "mt-4"} md:mt-16`}
        />
      </div>
    </section>
  );
};

export default Hero;
