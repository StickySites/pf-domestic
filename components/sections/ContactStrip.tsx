import Container from "@/components/primitives/Container";
import { Phone, Mail } from "@/components/primitives/icons";
import { site } from "@/lib/data";

type ContactStripProps = {
  heading?: string;
  showEmail?: boolean;
};

// Contact band that sits above the footer on most pages.
export default function ContactStrip({
  heading = "Contact Us For a Free Quote:",
  showEmail = true,
}: ContactStripProps) {
  return (
    <section className="bg-accent text-ink">
      <Container className="flex flex-col items-center justify-center gap-4 py-8 text-center sm:flex-row sm:gap-10 sm:text-left">
        <h2 className="text-xl font-bold sm:text-2xl">{heading}</h2>
        <div className="flex max-w-full flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-lg font-semibold hover:underline"
          >
            <Phone className="h-5 w-5 shrink-0" />
            {site.phoneDisplay}
          </a>
          {showEmail && (
            <a
              href={`mailto:${site.email}`}
              className="flex max-w-full items-center gap-2 break-all text-lg font-semibold hover:underline sm:break-normal"
            >
              <Mail className="h-5 w-5 shrink-0" />
              {site.email}
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
