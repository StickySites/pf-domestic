import type { Metadata } from "next";
import Container from "@/components/primitives/Container";
import LandingHero from "@/components/sections/LandingHero";
import CostEstimator from "@/components/sections/CostEstimator";
import ContactForm from "@/components/sections/ContactForm";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import { landingOxford } from "@/lib/data";

// Paid-traffic (Google Ads) landing page: noindex to avoid cannibalising the organic
// Oxford pages (/building-services-in-oxford, /house-extentions). Ads still serves and
// quality-scores it regardless of indexation. `follow: true` lets crawlers traverse any
// links. Also kept out of sitemap.ts. No self-canonical — it would contradict noindex.
export const metadata: Metadata = {
  title: "House Extensions in Oxford",
  description: landingOxford.strapline,
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <LandingHero />

      <section className="bg-white">
        <Container className="py-14">
          <h2 className="text-center text-2xl font-bold text-ink">
            {landingOxford.handled.heading}
          </h2>
          <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landingOxford.handled.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line bg-band p-5 text-center text-sm font-semibold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CostEstimator
        ctaHref="#get-a-quote"
        ctaLabel="Get a Formal Quote"
      />

      <div id="get-a-quote">
        <ContactForm
          heading={landingOxford.form.heading}
          subheading={landingOxford.form.subheading}
          showImage={false}
        />
      </div>

      <ReviewsStrip heading={landingOxford.reviewsHeading} />
    </>
  );
}
