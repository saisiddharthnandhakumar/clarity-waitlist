"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const testimonials = [
  {
    initials: "P",
    name: "Priya",
    age: "22",
    city: "Mumbai",
    quote:
      "I spent ₹3K on The Ordinary and Minimalist products because every Reel said they'd 'transform' my skin. Turns out I was layering actives that were canceling each other out. Clarity told me to cut back to a cleanser, moisturizer, and ONE active. My Clarity Score went from 58 to 74 in six weeks. My barrier actually healed. I'm mad I didn't have this sooner.",
    scoreBefore: 58,
    scoreAfter: 74,
    highlight: "Barrier repaired in 6 weeks",
  },
  {
    initials: "R",
    name: "Rahul",
    age: "25",
    city: "Delhi",
    quote:
      "Bro, I was using a face wash my roommate recommended, a moisturizer from a YouTube haul, and a sunscreen that made me look like a ghost. Zero idea if anything was working. Clarity gave me a 49 on my first scan — and honestly, seeing that number hit harder than any mirror check ever did. Eight weeks later, I'm at 63. I can actually see my dark spots fading. The data doesn't gaslight you.",
    scoreBefore: 49,
    scoreAfter: 63,
    highlight: "Dark spots visibly fading",
  },
  {
    initials: "A",
    name: "Ananya",
    age: "20",
    city: "Bangalore",
    quote:
      "I have PCOS. My acne comes in waves, and every influencer routine made it WORSE because they don't understand hormonal skin. Clarity's AI flagged that my barrier was compromised BEFORE I had a full breakout. I adjusted my routine in time and avoided a three-month recovery cycle. That alone is worth more than every product I've ever impulse-bought.",
    scoreBefore: 0,
    scoreAfter: 0,
    highlight: "Barrier damage caught early — avoided major breakout",
  },
  {
    initials: "S",
    name: "Sneha",
    age: "19",
    city: "Chennai",
    quote:
      "My mom keeps asking what I'm doing differently. She said my skin looks 'clearer, not just lighter' — which is exactly what I wanted. I'm not trying to change my skin tone. I'm trying to make my actual skin healthy. Clarity gets that. The progress tracker is addicting in the best way — I actually look forward to my weekly scan.",
    scoreBefore: 0,
    scoreAfter: 0,
    highlight: "12-week scan streak — skin health over skin lightening",
  },
  {
    initials: "Ar",
    name: "Arjun",
    age: "27",
    city: "Hyderabad",
    quote:
      "I'm not a skincare guy — or I wasn't. But I got tired of looking dull in every photo. Clarity's routine is 3 steps. AM: cleanse, moisturize, SPF. PM: cleanse, serum, moisturize. That's it. No 12-step nonsense. My Clarity Score is at 70 and honestly, my face card has never been this consistent. I actually feel confident without a filter.",
    scoreBefore: 0,
    scoreAfter: 70,
    highlight: "3-step routine — filter-free confidence",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const t = testimonials[active]!;

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-warm-600 uppercase tracking-widest bg-warm-50 px-3 py-1 rounded-full">
              Real Results
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              Real faces. Real results.{" "}
              <span className="gradient-text">No paid reviews.</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto text-balance">
              We don&apos;t pay for testimonials. We don&apos;t use stock photos. These are early
              access users who tracked their skin and saw the difference.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto relative">
          <TiltCard>
            <div className="bg-white rounded-3xl border border-surface-100 shadow-premium-lg p-8 md:p-10 text-center relative overflow-hidden min-h-[320px] flex flex-col justify-center">
              {/* Animated card */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-200/30">
                    <span className="font-display text-xl font-semibold text-white">
                      {t.initials}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-ink-500 text-base md:text-lg leading-relaxed mb-6 text-balance">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Score highlight */}
                  {t.scoreBefore > 0 && t.scoreAfter > 0 && (
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-brand-50 text-brand-700 mb-5">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        Clarity Score: {t.scoreBefore} → {t.scoreAfter}
                      </span>
                    </div>
                  )}
                  {t.scoreBefore === 0 && (
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-accent-50 text-accent-700 mb-5">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">{t.highlight}</span>
                    </div>
                  )}

                  {/* Attribution */}
                  <div>
                    <p className="font-display font-semibold text-ink">
                      {t.name}, {t.age}
                    </p>
                    <p className="text-sm text-ink-500">{t.city}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </TiltCard>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-xl bg-white border border-surface-200 shadow-premium flex items-center justify-center text-ink-400 hover:text-ink hover:border-surface-300 transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-xl bg-white border border-surface-200 shadow-premium flex items-center justify-center text-ink-400 hover:text-ink hover:border-surface-300 transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "bg-accent-600 w-8"
                    : "bg-surface-200 hover:bg-surface-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
