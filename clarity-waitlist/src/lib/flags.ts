import { postHogAdapter } from "@flags-sdk/posthog";
import { flag } from "flags/next";

// ── Identify ─────────────────────────────────────────────────────────────────
// Determines the user identity for PostHog feature flag evaluation.
// On a landing page without auth, this uses "anonymous" by default.
// Replace with a real distinct ID (e.g. from cookies, session, or auth) later.
export function identify(distinctId?: string) {
  return {
    distinctId: distinctId ?? "anonymous",
  };
}

// ── Feature Flags ────────────────────────────────────────────────────────────
// Each flag is a typed definition backed by the PostHog adapter.
// Usage:  const isEnabled = await myFlag();
// Returns the flag's boolean value (or defaultValue on error/miss).

export const myFlag = flag({
  key: "my-flag",
  defaultValue: false,
  adapter: postHogAdapter.isFeatureEnabled(),
  identify: () => identify(),
});
