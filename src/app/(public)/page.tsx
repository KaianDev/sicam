import { Suspense } from "react"

import type { SearchParams } from "@/types/search-params"

// Components
import { BoxContainer } from "@/components/box-container"
import { BoxesListSkeleton } from "@/components/skeletons"
import { Container } from "./_components/container"
import { Filters } from "@/components/filters"

interface HomePageProps {
  searchParams: SearchParams
}

const HomePage = ({ searchParams }: HomePageProps) => {
  return (
    <div className="mx-4">
      <Container className="flex flex-col p-4">
        <Suspense fallback={<div>Carregando filtros...</div>}>
          <Filters />
        </Suspense>
        <Suspense fallback={<BoxesListSkeleton />}>
          <BoxContainer searchParams={searchParams} backHref="/" />
        </Suspense>
      </Container>
    </div>
  )
}

export default HomePage
