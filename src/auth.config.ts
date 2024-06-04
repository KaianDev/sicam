import { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"

import { checkPassword } from "@/lib/password"
import { loginSchema } from "@/lib/zod"
import { getUserByEmail } from "@/services/user"

export default {
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user
      const isRootRoute = nextUrl.pathname === "/"
      const isPrivateAppRoute = nextUrl.pathname.startsWith("/app")
      const isPrivateAdminRoute = nextUrl.pathname.startsWith("/app/admin")

      const isAuthRoute = nextUrl.pathname.startsWith("/auth")

      if (!isLoggedIn && isPrivateAppRoute) return false

      if (isLoggedIn && isAuthRoute)
        return Response.redirect(new URL("/app", nextUrl))

      if (isLoggedIn && isRootRoute)
        return Response.redirect(new URL("/app", nextUrl))

      if (isLoggedIn && auth.user.role !== "ADMIN" && isPrivateAdminRoute)
        return Response.redirect(new URL("/app", nextUrl))

      return true
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.name
        token.role = user.role
        token.sub = user.id
        token.picture = user.image
      }
      return token
    },

    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.sub!
        session.user.email = token.email!
        session.user.image = token.picture
        session.user.role = token.role!
      }
      return session
    },
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { email, password } = await loginSchema.parseAsync(credentials)

        try {
          const user = await getUserByEmail(email)
          if (!user) {
            throw new Error("Dados inválidos")
          }

          const matchPassword = await checkPassword(password, user.password)

          if (!matchPassword) {
            throw new Error("Dados inválidos")
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      },
    }),
  ],
} satisfies NextAuthConfig
