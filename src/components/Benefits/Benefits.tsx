import { benefits } from "../../app/data/benefits"
import BenefitSection from "./BenefitSection"

const Benefits: React.FC = () => {
  return (
    <div className="mt-10 space-y-16">
      {benefits.map((item, index) => (
        <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
      ))}
    </div>
  )
}

export default Benefits
