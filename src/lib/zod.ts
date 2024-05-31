import { Role } from "@prisma/client"
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
  ownerId: true,
  sectorId: true,
})

export const SectorSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Campo obrigatório" }),
})

export const CreateOrUpdateSectorSchema = SectorSchema.omit({ id: true })

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório")
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
})

export const UserSchema = z.object({
  id: z.string(),
  name: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  sectorId: z.string({ required_error: "Campo obrigatório" }),
  role: z.nativeEnum(Role, { required_error: "Campo obrigatório" }),
  avatar: z.string().optional(),
})

export const CreateUserSchema = UserSchema.omit({ id: true, avatar: true })

export const UpdateUserWithOutPasswordSchema = UserSchema.omit({
  password: true,
  id: true,
})

export const SendMailSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("E-mail inválido"),
})
