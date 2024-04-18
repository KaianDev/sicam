import { z } from "zod"

export const addSchoolSchema = z.object({
  uex: z.string().min(6),
  name: z.string(),
})

export const addEntitySchema = z.object({
  name: z.string(),
})

export const boxSchema = z.object({
  id: z.string(),
  content: z.string(),
  observation: z.string().optional(),
  numBox: z.number(),
  entityId: z.string(),
  sectorId: z.string(),
  ownerId: z.string(),
})

export const addBoxSchema = boxSchema.omit({
  id: true,
  numBox: true,
  ownerId: true,
  sectorId: true,
})

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório")
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
})
