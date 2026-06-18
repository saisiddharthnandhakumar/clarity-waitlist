"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Camera, Brain, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Camera className="w-5 h-5" />,
    title: "Take a photo",
    description:
      "Upload one or more face photos in good lighting. No special equipment needed — just your phone camera.",
    detail:
      "Our AI works with selfies taken in natural light. The more consistent your photos, the better the tracking over time.",
  },
  {
    step: "02",
    icon: <Brain className="w-5 h-5" />,
    title: "Get personalized insights",
    description:
      "AI identifies visible concerns — acne, texture, pigmentation, oiliness, dryness, and uneven tone.",
    detail:
      "You'll receive a breakdown of what's affecting your skin, explained in plain language — no medical jargon.",
  },
  {
    step: "03",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Track your progress",
    description:
      "Monitor changes over time, see what's improving, and refine your routine based on real data.",
    detail:
      "Compare scans side by side. Watch your skin improve week by week with objective progress tracking.",
  },
];

function StepIcon({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay,
      }}
      className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white mx-auto mb-5 shadow-lg shadow-brand-200/30 group-hover:scale-105 transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
}

export function Solution() {
  return (
    <section id="solution" className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
              Meet Your AI Skin Coach
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              Understand your skin in{" "}
              <span className="gradient-text">3 simple steps</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto text-balance">
              You don&apos;t need another 10-step routine from a skincare influencer.
              You need someone to actually look at YOUR skin and tell you what
              to do about it — in plain words.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative group">
                {/* Step connection line (desktop) — animates on scroll */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-200 to-transparent origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    />
                  </div>
                )}

                <div className="text-center p-6 md:p-8">
                  <StepIcon delay={i * 0.15}>{step.icon}</StepIcon>
                  <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-ink-500/70 text-xs leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors cursor-pointer group"
            >
              Ready to start your skin journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
