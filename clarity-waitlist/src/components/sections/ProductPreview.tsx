"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  Scan,
  ClipboardCheck,
  CalendarCheck,
  ArrowUpRight,
  Target,
  ShieldCheck,
  ChevronRight,
  Star,
} from "lucide-react";

export function ProductPreview() {
  return (
    <section id="preview" className="section-padding bg-brand-950 text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(58,144,112,0.15)_0%,transparent_60%)]" />
      <BackgroundOrbs variant="brand" count={2} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest bg-brand-800/40 px-3 py-1 rounded-full border border-brand-700/30">
              Product Preview
            </span>
            <h2 className="font-display text-display-lg font-semibold text-white mt-4 mb-4 text-balance">
              See what your{" "}
              <span className="text-brand-400">skin journey</span>{" "}
              looks like
            </h2>
            <p className="text-brand-200/60 text-lg max-w-xl mx-auto text-balance">
              A sneak peek at the Clarity experience. This is what you&apos;ll see when you join.
            </p>
          </div>
        </ScrollReveal>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {/* Clarity Score Card — hero card with animated border */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card-dark rounded-3xl p-6 col-span-1 md:col-span-2 lg:col-span-2 animated-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                    Clarity Score
                  </p>
                  <p className="text-2xl font-display font-semibold text-white mt-1">
                    72 / 100
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-400 bg-brand-800/40 px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">+8 this month</span>
                </div>
              </div>

              {/* Mini progress chart */}
              <div className="h-16 flex items-end gap-2">
                {[55, 58, 60, 57, 62, 65, 68, 72].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(val / 72) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    className="flex-1 bg-gradient-to-t from-brand-500/60 to-brand-400/40 rounded-t-lg relative overflow-hidden"
                  >
                    {/* Shimmer on bars */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
                      initial={{ y: "100%" }}
                      whileInView={{ y: "-100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-brand-300/40">Week 1</span>
                <span className="text-[10px] text-brand-300/40">Week 8</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Scan History Card */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card-dark rounded-3xl p-5">
              <Scan className="w-5 h-5 text-brand-400 mb-3" />
              <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mb-1">
                Total Scans
              </p>
              <p className="text-2xl font-display font-semibold text-white">12</p>
              <p className="text-[11px] text-brand-300/40 mt-2">
                Last scan: 2 days ago
              </p>
            </div>
          </ScrollReveal>

          {/* Streak Card */}
          <ScrollReveal delay={0.3}>
            <div className="glass-card-dark rounded-3xl p-5">
              <CalendarCheck className="w-5 h-5 text-amber-400 mb-3" />
              <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mb-1">
                Weekly Streak
              </p>
              <p className="text-2xl font-display font-semibold text-white">4w</p>
              <p className="text-[11px] text-brand-300/40 mt-2">
                Keep it going!
              </p>
            </div>
          </ScrollReveal>

          {/* Concerns Card */}
          <ScrollReveal delay={0.15}>
            <div className="glass-card-dark rounded-3xl p-5 col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                  Top Concerns
                </p>
                <Target className="w-4 h-4 text-brand-400" />
              </div>
              <div className="space-y-3">
                {[
                  { label: "Skin Texture", level: 65, color: "bg-brand-500" },
                  { label: "Pigmentation", level: 45, color: "bg-amber-500" },
                  { label: "Oiliness", level: 30, color: "bg-blue-500" },
                ].map((concern, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-brand-200/60">{concern.label}</span>
                      <span className="text-white font-medium">
                        {concern.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${concern.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8 }}
                        className={`h-full rounded-full ${concern.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Products Card */}
          <ScrollReveal delay={0.25}>
            <div className="glass-card-dark rounded-3xl p-5 col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                  Recommended For You
                </p>
                <ArrowUpRight className="w-4 h-4 text-brand-400" />
              </div>
              <div className="space-y-3">
                {[
                  { name: "Niacinamide 10% Serum", match: 94, price: "₹499" },
                  { name: "Oil-Free Gel Moisturizer", match: 89, price: "₹349" },
                  { name: "Mineral SPF 50 Sunscreen", match: 85, price: "₹599" },
                ].map((product, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-800/40 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-brand-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-brand-300/40">
                          {product.price} · {product.match}% match
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-brand-300/30" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Before/After Concept */}
          <ScrollReveal delay={0.35}>
            <div className="glass-card-dark rounded-3xl p-5 col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                  Progress
                </p>
                <BarChart3 className="w-4 h-4 text-brand-400" />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-brand-800/30 rounded-2xl p-3 text-center">
                  <p className="text-[10px] text-brand-300/40 uppercase tracking-wider mb-1">
                    Week 1
                  </p>
                  <p className="text-xl font-display font-semibold text-brand-300/40">
                    64
                  </p>
                </div>
                <div className="bg-brand-800/30 rounded-2xl p-3 text-center">
                  <p className="text-[10px] text-brand-300/40 uppercase tracking-wider mb-1">
                    Week 8
                  </p>
                  <p className="text-xl font-display font-semibold text-brand-400">
                    72
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 text-brand-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">+12.5% improvement</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Routine Checklist */}
          <ScrollReveal delay={0.4}>
            <div className="glass-card-dark rounded-3xl p-5 col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                  Today&apos;s Routine
                </p>
                <ClipboardCheck className="w-4 h-4 text-brand-400" />
              </div>
              <div className="space-y-2">
                {[
                  { task: "Cleanse face", time: "AM", done: true },
                  { task: "Apply SPF 50", time: "AM", done: true },
                  { task: "Niacinamide serum", time: "PM", done: false },
                  { task: "Moisturize", time: "PM", done: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                        item.done
                          ? "bg-brand-500 text-white"
                          : "bg-white/10 text-transparent"
                      }`}
                    >
                      {item.done && <CheckIcon />}
                    </div>
                    <span
                      className={`text-sm ${
                        item.done ? "text-brand-200/50 line-through" : "text-white"
                      }`}
                    >
                      {item.task}
                    </span>
                    <span className="text-[10px] text-brand-300/40 ml-auto">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Privacy badge */}
          <ScrollReveal delay={0.45}>
            <div className="glass-card-dark rounded-3xl p-5 col-span-1 md:col-span-2 lg:col-span-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-800/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Your data is private & secure
                </p>
                <p className="text-xs text-brand-300/40">
                  Encrypted. Never shared. You control your data.
                </p>
              </div>
              <Star className="w-5 h-5 text-amber-400 ml-auto" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
