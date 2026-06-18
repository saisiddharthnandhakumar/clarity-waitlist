"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef, useEffect } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Loader2,
  ShieldCheck,
  Sparkles,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  waitlistSchema,
  type WaitlistFormData,
  skinConcerns,
  genders,
  ageGroups,
  spendLevels,
  mainGoals,
} from "@/lib/validations";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full px-4 py-3.5 min-h-[52px] sm:min-h-0 sm:py-3.5 rounded-2xl border border-surface-200 bg-white text-ink text-base sm:text-base font-medium placeholder:text-ink-200 focus:border-brand-400 focus:ring-4 focus:ring-brand-50 outline-none transition-all duration-200";

const labelClasses = "block text-sm font-semibold text-ink mb-1.5";

const errorClasses = "text-red-500 text-xs mt-1 font-medium";

function SelectField({
  label,
  options,
  register,
  name,
  error,
  required,
}: {
  label: string;
  options: readonly { readonly value: string; readonly label: string }[];
  register: any;
  name: keyof WaitlistFormData;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
        {required && <span className="text-brand-500 ml-0.5">*</span>}
      </label>
      <select
        id={name}
        {...register(name)}
        className={cn(inputClasses, "appearance-none cursor-pointer min-h-[52px] sm:min-h-0", error && "border-red-300 focus:border-red-400 focus:ring-red-50")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
}

// Lightweight confetti burst on success
function useConfetti(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8 - 2,
      color: Math.random() > 0.5 ? "#3a9070" : "#85c8ae",
      size: Math.random() * 4 + 2,
      life: 1,
      decay: 0.008 + Math.random() * 0.012,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // gravity
        p.life -= p.decay;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (alive) animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, [canvasRef]);
}

export function Waitlist() {
  const [formState, setFormState] = useState<FormState>("idle");
  const confettiRef = useRef<HTMLCanvasElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = useCallback(async (data: WaitlistFormData) => {
    setFormState("submitting");
    trackEvent("form_complete", { skin_concern: data.skin_concern });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        // 409 = already on waitlist
        if (res.status === 409) {
          toast.success(json.message);
          setFormState("success");
          return;
        }
        throw new Error(json.message || "Something went wrong");
      }

      trackEvent("waitlist_signup", { email: data.email });
      setFormState("success");
      reset();
    } catch (err) {
      setFormState("error");
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      trackEvent("form_error", {
        error: err instanceof Error ? err.message : "unknown",
      });
      setTimeout(() => setFormState("idle"), 3000);
    }
  }, [reset]);

  // Trigger confetti on success
  const showConfetti = formState === "success";
  useConfetti(showConfetti ? confettiRef : { current: null });

  if (formState === "success") {
    return (
      <section id="waitlist" className="section-padding bg-surface-50 relative">
        <canvas
          ref={confettiRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          aria-hidden="true"
        />
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg mx-auto text-center relative z-20"
          >
            {/* Success icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-3xl bg-brand-gradient flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-200/40"
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="font-display text-display-md font-semibold text-ink mb-4">
              You&apos;re on the list!
            </h2>

            <p className="text-ink-400 text-lg leading-relaxed mb-8">
              Thank you for joining the Clarity waitlist. We&apos;ll reach out when
              early access is available. You may be contacted for early feedback
              to help shape the product.
            </p>

            <div className="bg-white rounded-3xl p-6 border border-surface-100 shadow-premium mb-8">
              <div className="flex items-center gap-3 text-left">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Watch your inbox
                  </p>
                  <p className="text-xs text-ink-300">
                    We&apos;ll send updates and early access invites to your email
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-200">
              Want to help shape Clarity? Follow us for updates and share with
              friends who might be interested.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="section-padding bg-surface-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full">
                  Early Access
                </span>
                <h2 className="font-display text-display-md font-semibold text-ink mt-4 mb-4 text-balance">
                  Join the{" "}
                  <span className="gradient-text">waitlist</span>
                </h2>
                <p className="text-ink-400 leading-relaxed mb-6">
                  Be among the first to try the AI skin coach. Help shape the
                  product and get early access before the public launch.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        Early access
                      </p>
                      <p className="text-xs text-ink-300">
                        Get first access before public launch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        Help shape it
                      </p>
                      <p className="text-xs text-ink-300">
                        Your feedback will guide product development
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-surface-100 shadow-sm">
                  <p className="text-xs text-ink-300 leading-relaxed">
                    <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-brand-500" />
                    We respect your privacy. Your information is used only for
                    early access and product research. We do not sell your data.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <TiltCard>
                  <div className="bg-white rounded-3xl border border-surface-100 shadow-premium-lg p-6 md:p-8 relative overflow-hidden animated-border">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      {/* First Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="first_name" className={labelClasses}>
                            First name<span className="text-brand-500 ml-0.5">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-200" />
                            <input
                              id="first_name"
                              type="text"
                              placeholder="Your name"
                              {...register("first_name")}
                              className={cn(inputClasses, "pl-11", errors.first_name && "border-red-300")}
                              autoComplete="given-name"
                            />
                          </div>
                          {errors.first_name && (
                            <p className={errorClasses}>
                              {errors.first_name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className={labelClasses}>
                            Email<span className="text-brand-500 ml-0.5">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-200" />
                            <input
                              id="email"
                              type="email"
                              placeholder="you@email.com"
                              {...register("email")}
                              className={cn(inputClasses, "pl-11", errors.email && "border-red-300")}
                              autoComplete="email"
                            />
                          </div>
                          {errors.email && (
                            <p className={errorClasses}>{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone number<span className="text-brand-500 ml-0.5">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-200" />
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            {...register("phone")}
                            className={cn(inputClasses, "pl-11", errors.phone && "border-red-300")}
                            autoComplete="tel"
                          />
                        </div>
                        {errors.phone && (
                          <p className={errorClasses}>{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Skin Concern + Gender */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <SelectField
                          label="Biggest skin concern"
                          name="skin_concern"
                          options={skinConcerns}
                          register={register}
                          error={errors.skin_concern?.message}
                          required
                        />
                        <SelectField
                          label="Gender"
                          name="gender"
                          options={genders}
                          register={register}
                          error={errors.gender?.message}
                          required
                        />
                      </div>

                      {/* Age Group + Spend */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <SelectField
                          label="Age group"
                          name="age_group"
                          options={ageGroups}
                          register={register}
                          error={errors.age_group?.message}
                          required
                        />
                        <SelectField
                          label="Monthly skincare spend"
                          name="skincare_spend"
                          options={spendLevels}
                          register={register}
                          error={errors.skincare_spend?.message}
                        />
                      </div>

                      {/* Main Goal */}
                      <SelectField
                        label="Main goal"
                        name="main_goal"
                        options={mainGoals}
                        register={register}
                        error={errors.main_goal?.message}
                      />

                      {/* Submit */}
                      <MagneticButton
                        as="button"
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 text-white font-semibold text-base hover:bg-brand-700 transition-colors duration-200 shadow-lg shadow-brand-200/50 btn-glow disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer min-h-[52px] sm:min-h-0"
                      >
                        {formState === "submitting" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Joining...
                          </>
                        ) : (
                          <>
                            Join the Waitlist
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </MagneticButton>
                    </form>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
