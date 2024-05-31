"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs"

import type { ChangePasswordData } from "./types"

import { checkFileTypeIsImage } from "@/helpers/check-file-type"
import {
  UpdateUserData,
  getUserById,
  updateUserService,
  uploadImage,
} from "@/services/user"

export const changeProfileImage = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries())

  const schema = z
    .object({
      avatar: z.instanceof(File),
      id: z.string(),
    })
    .safeParse(data)

  if (!schema.success) return { message: "Dados inválidos" }

  const { id, avatar } = schema.data

  const user = await getUserById(id)
  if (!user) return { message: "Usuário não encontrado." }

  const validType = checkFileTypeIsImage(avatar)
  if (!validType) return { message: "Tipo de arquivo inválido" }

  const imageName = `avatars/${user.name.trim().toLowerCase().split(" ").join("-")}`
  const url = await uploadImage(avatar, imageName)

  if (!url)
    return { message: "Ocorreu um erro ao tentar fazer upload da imagem" }

  const updateUser = await updateUserService(user.id, { avatar: url })

  if (!updateUser)
    return { message: "Ocorreu um erro ao tentar atualizar a imagem" }

  revalidatePath("/app/profile")
  redirect("/app/profile")
}

export const changePassword = async (id: string, data: ChangePasswordData) => {
  const hasUser = await getUserById(id)
  if (!hasUser) return { message: "Usuário não encontrado." }

  const matchPassword = await bcrypt.compare(data.oldPassword, hasUser.password)

  if (!matchPassword) return { message: "Dados inválidos" }

  const hashedPassword = await bcrypt.hash(data.newPassword, 10)

  const user = updateUserService(hasUser.id, {
    password: hashedPassword,
  })

  if (!user) return { message: "Ocorreu um erro ao tentar atualizar a senha" }

  redirect("/app/profile")
}

export const updateProfile = async (id: string, data: UpdateUserData) => {
  const hasUser = await getUserById(id)
  if (!hasUser) return { message: "Usuário não encontrado." }

  const user = await updateUserService(hasUser.id, data)

  if (!user) return { message: "Ocorreu um erro ao tentar atualizar os dados" }

  revalidatePath("/app/profile")
  redirect("/app/profile")
}

export const removeProfileImage = async (id: string) => {
  const hasUser = await getUserById(id)
  if (!hasUser) return { message: "Usuário não encontrado." }

  const user = await updateUserService(hasUser.id, { avatar: null })

  if (!user) return { message: "Ocorreu um erro ao tentar remover a imagem" }

  revalidatePath("/app/profile")
  redirect("/app/profile")
}
