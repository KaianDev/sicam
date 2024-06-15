import prisma from "@/lib/db"
import { getEntities, getEntityById, getEntityWithBox } from "@/services/entity"

export const fetchEntities = async () => {
  try {
    const entities = await getEntities()
    return entities
  } catch (error) {
    return []
  }
}

export const fetchEntity = async (id: string) => {
  try {
    const entity = await getEntityById(id)
    return entity
  } catch (error) {
    throw new Error("Erro no carregamento dos dados")
  }
}

export const fetchEntityWithBoxes = async (id: string, sector?: string) => {
  try {
    const entity = await getEntityWithBox(id, sector)
    return entity
  } catch (error) {
    throw new Error("Erro no carregamento dos dados")
  }
}
