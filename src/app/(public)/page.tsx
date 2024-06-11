import { Suspense } from "react"

// Components
import { BoxContainer } from "@/components/box-container"
import { BoxesListSkeleton } from "@/components/skeletons"
import { Container } from "./_components/container"

interface HomePageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const HomePage = ({ searchParams }: HomePageProps) => {
  return (
    <div className="mx-4">
      <Container className="flex flex-col p-4">
        <Suspense fallback={<BoxesListSkeleton />}>
          <BoxContainer searchParams={searchParams} backHref="/" />
        </Suspense>
      </Container>
    </div>
  )
}

export default HomePage
