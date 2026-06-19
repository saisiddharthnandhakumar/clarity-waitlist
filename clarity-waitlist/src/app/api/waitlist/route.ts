import { NextResponse } from "next/server";
import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validations";
import { getPostHogClient } from "@/lib/posthog-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const {
      first_name,
      email,
      phone,
      skin_concern,
      gender,
      age_group,
      skincare_spend,
      main_goal,
    } = parsed.data;

    const client = getSupabaseAdmin() ?? getSupabase();

    const { data, error } = await client
      .from("waitlist")
      .insert([
        {
          first_name,
          email,
          phone,
          skin_concern,
          gender,
          age_group,
          skincare_spend: skincare_spend || null,
          main_goal: main_goal || null,
        },
      ])
      .select("id")
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message: "This email is already on the waitlist. We'll be in touch!",
          },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    const posthog = getPostHogClient();
    posthog.identify({
      distinctId: email,
      properties: {
        email,
        first_name,
        skin_concern,
        gender,
        age_group,
        skincare_spend: skincare_spend ?? null,
        main_goal: main_goal ?? null,
      },
    });
    posthog.capture({
      distinctId: email,
      event: "server_waitlist_signup",
      properties: {
        email,
        first_name,
        skin_concern,
        gender,
        age_group,
        skincare_spend: skincare_spend ?? null,
        main_goal: main_goal ?? null,
        waitlist_id: data?.id,
      },
    });
    await posthog.shutdown();

    return NextResponse.json(
      {
        success: true,
        message: "You've been added to the waitlist!",
        id: data?.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
