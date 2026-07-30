import type { Metadata } from "next";
import AreaPage from "@/components/sections/AreaPage";
import { areas } from "@/lib/data";

const area = areas.find((a) => a.slug === "building-services-in-amersham")!;

export const metadata: Metadata = {
  title: area.navLabel,
  description: area.intro[0],
  alternates: { canonical: `/${area.slug}` },
};

export default function Page() {
  return <AreaPage area={area} />;
}
