"use client"

import { CreateOrUpdateEntityType } from "@/types/zod"
import { EntityForm } from "@/app/app/admin/entity/_components/entity-form"
import { addEntityAction } from "@/actions/entity-action"

export const CreateEntityForm = () => {
  const handleCreateNewEntitySubmit = async (
    data: CreateOrUpdateEntityType,
  ) => {
    console.log(data)
    await addEntityAction(data)
  }

  return <EntityForm onSubmit={handleCreateNewEntitySubmit} />
}
