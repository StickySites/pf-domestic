import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CostEstimatorStrip from "@/components/sections/CostEstimatorStrip";
import ReviewsStrip from "@/components/sections/ReviewsStrip";
import ContactStrip from "@/components/sections/ContactStrip";
import { buildingServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Building Services",
  description: buildingServices.intro,
  alternates: { canonical: "/building-services" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        heading={buildingServices.heading}
        intro={buildingServices.intro}
      />
      <ProcessSteps tone="band" />
      <ServicesGrid heading="Our Services" />
      <CostEstimatorStrip />
      <ReviewsStrip heading="What Our Customers Say" tone="white" />
      <ContactStrip />
    </>
  );
}
