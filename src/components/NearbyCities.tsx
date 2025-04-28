import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { sitemapCities } from "../app/sitemap";
import { cityClusters } from "../app/utils";

export default function NearbyCities({ currentSlug }: { currentSlug: string }) {
  const cluster = cityClusters[currentSlug];
  if (!cluster) return null;

  const getCityName = (slug: string) => sitemapCities.find((c) => c.slug === slug)?.name || slug;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Vi jobbar även i närliggande orter</h2>
        <p className="mb-10 text-lg text-gray-700 dark:text-gray-300">
          Förutom <strong>{cluster.main}</strong> samarbetar vi med företag i regionen. Klicka nedan för att läsa mer:
        </p>

        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
          {cluster.nearby.slice(0, 3).map((slug) => (
            <div
              key={slug}
              className="rounded-2xl bg-white px-6 py-4 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 text-center"
            >
              <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Webbyrå i {getCityName(slug)}
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href={`/${slug}`}
                  className="inline-flex items-center justify-center gap-1 text-sm text-blue-600 hover:underline"
                  aria-label={`Gå till stadssidan för ${getCityName(slug)}`}
                >
                  Gå till stadssidan <FaArrowRight size={12} />
                </Link>
                <Link
                  href={`/${slug}/seo`}
                  className="inline-flex items-center justify-center gap-1 text-sm text-blue-500 hover:underline"
                  aria-label={`Läs om SEO i ${getCityName(slug)}`}
                >
                  SEO i {getCityName(slug)} <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
