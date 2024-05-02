"use client"

import type { CreateOrUpdateSectorType } from "@/types/zod"
import type { Sector } from "@prisma/client"

// Components
import { SectorForm } from "./sector-form"

interface UpdateSectorFormProps {
  sector: Sector
}

export const UpdateSectorForm = ({sector}:UpdateSectorFormProps) => {
  const handleUpdateSector = (data: CreateOrUpdateSectorType) => {
    console.log(data)
  }

  return (
    <SectorForm
      type="update"
      defaultValues={sector}
      onSubmit={handleUpdateSector}
    />
  )
}
