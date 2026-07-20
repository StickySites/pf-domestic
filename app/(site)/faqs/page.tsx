import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactStrip from "@/components/sections/ContactStrip";
import { faqsPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the most common questions about our building, extension, conversion and refurbishment services.",
  alternates: { canonical: "/faqs" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={faqsPage.heading} />
      <FaqAccordion
        heading={faqsPage.heading}
        subheading={faqsPage.subheading}
        tone="white"
      />
      <ContactStrip />
    </>
  );
}
