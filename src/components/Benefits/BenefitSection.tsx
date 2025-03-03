"use client";
import clsx from "clsx";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import { IBenefit } from "../../app/types";
import SectionTitle from "../Section/SectionTitle";
import BenefitBullet from "./BenefitBullet";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

const containerVariants: Variants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.9 },
  },
};

export const childVariants = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1 },
  },
};

const imageMap = {
  "/assets/web-development.webp": { src: "/assets/web-development.webp", size: { h: 2464, w: 1856 } },
  "/assets/app-development.webp": { src: "/assets/app-development.webp", size: { h: 551, w: 694 } },
  "/assets/seo-services.webp": { src: "/assets/seo-services.webp", size: { h: 1232, w: 928 } },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }) => {
  const { title, description, imageSrc, bullets } = benefit;
  const shouldReduceMotion = useReducedMotion();
  const effectiveContainerVariants = shouldReduceMotion ? {} : containerVariants;
  const effectiveChildVariants = shouldReduceMotion ? {} : childVariants;

  const image = useMemo(
    () => imageMap[imageSrc as keyof typeof imageMap] ?? imageMap["/assets/web-development.webp"],
    [imageSrc],
  );

  const renderedBullets = useMemo(
    () =>
      bullets.map((item, index) => (
        <BenefitBullet key={item.title + index} title={item.title} icon={item.icon} description={item.description} />
      )),
    [bullets],
  );

  return (
    <section className="benefit-section">
      <motion.div
        className="mb-24 flex flex-col items-center justify-center gap-2 lg:flex-row lg:flex-nowrap lg:gap-20"
        variants={effectiveContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className={clsx("flex w-full max-w-lg flex-wrap items-center", {
            "justify-start": imageAtRight,
            "justify-end lg:order-1": !imageAtRight,
          })}
        >
          <div className="w-full text-center lg:text-left">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="flex w-full flex-col"
              variants={effectiveChildVariants}
            >
              <SectionTitle>{title}</SectionTitle>
              <p className="text-foreground-accent mx-auto mt-1.5 leading-normal lg:ml-0">{description}</p>
            </motion.div>
            <div className="mx-auto w-full lg:ml-0">{renderedBullets}</div>
          </div>
        </div>
        <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
          <div
            className={clsx("mx-auto flex w-full max-w-xs", {
              "justify-start": imageAtRight,
              "justify-end": !imageAtRight,
            })}
          >
            <Image
              src={image.src}
              alt={title}
              width={image.size.w}
              height={image.size.h}
              priority={false}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(BenefitSection);
