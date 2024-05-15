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
      where: search
        ? {
            content: {
              contains: search.toLocaleLowerCase(),
              mode: "insensitive",
            },
          }
        : {},
    })

  const [boxes, boxCount] = await Promise.all([getBoxes(), getCount()])

  const pageNum = page && !isNaN(parseInt(page)) ? parseInt(page) : 1
  const pageCount = Math.ceil(boxCount / take)
  const first = 1
  const last = Math.ceil(boxCount / take)
  const next = pageNum + 1 <= last ? pageNum + 1 : null
  const prev = pageNum <= first ? null : pageNum - 1

  return {
    first,
    next,
    prev,
    page: pageNum,
    last,
    boxes,
    boxCount,
    pageCount,
  }
}
