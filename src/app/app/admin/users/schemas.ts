import { UserSchema } from "@/lib/zod"

export const createUserSchema = UserSchema.omit({
  id: true,
  avatar: true,
  active: true,
})

export const updateUserWithOutPasswordSchema = UserSchema.omit({
  id: true,
  password: true,
})
