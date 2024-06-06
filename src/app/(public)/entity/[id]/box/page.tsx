import { Suspense } from "react"

// Components
import { EntityBoxList } from "@/components/entity-box-list"
import { EntityBoxListSkeleton } from "@/components/skeletons"
import { Container } from "../../../_components/container"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsPage = ({ params }: EntityDetailsPageProps) => {
  return (
    <main className="px-4">
      <Container className="px-4 pb-8 pt-4 sm:px-8">
        <Suspense fallback={<EntityBoxListSkeleton />}>
          <EntityBoxList entityId={params.id} />
        </Suspense>
      </Container>
    </main>
  )
}

export default EntityDetailsPage
