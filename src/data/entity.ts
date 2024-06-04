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
    return null
  }
}

export const fetchEntityWithBoxes = async (id: string) => {
  try {
    const entity = await getEntityWithBox(id)
    return entity
  } catch (error) {
    return null
  }
}
