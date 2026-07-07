/**
 * Age Gate configuration. In production these values are intended to be
 * managed from the CMS Admin Panel (Age Verification settings) rather than
 * hardcoded — this module is the placeholder single source of truth until
 * that backend exists.
 */
export const ageGateConfig = {
  minimumAge: 18,
  sessionDurationDays: 30,
  requireCheckbox: false,
  leaveWebsiteUrl: "https://www.google.com",
  cookieSameSite: "lax" as const,
};

export const AGE_GATE_COOKIE = "winston_age_verified";
export const AGE_GATE_PATH = "/age-gate";

/** True if `pathname` is the age-gate route itself (any locale). */
export function isAgeGatePath(pathname: string): boolean {
  return pathname === AGE_GATE_PATH || pathname === `/en${AGE_GATE_PATH}`;
}

/**
 * Validates that a redirect target is a safe, same-origin relative path
 * (prevents open-redirect via a crafted `redirect` query parameter).
 */
export function isSafeRedirectTarget(target: string): boolean {
  if (!target.startsWith("/")) return false;
  if (target.startsWith("//")) return false;
  if (target.includes("://")) return false;
  return true;
}
