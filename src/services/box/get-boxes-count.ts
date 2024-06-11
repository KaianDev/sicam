import prisma from "@/lib/db"
import { SearchParams } from "@/types/search-params"

export const getBoxesCount = async ({
  entity,
  search,
  sector,
}: SearchParams) => {
  const boxCount = await prisma.box.count({
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
        // id: "8ecd5b4d-5c8e-42c1-ab33-0d109fb2871d",
      },
    },
  })
  return boxCount
}
