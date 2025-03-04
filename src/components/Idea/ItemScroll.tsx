"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { ContainerScroll } from "../UI/Container/container-scroll-animation";
import { ColourfulText } from "../UI/Shared/colorful-text";

export const ItemScroll = React.memo(function ItemScroll({ dict }: { dict?: Record<string, string> }) {
  const { first_text, second_text1, time_text, second_text2 } = dict || {};

  const combinedText = useMemo(() => `${time_text ?? ""}${second_text2 ?? ""}`, [time_text, second_text2]);

  const titleComponent = useMemo(
    () => (
      <h2 className="mb-2 text-4xl font-semibold text-foreground md:mb-10 dark:text-background">
        {first_text}
        <br />
        <span className="mt-1 text-4xl leading-none font-bold md:text-6xl">
          {second_text1}
          <span className="block">
            <ColourfulText text={combinedText} />
          </span>
        </span>
      </h2>
    ),
    [first_text, second_text1, combinedText],
  );

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={titleComponent}>
        <Image
          src={`/images/aiuli.webp`}
          alt="hero"
          height={2048}
          width={2732}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
});
