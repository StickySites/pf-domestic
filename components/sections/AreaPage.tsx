import Container from "@/components/primitives/Container";
import PageHeader from "@/components/sections/PageHeader";
import AreaIntro from "@/components/sections/AreaIntro";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import TownProfile from "@/components/sections/TownProfile";
import CtaBanner from "@/components/sections/CtaBanner";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import ContactStrip from "@/components/sections/ContactStrip";
import { type Area, images } from "@/lib/data";

// Shared template for the four area pages. Oxford (showFaqs) additionally renders
// a hero CTA banner and an FAQ accordion.
export default function AreaPage({ area }: { area: Area }) {
  return (
    <>
      <PageHeader heading={area.heading} image={area.image ?? images.doors} />
      <AreaIntro paragraphs={area.intro} />
      {area.showFaqs && (
        <CtaBanner heading="Planning a project in your area? Get a free, no-obligation quote today." />
      )}
      <ServiceHighlights
        items={area.serviceHighlights}
        heading={area.highlightsHeading}
      />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-5 text-body">
            {area.challenges && (
              <>
                <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                  {area.challenges.heading}
                </h2>
                <p>{area.challenges.intro}</p>
                <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                  {area.challenges.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}
            {area.outro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </section>
      <TownProfile
        heading={area.townHeading}
        mapQuery={area.townMapQuery}
        paragraphs={area.townParagraphs}
      />
      {area.showFaqs && <FaqAccordion subheading={area.faqSubheading} />}
      <ReviewsStrip heading="What Our Customers Say" tone="band" />
      <ContactStrip />
    </>
  );
}
