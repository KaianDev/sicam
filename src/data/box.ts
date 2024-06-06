import {
  getBoxWithEntityAndSectorAndUser,
  getBoxes,
  getBoxesCount,
  getBox,
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

interface SearchParams {
  page?: string
  search?: string
}

export const fetchBoxes = async ({ page, search }: SearchParams) => {
  const take = 12
  const skip =
    page && !isNaN(parseInt(page)) ? (parseInt(page) - 1) * take : 0 * take

  try {
    const boxes = await getBoxes({ take, skip, search })
    const boxCount = await getBoxesCount({ search })

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
  } catch (error) {
    return null
  }
}
