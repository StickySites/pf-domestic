/**
 * Optional Cloudflare Turnstile verification.
 * When TURNSTILE_SECRET_KEY is unset, verification is skipped (dev / soft launch).
 */

export async function verifyTurnstile(
  token: string,
  remoteIp?: string | null,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: true };
  }

  if (!token) {
    return { ok: false, error: "Please complete the security check." };
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      },
    );
    const data = (await res.json()) as { success?: boolean };
    if (!data.success) {
      return { ok: false, error: "Security check failed. Please try again." };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Security check unavailable. Please try again shortly.",
    };
  }
}
