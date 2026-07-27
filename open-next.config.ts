import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default config — no KV/R2/D1 caching overrides needed for this project yet.
// See https://opennext.js.org/cloudflare/caching if ISR/on-demand revalidation
// is added later (e.g. for a live Google Reviews fetch layer).
export default defineCloudflareConfig();
