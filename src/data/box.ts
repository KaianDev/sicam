import type { SearchParams } from "@/types/search-params"

import {
  getBoxWithEntityAndSectorAndUser,
  getBoxes,
  getBoxesCount,
  getBox,
  getTotalBoxCount,
} from "@/services/box"

export const fetchBoxWithEntityAndSectorAndUser = async (id: string) => {
  try {
    const box = await getBoxWithEntityAndSectorAndUser(id)
    return box
  } catch (error) {
    return null
  }
}

export const fetchBox = async (id: string) => {
  try {
    const box = await getBox(id)
    return box
  } catch (error) {
    return null
  }
}

export const fetchBoxes = async ({
  page,
  search,
  entity,
  sector,
}: SearchParams) => {
  const take = 12
  const skip =
    page && !isNaN(parseInt(page)) ? (parseInt(page) - 1) * take : 0 * take

  try {
    const [boxes, boxCount] = await Promise.all([
      getBoxes({
        take,
        skip,
        searchParams: { search, entity, sector },
      }),
      getBoxesCount({ search, entity, sector }),
    ])

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
  } catch {
    throw new Error("Erro no carregamento dos dados")
  }
}

export const fetchTotalBoxCount = async () => {
  try {
    return await getTotalBoxCount()
  } catch (error) {
    throw new Error("Erro no carregamento dos dados")
  }
}
