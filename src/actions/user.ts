"use server"

import prisma from "@/lib/db"
import { CreateOrUpdateUserType } from "@/types/zod"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createUser = async (data: CreateOrUpdateUserType) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: data.email } })
    if (user) return { message: "Já existe um usuário com esse e-mail." }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    await prisma.user.create({
      data: { ...data, password: hashedPassword },
    })
  } catch {
    return { message: "Ocorreu um erro ao criar o usuário." }
  }

  revalidatePath("/api/admin/user")
  redirect("/app/admin/user")
}

export const fetchUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
}
