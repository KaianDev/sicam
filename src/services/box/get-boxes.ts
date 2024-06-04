import prisma from "@/lib/db"

interface GetBoxesData {
  take: number
  skip: number
  search?: string
}

export const getBoxes = async ({ take, skip, search }: GetBoxesData) => {
  const boxes = await prisma.box.findMany({
    take,
    skip,
    where: search
      ? {
          content: {
            contains: search.toLocaleLowerCase(),
            mode: "insensitive",
          },
        }
      : undefined,
    include: { entity: true, sector: true },
    orderBy: {
      createdAt: "desc",
    },
  })

  return boxes
}
