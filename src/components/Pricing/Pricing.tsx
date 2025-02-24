import { tiers } from "../../app/data/pricing"
import PricingColumn from "./PricingColumn"

const Pricing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
      ))}
    </div>
  )
}

export default Pricing
