import { Suspense } from "react"

// Components
import { BoxList } from "@/components/box-list"
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
      <Container className="p-4 flex flex-col">
        <Suspense fallback={<BoxesListSkeleton />}>
          <BoxList searchParams={searchParams} backHref="/" />
        </Suspense>
      </Container>
    </div>
  )
}

export default HomePage
