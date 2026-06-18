"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { AlertCircle, ShoppingBag, TrendingDown, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Too much conflicting advice",
    description:
      "Instagram, YouTube, Reddit, TikTok — everyone says something different. It's overwhelming trying to figure out who to trust and what actually works for your skin.",
    stat: "73%",
    statLabel: "feel overwhelmed by skincare advice",
    accentColor: "border-l-brand-500",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Expensive trial and error",
    description:
      "You've spent money on products that didn't work, sat on your shelf, or made things worse. Without understanding your skin, every purchase is a guess.",
    stat: "₹2,500",
    statLabel: "average wasted on wrong products/year",
    accentColor: "border-l-amber-500",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "No clear progress tracking",
    description:
      "You try a new routine for weeks but have no idea if it's actually helping. Without tracking, you can't know what's working and what's not.",
    stat: "68%",
    statLabel: "can't tell if their routine is working",
    accentColor: "border-l-blue-500",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Skincare feels confusing",
    description:
      "Niacinamide, retinol, AHAs, BHAs — the terminology alone is intimidating. You want better skin but don't know where to start or what routine fits you.",
    stat: "1 in 2",
    statLabel: "people don't know where to start with skincare",
    accentColor: "border-l-purple-500",
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
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
              We Get It
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              Skincare shouldn&apos;t feel{" "}
              <span className="gradient-text">this hard</span>
            </h2>
            <p className="text-ink-400 text-lg max-w-xl mx-auto text-balance">
              Millions of people struggle with the same frustrations. You&apos;re
              not alone — and there&apos;s a better way.
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
                      <p className="text-ink-300 text-sm leading-relaxed mb-4">
                        {point.description}
                      </p>
                      <div className="flex items-baseline gap-2 pt-3 border-t border-surface-100">
                        <span className="text-2xl font-display font-semibold text-brand-600">
                          {point.stat}
                        </span>
                        <span className="text-xs text-ink-300">
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
