"use client"

import { CreateOrUpdateEntityType } from "@/types/zod"
import { EntityForm } from "@/app/app/admin/entity/_components/entity-form"
import { addEntityAction } from "@/actions/entity-action"

export const CreateEntityForm = () => {
  const handleCreateNewEntitySubmit = async (
    data: CreateOrUpdateEntityType,
  ) => {
    await addEntityAction(data)
  }

  return <EntityForm onSubmit={handleCreateNewEntitySubmit} type="create" />
}
