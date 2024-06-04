import { Prisma } from "@prisma/client"
import prisma from "@/lib/db"

export type UpdateUserData = Prisma.Args<typeof prisma.user, "update">["data"]

export const updateUserService = async (id: string, data: UpdateUserData) => {
  const user = await prisma.user.update({ where: { id }, data })
  return user
}
