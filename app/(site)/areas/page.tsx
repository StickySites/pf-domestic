import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import AreasGrid from "@/components/sections/AreasGrid";
import ContactStrip from "@/components/sections/ContactStrip";
import { areasHub } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description: areasHub.intro,
  alternates: { canonical: "/areas" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={areasHub.heading} intro={areasHub.intro} />
      <AreasGrid />
      <ContactStrip />
    </>
  );
}
