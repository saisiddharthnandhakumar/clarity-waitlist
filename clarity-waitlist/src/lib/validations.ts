import { z } from "zod";

const phoneRegex = /^\+?[\d\s\-()]{7,15}$/;

export const waitlistSchema = z.object({
  first_name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be under 50 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be under 100 characters")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(phoneRegex, "Please enter a valid phone number"),
  skin_concern: z
    .string()
    .min(1, "Please select your biggest skin concern"),
  gender: z
    .string()
    .min(1, "Please select your gender"),
  age_group: z
    .string()
    .min(1, "Please select your age group"),
  skincare_spend: z.string().optional(),
  main_goal: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const skinConcerns = [
  { value: "", label: "Select your biggest concern" },
  { value: "acne", label: "Acne" },
  { value: "acne_scars", label: "Acne scars" },
  { value: "pigmentation", label: "Pigmentation" },
  { value: "oily_skin", label: "Oily skin" },
  { value: "dry_skin", label: "Dry skin" },
  { value: "uneven_tone", label: "Uneven skin tone" },
  { value: "dark_circles", label: "Dark circles" },
  { value: "general_guidance", label: "General skincare guidance" },
] as const;

export const genders = [
  { value: "", label: "Select your gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
] as const;

export const ageGroups = [
  { value: "", label: "Select your age group" },
  { value: "under_18", label: "Under 18" },
  { value: "18_24", label: "18–24" },
  { value: "25_34", label: "25–34" },
  { value: "35_plus", label: "35+" },
] as const;

export const spendLevels = [
  { value: "", label: "Select monthly spend (optional)" },
  { value: "under_500", label: "Under ₹500/mo" },
  { value: "500_1500", label: "₹500–₹1,500/mo" },
  { value: "1500_3000", label: "₹1,500–₹3,000/mo" },
  { value: "3000_plus", label: "₹3,000+/mo" },
] as const;

export const mainGoals = [
  { value: "", label: "Select your main goal (optional)" },
  { value: "clearer_skin", label: "Clearer skin" },
  { value: "better_appearance", label: "Better appearance" },
  { value: "find_routine", label: "Find the right routine" },
  { value: "reduce_acne", label: "Reduce acne" },
  { value: "track_improvement", label: "Track improvement" },
  { value: "stop_wasting_money", label: "Stop wasting money on products" },
] as const;
