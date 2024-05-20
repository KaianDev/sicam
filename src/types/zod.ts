import { z } from "zod"
import {
  CreateOrUpdateBoxSchema,
  CreateOrUpdateEntitySchema,
  CreateOrUpdateSectorSchema,
  CreateUserSchema,
  loginSchema,
} from "@/lib/zod"
import { UpdateUserWithOutPasswordSchema } from "../lib/zod"

export type LoginSchema = z.infer<typeof loginSchema>

export type CreateOrUpdateBoxType = z.infer<typeof CreateOrUpdateBoxSchema>

export type CreateOrUpdateEntityType = z.infer<
  typeof CreateOrUpdateEntitySchema
>

export type CreateOrUpdateSectorType = z.infer<
  typeof CreateOrUpdateSectorSchema
>

export type CreateUserType = z.infer<typeof CreateUserSchema>

export type UpdateUserWithOutPasswordType = z.infer<
  typeof UpdateUserWithOutPasswordSchema
>
