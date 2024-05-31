"use server"

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
} from "@/services/user"

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


