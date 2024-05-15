"use client"

import type { CreateOrUpdateSectorType } from "@/types/zod"
import type { Sector } from "@prisma/client"

// Components
import { SectorForm } from "./sector-form"
import { useToast } from "@/components/ui/use-toast"

// Utilities
import { updateSector } from "@/actions/sector"

interface UpdateSectorFormProps {
  sector: Sector
}

export const UpdateSectorForm = ({ sector }: UpdateSectorFormProps) => {
  const { toast } = useToast()

  const handleUpdateSector = async (data: CreateOrUpdateSectorType) => {
    const res = await updateSector(sector.id, data)
    if (res?.message) {
      toast({
        title: "Opzz.. Ocorreu um erro.",
        description: res.message,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Sucesso!",
        description: "Setor atualizado com sucesso.",
      })
    }
  }

  return (
    <SectorForm
      type="update"
      defaultValues={sector}
      onSubmit={handleUpdateSector}
    />
  )
}
