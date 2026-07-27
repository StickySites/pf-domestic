export type ContactPayload = {
  firstName: string;
  phone: string;
  email: string;
  comments: string;
  newsletter: boolean;
  company: string;
  /** Epoch ms when the form was rendered (timing honeypot). */
  formStartedAt: number;
  /** Cloudflare Turnstile token, when configured. */
  turnstileToken: string;
};

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** UK-friendly: digits, spaces, +, (), -, min 10 digits once stripped. */
const PHONE_RE = /^[+()\d\s-]{10,20}$/;

function str(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function parseContactBody(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const raw = body as Record<string, unknown>;

  const firstName = str(raw.firstName, 80);
  const phone = str(raw.phone, 30);
  const email = str(raw.email, 120).toLowerCase();
  const comments = str(raw.comments, 2000);
  const company = str(raw.company, 120);
  const newsletter = Boolean(raw.newsletter);
  const turnstileToken = str(raw.turnstileToken, 2048);

  const formStartedAt =
    typeof raw.formStartedAt === "number"
      ? raw.formStartedAt
      : Number(raw.formStartedAt);

  if (!firstName) {
    return { ok: false, error: "Please enter your first name." };
  }
  if (!phone || !PHONE_RE.test(phone) || phone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!Number.isFinite(formStartedAt) || formStartedAt <= 0) {
    return { ok: false, error: "Invalid form submission. Please refresh and try again." };
  }

  return {
    ok: true,
    data: {
      firstName,
      phone,
      email,
      comments,
      newsletter,
      company,
      formStartedAt,
      turnstileToken,
    },
  };
}

/** Minimum time a human needs to fill the form (ms). */
export const MIN_SUBMIT_MS = 2_000;
/** Ignore absurdly old timestamps (e.g. replayed payloads). */
export const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 6; // 6 hours
