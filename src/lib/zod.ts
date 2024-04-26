import { z } from "zod"

export const entitySchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Campo Obrigatório" }),
  uex: z.string().optional(),
})

export const CreateOrUpdateEntitySchema = entitySchema.omit({ id: true })

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

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório")
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
})
