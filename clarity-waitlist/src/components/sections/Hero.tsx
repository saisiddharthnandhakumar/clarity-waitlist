"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Shield, Users, Star } from "lucide-react";
import { ProductMockup } from "@/components/sections/ProductMockup";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ParticleField } from "@/components/ui/ParticleField";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { GradientText } from "@/components/ui/GradientText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24"
    >
      {/* ── Cursor-tracking glow (desktop only) ── */}
      <CursorGlow />

      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-10">
        {/* Base radial glow */}
        <div className="absolute inset-0 bg-hero-glow" />
        {/* Secondary subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(133,200,174,0.04)_0%,rgba(244,140,92,0.03)_40%,transparent_60%)]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(26,26,24,0.05) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── Particle network (desktop only) ── */}
      <ParticleField className="absolute inset-0 z-0 hidden md:block" />

      {/* ── Floating background orbs ── */}
      <BackgroundOrbs variant="brand" count={2} className="z-0" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Copy ── */}
          <div className="relative z-10">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8 overflow-hidden relative"
            >
              {/* Subtle animated gradient accent on badge */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-100/0 via-brand-100/50 to-brand-100/0 animate-shimmer" />
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">AI-Powered Skincare Coach</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display text-display-xl font-semibold text-ink text-balance mb-6"
            >
              Stop guessing.{" "}
              <GradientText>Finally know</GradientText> what your skin actually needs.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-ink-400 leading-relaxed max-w-lg text-balance mb-8"
            >
              You&apos;ve spent enough on products that promised results and sat
              half-used on your shelf. Upload a selfie and finally get answers
              about YOUR face — not generic advice for everyone.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <MagneticButton
                as="a"
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 text-white font-semibold text-base hover:bg-brand-700 transition-colors duration-200 shadow-lg shadow-brand-200/50 btn-glow cursor-pointer"
              >
                Get Early Access
                <Sparkles className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#how-it-works"
                strength={4}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-surface-200 text-ink font-medium text-base hover:bg-surface-50 transition-colors duration-200 cursor-pointer"
              >
                See How It Works
              </MagneticButton>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-ink-500"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-500" />
                Your Photos Stay Yours
              </span>
              <span className="w-1 h-1 rounded-full bg-surface-200 hidden sm:block" />
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-500" />
                Built for Indian Skin
              </span>
              <span className="w-1 h-1 rounded-full bg-surface-200 hidden sm:block" />
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-brand-500" />
                Science, Not Hype
              </span>
            </motion.div>
          </div>

          {/* ── Right: Product Mockup ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <ProductMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-200"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
