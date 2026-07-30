"use client";

import Script from "next/script";
import Container from "@/components/primitives/Container";
import SectionHeading from "@/components/primitives/SectionHeading";
import Button from "@/components/primitives/Button";
import { site } from "@/lib/data";

const WIDGET_ID = "JFWebsiteWidget-019fb262fea070008ef3dd50a56a358f9722";
const WIDGET_SRC =
  "https://www.jotform.com/website-widgets/embed/019fb262fea070008ef3dd50a56a358f9722";

type Props = {
  heading?: string;
  tone?: "white" | "band";
};

export default function InstagramFeed({
  heading = "Latest from Instagram",
  tone = "white",
}: Props) {
  return (
    <section className={tone === "band" ? "bg-band" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <SectionHeading
          kicker="Social"
          heading={heading}
        />

        <div className="mt-10" aria-label="Instagram feed">
          <div id={WIDGET_ID} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={site.instagram} variant="outline" external>
            Follow us on Instagram
          </Button>
        </div>
      </Container>

      <Script src={WIDGET_SRC} strategy="lazyOnload" />
    </section>
  );
}
