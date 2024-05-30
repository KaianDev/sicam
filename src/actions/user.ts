"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import prisma from "@/lib/db"
import bcrypt from "bcryptjs"

import { CreateUserType, UpdateUserWithOutPasswordType } from "@/types/zod"

export const createUser = async (data: CreateUserType) => {
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

  revalidatePath("/app/admin/user")
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

export const fetchUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      sectorId: true,
      avatar: true,
    },
  })
}

export const updateUserWithOutPassword = async (
  id: string,
  data: UpdateUserWithOutPasswordType,
) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) return { message: "Usuário não encontrado." }

    await prisma.user.update({
      where: { id },
      data: data,
    })
  } catch (e) {
    return { message: "Ocorreu um erro ao atualizar o usuário." }
  }

  revalidatePath("/app/admin/user")
  redirect("/app/admin/user")
}
