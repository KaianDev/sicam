"use server"

import { revalidatePath } from "next/cache"

import prisma from "@/lib/db"
import { CreateOrUpdateSectorType } from "@/types/zod"
import { redirect } from "next/navigation"

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

export const createSector = async (data: CreateOrUpdateSectorType) => {
  try {
    await prisma.sector.create({
      data,
    })
  } catch {
    return { message: "Ocorreu um erro ao criar o setor." }
  }

  revalidatePath("/api/admin/sector")
}

export const updateSector = async (
  id: string,
  data: CreateOrUpdateSectorType,
) => {
  try {
    await prisma.sector.update({
      where: {
        id,
      },
      data,
    })
  } catch {
    return { message: "Ocorreu um erro ao atualizar o setor." }
  }

  revalidatePath("/app/admin/sector")
  redirect("/app/admin/sector")
}
