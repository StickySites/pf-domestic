import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import GalleryGrid from "@/components/sections/GalleryGrid";
import ContactStrip from "@/components/sections/ContactStrip";
import { gallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: gallery.intro,
  alternates: { canonical: "/project-gallery" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={gallery.heading} intro={gallery.intro} />
      <GalleryGrid />
      <ContactStrip />
    </>
  );
}
