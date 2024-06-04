import prisma from "@/lib/db"

export const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      sector: {
        select: {
          name: true,
        },
      },
    },
  })
}
