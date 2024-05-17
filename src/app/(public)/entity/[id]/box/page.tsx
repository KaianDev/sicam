import { Suspense } from "react"

// Components
import { EntityBoxList } from "@/components/entity-box-list"
import { EntityBoxListSkeleton } from "@/components/skeletons"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsPage = ({ params }: EntityDetailsPageProps) => {
  return (
    <main className="my-10 px-4">
      <div className="container rounded-md bg-white px-4 sm:px-8">
        <Suspense fallback={<EntityBoxListSkeleton />}>
          <EntityBoxList entityId={params.id} />
        </Suspense>
      </div>
    </main>
  )
}

export default EntityDetailsPage
