import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

type UpdateBoxData = Prisma.Args<typeof prisma.box, "update">["data"]

export const updateBox = async (id: string, data: UpdateBoxData) => {
  return await prisma.box.update({ where: { id }, data })
}
