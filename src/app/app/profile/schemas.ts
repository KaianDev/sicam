import { z } from "zod"
import { UserSchema } from "@/lib/zod"

export const profileAvatarFormSchema = z.object({
  avatar:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .transform((list) => list.item(0)!)
          .refine(
            (file) => file.size <= 3 * 1024 * 1024,
            "Tamanho máximo permitido de 3Mb",
          ),
})

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string({ required_error: "Campo obrigatório" })
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    newPassword: z
      .string({ required_error: "Campo obrigatório" })
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
      .string({ required_error: "Campo obrigatório" })
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  })

  export const updateUserProfileSchema = UserSchema.omit({
    id: true,
    password: true,
    sectorId: true,
    role: true,
    avatar: true,
  })