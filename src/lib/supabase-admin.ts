import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('Missing Supabase service role environment variables. Please check your .env.local file.')
}

// This client uses the service role key and bypasses RLS
export const supabaseAdmin = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseServiceKey || 'placeholder_key',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
