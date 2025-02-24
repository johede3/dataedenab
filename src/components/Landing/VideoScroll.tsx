"use client"

import Image from "next/image"

import { ContainerScroll } from "../Container/container-scroll-animation"
import { ColourfulText } from "../Shared/colorful-text"

export function VideoScroll({ dict }: { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {dict?.first_text}
              <br />
              <span className="mt-1 text-4xl leading-none font-bold md:text-6xl">
                {dict?.second_text1}
                <ColourfulText text={dict?.time_text ?? ""} />
                {dict?.second_text2}
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/hero-mockup.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
