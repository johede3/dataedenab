"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { footerDetails } from "../../../app/data/footer"
import { siteDetails } from "../../../app/data/siteDetails"
import { getPlatformIconByName } from "../../../app/utils"

const Footer: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        {/* Logo & Beskrivning */}
        <div className="">
          <Link href="/" className="flex items-center">
            <img src="/mainImage.png" alt="Logo" className="h-32 w-auto" />
          </Link>
        </div>
        <p className="text-foreground-accent mt-3.5">{footerDetails.subheading}</p>

        {/* Snabblänkar */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">{footerDetails.quickLinksHeader}</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={isHomePage ? link.url : `/${link.url}`} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontaktinfo */}
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

          {/* Sociala Medier */}
          {footerDetails.socials && (
            <div className="mt-5 flex flex-wrap items-center gap-5">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link href={footerDetails.socials[platformName] ?? ""} key={platformName} aria-label={platformName}>
                      {getPlatformIconByName(platformName)}
                    </Link>
                  )
                }
              })}
            </div>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-foreground-accent mt-8 px-6 md:text-center">
        <p>
          © {new Date().getFullYear()} {siteDetails.siteName}. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}

export default Footer
