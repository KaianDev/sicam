"use client"

import type { CreateOrUpdateEntityData } from "../types"

// Components
import { EntityForm } from "@/app/app/admin/entity/_components/entity-form"

// Utilities
import { useToast } from "@/components/ui/use-toast"
import { createEntity } from "../actions"

export const CreateEntityForm = () => {
  const { toast } = useToast()

  const handleCreateNewEntitySubmit = async (
    data: CreateOrUpdateEntityData,
  ) => {
    const res = await createEntity(data)

    if (res?.message) {
      toast({
        title: "Opzz..",
        description: res.message,
        variant: "destructive",
        duration: 1000,
      })
    } else {
      toast({
        title: "Entidade criada com sucesso!",
        duration: 1000,
      })
    }
  }

  return <EntityForm onSubmit={handleCreateNewEntitySubmit} type="create" />
}
