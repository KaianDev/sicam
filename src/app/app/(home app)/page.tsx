import { Suspense } from "react"

// Components
import { BoxList } from "@/components/box-list"
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
        <BoxList searchParams={searchParams} backHref="/app" />
      </Suspense>
    </Container>
  )
}

export default AppPage
