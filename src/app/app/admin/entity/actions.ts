"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import type { CreateOrUpdateEntityData } from "./types"

import {
  getEntityById,
  getEntityByName,
  createEntity as createEntityService,
  updateEntity as updateEntityService,
} from "@/services/entity"

export const createEntity = async (data: CreateOrUpdateEntityData) => {
  const { name, uex } = data
  try {
    const entity = await getEntityByName(name)

    if (entity) {
      return { message: "Erro: A entidade já existe!" }
    }

    await createEntityService({ name, uex })
  } catch (error) {
    return { message: "Erro de BD: Falha ao criar entidade." }
  }
  revalidatePath("/app/admin/entity")
}

export const updateEntity = async (
  id: string,
  data: CreateOrUpdateEntityData,
) => {
  const { name, uex } = data
  try {
    const entity = await getEntityById(id)

    if (!entity)
      return { message: "Erro: Não foi possível localizar a entidade" }

    await updateEntityService(entity.id, { name, uex })
  } catch (error) {
    return { message: "Erro de BD: Falha ao atualizar entidade." }
  }
  revalidatePath("/app/admin/entity")
  redirect("/app/admin/entity")
}
