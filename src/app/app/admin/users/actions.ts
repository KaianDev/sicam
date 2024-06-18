"use server"

import { hashPassword } from "@/lib/password"
import {
  type CreateUserData,
  getUserByEmail,
  createUserService,
  getUserById,
  UpdateUserData,
  updateUserService,
} from "@/services/user"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createUser = async (data: CreateUserData) => {
  const hasUser = await getUserByEmail(data.email)
  if (hasUser) return { message: "Já existe um usuário com esse e-mail." }

  const hashedPassword = await hashPassword(data.password)

  const user = await createUserService({ ...data, password: hashedPassword })
  if (!user) {
    return {
      message: "Ocorreu um erro ao criar usuário",
    }
  }

  revalidatePath("/app/admin/users")
  redirect("/app/admin/users")
}

export const updateUser = async (id: string, data: UpdateUserData) => {
  const hasUser = await getUserById(id)
  console.log({ data })
  if (!hasUser) return { message: "Usuário não encontrado." }
  const user = await updateUserService(hasUser.id, data)
  if (!user) return { message: "Ocorreu um erro ao alterar os dados" }
  revalidatePath("/app/admin/users")
  redirect("/app/admin/users")
}
