import { BoxWithSchool } from "@/types/box"

interface IGetBoxes {
  search?: string
  page?: string
}

export const getBoxes = async (
  searchParams: IGetBoxes,
): Promise<BoxWithSchool[]> => {
  const fetchString =
    searchParams.page && searchParams.search
      ? `http://localhost:3000/api/box?search=${searchParams?.search}&page=${searchParams?.page}`
      : searchParams.page
        ? `http://localhost:3000/api/box?page=${searchParams.page}`
        : searchParams.search
          ? `http://localhost:3000/api/box?search=${searchParams.search}`
          : `http://localhost:3000/api/box`

  const res = await fetch(fetchString)
  if (!res.ok) {
    throw new Error(
      "Ocorreu um erro no carregamento, tente novamente mais tarde.",
    )
  }
  const data = await res.json()
  return data.boxes as BoxWithSchool[]
}
