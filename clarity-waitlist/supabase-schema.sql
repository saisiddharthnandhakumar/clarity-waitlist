# Clarity — Supabase Database Schema
# Run this SQL in your Supabase SQL Editor to create the waitlist table.

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  skin_concern TEXT NOT NULL,
  gender TEXT NOT NULL,
  age_group TEXT NOT NULL,
  skincare_spend TEXT,
  main_goal TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  device_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);

-- Create index on created_at for sorted queries
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist (created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow INSERT from anonymous users (wraps the public-facing form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow SELECT only to authenticated users (admin dashboard)
CREATE POLICY "Allow authenticated select" ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Create a view for analytics (requires authenticated access)
CREATE OR REPLACE VIEW waitlist_stats AS
SELECT
  skin_concern,
  gender,
  age_group,
  skincare_spend,
  main_goal,
  COUNT(*) as count
FROM waitlist
GROUP BY skin_concern, gender, age_group, skincare_spend, main_goal
ORDER BY count DESC;
