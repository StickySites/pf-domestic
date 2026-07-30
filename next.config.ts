import type { NextConfig } from "next";

/**
 * Security headers for all routes.
 * CSP allows: self-hosted assets, Google Maps embeds, GTM/GA4 + Microsoft Clarity
 * (only loaded after cookie consent), optional Cloudflare Turnstile, and the
 * Jotform Instagram website widget on the homepage (includes Instagram/Facebook
 * CDN hosts for post images and profile photos).
 * Next.js still needs 'unsafe-inline' for some runtime scripts/styles.
 *
 * 'unsafe-eval' is DEV ONLY — React needs eval() for debugging call stacks in
 * `next dev`. Production / Cloudflare Workers builds stay without it.
 * Keep headers here (next.config) as the single source of truth; don't also set
 * a conflicting CSP in Cloudflare Transform Rules.
 */
const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
  [
    "script-src",
    "'self'",
    "'unsafe-inline'",
    ...(isDev ? ["'unsafe-eval'"] : []),
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://*.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://www.clarity.ms",
    "https://*.clarity.ms",
    "https://scripts.clarity.ms",
    "https://challenges.cloudflare.com",
    "https://www.jotform.com",
  ].join(" "),
  ["style-src", "'self'", "'unsafe-inline'", "https://fonts.googleapis.com"].join(
    " ",
  ),
  [
    "img-src",
    "'self'",
    "data:",
    "blob:",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://*.googletagmanager.com",
    "https://www.clarity.ms",
    "https://*.clarity.ms",
    "https://c.bing.com",
    "https://maps.gstatic.com",
    "https://maps.googleapis.com",
    "https://*.google.com",
    "https://*.googleapis.com",
    "https://pfdomesticsolutions.com",
    // Jotform Instagram widget: Jotform hosts + Instagram/Facebook CDNs for posts & PFPs
    "https://www.jotform.com",
    "https://cdn.jotfor.ms",
    "https://*.jotform.com",
    "https://*.cdninstagram.com",
    "https://*.fbcdn.net",
    "https://instagram.com",
    "https://www.instagram.com",
  ].join(" "),
  [
    "font-src",
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
    "https://cdn.jotfor.ms",
  ].join(" "),
  [
    "media-src",
    "'self'",
    "https://www.jotform.com",
    "https://cdn.jotfor.ms",
    "https://*.jotform.com",
    "https://*.cdninstagram.com",
    "https://*.fbcdn.net",
  ].join(" "),
  [
    "connect-src",
    "'self'",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://*.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://*.googletagmanager.com",
    "https://www.clarity.ms",
    "https://*.clarity.ms",
    "https://n.clarity.ms",
    "https://www.jotform.com",
    "https://api.jotform.com",
    "https://events.jotform.com",
    "https://cdn.jotfor.ms",
    "https://*.jotform.com",
  ].join(" "),
  [
    "frame-src",
    "'self'",
    "https://maps.google.com",
    "https://www.google.com",
    "https://www.googletagmanager.com",
    "https://challenges.cloudflare.com",
    "https://www.jotform.com",
    "https://form.jotform.com",
    "https://instagram.com",
    "https://www.instagram.com",
  ].join(" "),
  ["worker-src", "'self'", "blob:"].join(" "),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Local assets live under /public (Job-Photos, Site-Images, Brand-Assets, etc.).
    // remotePatterns stays as a hotlink fallback for any asset not bundled locally.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pfdomesticsolutions.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/project-gallery/exterior-brick-painting",
        destination: "/project-gallery/guttering-rain-collector",
        permanent: true,
      },
      {
        source: "/project-gallery/garden-room",
        destination: "/project-gallery",
        permanent: true,
      },
      {
        source: "/project-gallery/garage-conversion",
        destination: "/project-gallery",
        permanent: true,
      },
      {
        source: "/project-gallery/extension-interior-fit-out",
        destination: "/project-gallery",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
