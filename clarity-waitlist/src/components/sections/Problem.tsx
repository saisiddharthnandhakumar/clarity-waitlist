"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { Film, AlertTriangle, PackageOpen, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: <Film className="w-6 h-6" />,
    title: "Millions of skincare videos. Zero about YOUR face.",
    description:
      "You're drowning in GRWM Reels, YouTube Shorts hauls, and 30-second voiceovers telling you to buy five different serums. Every creator has a new \"holy grail\" every week. And none of them have ever looked at your skin. Gen Z feels worse about their skin after consuming online beauty content — not better. That's not failure. That's design.",
    stat: "93%",
    statLabel: "feel worse about their skin from online beauty standards",
    accentColor: "border-l-brand-500",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "The glow trap is real.",
    description:
      "It's called \"influencer inflammation\" — and nobody's talking about it. You layer a BHA, two serums, a retinol, and a toner because someone with ring lights said so. Your barrier screams. Your skin gets angry, red, and worse than when you started. You don't need a 10-step routine. You need a routine that's actually built for YOUR barrier.",
    stat: "1 in 2",
    statLabel: "Gen Z have damaged their barrier from over-exfoliation",
    accentColor: "border-l-warm-500",
  },
  {
    icon: <PackageOpen className="w-6 h-6" />,
    title: "You've built a product graveyard.",
    description:
      "That ₹850 serum you bought after a viral Reel? Used twice. The ₹600 moisturizer that \"everyone swears by\"? Broke you out by day three. The average skincare-curious Gen Z Indian wastes over ₹2,500 a year on half-used products. FOMO buying doesn't make your face card stronger — it just empties your wallet and your shelf.",
    stat: "₹2,500",
    statLabel: "average wasted on wrong products per year",
    accentColor: "border-l-amber-500",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Without data, you're just hoping.",
    description:
      "68% of people can't tell if their routine is actually working. You stare at the mirror. You take selfies. You zoom in. But you're judging your skin on vibes, not measurements. Skincare shouldn't be faith-based. You should know — with real numbers — whether things are getting better, worse, or just standing still.",
    stat: "68%",
    statLabel: "can't tell if their routine is actually working",
    accentColor: "border-l-blue-500",
  },
];

export function Problem() {
  return (
    <section id="problem" className="section-padding bg-surface-50 relative overflow-hidden">
      {/* Background orbs */}
      <BackgroundOrbs variant="warm" count={2} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-warm-600 uppercase tracking-widest bg-warm-50 px-3 py-1 rounded-full">
              The Skincare Industry Failed You
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              You&apos;re not bad at skincare.{" "}
              <span className="gradient-text">They made it impossible.</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto text-balance">
              A billion-dollar industry profits from your confusion. More products. More steps.
              More insecurity. Here&apos;s what they don&apos;t want you to realize.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TiltCard>
                <div
                  className={`group bg-white rounded-3xl p-6 md:p-8 border border-surface-100 shadow-premium hover:shadow-premium-lg transition-all duration-300 h-full border-l-[3px] border-l-transparent hover:${point.accentColor} card-lift`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0 text-brand-600 group-hover:scale-105 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-ink mb-2">
                        {point.title}
                      </h3>
                      <p className="text-ink-500 text-sm leading-relaxed mb-4">
                        {point.description}
                      </p>
                      <div className="flex items-baseline gap-2 pt-3 border-t border-surface-100">
                        <span className="text-2xl font-display font-semibold text-brand-600">
                          {point.stat}
                        </span>
                        <span className="text-xs text-ink-500">
                          {point.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
