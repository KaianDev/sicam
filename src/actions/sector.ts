"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { CreateOrUpdateSectorType } from "@/types/zod"
import prisma from "@/lib/db"

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
