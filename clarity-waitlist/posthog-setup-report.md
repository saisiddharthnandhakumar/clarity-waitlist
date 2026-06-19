<wizard-report>
# PostHog post-wizard report

The wizard has completed a full PostHog integration for the Clarity waitlist landing page. PostHog is now initialized client-side via a `PostHogProvider` component that wraps the entire app, and server-side via a `posthog-node` client used in the waitlist API route. A reverse proxy (`/ingest/*` → `eu.i.posthog.com`) is configured in `next.config.ts` to reduce tracking-blocker interception. All existing Google Analytics event calls (`trackEvent`) now simultaneously send events to PostHog, and new direct `posthog.identify` calls link the user's email to their session on successful signup. The server-side API route captures a `server_waitlist_signup` event and identifies the user by email upon each new signup.

## Events

| Event Name | Description | File |
|---|---|---|
| `cta_click` | User clicks a Hero or CTABanner CTA button (property: `location`) | `Hero.tsx`, `CTABanner.tsx` |
| `mobile_cta_clicked` | User taps the mobile sticky "Get Early Access" floating CTA | `MobileStickyCTA.tsx` |
| `form_complete` | User submits the waitlist form | `Waitlist.tsx` |
| `waitlist_signup` | Waitlist form submission succeeded; user added to list | `Waitlist.tsx` |
| `waitlist_signup_duplicate` | Form rejected — email already on the waitlist (409) | `Waitlist.tsx` |
| `form_error` | Form submission failed with a server or network error | `Waitlist.tsx` |
| `faq_interaction` | User opens a FAQ item (properties: `question`, `index`) | `FAQ.tsx` |
| `server_waitlist_signup` | Server-side confirmation: new entry written to Supabase | `app/api/waitlist/route.ts` |

## Next steps

A dashboard and insights have been created in PostHog to monitor user behaviour:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/205446/dashboard/759737)
- [Waitlist Signups Over Time](https://eu.posthog.com/project/205446/insights/qBiLypS8)
- [Waitlist Signup Conversion Funnel](https://eu.posthog.com/project/205446/insights/UZh3Bf15)
- [CTA Clicks by Location](https://eu.posthog.com/project/205446/insights/fup1G8R3)
- [Form Submissions vs Errors](https://eu.posthog.com/project/205446/insights/EdrnPTSw)
- [FAQ Engagement](https://eu.posthog.com/project/205446/insights/TwCavAau)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any onboarding/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Confirm the returning-visitor path also calls `identify` — currently `posthog.identify` is called only on fresh signup. If you add login/auth later, ensure that flow also calls `identify`.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
