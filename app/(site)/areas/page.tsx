import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import AreasGrid from "@/components/sections/AreasGrid";
import ContactStrip from "@/components/sections/ContactStrip";
import { areasHub, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description: areasHub.intro,
  alternates: { canonical: "/areas" },
};

const contactLinkClass =
  "underline underline-offset-2 decoration-white/50 transition-colors hover:text-accent hover:decoration-accent";

export default function Page() {
  return (
    <>
      <PageHeader
        heading={areasHub.heading}
        intro={
          <>
            If you are also in the local area and cannot find where you live on
            this list don&apos;t worry: email{" "}
            <a href={`mailto:${site.email}`} className={contactLinkClass}>
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className={contactLinkClass}>
              {site.phone}
            </a>{" "}
            and we will see if we can help.
          </>
        }
      />
      <AreasGrid />
      <ContactStrip />
    </>
  );
}
