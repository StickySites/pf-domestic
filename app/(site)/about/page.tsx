import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import AboutContent from "@/components/sections/AboutContent";
import ContactStrip from "@/components/sections/ContactStrip";
import { about } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: about.intro,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={about.heading} />
      <AboutContent />
      <ContactStrip />
    </>
  );
}
