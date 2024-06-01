import { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"

import { checkPassword } from "@/lib/password"
import { loginSchema } from "@/lib/zod"
import { getUserByEmail } from "@/services/user"

export default {
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
            avatar: user.avatar,
            name: user.name,
            sectorId: user.sectorId,
            sectorName: user.sector.name,
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
