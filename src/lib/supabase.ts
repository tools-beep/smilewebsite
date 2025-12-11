import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Applicant {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  cover_letter?: string;
  resume_url?: string;
  resume_filename?: string;
  status: 'pending' | 'reviewed' | 'interviewed' | 'hired' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'super_admin';
  created_at: string;
}
