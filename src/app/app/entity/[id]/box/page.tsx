import { notFound } from "next/navigation"

// Components
import { EntityBoxList } from "@/components/entity-box-list"

// Utilities
import { fetchEntityWithBoxes } from "@/actions/entity"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsAppPage = async ({ params }: EntityDetailsPageProps) => {
  const entity = await fetchEntityWithBoxes(params.id)
  if (!entity) return notFound()
  return (
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] rounded-md bg-white shadow-md sm:p-4">
      <div className="container px-4 sm:px-8">
        <EntityBoxList entity={entity} />
      </div>
    </main>
  )
}

export default EntityDetailsAppPage
