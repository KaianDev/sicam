"use server"

import prisma from "@/lib/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import type { CreateOrUpdateBoxType } from "@/types/zod"

export const fetchBox = async (id: string) => {
  const box = await prisma.box.findFirst({
    where: { id },
    include: {
      entity: true,
      sector: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  })

  return box
}

interface SearchParams {
  page?: string
  search?: string
}

export const fetchBoxes = async ({ page, search }: SearchParams) => {
  const take = 12
  const skip =
    page && !isNaN(parseInt(page)) ? (parseInt(page) - 1) * take : 0 * take

  const getBoxes = () =>
    prisma.box.findMany({
      take,
      skip,
      where: search
        ? {
            content: {
              contains: search.toLocaleLowerCase(),
              mode: "insensitive",
            },
          }
        : {},
      include: { entity: true, sector: true },
      orderBy: {
        createdAt: "desc",
      },
    })

  const getCount = () =>
    prisma.box.count({
      where: search ? { content: { contains: search } } : {},
    })

  const [boxes, boxCount] = await Promise.all([getBoxes(), getCount()])

  return {
    boxes,
    boxCount,
  }
}

export const addNewBox = async (data: CreateOrUpdateBoxType) => {
  // const ownerId = "55c511dc-ec7c-4a3c-82e6-01d99df846d0" // John Snow
  const ownerId = "6d578917-1d2d-4e09-8474-b7f59de71363" // Daenarys Targeryen

  try {
    const user = await prisma.user.findFirst({ where: { id: ownerId } })

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
