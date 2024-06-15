import prisma from "@/lib/db"
import { SearchParams } from "@/types/search-params"

interface GetBoxesData {
  take: number
  skip: number
  searchParams: SearchParams
}

export const getBoxes = async ({
  take,
  skip,
  searchParams: { search, entity, sector },
}: GetBoxesData) => {
  const boxes = await prisma.box.findMany({
    take,
    skip,
    where: {
      content: {
        contains: search?.toLocaleLowerCase(),
        mode: "insensitive",
      },
      entity: {
        name: {
          equals: entity?.toLocaleLowerCase(),
          mode: "insensitive",
        },
      },
      sector: {
        name: {
          mode: "insensitive",
          equals: sector?.toLocaleLowerCase(),
        },
      },
    },
    include: { entity: true, sector: true },
    orderBy: {
      createdAt: "desc",
    },
  })
  return boxes
}
