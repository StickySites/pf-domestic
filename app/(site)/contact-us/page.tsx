import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactStrip from "@/components/sections/ContactStrip";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact P&F Domestic Solutions today for a free, no-obligation quote on your building, extension or conversion project.",
  alternates: { canonical: "/contact-us" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={contact.heading} intro={contact.phoneLine} />
      <ContactForm />
      <FaqAccordion
        heading="Get Answers to Your Questions"
        subheading={contact.faqHeading}
        tone="band"
      />
      <ContactStrip />
    </>
  );
}
