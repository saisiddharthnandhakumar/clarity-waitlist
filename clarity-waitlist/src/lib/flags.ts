import { createPostHogAdapter } from "@flags-sdk/posthog";
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

// ── PostHog Adapter ──────────────────────────────────────────────────────────
// Uses createPostHogAdapter so we can pass NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
// explicitly, avoiding a redundant NEXT_PUBLIC_POSTHOG_KEY env var.
const adapter = createPostHogAdapter({
  postHogKey: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!,
  postHogOptions: {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    personalApiKey: process.env.POSTHOG_PERSONAL_API_KEY,
    featureFlagsPollingInterval: 10_000,
    disableGeoip: true,
  },
});

// ── Feature Flags ────────────────────────────────────────────────────────────
// Each flag is a typed definition backed by the PostHog adapter.
// Usage:  const isEnabled = await myFlag();
// Returns the flag's boolean value (or defaultValue on error/miss).

export const myFlag = flag({
  key: "my-flag",
  defaultValue: false,
  adapter: adapter.isFeatureEnabled(),
  identify: () => identify(),
});
