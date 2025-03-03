"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { getBenefits } from "../../app/data/benefits";
import { getPreposition, replaceCityPlaceholder } from "../../app/utils";

const BenefitSection = dynamic(() => import("./BenefitSection"), { ssr: false });

type BenefitsProps = {
  city?: string;
};

const Benefits: React.FC<BenefitsProps> = ({ city }) => {
  const cityPreposition = useMemo(() => (city ? getPreposition(city) : ""), [city]);
  const benefits = useMemo(() => getBenefits(city ?? ""), [city]);

  return (
    <div className="mt-10 space-y-16">
      {benefits.map((item, index) => (
        <BenefitSection
          key={item.title} // More stable than using `index`
          benefit={{
            ...item,
            title: replaceCityPlaceholder(item.title, cityPreposition),
            description: replaceCityPlaceholder(item.description, cityPreposition),
            bullets: item.bullets.map((bullet) => ({
              ...bullet,
              title: replaceCityPlaceholder(bullet.title, cityPreposition),
              description: replaceCityPlaceholder(bullet.description, cityPreposition),
            })),
          }}
          imageAtRight={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Benefits;
