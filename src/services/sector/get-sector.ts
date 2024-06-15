import prisma from "@/lib/db"

export const getSectorById = (id: string) => {
  return prisma.sector.findUnique({ where: { id } })
}
