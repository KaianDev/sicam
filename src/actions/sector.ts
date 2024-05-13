"use server"

import prisma from "@/lib/db"

export const fetchSectors = async () => {
  const sectors = await prisma.sector.findMany({
    orderBy: {
      name: "asc",
    },
  })
  return sectors
}
