import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function getEnv(): { url: string; anonKey: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    );
  }

  return { url, anonKey };
}

let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const { url, anonKey } = getEnv();
    _supabase = createClient(url, anonKey);
  }
  return _supabase;
}

export function getSupabaseAdmin(): SupabaseClient | null {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) return null;
  if (!_supabaseAdmin) {
    const { url } = getEnv();
    _supabaseAdmin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  }
  return _supabaseAdmin;
}

export type WaitlistEntry = {
  id?: string;
  first_name: string;
  email: string;
  phone: string;
  skin_concern: string;
  gender: string;
  age_group: string;
  skincare_spend?: string | null;
  main_goal?: string | null;
  created_at?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  device_type?: string | null;
};
