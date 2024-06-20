import { Role } from "@prisma/client"
import { boolean, z } from "zod"

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

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
  active: z
    .nativeEnum(UserStatus)
    .or(boolean())
    .transform((v) => {
      if (v === UserStatus.ACTIVE || v) {
        return true
      } else {
        return false
      }
    })
    .optional(),
  avatar: z.string().optional(),
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
    .min(1, "Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export const SendMailSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("E-mail inválido"),
})
