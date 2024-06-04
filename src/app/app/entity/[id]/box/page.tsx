import { Suspense } from "react"

// Components
import { EntityBoxList } from "@/components/entity-box-list"
import { EntityBoxListSkeleton } from "@/components/skeletons"
import { Container } from "@/components/container"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsAppPage = async ({ params }: EntityDetailsPageProps) => {
  return (
    <Container>
      <div className="container px-4 sm:px-8">
        <Suspense fallback={<EntityBoxListSkeleton />}>
          <EntityBoxList entityId={params.id} />
        </Suspense>
      </div>
    </Container>
  )
}

export default EntityDetailsAppPage
