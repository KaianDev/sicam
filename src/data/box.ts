import { BoxWithEntityAndSector } from "@/types/box"

interface IGetBoxes {
  search?: string
  page?: string
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const getBoxes = async (searchParams: IGetBoxes) => {
  const fetchString =
    searchParams.page && searchParams.search
      ? `${apiUrl}/box?search=${searchParams?.search}&page=${searchParams?.page}`
      : searchParams.page
        ? `${apiUrl}/box?page=${searchParams.page}`
        : searchParams.search
          ? `${apiUrl}/box?search=${searchParams.search}`
          : `${apiUrl}/api/box`

  const res = await fetch(fetchString, { next: { tags: ["boxes"] } })
  if (!res.ok) {
    throw new Error(
      "Ocorreu um erro no carregamento, tente novamente mais tarde.",
    )
  }
  const data = await res.json()
  return {
    boxes: data.boxes as BoxWithEntityAndSector[],
    count: data.boxCount as number,
  }
}
