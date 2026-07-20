import type { Metadata } from "next";
import Container from "@/components/primitives/Container";
import PageHeader from "@/components/sections/PageHeader";
import ContactStrip from "@/components/sections/ContactStrip";
import { cookiePolicy, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy (UK)",
  description: cookiePolicy.intro,
  alternates: { canonical: "/cookie-policy-uk" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={cookiePolicy.heading} />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-body">
            <p className="text-lg">{cookiePolicy.intro}</p>

            {cookiePolicy.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-ink">
                {cookiePolicy.contactHeading}
              </h2>
              <p>{cookiePolicy.contactBody}</p>
              <address className="not-italic">
                {site.name}
                <br />
                {site.address}
                <br />
                United Kingdom
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="text-blue hover:underline"
                >
                  {site.email}
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
