"use client";

import Link from "next/link";
import React from "react";

const RestaurantDemoSection: React.FC = () => {
  return (
    <section id="restaurant-demo" className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          🍜 Restauranglösning – Ta emot beställningar online
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
          Vi har byggt ett komplett system där dina gäster beställer via hemsidan och du ser allt i realtid i en enkel
          adminpanel. Ingen app, inga mellanhänder – bara fler beställningar.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://the-place-se.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Visa kundvy (Demo) →
          </Link>
          <Link
            href="https://admin-the-place-se.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300"
          >
            Visa adminpanel (Demo) →
          </Link>
          <Link
            href="/kontakt"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-primary-hover"
          >
            Boka genomgång (gratis) →
          </Link>
        </div>
        <div className="mt-8">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Från 19 900 kr (engångsavgift)
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Installation, menyimport och domänkoppling ingår.
            <br />
            Drift & hosting: från 199 kr/mån.
          </p>
        </div>
        <p className="mt-6 text-xs text-gray-500">*Detta är en demo. Inga riktiga beställningar behandlas.</p>
      </div>
    </section>
  );
};

export default RestaurantDemoSection;
