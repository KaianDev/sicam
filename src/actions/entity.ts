"use server"

import { CreateOrUpdateEntityType } from "@/types/zod"
import { revalidatePath } from "next/cache"

import {
  getEntityByName,
  createEntity as createEntityService,
} from "@/services/entity"

export const createEntity = async (data: CreateOrUpdateEntityType) => {
  const { name, uex } = data
  try {
    const entity = await getEntityByName(name)

    if (entity) {
      const message = "Erro: A entidade já existe!"
      return { message }
    }

    await createEntityService({ name, uex })
  } catch (error) {
    return { message: "Erro de BD: Falha ao criar entidade." }
  }
  revalidatePath("/app/admin/entity")
}
