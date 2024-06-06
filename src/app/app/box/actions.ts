"use server"

import prisma from "@/lib/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import type { CreateOrUpdateBoxData } from "./types"

import { getCurrentUser } from "@/helpers/get-current-user"
import { getUserById } from "@/services/user"
import {
  createBox,
  getBox,
  updateBox as updateBoxService,
} from "@/services/box"
import { getEntityWithBox } from "@/services/entity"

export const addNewBox = async (data: CreateOrUpdateBoxData) => {
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

    const entity = await getEntityWithBox(entityId)

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

    await createBox({
      numBox,
      content,
      observation,
      ownerId,
      entityId,
      sectorId,
    })
  } catch (error) {
    return { message: "Erro de BD: Falha ao criar caixa" }
  }

  revalidatePath("/")
  revalidatePath("/app")
  redirect("/app")
}

export const updateBox = async (id: string, data: CreateOrUpdateBoxData) => {
  const sessionUser = await getCurrentUser()
  const ownerId = sessionUser?.id

  let boxId = ""

  if (!ownerId) return { message: "Acesso negado!" }

  try {
    const box = await getBox(id)

    if (!box) return { message: "Caixa não encontrada" }

    boxId = box.id

    if (box.ownerId !== ownerId) return { message: "Acesso negado" }

    await updateBoxService(box.id, data)
  } catch (error) {
    return { message: "Erro de BD: Falha ao editar caixa" }
  }
  revalidatePath("/")
  revalidatePath("/app")
  revalidatePath("/app")
  redirect(boxId ? `/app/box/details/${boxId}` : "/app")
}
