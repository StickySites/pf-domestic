import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CostEstimator from "@/components/sections/CostEstimator";
import ContactStrip from "@/components/sections/ContactStrip";

export const metadata: Metadata = {
  title: "Project Cost Estimator",
  description:
    "Get an instant indicative budget for house extensions, loft conversions, garage conversions, garden rooms and refurbishments across Oxfordshire and the South East.",
  alternates: { canonical: "/project-cost-estimator" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        heading="Project Cost Estimator"
        intro="Get an instant indicative budget for your home improvement project."
      />
      <CostEstimator showTitle={false} ctaHref="/contact-us" />
      <ContactStrip />
    </>
  );
}
