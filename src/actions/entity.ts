"use server"

import { CreateOrUpdateEntityType } from "@/types/zod"
import { revalidatePath } from "next/cache"

import prisma from "@/lib/db"

export const createEntity = async (data: CreateOrUpdateEntityType) => {
  const { name, uex } = data
  try {
    const entity = await prisma.entity.findUnique({ where: { name } })

    if (entity) {
      const message = "Erro: A entidade já existe!"
      return { message }
    }

    await prisma.entity.create({ data: { name, uex } })
  } catch (error) {
    return { message: "Erro de BD: Falha ao criar entidade." }
  }
  revalidatePath("/app/admin/entity")
}
