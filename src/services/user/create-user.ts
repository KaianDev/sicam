import { Prisma } from "@prisma/client"
import prisma from "@/lib/db"

export type CreateUserData = Prisma.Args<typeof prisma.user, "create">["data"]
export const createUserService = async (data: CreateUserData) => {
  const user = await prisma.user.create({ data })
  return user
}
