import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Please check your .env.local file.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder_key'
)

// Database schema types
export interface Database {
  public: {
    Tables: {
      users_tabel: {
        Row: {
          id: string
          email: string
          name: string
          password_hash: string
          image?: string
          has_access: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          password_hash: string
          image?: string
          has_access?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          password_hash?: string
          image?: string
          has_access?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// Types for our database - updated to match actual table structure
export interface User {
  id: string
  name: string
  image?: string
  has_access: boolean
  created_at: string
  updated_at: string
}

// For authentication, we need to store email and password separately
// You might want to create a separate auth table or add these columns
export interface AuthUser {
  id: string
  email: string
  name: string
  password_hash: string
  image?: string
  has_access: boolean
  created_at: string
  updated_at: string
}

export interface CreateUserData {
  email: string
  name: string
  password: string
  image?: string
  has_access?: boolean
}
