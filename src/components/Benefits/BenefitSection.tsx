"use client"
import clsx from "clsx"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

import { IBenefit } from "../../app/types"
import SectionTitle from "../Section/SectionTitle"
import BenefitBullet from "./BenefitBullet"

interface Props {
  benefit: IBenefit
  imageAtRight?: boolean
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
}

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
  const { title, description, imageSrc, bullets } = benefit

  return (
    <section className="benefit-section">
      <motion.div
        className="mb-24 flex flex-col items-center justify-center gap-2 lg:flex-row lg:flex-nowrap lg:gap-20"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx("flex w-full max-w-lg flex-wrap items-center", {
            "justify-start": imageAtRight,
            "justify-end lg:order-1": !imageAtRight,
          })}
        >
          <div className="w-full text-center lg:text-left">
            <motion.div className="flex w-full flex-col" variants={childVariants}>
              <SectionTitle>{title}</SectionTitle>

              <p className="text-foreground-accent mx-auto mt-1.5 leading-normal lg:ml-0">{description}</p>
            </motion.div>

            <div className="mx-auto w-full lg:ml-0">
              {bullets.map((item, index) => (
                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
              ))}
            </div>
          </div>
        </div>

        <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
          <div
            className={clsx("mx-auto flex w-full max-w-xs", {
              "justify-start": imageAtRight,
              "justify-end": !imageAtRight,
            })}
          >
            <Image src={imageSrc} alt="title" width="384" height="384" quality={100} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default BenefitSection
