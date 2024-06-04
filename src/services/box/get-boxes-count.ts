import prisma from "@/lib/db"

interface GetBoxesCountData {
  search?: string
}

export const getBoxesCount = async ({ search }: GetBoxesCountData) => {
  return await prisma.box.count({
    where: search
      ? {
          content: {
            contains: search.toLocaleLowerCase(),
            mode: "insensitive",
          },
        }
      : undefined,
  })
}
