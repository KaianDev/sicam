import { Suspense } from "react"

// Components
import { EntityBoxList } from "@/components/entity-box-list"
import { EntityBoxListSkeleton } from "@/components/skeletons"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsAppPage = async ({ params }: EntityDetailsPageProps) => {
  return (
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] rounded-md bg-white shadow-md sm:p-4">
      <div className="container px-4 sm:px-8">
        <Suspense fallback={<EntityBoxListSkeleton />}>
          <EntityBoxList entityId={params.id} />
        </Suspense>
      </div>
    </main>
  )
}

export default EntityDetailsAppPage
