# Clarity — AI Skincare Landing Page PRD

**Product Name:** Clarity  
**Tagline:** *Discover what's really affecting your skin.*  
**Type:** Validation Landing Page / Waitlist Funnel  
**Target:** Desktop folder → feed into Claude Code CLI

---

## Project Goal

Build a mobile-first, high-converting, visually premium landing page for an AI-powered skincare concept.

The page must do 3 things extremely well:

1. **Explain the product clearly**
2. **Create emotional resonance with the user's skin pain points**
3. **Capture sign-ups** through a smooth email + phone waitlist flow with a short survey

This is a **validation landing page**, not the final app. The purpose is to test demand and collect leads.

---

## Product Concept

The product is an **AI skincare assistant**.

- User uploads one or more face photos
- System analyzes visible skin concerns
- Gives a personalized summary
- Suggests relevant skincare products
- Allows tracking progress over time

### Brand Framing

| Do frame as | Don't frame as |
|---|---|
| personalized | gimmick |
| modern | beauty filter |
| science-backed | "judge your face" |
| helpful | fairness score |
| private | vanity score |
| simple | medical diagnosis |
| trustworthy | filter app |

**Preferred language:** skin clarity, skin health, skin progress, skin improvement, skin concern analysis, personalized skincare guidance

---

## Target Audience

### Primary: India, ages 18–34

People who want better skin but feel confused about what to do.

### Segments:
- People with acne
- People with acne scars
- People with pigmentation
- People with oily or dry skin
- Skincare beginners
- People overwhelmed by product choices
- People who want to look cleaner, healthier, more confident
- People who want progress tracking over time

**Design for both men and women** — no separate male/female brand split.

---

## Brand Style

Feel like a **premium consumer startup**, not a cheap beauty app.

### Visual Direction
- Clean
- Premium
- Calm
- Trustworthy
- Modern
- Scientific
- Polished
- Subtle
- High-end

### Design Inspiration
Apple · Notion · Headspace · Calm · Levels · Modern health-tech startups

### Avoid
- Loud pink beauty branding
- Childish colors
- Generic SaaS templates
- Cluttered sections
- Low-quality stock images
- Overdone gradients
- Overly playful visuals
- Anything fake or untrustworthy

### Visual Touches
Soft gradients · Glassmorphism where it helps · Tasteful shadows · Rounded cards · Elegant typography · Smooth motion

---

## Technical Requirements

Build as a **production-ready single-page web app** using:

- **Next.js**
- **React**
- **Tailwind CSS**
- **Framer Motion** for animations

Must be: fully responsive · mobile-first · fast · accessible · SEO-friendly · easy to deploy

Clean component structure, production-ready code.

---

## Core Page Structure

1. Hero section
2. Problem section
3. Solution section
4. Feature section
5. Product preview section
6. How it works section
7. Waitlist / signup section
8. FAQ section
9. Footer

Each section visually distinct, polished, and conversion-oriented.

---

## Section-by-Section Specs

### 1. Hero Section

**Headline:**
> Discover what is really affecting your skin

**Subheadline:**
> Upload a photo, get personalized skin insights, and track your progress over time with AI-powered skincare guidance.

**Primary CTA:** Join the Waitlist  
**Secondary CTA:** See How It Works  

**Trust line below:**
> Built for people who want clearer skin, better routines, and less guesswork.

**Visual:** Stunning product mockup (right on desktop, below on mobile). Show a future-facing app interface with:
- Skin concern analysis
- Clarity score
- Progress tracking
- Recommended routine
- Product suggestions
- Before/after comparison concept

The mockup must look premium and realistic — not a real screenshot, but visually convincing.

---

### 2. Problem Section — "We Get It"

4 visually strong cards highlighting pain points:

| Card | Pain Point |
|---|---|
| 1 | **Too much conflicting advice** — Instagram, YouTube, Reddit, TikTok all say different things |
| 2 | **Expensive trial and error** — Buying products without knowing what works |
| 3 | **No clear progress tracking** — No way to know if skin is improving or getting worse |
| 4 | **Skincare feels confusing** — Don't know where to start or what routine fits |

Copy should be emotionally strong but not exaggerated.

---

### 3. Solution Section — "Meet Your AI Skin Coach"

3 clear steps:

| Step | Description |
|---|---|
| 1. Take a photo | Upload one or more face photos in good lighting |
| 2. Get personalized insights | AI identifies visible concerns (acne, texture, pigmentation, oiliness, dryness, uneven tone) |
| 3. Track your progress | Monitor changes over time, refine your routine |

Use icons, subtle motion, elegant layout.

---

### 4. Feature Section

4–6 polished feature cards:

1. **Personalized analysis** — Understand your skin more clearly
2. **Smart product recommendations** — Based on your specific concerns
3. **Progress tracking** — Compare scans over time
4. **Simple routines** — Know what to use and when
5. **Beginner-friendly** — Designed for people who don't already know skincare
6. **Private and secure** — Safe photo uploads

Tone: reassuring, high-quality.

---

### 5. Product Preview Section

Futuristic dashboard preview — looks like a real app interface.

Visual components:
- Clarity score
- Concern breakdown
- Scan history
- Recommended products
- Progress chart
- Weekly trend indicator
- Before/after cards
- Routine checklist

Goal: make the product feel real even though it's only a landing page.

---

### 6. Waitlist / Signup Section

**Intro copy:**
> Join the waitlist. Be among the first to try the AI skin coach and help shape the product.

**Form fields:**

| Field | Required | Type |
|---|---|---|
| First name | Yes | Text |
| Email address | Yes | Email |
| Phone number | Yes | Tel |
| Biggest skin concern | Yes | Dropdown |
| Gender | Yes | Dropdown |
| Age group | Yes | Dropdown |
| Current skincare spend | No | Dropdown |
| Main goal | No | Dropdown |
| Biggest frustration | No | Text |
| Preferred product category | No | Dropdown |

**Dropdown Options:**

*Biggest skin concern:* Acne · Acne scars · Pigmentation · Oily skin · Dry skin · Uneven skin tone · Dark circles · General skincare guidance

*Gender:* Male · Female · Prefer not to say

*Age group:* Under 18 · 18–24 · 25–34 · 35+

*Current skincare spend:* Under ₹500/mo · ₹500–₹1,500/mo · ₹1,500–₹3,000/mo · ₹3,000+/mo

*Main goal:* Clearer skin · Better appearance · Find the right routine · Reduce acne · Track improvement · Stop wasting money on products

**Form requirements:**
- Inline validation
- Clear error messages
- Mobile-friendly keyboard behavior
- Large tap targets
- Minimal friction
- Progress feedback after submit
- Success state / thank-you state

**Post-submission:**
- Show confirmation message
- Tell user they're on the waitlist
- Mention they may be contacted for early feedback
- Ask them to watch for updates

**Privacy trust text near form:**
> We respect your privacy. Your information is used only for early access and product research. We do not sell your data.

---

### 7. FAQ Section

4–6 FAQs:

1. **Is this a medical diagnosis app?** — No. It helps with skincare guidance and product recommendations, but does not replace a dermatologist.
2. **Will my photos be stored?** — Explain how photos and data are handled.
3. **Is the app for men and women?** — Yes. Anyone who wants better skin.
4. **What happens after I join the waitlist?** — Updates and early access invites.
5. **Do I need skincare knowledge?** — No. Beginner-friendly.
6. **What kind of results can I expect?** — Guidance, clarity, and tracking — not guaranteed outcomes.

---

### 8. Footer

- Brand name placeholder (Clarity)
- Contact email
- Privacy policy link placeholder
- Terms link placeholder
- Social link placeholders
- Clean and minimal

---

## Emotional Positioning Copy

Users are not buying skincare analysis. They are buying:
- Confidence
- Clarity
- Better routines
- Reduced confusion
- Less wasted money
- Better appearance
- Control over their skin journey

**Do not overpromise:**
- ❌ No medical diagnosis claims
- ❌ No "cure skin problems"
- ❌ No "replaces a dermatologist"
- ✅ "Helps you understand your skin better and make smarter choices"

---

## Motion & Interaction Guidelines

- Subtle fade-ins
- Gentle slide-up on scroll
- Hover states
- Button microinteractions
- Smooth section transitions
- **No** excessive animation
- Premium, not flashy

---

## Mobile-First (Critical)

Most traffic will come from Instagram stories and link-in-bio.

- Strong first-screen impact
- Headline visible immediately
- CTA visible without scrolling
- Stacked layout
- Large readable text
- Easy-to-tap form fields
- No clutter
- No tiny text

Should feel like a premium app landing experience, not a squeezed-down desktop page.

---

## Copy Tone

Confident · Calm · Clear · Smart · Modern · Slightly aspirational

**Not:** salesy · childish · overly technical · harsh · insulting · unsafe

Speak respectfully. Non-judgmental.

---

## SEO Metadata

- **Title:** AI Skin Coach for Personalized Skincare Insights
- **Description:** Get AI-powered skin analysis, personalized skincare guidance, and progress tracking tailored to your skin concerns.
- Open Graph metadata
- Twitter Card metadata

---

## Analytics Readiness

Prepare hooks for:
- CTA click tracking
- Form completion tracking
- Scroll depth tracking
- Traffic source tracking
- Instagram bio/story conversion tracking

---

## Conversion Optimization

- CTA above the fold
- CTA repeated throughout the page
- Form kept short (required fields only)
- Trust copy near form
- Clear benefit explanation
- Emotional pain point alignment
- No unnecessary distractions
- No navigation menu (or minimal)
- No external links pulling users away
- No cluttered footer

**Primary goal:** Maximize waitlist signups.

---

## Lead Capture / Backend

Store submissions with:
- First name, email, phone number
- Skin concern, gender, age group, spend level, goal
- Timestamp
- UTM parameters (if available)
- Device type (if available)

**Storage options (choose one):**
- Database table
- Serverless API route
- Supabase
- Airtable
- Google Sheets

Also send:
- Optional notification email to admin after each signup
- Optional double-confirmation email after signup

---

## Important Rules

| ✅ Do | ❌ Don't |
|---|---|
| Skin clarity assistant | Beauty contest |
| Personalized skincare guide | Fairness app |
| Progress tracking tool | Vanity score |
| Smarter product choices | Medical diagnosis |
| Reduce guesswork | Filter app |
| | Gimmick |

---

## Homepage Messaging Direction

- *Discover what is really affecting your skin*
- *Take the guesswork out of skincare*
- *Get personalized guidance based on your skin*
- *Track your skin journey over time*
- *Stop wasting money on the wrong products*
- *Build a routine that actually makes sense for you*

---

## Final Build Quality Standard

Must feel like a **real startup landing page** — not a template.

Strong enough to:
- Run Instagram story traffic to
- Place in a bio link
- Use as a first validation funnel
- Collect real waitlist leads
- Generate conversation and feedback

Polished enough that a user could believe the product is already in development.

---

## Deliverables

- Full landing page
- All UI components
- Signup form
- Validation logic
- Waitlist submission handling
- Success / thank-you state
- Responsive mobile layout
- Visual mockups
- FAQ section
- Footer
- SEO metadata
- Backend lead capture integration

Everything production-ready and visually impressive.

---

## Final Instruction

Build this as if a real startup founder will use it today to collect leads from Instagram traffic. Beautiful, trustworthy, optimized for signups. Premium, modern, and real.
