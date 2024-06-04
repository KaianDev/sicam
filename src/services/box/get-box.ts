import prisma from "@/lib/db"

export const getBox = async (id: string) => {
  return await prisma.box.findFirst({
    where: { id },
    include: {
      entity: true,
      sector: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  })
}
