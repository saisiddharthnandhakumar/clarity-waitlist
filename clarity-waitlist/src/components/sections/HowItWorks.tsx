"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Camera,
  BarChart3,
  CheckCircle2,
  Target,
  CalendarDays,
} from "lucide-react";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "1",
      icon: <Camera className="w-6 h-6" />,
      title: "Snap",
      description:
        "Take a bare-face selfie. No makeup. No filter. No \"good lighting\" required. Clarity's AI handles the rest — trained on Indian skin tones, not studio headshots.",
      color: "from-brand-500 to-brand-600",
      bgColor: "bg-brand-50",
      borderColor: "border-brand-100",
    },
    {
      number: "2",
      icon: <Target className="w-6 h-6" />,
      title: "Analyze",
      description:
        "Our model scans for acne, hyperpigmentation, texture, barrier damage, and dark spots — trained specifically on Indian skin tones across the Fitzpatrick scale. Not white skin in cold climates.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      number: "3",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Baseline",
      description:
        "You get your Clarity Score. This is NOT a beauty rating. It's a personal baseline that tells you exactly where your skin stands today. Think of it like your credit score — but for your face card. This is your starting line, not your worth.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
    },
    {
      number: "4",
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Routine",
      description:
        "You get a simple, evidence-based routine. AM: 4 steps max. PM: 3 steps max. Product recommendations with real prices in rupees, zero sponsorships, and pharmacy options included. If an influencer tells you to add more steps — ignore them.",
      color: "from-brand-600 to-brand-700",
      bgColor: "bg-brand-50",
      borderColor: "border-brand-100",
    },
    {
      number: "5",
      icon: <CalendarDays className="w-6 h-6" />,
      title: "Track",
      description:
        "Weekly check-ins. Updated Clarity Score. Real progress tracking. Compare scans side by side. See your Clarity Score climb. Because skincare without data is just vibes — and vibes don't clear acne.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white" ref={containerRef}>
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
              How It Works
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              From photo to progress in{" "}
              <span className="gradient-text">5 steps</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto text-balance">
              Five steps. No shortcuts. No sponsorships. No &quot;let&apos;s try this cream
              and see.&quot; Just your face getting better, tracked in real numbers.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <TimelineStep key={i} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    borderColor: string;
  };
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-8 pb-10 md:pb-12 last:pb-0">
      {/* Timeline line — animates on scroll */}
      {!isLast && (
        <div className="absolute left-[22px] md:left-[26px] top-14 bottom-0 w-px overflow-hidden">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-surface-200 via-surface-200 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </div>
      )}

      {/* Step number circle — spring scale */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 + index * 0.05 }}
        className={`relative z-10 w-11 h-11 md:w-[52px] md:h-[52px] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shrink-0 shadow-lg`}
      >
        <span className="font-display font-semibold text-lg">
          {step.number}
        </span>
      </motion.div>

      {/* Content card — slides in from alternating sides */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`${step.bgColor} ${step.borderColor} border rounded-2xl p-5 md:p-6 flex-1`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="text-ink-400">{step.icon}</div>
          <h3 className="font-display text-lg font-semibold text-ink">
            {step.title}
          </h3>
        </div>
        <p className="text-ink-500 text-sm leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}
