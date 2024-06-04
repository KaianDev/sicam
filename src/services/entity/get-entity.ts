import prisma from "@/lib/db"

export const getEntityWithBox = async (entityId: string) => {
  return await prisma.entity.findFirst({
    where: { id: entityId },
    include: {
      boxes: {
        include: {
          sector: true,
          user: { select: { id: true } },
          entity: true,
        },
      },
    },
  })
}

export const getEntityByName = async (name: string) => {
  return await prisma.entity.findUnique({ where: { name } })
}

export const getEntityById = async (id: string) => {
  return await prisma.entity.findFirst({ where: { id } })
}
