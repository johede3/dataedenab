"use client"

import Image from "next/image"

import { ContainerScroll } from "../UI/Container/container-scroll-animation"
import { ColourfulText } from "../UI/Shared/colorful-text"

export function ItemScroll({ dict }: { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mb-2 text-4xl font-semibold text-black md:mb-10 dark:text-white">
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
          src={`/images/aiuli.webp`}
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
