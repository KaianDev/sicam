import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

type UpdateEntityData = Prisma.Args<typeof prisma.entity, "update">["data"]

export const updateEntity = async (id: string, data: UpdateEntityData) => {
  return await prisma.entity.update({ where: { id }, data })
}
