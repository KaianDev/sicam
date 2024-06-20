"use client"

import type { CreateOrUpdateSectorType } from "@/types/zod"

// Components
import { SectorForm } from "./sector-form"
import { useToast } from "@/components/ui/use-toast"

// Utilities
import { createSector } from "@/actions/sector"

export const CreateSectorForm = () => {
  const { toast } = useToast()

  const handleCreateNewSector = async (data: CreateOrUpdateSectorType) => {
    const res = await createSector(data)

    if (res?.message) {
      toast({
        title: "Opzz.. Ocorreu um erro.",
        description: res.message,
        variant: "destructive",
        duration: 1000,
      })
    } else {
      toast({
        title: "Sucesso!",
        description: "Setor criado com sucesso.",
        duration: 1000,
      })
    }
  }

  return <SectorForm type="create" onSubmit={handleCreateNewSector} />
}
