"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { footerDetails } from "../../../app/data/footer";
import { siteDetails } from "../../../app/data/siteDetails";
import { getPlatformIconByName } from "../../../app/utils";
import { replaceCityPlaceholder } from "../../Benefits/Benefits";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const validCities = footerDetails.locations.map((loc) => loc.slug);
  const city = segments[1] && validCities.includes(segments[1]) ? segments[1] : undefined;

  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
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
          <h4 className="mb-4 text-lg font-semibold">{footerDetails.quickLinksHeader}</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => {
              const href = city ? `/${city}${link.url}` : `/${link.url}`;
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

      {/* City-Specific Links */}
      <div className="mt-10 text-center text-sm text-foreground-accent">
        <h4 className="mb-2 text-md font-semibold">{footerDetails.locationsHeader}</h4>
        <ul className="flex flex-wrap justify-center gap-3 text-xs">
          {footerDetails.locations.map((location) => (
            <li key={location.slug}>
              <Link href={`/${location.slug}`} className="hover:underline">
                {location.name}
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
