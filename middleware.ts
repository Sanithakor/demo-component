import { auth } from "@/auth"
import { NextResponse } from "next/server"

// Routes that require authentication
const protectedPrefixes = ["/dashboard", "/admin"]

// Routes only for unauthenticated users
const authRoutes = ["/login", "/register", "/forgot-password"]

// Admin-only routes
const adminPrefixes = ["/admin"]

export default auth((req) => {
  const { nextUrl, auth: session } = req
  const isLoggedIn   = !!session
  const isAdmin      = session?.user?.role === "ADMIN"
  const path         = nextUrl.pathname

  // Redirect authenticated users away from auth pages
  if (isLoggedIn && authRoutes.some((r) => path.startsWith(r))) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl))
  }

  // Require login for protected routes
  if (!isLoggedIn && protectedPrefixes.some((p) => path.startsWith(p))) {
    const loginUrl = new URL("/login", nextUrl)
    loginUrl.searchParams.set("callbackUrl", path)
    return NextResponse.redirect(loginUrl)
  }

  // Admin gate
  if (path.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
}
