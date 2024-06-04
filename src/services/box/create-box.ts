import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

type CreateBoxData = Prisma.Args<typeof prisma.box, "create">["data"]

export const createBox = async (data: CreateBoxData) => {
  await prisma.box.create({ data })
}
