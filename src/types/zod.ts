import { z } from "zod"
import {
  CreateOrUpdateBoxSchema,
  CreateOrUpdateEntitySchema,
  CreateOrUpdateSectorSchema,
  CreateOrUpdateUserSchema,
  loginSchema,
} from "@/lib/zod"

export type LoginSchema = z.infer<typeof loginSchema>

export type CreateOrUpdateBoxType = z.infer<typeof CreateOrUpdateBoxSchema>

export type CreateOrUpdateEntityType = z.infer<
  typeof CreateOrUpdateEntitySchema
>

export type CreateOrUpdateSectorType = z.infer<
  typeof CreateOrUpdateSectorSchema
>

export type CreateOrUpdateUserType = z.infer<typeof CreateOrUpdateUserSchema>
