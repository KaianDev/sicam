"use client"

import type { Entity } from "@prisma/client"
import type { CreateOrUpdateEntityData } from "../types"

// Components
import { EntityForm } from "../_components/entity-form"

// Utilities
import { useToast } from "@/components/ui/use-toast"
import { updateEntity } from "../actions"

interface UpdateEntityFormProps {
  entity: Entity
}

export const UpdateEntityForm = ({ entity }: UpdateEntityFormProps) => {
  const { toast } = useToast()
  const handleUpdateEntitySubmit = async (data: CreateOrUpdateEntityData) => {
    const res = await updateEntity(entity.id, data)
    // TODO: tratar erro de limpar formulário
    if (res?.message) {
      toast({
        title: "Opzz..",
        description: res.message,
        variant: "destructive",
        duration: 1000,
      })
    } else {
      toast({
        title: "Entidade atualizada com sucesso!",
        duration: 1000,
      })
    }
  }

  return (
    <EntityForm
      type="update"
      onSubmit={handleUpdateEntitySubmit}
      defaultValues={{ name: entity.name, uex: entity.uex ?? "" }}
    />
  )
}
