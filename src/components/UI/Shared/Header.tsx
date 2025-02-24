"use client"

import { Transition } from "@headlessui/react"
import Link from "next/link"
import React, { useState } from "react"
import { HiBars3, HiOutlineXMark } from "react-icons/hi2"

import { headerDetails } from "../../../app/data/header"
import { menuItems } from "../../../app/data/menuItems"
import { siteDetails } from "../../../app/data/siteDetails"
import Container from "../Container/Container"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 mx-auto h-20 w-full bg-transparent md:absolute">
      <Container className="mx-auto w-full max-w-7xl !px-0 px-5">
        <nav className="mx-auto flex h-16 items-center justify-between bg-white px-5 py-2 shadow-md md:bg-transparent md:py-10 md:shadow-none">
          {/* Logo */}
          <Link href="/" className="ml-4 flex items-center gap-2 sm:ml-0">
            <span className="manrope text-foreground cursor-pointer text-xl font-semibold">{siteDetails.siteName}</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary-accent rounded-full px-8 py-3 text-white transition-colors"
              >
                {headerDetails.contactUsCTA}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="mr-4 flex cursor-pointer items-center sm:mr-0 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 px-6 pt-1 pb-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary-accent block w-fit rounded-full px-5 py-2 text-white"
                onClick={toggleMenu}
              >
                {headerDetails.contactUsCTA}
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  )
}

export default Header
