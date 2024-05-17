import { notFound } from "next/navigation"

// Components
import { EntityBoxList } from "@/components/entity-box-list"

// Utilities
import { fetchEntityWithBoxes } from "@/actions/entity"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsPage = async ({ params }: EntityDetailsPageProps) => {
  const entity = await fetchEntityWithBoxes(params.id)
  if (!entity) return notFound()
  return (
    <main className="my-10 px-4">
      <div className="container rounded-md bg-white px-4 sm:px-8">
        <EntityBoxList entity={entity} />
      </div>
    </main>
  )
}

export default EntityDetailsPage
