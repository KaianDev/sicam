import { ArrowLeft, FilterX } from "lucide-react"
import { notFound } from "next/navigation"
import { Suspense } from "react"

// Components
import { Subtitle } from "@/components/subtitle"
import { BackLink } from "@/components/back-link"
import { BoxList } from "@/components/box-list"
import { SectorFilterDropdown } from "@/components/sector-filter-dropdown"

// Utilities
import { fetchEntityWithBoxes } from "@/data/entity"
import { fetchSectors } from "@/data/sector"

interface EntityBoxListProps {
  entityId: string
  sectorName?: string
}

export const EntityBoxList = async ({
  entityId,
  sectorName,
}: EntityBoxListProps) => {
  const entity = await fetchEntityWithBoxes(entityId, sectorName)
  const sectors = await fetchSectors()
  if (!entity) return notFound()

  return (
    <div className="space-y-10 pb-8 pt-2">
      <div className="space-y-4">
        <div className="flex justify-between">
          <BackLink className="flex w-max items-center gap-1 hover:text-primary">
            <ArrowLeft />
            Voltar
          </BackLink>
          <Suspense>
            <SectorFilterDropdown sectors={sectors} />
          </Suspense>
        </div>

        <div className="border-b pb-2">
          <Subtitle label="Caixas" />
          <strong>{entity?.name}</strong>
        </div>
      </div>
      <BoxList boxes={entity.boxes} showEntity={false} />
      {entity.boxes.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center text-2xl">
          Não há resultados <br /> para esse filtro
        </div>
      )}
    </div>
  )
}
