import Link from "next/link";
import { getPricingPlans, pricingDetails } from "../../app/data/pricing";

type PricingProps = {
  city: string;
};

const Pricing: React.FC<PricingProps> = ({ city }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {getPricingPlans(city).map((plan, index) => (
          <div
            key={index}
            className="mx-auto w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:bg-gray-800"
          >
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{plan.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/kontakt"
          className="bg-primary hover:bg-primary-accent inline-block rounded-full px-6 py-3 text-lg font-medium text-white shadow-md transition-all"
        >
          {pricingDetails.offertCTA}
        </Link>
      </div>
    </>
  );
};

export default Pricing;
