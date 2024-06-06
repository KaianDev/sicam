import { z } from "zod"

export const BoxSchema = z.object({
  id: z.string(),
  entityId: z.string({ required_error: "Campo obrigatório" }),
  ownerId: z.string(),
  sectorId: z.string(),
  content: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .min(1, "Campo obrigatório"),
  observation: z.string().optional(),
  numBox: z.number(),
  createdAt: z.date(),
})

export const createOrUpdateBoxSchema = BoxSchema.omit({
  id: true,
  numBox: true,
  createdAt: true,
  ownerId: true,
  sectorId: true,
})
