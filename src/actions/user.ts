"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs"

import {
  CreateUserData,
  UpdateUserData,
  createUserService,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUserService,
  uploadImage,
} from "@/services/user"
import { ChangePasswordData } from "@/types/zod"
import { checkFileTypeIsImage } from "@/helpers/check-file-type"

export const createUser = async (data: CreateUserData) => {
  const hasUser = await getUserByEmail(data.email)
  if (hasUser) return { message: "Já existe um usuário com esse e-mail." }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await createUserService({ ...data, password: hashedPassword })
  if (!user) {
    return {
      message: "Ocorreu um erro ao criar usuário",
    }
  }

  revalidatePath("/app/admin/users")
  redirect("/app/admin/users")
}

export const fetchUsers = async () => {
  const users = await getAllUsers()
  if (!users) return []
  return users
}

export const fetchUserById = async (id: string) => {
  return await getUserById(id)
}

export const updateUser = async (id: string, data: UpdateUserData) => {
  const hasUser = await getUserById(id)
  if (!hasUser) return { message: "Usuário não encontrado." }
  const user = await updateUserService(hasUser.id, data)
  if (!user) return { message: "Ocorreu um erro ao alterar os dados" }
  revalidatePath("/app/admin/users")
  redirect("/app/admin/users")
}

export const changePassword = async (id: string, data: ChangePasswordData) => {
  const hasUser = await getUserById(id)
  if (!hasUser) return { message: "Usuário não encontrado." }

  const matchPassword = await bcrypt.compare(data.oldPassword, hasUser.password)

  if (!matchPassword) return { message: "Dados inválidos" }

  const hashedPassword = await bcrypt.hash(data.newPassword, 10)

  const user = updateUser(hasUser.id, {
    password: hashedPassword,
  })

  if (!user) return { message: "Ocorreu um erro ao tentar atualizar a senha" }

  redirect("/app/profile")
}

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
