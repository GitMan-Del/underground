import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { supabase } from "./supabase"

// Extend NextAuth types for v5
declare module "next-auth" {
  interface User {
    id: string
    email: string
    name: string
    image?: string
  }
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image?: string
    }
  }
}

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      async authorize(credentials) {
        console.log("Authorize called with:", { email: credentials?.email })
        
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials")
          return null
        }

        try {
          // Check if Supabase is configured
          if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            console.error("Supabase environment variables not configured")
            return null
          }

          // Fetch user from Supabase - using the actual table name and structure
          const { data: user, error } = await supabase
            .from('users_tabel')
            .select('*')
            .eq('email', credentials.email)
            .single()

          if (error) {
            console.error('Supabase error:', error)
            return null
          }

          if (!user) {
            console.log('User not found')
            return null
          }

          // Cast user to the correct type to fix TypeScript issues
          const typedUser = user as {
            id: string;
            email: string;
            name: string;
            password_hash: string;
            image?: string;
            created_at: string;
            updated_at: string;
            has_access: boolean; // Added has_access to the type
          };

          // Ensure user has the required fields
          if (!typedUser.password_hash) {
            console.log('User has no password hash')
            return null
          }

          if (!typedUser.email || !typedUser.name || !typedUser.id) {
            console.log('User missing required fields')
            return null
          }

          // Check if user has access
          if (!typedUser.has_access) {
            console.log('User does not have access')
            return null
          }
          
          // Now TypeScript knows the exact types - use explicit type assertion
          const passwordHash = typedUser.password_hash as string;
          const isPasswordValid = await bcrypt.compare(credentials.password as string, passwordHash)

          if (!isPasswordValid) {
            console.log('Invalid password')
            return null
          }

          console.log('User authenticated successfully:', { id: typedUser.id, email: typedUser.email })

          // Return user object for NextAuth (only necessary fields)
          return {
            id: typedUser.id,
            email: typedUser.email,
            name: typedUser.name,
            image: typedUser.image || undefined,
          }
        } catch (error) {
          console.error('Authentication error:', error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }: { token: Record<string, unknown>; user: Record<string, unknown> }) {
      if (user) {
        (token as Record<string, unknown>).name = user.name
        (token as Record<string, unknown>).image = user.image
      }
      return token
    },
    async session({ session, token }: { session: Record<string, unknown>; token: Record<string, unknown> }) {
      if (session.user && token) {
        ((session.user as Record<string, unknown>).name as string) = (token as Record<string, unknown>).name as string
        ((session.user as Record<string, unknown>).image as string | undefined) = (token as Record<string, unknown>).image as string | undefined
      }
      return session
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // If user is trying to access login/register while authenticated, redirect to home
      if (url.startsWith(baseUrl + '/login') || url.startsWith(baseUrl + '/register')) {
        return baseUrl + '/'
      }
      // Allow all other redirects
      return url
    }
  },
  session: {
    strategy: "jwt" as const,
  },
  debug: process.env.NODE_ENV === 'development',
}

console.log("NextAuth config:", { 
  providers: authConfig.providers.length,
  pages: authConfig.pages,
  debug: authConfig.debug 
});

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);