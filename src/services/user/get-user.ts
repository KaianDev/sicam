import prisma from "@/lib/db"

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    include: {
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
}

export const getUserById = async (id: string) => {
  return await prisma.user.findFirst({
    where: { id },
    include: {
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
}
