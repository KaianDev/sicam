"use client"
import { Entity } from "@prisma/client"

import type { CreateOrUpdateBoxData } from "../types"

// Components
import { BoxForm } from "./box-form"

// Utilities
import { addNewBox } from "../actions"
import { useToast } from "@/components/ui/use-toast"

interface CreateBoxFormProps {
  entities: Entity[]
}

export const CreateBoxForm = ({ entities }: CreateBoxFormProps) => {
  const { toast } = useToast()

  const handleCreateNewBoxSubmit = async (data: CreateOrUpdateBoxData) => {
    const res = await addNewBox(data)
    if (res?.message) {
      toast({
        title: "Opzz.. Ocorreu um erro.",
        description: res.message,
      })
    } else {
      toast({
        title: "Caixa adicionada com sucesso!",
      })
    }
  }

  return (
    <BoxForm
      entities={entities}
      onSubmit={handleCreateNewBoxSubmit}
      type="create"
    />
  )
}
