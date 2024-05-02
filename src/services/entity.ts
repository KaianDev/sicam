"use server"

import prisma from "@/lib/db"
import { CreateOrUpdateEntitySchema } from "@/lib/zod"


export const getEntitiesService = async () => {
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

export const getEntityService = async (id: string) => {
  const entity = await prisma.entity.findFirst({
    where: { id },
    include: { boxes: true },
  })
  if (!entity) throw new Error("Não foi possível encontrar essa entidade.")
  return entity
}

export const addEntityService = async (data: any) => {
  const schema = CreateOrUpdateEntitySchema.safeParse(data)
  if (!schema.success) {
    throw new Error("Dados inválidos")
  }
  const { name, uex } = schema.data

  const entity = await prisma.entity.findUnique({ where: { name } })

  if (entity) {
    throw new Error("A entidade já existe")
  }
  const newEntity = await prisma.entity.create({ data: { name, uex } })
  return newEntity
}
