import { z } from "zod"
import {
  CreateOrUpdateBoxSchema,
  CreateOrUpdateEntitySchema,
  CreateOrUpdateSectorSchema,
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
