import Link from "next/link";
import { getSEOBenefits } from "../../app/data/seoBenefits";
import { sitemapCities } from "../../app/sitemap";
import { getPreposition } from "../../app/utils";

type SEOSectionProps = {
  city?: string;
};
const findSlug = (city: string) => {
  if (!city) return;
  const slug = sitemapCities.find((c) => c.name === city)?.slug;
  return slug;
};

const SEOSection: React.FC<SEOSectionProps> = ({ city = "" }) => {
  const cityName = findSlug(city);

  return (
    <div className="mx-auto max-w-5xl px-6 text-center">
      {/* SEO Benefits Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {getSEOBenefits(city).map((item, index) => (
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
          href={cityName ? `/${cityName}/seo` : "/search-engine-optimization"}
          className="rounded-full bg-primary px-6 py-3 font-medium text-background shadow-md transition-all hover:bg-primary-hover"
        >
          Läs mer om SEO {getPreposition(city)} {city}
        </Link>
      </div>
    </div>
  );
};

export default SEOSection;
