// Components
import { FilterForm } from "@/components/filter-form"

// Utilities
import { fetchEntities } from "@/data/entity"
import { fetchSectors } from "@/data/sector"
import { fetchTotalBoxCount } from "@/data/box"

export const Filters = async () => {
  const boxCount = await fetchTotalBoxCount()
  if (!boxCount) return null
  const [entities, sectors] = await Promise.all([
    fetchEntities(),
    fetchSectors(),
  ])

  return (
    <div className="pb-4">
      <details className="border-b">
        <summary>Filtros</summary>
        <FilterForm entities={entities} sectors={sectors} />
      </details>
    </div>
  )
}
