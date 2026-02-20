"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { footerDetails } from "../../../app/data/footer";
import { siteDetails } from "../../../app/data/siteDetails";
import { getPlatformIconByName, getPreposition, replaceCityPlaceholder } from "../../../app/utils";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const validCities = footerDetails.locations.map((loc) => loc.slug);
  const city = segments[1] && validCities.includes(segments[1]) ? segments[1] : undefined;

  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/mainImage.png" alt="Logo" height={528} width={528} className="h-32 w-auto" />
          </Link>
          <p className="text-foreground-accent mt-3.5">
            {replaceCityPlaceholder(footerDetails.subheading, city ?? "Göteborg")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">{footerDetails.quickLinksHeader}</h3>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => {
              const href = link.url.startsWith("/") ? link.url : city ? `/${city}${link.url}` : `/${link.url}`;
              return (
                <li key={link.text} className="mb-2">
                  <Link href={href} prefetch={false} className="hover:text-foreground">
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">{footerDetails.resourcesHeader}</h3>
          <ul className="text-foreground-accent">
            {footerDetails.resources.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} prefetch={false} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">{footerDetails.contactHeader}</h4>
          {footerDetails.email && (
            <a href={`mailto:${footerDetails.email}`} className="text-foreground-accent hover:text-foreground block">
              {footerDetails.email}
            </a>
          )}
          {footerDetails.telephone && (
            <a href={`tel:${footerDetails.telephone}`} className="text-foreground-accent hover:text-foreground block">
              {footerDetails.telephone}
            </a>
          )}
          {footerDetails.socials && (
            <div className="mt-5 flex flex-wrap items-center gap-5">
              {Object.keys(footerDetails.socials).map((platformName) => (
                <Link key={platformName} href={footerDetails.socials[platformName] ?? ""} aria-label={platformName}>
                  {getPlatformIconByName(platformName)}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="text-foreground-accent mt-6 text-center text-sm"
        role="navigation"
        aria-label="City-specific links"
      >
        <h2 className="text-md mb-3 font-semibold" id="locations-heading">
          {footerDetails.locationsHeader}
        </h2>
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6" aria-labelledby="locations-heading">
          {footerDetails.locations.map((location) => (
            <li key={location.slug} className="flex flex-col items-center">
              <Link
                href={`/${location.slug}`}
                className="font-medium hover:underline inline-block px-3 py-2 "
                aria-label={`Go to ${location.name}`}
              >
                {location.name}
              </Link>
              <Link
                href={`/${location.slug}/seo`}
                className="text-sm text-gray-700 hover:underline"
                aria-label={`SEO for ${location.name}`}
              >
                SEO {getPreposition(location.name)} {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-foreground-accent mt-8 px-6 md:text-center">
        <p>
          © {new Date().getFullYear()} {siteDetails.siteName}. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
