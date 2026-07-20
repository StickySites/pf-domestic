import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { services } from "@/lib/data";

const service = services.find((s) => s.slug === "garage-conversions")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.cardBlurb,
  alternates: { canonical: `/${service.slug}` },
};

export default function Page() {
  return <ServicePage service={service} />;
}
