// Components
import { FilterForm } from "@/components/filter-form"

// Utilities
import { fetchEntities } from "@/data/entity"
import { fetchSectors } from "@/data/sector"

export const Filters = async () => {
  const entities = await fetchEntities()
  const sectors = await fetchSectors()

  return (
    <div className="pb-4">
      <details className="border-b">
        <summary>Filtros</summary>
        <FilterForm entities={entities} sectors={sectors} />
      </details>
    </div>
  )
}
