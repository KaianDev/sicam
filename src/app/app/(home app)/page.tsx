import { Suspense } from "react"

// Components
import { BoxContainer } from "@/components/box-container"
import { BoxesListSkeleton } from "@/components/skeletons"
import { Container } from "@/components/container"

interface AppPageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const AppPage = async ({ searchParams }: AppPageProps) => {
  return (
    <Container>
      <Suspense fallback={<BoxesListSkeleton />}>
        <BoxContainer searchParams={searchParams} backHref="/app" />
      </Suspense>
    </Container>
  )
}

export default AppPage
