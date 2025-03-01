import { getBenefits } from "../../app/data/benefits";
import { getPreposition } from "../../app/utils";
import BenefitSection from "./BenefitSection";

export const replaceCityPlaceholder = (text: string, city = "") => {
  return text.replace(/{{city}}/g, city);
};

type BenefitsProps = {
  city?: string;
};

const Benefits: React.FC<BenefitsProps> = ({ city }) => {
  const benefits = getBenefits(city ?? "");
  return (
    <div className="mt-10 space-y-16">
      {benefits.map((item, index) => (
        <BenefitSection
          key={index}
          benefit={{
            ...item,
            title: replaceCityPlaceholder(item.title, city ? getPreposition(city) : ""),
            description: replaceCityPlaceholder(item.description, city ? getPreposition(city) : ""),
            bullets: item.bullets.map((bullet) => ({
              ...bullet,
              title: replaceCityPlaceholder(bullet.title, city ? getPreposition(city) : ""),
              description: replaceCityPlaceholder(bullet.description, city ? getPreposition(city) : ""),
            })),
          }}
          imageAtRight={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Benefits;
