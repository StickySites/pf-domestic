import type { MetadataRoute } from "next";
import { services, areas, galleryCaseStudyProjects } from "@/lib/data";

const BASE = "https://pfdomesticsolutions.com";

// Excluded on purpose:
//   /thank-you              — noindex; only reachable via the contact form.
//   /house-extensions-oxford — noindex paid-traffic landing page (see its metadata).
//   galleryOnly projects    — shown on /project-gallery grid only, no case-study URL.
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
    "/project-cost-estimator",
    ...services.map((s) => `/${s.slug}`),
    // Includes Marlow, which is orphaned in the nav but should still be discoverable.
    ...areas.map((a) => `/${a.slug}`),
    ...galleryCaseStudyProjects().map((p) => `/project-gallery/${p.slug}`),
  ];

  const entries: MetadataRoute.Sitemap = mainRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/project-gallery/")
          ? 0.6
          : 0.7,
  }));

  // Policy pages: keep indexable but low priority and rarely changing.
  for (const route of ["/privacy-policy", "/cookie-policy-uk"]) {
    entries.push({
      url: `${BASE}${route}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    });
  }

  return entries;
}
