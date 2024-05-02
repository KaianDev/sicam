"use client"

import type { CreateOrUpdateSectorType } from "@/types/zod"

// Components
import { SectorForm } from "./sector-form"

export const CreateSectorForm = () => {
  const handleCreateNewSector = (data: CreateOrUpdateSectorType) => {
    console.log(data)
  }

  return <SectorForm type="create" onSubmit={handleCreateNewSector} />
}
