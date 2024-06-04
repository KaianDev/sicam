import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

type CreateEntityData = Prisma.Args<typeof prisma.entity, "create">["data"]

export const createEntity = async (data: CreateEntityData) => {
  return await prisma.entity.create({ data })
}
