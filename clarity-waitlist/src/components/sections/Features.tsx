"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  ScanLine,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  MapPin,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: <ScanLine className="w-6 h-6" />,
    title: "AI That Sees Your Skin, Not Your Followers",
    description:
      "Trained on Indian skin tones. Not celebrity selfies. Not ring-lit studio shots. Your bare face, your real lighting, your actual concerns — analyzed by AI that actually understands melanin-rich skin.",
    size: "large" as FeatureSize,
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Routines That Won't Destroy Your Barrier",
    description:
      "We cap your routine at 3-4 steps unless a derm-reviewed protocol says otherwise. More products don't mean better skin — they mean more inflammation. Barrier-friendly. Evidence-backed.",
    size: "small" as FeatureSize,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Track Progress, Not Likes",
    description:
      "Weekly Clarity Score tracks acne, texture, hyperpigmentation, and barrier health. No filters. No flattery. Just data that tells you the truth — not what gets more engagement on the algorithm.",
    size: "small" as FeatureSize,
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Recommendations Without Sponsorships",
    description:
      "We'll tell you a ₹349 pharmacy cleanser works better for your skin than a ₹2,500 influencer brand. Because we don't take a single paisa from product companies. Period.",
    size: "small" as FeatureSize,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Built by People Who Get It",
    description:
      "Indian skin. Indian climate. Indian pigmentation concerns. Mumbai humidity. Delhi pollution. Bangalore hard water. We built Clarity because nobody else built it for us.",
    size: "small" as FeatureSize,
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Private. Period.",
    description:
      "Your face stays on your device. We don't sell your data, your selfies, or your routine to anyone. No ads. No data brokering. No creepy \"personalization\" that's actually surveillance.",
    size: "wide" as FeatureSize,
  },
];

type FeatureSize = "large" | "small" | "wide";

function FeatureCard({
  icon,
  title,
  description,
  size,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  size: FeatureSize;
  index: number;
}) {
  return (
    <ScrollReveal key={index} delay={index * 0.08} direction="scaleIn">
      <TiltCard>
        <div
          className={`group bg-white rounded-3xl p-6 md:p-8 border border-surface-100 shadow-premium hover:shadow-premium-lg transition-all duration-300 h-full card-lift relative overflow-hidden ${
            size === "large" ? "animated-border" : "hover:border-accent-100"
          }`}
        >
          {/* Subtle gradient highlight on hero card */}
          {size === "large" && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient opacity-60" />
          )}

          <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-100 group-hover:scale-105 transition-all duration-300">
            {icon}
          </div>
          <h3 className="font-display text-lg font-semibold text-ink mb-2.5">
            {title}
          </h3>
          <p className="text-ink-500 text-sm leading-relaxed">{description}</p>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}

export function Features() {
  return (
    <section id="features" className="section-padding bg-surface-50">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-accent-600 uppercase tracking-widest bg-accent-50 px-3 py-1 rounded-full">
              Features
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              The skincare coach that actually looks at{" "}
              <span className="gradient-text">your face</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto text-balance">
              Built for real people with real skin, real budgets, and zero tolerance
              for influencer nonsense.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => {
            const spanClass = feature.size === "large" ? "sm:col-span-2 lg:col-span-2" : feature.size === "wide" ? "sm:col-span-2 lg:col-span-3" : "";
            return (
              <div key={i} className={spanClass}>
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} size={feature.size} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
