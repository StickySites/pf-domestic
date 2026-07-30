import type { Metadata } from "next";
import Container from "@/components/primitives/Container";
import {
  HouseSingle,
  HouseMulti,
  Blueprint,
  ClipboardCheck,
} from "@/components/primitives/icons";
import LandingHero from "@/components/sections/LandingHero";
import ReviewsBand from "@/components/sections/ReviewsBand";
import CostEstimator from "@/components/sections/CostEstimator";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactForm from "@/components/sections/ContactForm";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import InstagramFeed from "@/components/sections/InstagramFeed";
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

const handledIcons = {
  houseSingle: HouseSingle,
  houseMulti: HouseMulti,
  blueprint: Blueprint,
  clipboard: ClipboardCheck,
} as const;

export default function Page() {
  return (
    <>
      <LandingHero />

      <ReviewsBand />

      <div id="get-a-quote">
        <ContactForm
          heading={landingOxford.form.heading}
          subheading={landingOxford.form.subheading}
          showImage={false}
          tone="white"
        />
      </div>

      <section className="bg-band">
        <Container className="py-14 sm:py-16">
          <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl">
            {landingOxford.handled.heading}
          </h2>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {landingOxford.handled.items.map((item) => {
              const Icon = handledIcons[item.icon];
              return (
                <li
                  key={item.label}
                  className="group flex flex-col items-center gap-4 rounded-lg border border-line border-t-[3px] border-t-accent bg-white px-5 py-7 text-center shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-band text-accent transition-colors group-hover:bg-accent/15"
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="space-y-1.5">
                    <p className="font-heading text-sm font-semibold leading-snug text-ink sm:text-base">
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed text-body">{item.blurb}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CostEstimator
        ctaHref="#get-a-quote"
        ctaLabel="Get a Formal Quote"
      />

      <ProjectsTeaser />

      <ProcessSteps tone="band" />

      <FaqAccordion
        heading={landingOxford.faq.heading}
        subheading={landingOxford.faq.subheading}
        tone="white"
      />

      <ReviewsStrip heading={landingOxford.reviewsHeading} tone="band" />

      <InstagramFeed tone="white" />
    </>
  );
}
