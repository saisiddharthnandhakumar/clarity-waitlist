import { Suspense } from "react";
import { myFlag } from "@/lib/flags";

// ── Inner (async) ────────────────────────────────────────────────────────────
async function FlagStatus() {
  const isEnabled = await myFlag();

  return (
    <span
      className={
        isEnabled
          ? "text-brand-600 dark:text-brand-400"
          : "text-ink-400 dark:text-ink-500"
      }
    >
      <span
        className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${
          isEnabled ? "bg-brand-500 shadow-[0_0_8px_rgba(90,163,211,0.5)]" : "bg-ink-300"
        }`}
      />
      Feature flag <strong className="font-semibold text-ink-900 dark:text-ink-100">&quot;my-flag&quot;</strong> is{" "}
      <strong className="font-semibold">
        {isEnabled ? "ON" : "OFF"}
      </strong>
    </span>
  );
}

// ── Public wrapper (with Suspense) ───────────────────────────────────────────
export function FeatureFlagDemo() {
  return (
    <section className="py-6 border-t border-ink-100 dark:border-ink-800/50">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 text-sm font-body text-ink-500">
          <Suspense
            fallback={
              <span className="text-ink-400">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-ink-200 animate-pulse mr-2" />
                Loading feature flags…
              </span>
            }
          >
            <FlagStatus />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
