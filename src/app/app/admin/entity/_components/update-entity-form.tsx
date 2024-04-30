"use client"

import { CreateOrUpdateEntityType } from "@/types/zod"

// Components
import { EntityForm } from "@/app/app/admin/entity/_components/entity-form"
import { Entity } from "@prisma/client"

interface UpdateEntityFormProps {
  entity: Entity
}

export const UpdateEntityForm = ({ entity }: UpdateEntityFormProps) => {
  const handleUpdateEntitySubmit = async (data: CreateOrUpdateEntityType) => {
    console.log(data)
  }

  return (
    <>
      {entity.uex ? (
        <EntityForm
          type="update"
          onSubmit={handleUpdateEntitySubmit}
          defaultValues={{ name: entity.name, uex: entity.uex }}
        />
      ) : (
        <EntityForm
          type="update"
          onSubmit={handleUpdateEntitySubmit}
          defaultValues={{ name: entity.name }}
        />
      )}
    </>
  )
}
