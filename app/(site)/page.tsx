import Hero from "@/components/sections/Hero";
import ReviewsBand from "@/components/sections/ReviewsBand";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import FaqAccordion from "@/components/sections/FaqAccordion";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactStrip from "@/components/sections/ContactStrip";
import { home } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <ReviewsBand />
      <ServicesGrid
        kicker={home.offer.kicker}
        heading={home.offer.heading}
        intro={home.offer.intro}
      />
      <ProcessSteps tone="band" />
      <ProjectsTeaser />
      <FaqAccordion
        heading={home.faq.heading}
        subheading={home.faq.subheading}
      />
      <AboutTeaser />
      <ReviewsStrip heading="What Our Customers Say" />
      <InstagramFeed />
      <ContactStrip />
    </>
  );
}
