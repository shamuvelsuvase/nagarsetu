-- Enable PostGIS for Civic Geolocation & Distance Queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. Enums
CREATE TYPE user_role AS ENUM ('citizen', 'officer', 'admin');
CREATE TYPE ticket_status AS ENUM ('submitted', 'verified', 'in_progress', 'resolved', 'rejected');
CREATE TYPE ticket_priority AS ENUM ('low', 'medium', 'high', 'critical');

-- 2. Profiles Table (Linked with Supabase Auth users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT,
  role user_role DEFAULT 'citizen' NOT NULL,
  department TEXT,
  ward_number TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Civic Incident Tickets Table
CREATE TABLE IF NOT EXISTS public.tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL, -- Pothole, Water Leakage, Streetlight, Garbage, etc.
  department TEXT NOT NULL,
  status ticket_status DEFAULT 'submitted' NOT NULL,
  priority ticket_priority DEFAULT 'medium' NOT NULL,
  location GEOMETRY(Point, 4326),
  address TEXT NOT NULL,
  image_urls TEXT[] DEFAULT ARRAY[]::TEXT[],
  resolution_proof_url TEXT,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  ai_duplicate_cluster_id UUID,
  ai_urgency_score NUMERIC(3, 2),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Index for PostGIS spatial proximity queries (e.g. Find reports within 50m)
CREATE INDEX IF NOT EXISTS tickets_location_idx ON public.tickets USING GIST(location);

-- 4. Ticket Status History (Audit Trail)
CREATE TABLE IF NOT EXISTS public.ticket_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ticket_id UUID REFERENCES public.tickets(id) ON DELETE CASCADE NOT NULL,
  changed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  old_status ticket_status,
  new_status ticket_status NOT NULL,
  notes TEXT,
  proof_image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_history ENABLE ROW LEVEL SECURITY;

-- Profiles: Public read, self-update
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Tickets: Anyone can view, Authenticated users can insert
CREATE POLICY "Tickets are viewable by everyone"
  ON public.tickets FOR SELECT USING (true);

CREATE POLICY "Citizens can insert tickets"
  ON public.tickets FOR INSERT WITH CHECK (auth.uid() = created_by OR auth.uid() IS NULL);

-- Only Municipal Officers/Admins can update ticket status
CREATE POLICY "Officers can update tickets"
  ON public.tickets FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role IN ('officer', 'admin')
    )
  );

-- ============================================================================
-- STORAGE CONFIGURATION
-- ============================================================================
-- Insert Civic Media Bucket if not exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('civic-evidence', 'civic-evidence', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policy: Anyone can view evidence photos
CREATE POLICY "Public Access to Evidence Photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'civic-evidence');

-- Storage Policy: Authenticated users can upload evidence photos
CREATE POLICY "Authenticated users can upload evidence"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'civic-evidence');
