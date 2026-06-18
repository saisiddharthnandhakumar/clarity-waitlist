"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-brand-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />

      {/* Floating orbs */}
      <BackgroundOrbs variant="brand" count={2} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Be the first to know when we launch</span>
          </div>

          <h2 className="font-display text-display-md font-semibold text-white mb-4 text-balance">
            Ready to take the guesswork out of skincare?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 text-balance">
            Join the waitlist. Be among the first to try the AI skin coach and
            help shape the product.
          </p>

          <MagneticButton
            as="a"
            href="#waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-700 font-semibold text-base rounded-2xl hover:bg-brand-50 transition-colors shadow-lg shadow-brand-700/30 btn-glow cursor-pointer"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
