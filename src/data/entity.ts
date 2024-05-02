import { getEntitiesService, getEntityService } from "@/services/entity"
import { unstable_noStore as noStore } from "next/cache"

export const getEntities = async () => {
  noStore()
  const entities = await getEntitiesService()
  return entities
}

export const getEntity = async (id: string) => {
  noStore()
  const entity = await getEntityService(id)
  return entity
}
