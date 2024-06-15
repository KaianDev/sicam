import { getSectorById, getSectors } from "@/services/sector"

export const fetchSectors = async () => {
  try {
    return await getSectors()
  } catch (error) {
    throw new Error("Erro no carregamento dos dados")
  }
}

export const fetchSector = async (id: string) => {
  try {
    const sector = await getSectorById(id)
    return sector
  } catch (error) {
    throw new Error("Erro no carregamento dos dados")
  }
}
