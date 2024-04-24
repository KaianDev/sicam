import { loginSchema } from "@/lib/zod"
import { z } from "zod"

export type LoginSchema = z.infer<typeof loginSchema>

export const BoxSchema = z.object({
  id: z.string(),
  entityId: z.string({ required_error: "Campo obrigatório" }),
  ownerId: z.string(),
  sectorId: z.string(),
  content: z.string({ required_error: "Campo obrigatório" }),
  observation: z.string().optional(),
  numBox: z.number(),
  createdAt: z.date(),
})

export const CreateOrUpdateBoxSchema = BoxSchema.omit({
  id: true,
  numBox: true,
  createdAt: true,
})

export type CreateOrUpdateBoxType = z.infer<typeof CreateOrUpdateBoxSchema>
