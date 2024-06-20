"use client"

import { useToast } from "@/components/ui/use-toast"

import type { CreateOrUpdateBoxData } from "../types"
import type { Box, Entity } from "@prisma/client"

// Components
import { BoxForm } from "./box-form"
import { updateBox } from "../actions"

interface UpdateBoxFormProps {
  box: Box
  entities: Entity[]
}

export const UpdateBoxForm = ({ box, entities }: UpdateBoxFormProps) => {
  const { toast } = useToast()

  const handleUpdateBoxSubmit = async (data: CreateOrUpdateBoxData) => {
    const res = await updateBox(box.id, data)
    if (res?.message) {
      toast({
        title: "Opzz.. Ocorreu um erro.",
        description: res.message,
        duration: 1000,
      })
    } else {
      toast({
        title: "Caixa atualizada com sucesso!",
        duration: 1000,
      })
    }
  }

  return (
    <BoxForm
      type="update"
      entities={entities}
      onSubmit={handleUpdateBoxSubmit}
      defaultValues={{
        content: box.content,
        entityId: box.entityId,
        observation: box?.observation ?? undefined,
      }}
    />
  )
}
