"use client"
import { Entity } from "@prisma/client"

import { CreateOrUpdateBoxType } from "@/types/zod"

// Components
import { BoxForm } from "@/app/app/box/_components/box-form"

interface CreateBoxFormProps {
  entities: Entity[]
}

export const CreateBoxForm = ({ entities }: CreateBoxFormProps) => {
  const handleCreateNewBoxSubmit = async (data: CreateOrUpdateBoxType) => {
    console.log(data)
  }

  return (
    <BoxForm
      entities={entities}
      onSubmit={handleCreateNewBoxSubmit}
      type="create"
    />
  )
}
