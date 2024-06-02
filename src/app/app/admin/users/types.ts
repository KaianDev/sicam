import { z } from "zod"
import { updateUserWithOutPasswordSchema, createUserSchema } from "./schemas"

export type CreateUserData = z.infer<typeof createUserSchema>

export type UpdateUserWithOutPasswordData = z.infer<
  typeof updateUserWithOutPasswordSchema
>
