"use client"

import { CreateOrUpdateEntityType } from "@/types/zod"

// Components
import { EntityForm } from "@/app/app/admin/entity/_components/entity-form"
import { createEntity } from "@/actions/entity"
import { useToast } from "@/components/ui/use-toast"

export const CreateEntityForm = () => {
  const { toast } = useToast()

  const handleCreateNewEntitySubmit = async (
    data: CreateOrUpdateEntityType,
  ) => {
    const res = await createEntity(data)

    if (res?.message) {
      toast({
        title: "Opzz..",
        description: res.message,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Entidade criada com sucesso!",
      })
    }
  }

  return <EntityForm onSubmit={handleCreateNewEntitySubmit} type="create" />
}
