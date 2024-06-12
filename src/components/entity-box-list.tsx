import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Components
import { Subtitle } from "@/components/subtitle"
import { BackLink } from "@/components/back-link"
import { BoxList } from "@/components/box-list"

// Utilities
import { fetchEntityWithBoxes } from "@/data/entity"

interface EntityBoxListProps {
  entityId: string
}

export const EntityBoxList = async ({ entityId }: EntityBoxListProps) => {
  const entity = await fetchEntityWithBoxes(entityId)

  if (!entity) return notFound()

  return (
    <div className="space-y-10 pb-8 pt-2">
      <div className="space-y-4">
        <div className="flex justify-between">
          <BackLink className="flex w-max items-center gap-1 hover:text-primary">
            <ArrowLeft />
            Voltar
          </BackLink>
          {/* TODO: Filtro */}
        </div>

        <div className="border-b pb-2">
          <Subtitle label="Caixas" />
          <strong>{entity?.name}</strong>
        </div>
      </div>
      <BoxList boxes={entity.boxes} showEntity={false} />
    </div>
  )
}
