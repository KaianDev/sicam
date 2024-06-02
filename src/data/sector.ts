import prisma from "@/lib/db"

export const fetchSectors = async () => {
  const sectors = await prisma.sector.findMany({
    orderBy: {
      name: "asc",
    },
  })
  return sectors
}

export const fetchSector = async (id: string) => {
  const sector = await prisma.sector.findUnique({
    where: {
      id,
    },
  })
  return sector
}
