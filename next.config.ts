import type { NextConfig } from "next";

/**
 * Security headers for all routes.
 * CSP allows: self-hosted assets, Google Maps embeds, GTM/GA4 + Microsoft Clarity
 * (only loaded after cookie consent), and optional Cloudflare Turnstile.
 * Next.js still needs 'unsafe-inline' for some runtime scripts/styles.
 */
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
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://*.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://www.clarity.ms",
    "https://*.clarity.ms",
    "https://scripts.clarity.ms",
    "https://challenges.cloudflare.com",
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
  ].join(" "),
  ["font-src", "'self'", "data:", "https://fonts.gstatic.com"].join(" "),
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
  ].join(" "),
  [
    "frame-src",
    "'self'",
    "https://maps.google.com",
    "https://www.google.com",
    "https://www.googletagmanager.com",
    "https://challenges.cloudflare.com",
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
