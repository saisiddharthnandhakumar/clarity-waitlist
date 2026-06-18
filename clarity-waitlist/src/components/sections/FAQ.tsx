"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Does Clarity work for Indian skin tones and concerns?",
    answer:
      "Yes — Clarity was built for skin like yours. Our AI is trained on diverse skin types and tones, and it's designed to identify the concerns most common in Indian skin: post-acne pigmentation that lingers for months, uneven skin tone, dark circles, and stubborn acne. These are exactly the concerns that generic skincare advice often overlooks.",
  },
  {
    question: "Is this a medical diagnosis app?",
    answer:
      "No. Clarity is a skincare guidance tool — it helps you understand visible skin concerns and suggests products and routines, but it does not provide medical diagnoses or replace a dermatologist. If you have serious skin conditions, we encourage you to see a qualified professional.",
  },
  {
    question: "Will my photos be stored?",
    answer:
      "Your photos are encrypted and stored securely. They are only used to provide your skin analysis and progress tracking. You can delete your data at any time. We never share your photos with third parties.",
  },
  {
    question: "Is the app for both men and women?",
    answer:
      "Yes. Clarity is built for anyone who wants better skin — regardless of gender. Skincare is not gendered, and our AI is trained to analyze skin concerns across all skin types. Everyone deserves clear, personalized skincare guidance.",
  },
  {
    question: "What happens after I join the waitlist?",
    answer:
      "You'll receive occasional email updates about Clarity's development progress. When early access opens, you'll be among the first invited. We may also reach out to a few waitlist members for early feedback sessions to help shape the product.",
  },
  {
    question: "Do I need skincare knowledge to use Clarity?",
    answer:
      "Not at all. Clarity is designed to be beginner-friendly. You don't need to know the difference between niacinamide and retinol. Just upload a photo and we'll explain everything in plain, simple language.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Clarity helps you understand your skin better, track visible changes over time, and get personalized product and routine guidance. We don't guarantee specific skin outcomes — everyone's skin is different. What we provide is clarity, direction, and the tools to make better skincare decisions.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-surface-100 last:border-0 relative">
      {/* Left accent border when open */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-500 rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isOpen ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ originY: 0 }}
      />

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group hover:bg-surface-50/50 rounded-xl px-2 -mx-2 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-ink pr-8 group-hover:text-brand-600 transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${
            isOpen
              ? "bg-brand-600 text-white"
              : "bg-surface-50 text-ink-400 group-hover:bg-brand-50 group-hover:text-brand-600"
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ink-500 text-sm md:text-base leading-relaxed pb-5 pr-12 pl-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-4 text-balance">
              Questions you might{" "}
              <span className="gradient-text">have</span>
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto text-balance">
              Honest answers about what Clarity is — and what it isn&apos;t.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
