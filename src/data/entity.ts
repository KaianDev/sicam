import prisma from "@/lib/db"

export const fetchEntities = async () => {
  const entities = await prisma.entity.findMany({
    orderBy: [
      {
        uex: {
          sort: "asc",
          nulls: "first",
        },
      },
      {
        name: "asc",
      },
    ],
  })
  return entities
}

export const fetchEntity = async (id: string) => {
  const entity = await prisma.entity.findFirst({ where: { id } })
  return entity
}

export const fetchEntityWithBoxes = async (id: string) => {
  const entity = await prisma.entity.findFirst({
    where: { id },
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
  return entity
}