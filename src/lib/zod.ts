import { Role } from "@prisma/client"
import { z } from "zod"

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
    .min(1, "Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
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


export const SendMailSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("E-mail inválido"),
})
