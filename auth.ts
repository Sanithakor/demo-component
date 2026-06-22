import NextAuth from "next-auth"
import Credentials from "@auth/core/providers/credentials"
import type { Role } from "@prisma/client"

// We use JWT-only sessions (no DB adapter needed until DATABASE_URL is set)
// When DATABASE_URL is available: uncomment PrismaAdapter lines below
// import { PrismaAdapter }   from "@auth/prisma-adapter"
// import { prisma }          from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),   // uncomment when DB is ready
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error:  "/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "email"    },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const email    = credentials.email    as string
        const password = credentials.password as string

        // 1. Try real database if available
        try {
          const { compare } = await import("bcryptjs")
          const { prisma } = await import("@/lib/prisma")
          const user = await prisma.user.findUnique({ where: { email } })
          if (user && user.password) {
            const valid = await compare(password, user.password)
            if (valid) {
              return { id: user.id, email: user.email, name: user.name, image: user.image, role: user.role }
            }
          }
        } catch (dbErr) {
          console.warn("Database error or offline during authentication authorize:", dbErr)
        }

        // 2. Try global/in-memory temporary users (for local dev offline fallback)
        const registry = global as any
        if (registry.tempUsers && registry.tempUsers[email]) {
          const { compare } = await import("bcryptjs")
          const tempUser = registry.tempUsers[email]
          const tempHashedPassword = registry.tempPasswords?.[email]
          if (tempHashedPassword) {
            const valid = await compare(password, tempHashedPassword)
            if (valid) {
              return tempUser
            }
          }
        }

        // 3. Fallback to Demo credentials (no DB)
        const DEMO_USERS: Record<string, { id: string; name: string; email: string; role: Role }> = {
          "admin@componentshub.com": { id: "admin-1", name: "Admin User",   email: "admin@componentshub.com", role: "ADMIN"   },
          "demo@componentshub.com":  { id: "user-1",  name: "Demo User",    email: "demo@componentshub.com",  role: "USER"    },
          "pro@componentshub.com":   { id: "user-2",  name: "Pro User",     email: "pro@componentshub.com",   role: "PREMIUM" },
        }
        const DEMO_PASSWORDS: Record<string, string> = {
          "admin@componentshub.com": "admin123",
          "demo@componentshub.com":  "user1234",
          "pro@componentshub.com":   "pro1234",
        }

        const user = DEMO_USERS[email]
        if (user && DEMO_PASSWORDS[email] === password) {
          return user
        }

        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id   = user.id as string
        token.role = (user as any).role as Role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id   = token.id   as string
        session.user.role = token.role as Role
      }
      return session
    },
  },
})
