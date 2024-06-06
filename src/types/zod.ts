import { z } from "zod"
import {
  CreateOrUpdateEntitySchema,
  CreateOrUpdateSectorSchema,
  SendMailSchema,
  loginSchema
} from "@/lib/zod"

export type LoginSchema = z.infer<typeof loginSchema>

export type CreateOrUpdateEntityType = z.infer<
  typeof CreateOrUpdateEntitySchema
>

export type CreateOrUpdateSectorType = z.infer<
  typeof CreateOrUpdateSectorSchema
>

export type SendMailType = z.infer<typeof SendMailSchema>
