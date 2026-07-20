import type { MetadataRoute } from "next";
import { services, areas } from "@/lib/data";

const BASE = "https://pfdomesticsolutions.com";

// Excluded on purpose:
//   /thank-you              — noindex; only reachable via the contact form.
//   /house-extensions-oxford — noindex paid-traffic landing page (see its metadata).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainRoutes = [
    "/",
    "/building-services",
    "/areas",
    "/faqs",
    "/about",
    "/contact-us",
    "/project-gallery",
    "/latest-from-us",
    ...services.map((s) => `/${s.slug}`),
    // Includes Marlow, which is orphaned in the nav but should still be discoverable.
    ...areas.map((a) => `/${a.slug}`),
  ];

  const entries: MetadataRoute.Sitemap = mainRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  // Legal page: keep indexable but low priority and rarely changing.
  entries.push({
    url: `${BASE}/cookie-policy-uk`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.1,
  });

  return entries;
}
