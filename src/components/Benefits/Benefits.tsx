import { benefits } from "../../app/data/benefits"
import BenefitSection from "./BenefitSection"

type BenefitsProps = {
  city?: string
}

export const replaceCityPlaceholder = (text: string, city = "") => {
  return text.replace(/{{city}}/g, city)
}

const Benefits: React.FC<BenefitsProps> = ({ city }) => {
  return (
    <div className="mt-10 space-y-16">
      {benefits.map((item, index) => (
        <BenefitSection
          key={index}
          benefit={{
            ...item,
            title: replaceCityPlaceholder(item.title, city),
            description: replaceCityPlaceholder(item.description, city),
            bullets: item.bullets.map((bullet) => ({
              ...bullet,
              title: replaceCityPlaceholder(bullet.title, city),
              description: replaceCityPlaceholder(bullet.description, city),
            })),
          }}
          imageAtRight={index % 2 !== 0}
        />
      ))}
    </div>
  )
}

export default Benefits
