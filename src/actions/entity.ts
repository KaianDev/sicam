"use server"

import { CreateOrUpdateEntityType } from "@/types/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import prisma from "@/lib/db"

export const fetchEntities = async () => {
  const entities = await prisma.entity.findMany({
    orderBy: [
      {
        uex: {
          sort: "asc",
          nulls: "first",
        },
      },
      {
        name: "asc",
      },
    ],
  })
  return entities
}

export const fetchEntity = async (id: string) => {
  const entity = await prisma.entity.findFirst({ where: { id } })
  if (!entity) return null
  return entity
}

export const fetchEntityWithBoxes = async (id: string) => {
  const entity = await prisma.entity.findFirst({
    where: { id },
    include: { boxes: true },
  })
  if (!entity) return { message: "Não foi possível encontra a entidade" }
  return entity
}

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
