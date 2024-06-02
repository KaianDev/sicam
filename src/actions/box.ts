"use server"

import prisma from "@/lib/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import type { CreateOrUpdateBoxType } from "@/types/zod"
import { getCurrentUser } from "@/helpers/get-current-user"
import { getUserById } from "@/services/user"

export const addNewBox = async (data: CreateOrUpdateBoxType) => {
  const sessionUser = await getCurrentUser()
  const ownerId = sessionUser?.id

  if (!ownerId) return { message: "Acesso negado!" }

  try {
    const user = await getUserById(ownerId)

    if (!user) {
      return { message: "Usuário não encontrado!" }
    }

    const sectorId = user.sectorId
    const { content, entityId, observation } = data

    const entity = await prisma.entity.findFirst({
      where: { id: entityId },
      include: { boxes: true },
    })

    const sector = await prisma.sector.findFirst({
      where: {
        id: sectorId,
      },
      include: {
        boxes: {
          where: {
            entityId,
          },
        },
      },
    })

    if (!entity) {
      return { message: "A entidade não foi encontrada" }
    }

    if (!sector) {
      return { message: "Setor inválido" }
    }

    const numBox = sector.boxes.length + 1

    await prisma.box.create({
      data: {
        content,
        observation,
        numBox,
        entityId,
        ownerId,
        sectorId,
      },
    })
  } catch (error) {
    return { message: "Erro de BD: Falha ao criar caixa" }
  }

  revalidatePath("/")
  revalidatePath("/app")
  redirect("/app")
}
