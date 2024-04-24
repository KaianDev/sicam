"use client"

import { BoxForm } from "@/app/app/box/_components/box-form"
import { CreateOrUpdateBoxType } from "@/types/zod"

export const CreateBoxForm = () => {
  const handleCreateNewBoxSubmit = async (data: CreateOrUpdateBoxType) => {
    console.log(data)
  }

  return <BoxForm onSubmit={handleCreateNewBoxSubmit} type="create" />
}
