import type { Metadata } from "next";
import Container from "@/components/primitives/Container";
import PageHeader from "@/components/sections/PageHeader";
import ContactStrip from "@/components/sections/ContactStrip";
import { privacyPolicy, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyPolicy.intro,
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={privacyPolicy.heading} />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-body">
            <p className="text-lg">{privacyPolicy.intro}</p>

            {privacyPolicy.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-ink">
                {privacyPolicy.contactHeading}
              </h2>
              <p>{privacyPolicy.contactBody}</p>
              <address className="not-italic">
                {site.name}
                <br />
                {site.address}
                <br />
                United Kingdom
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline hover:text-accent"
                >
                  {site.email}
                </a>
                <br />
                <a href={site.phoneHref} className="font-medium text-ink underline hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </address>
            </div>
          </div>
        </Container>
      </section>
      <ContactStrip />
    </>
  );
}
