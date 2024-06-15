import prisma from "@/lib/db"

export const getSectors = async () => {
  return await prisma.sector.findMany({
    orderBy: {
      name: "asc",
    },
  })
}
