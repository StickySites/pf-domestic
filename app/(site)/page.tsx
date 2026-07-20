import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FaqAccordion from "@/components/sections/FaqAccordion";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ContactStrip from "@/components/sections/ContactStrip";
import { home } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid
        kicker={home.offer.kicker}
        heading={home.offer.heading}
        intro={home.offer.intro}
      />
      <FaqAccordion
        heading={home.faq.heading}
        subheading={home.faq.subheading}
      />
      <AboutTeaser />
      <ContactStrip />
    </>
  );
}
