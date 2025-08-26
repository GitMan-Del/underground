"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const isAuthenticated = status === "authenticated"
  const isLoading = status === "loading"

  const logout = async () => {
    await signOut({ redirect: false })
    router.push("/login")
  }

  const redirectToLogin = () => {
    router.push("/login")
  }

  const redirectToHome = () => {
    router.push("/") 
  }

  return {
    session,
    status,
    isAuthenticated,
    isLoading,
    user: session?.user,
    logout,
    redirectToLogin,
    redirectToHome,
  }
}
