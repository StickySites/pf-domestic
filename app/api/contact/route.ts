import { Resend } from "resend";
import { site } from "@/lib/data";
import {
  MAX_FORM_AGE_MS,
  MIN_SUBMIT_MS,
  parseContactBody,
} from "@/lib/contact/validate";
import {
  checkRateLimit,
  pruneRateLimitBuckets,
} from "@/lib/contact/rate-limit";
import { verifyTurnstile } from "@/lib/contact/turnstile";

export const runtime = "nodejs";

function clientIp(request: Request): string {
  // Cloudflare (Workers/OpenNext) sets cf-connecting-ip; Vercel and other
  // proxies typically set x-forwarded-for. Check both so this keeps working
  // across hosts.
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function json(status: number, body: Record<string, unknown>, headers?: HeadersInit) {
  return Response.json(body, { status, headers });
}

export async function POST(request: Request) {
  pruneRateLimitBuckets();

  const ip = clientIp(request);
  const limit = checkRateLimit(`contact:${ip}`);
  if (!limit.allowed) {
    return json(
      429,
      { ok: false, error: "Too many requests. Please try again later." },
      { "Retry-After": String(limit.retryAfterSec) },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid request." });
  }

  const parsed = parseContactBody(body);
  if (!parsed.ok) {
    return json(400, { ok: false, error: parsed.error });
  }

  const data = parsed.data;

  // Honeypot filled → pretend success so bots don't learn.
  if (data.company) {
    return json(200, { ok: true });
  }

  const age = Date.now() - data.formStartedAt;
  if (age < MIN_SUBMIT_MS || age > MAX_FORM_AGE_MS) {
    // Timing anomaly: treat like honeypot (silent success) for too-fast bots;
    // reject clearly only for absurdly stale tokens.
    if (age > MAX_FORM_AGE_MS) {
      return json(400, {
        ok: false,
        error: "This form expired. Please refresh the page and try again.",
      });
    }
    return json(200, { ok: true });
  }

  const turnstile = await verifyTurnstile(data.turnstileToken, ip);
  if (!turnstile.ok) {
    return json(400, { ok: false, error: turnstile.error });
  }

  const dryRun = process.env.CONTACT_FORM_DRY_RUN === "1";
  const apiKey = process.env.RESEND_API_KEY;
  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "P&F Domestic Solutions <onboarding@resend.dev>";

  const subject = `Website enquiry from ${data.firstName}`;
  const text = [
    `Name: ${data.firstName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Newsletter: ${data.newsletter ? "Yes" : "No"}`,
    "",
    "Comments:",
    data.comments || "(none)",
  ].join("\n");

  if (dryRun || !apiKey) {
    if (!apiKey && process.env.NODE_ENV === "production" && !dryRun) {
      console.error("[contact] RESEND_API_KEY is not configured");
      return json(503, {
        ok: false,
        error: "The contact form is temporarily unavailable. Please call us instead.",
      });
    }
    console.info("[contact] dry-run / missing key — enquiry not emailed:", {
      to,
      subject,
      text,
    });
    return json(200, { ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      text,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return json(502, {
        ok: false,
        error: "We couldn't send your message. Please try again or call us.",
      });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return json(500, {
      ok: false,
      error: "Something went wrong. Please try again or call us.",
    });
  }
}
