"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  ScanLine,
  Lightbulb,
  TrendingUp,
  ListChecks,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <ScanLine className="w-6 h-6" />,
    title: "Personalized Analysis",
    description:
      "Understand your skin more clearly. Our AI identifies visible concerns and gives you a detailed breakdown of what's affecting your skin.",
    size: "large" as FeatureSize,
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Smart Product Recommendations",
    description:
      "Get product suggestions based on your specific concerns — not generic recommendations. Stop buying products that don't work for you.",
    size: "small" as FeatureSize,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Compare scans over time. See exactly what's improving, what's not, and adjust your routine based on real data, not guesswork.",
    size: "small" as FeatureSize,
  },
  {
    icon: <ListChecks className="w-6 h-6" />,
    title: "Simple Routines",
    description:
      "Know what to use, when to use it, and in what order. Morning and evening routines designed around your specific skin concerns.",
    size: "small" as FeatureSize,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Beginner-Friendly",
    description:
      "Designed for people who don't already know skincare. No complicated terminology, no overwhelming choices — just clear, simple guidance.",
    size: "small" as FeatureSize,
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Private & Secure",
    description:
      "Your photos and data are encrypted and never shared. We take your privacy seriously — this is your personal skin journey.",
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
  const sizeClasses = {
    large: "sm:col-span-2 lg:col-span-2",
    small: "",
    wide: "sm:col-span-2 lg:col-span-3",
  };

  return (
    <ScrollReveal key={index} delay={index * 0.08} direction="scaleIn">
      <TiltCard>
        <div
          className={`group bg-white rounded-3xl p-6 md:p-8 border border-surface-100 shadow-premium hover:shadow-premium-lg transition-all duration-300 h-full card-lift relative overflow-hidden ${
            size === "large" ? "animated-border" : "hover:border-brand-100"
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
          <p className="text-ink-300 text-sm leading-relaxed">{description}</p>
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
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
              Features
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              Everything you need to{" "}
              <span className="gradient-text">take control</span> of your skin
            </h2>
            <p className="text-ink-400 text-lg max-w-xl mx-auto text-balance">
              Built for real people who want better skin, not skincare
              influencers.
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
