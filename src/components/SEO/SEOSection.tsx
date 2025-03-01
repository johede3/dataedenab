import Link from "next/link";
import { FiGlobe, FiSearch, FiTrendingUp } from "react-icons/fi";
import { getPreposition } from "../../app/utils";

const seoBenefits = [
  {
    title: "Högre Google-ranking",
    description: "Bättre placering på Google betyder fler besökare och fler kunder.",
    icon: <FiTrendingUp size={26} />,
  },
  {
    title: "Lokal SEO för småföretag",
    description: "Vi ser till att du syns för rätt målgrupp i din stad eller region.",
    icon: <FiGlobe size={26} />,
  },
  {
    title: "Optimerad hastighet & UX",
    description: "Snabba och användarvänliga sidor konverterar fler besökare till kunder.",
    icon: <FiSearch size={26} />,
  },
];

type SEOSectionProps = {
  city?: string;
};

const SEOSection: React.FC<SEOSectionProps> = ({ city = "" }) => {
  return (
    <div className="mx-auto max-w-5xl px-6 text-center">
      {/* SEO Benefits Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {seoBenefits.map((item, index) => (
          <div key={index} className="flex flex-col items-center rounded-xl border p-6 shadow-lg">
            <div className="text-primary mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-center text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button - Dynamic Link */}
      <div className="mt-10">
        <Link
          href={`/${city}/seo`}
          className="rounded-full bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-purple-700"
        >
          Läs mer om SEO {getPreposition(city)} {city}
        </Link>
      </div>
    </div>
  );
};

export default SEOSection;
