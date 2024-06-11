import { Suspense } from "react"

import type { SearchParams } from "@/types/search-params"

// Components
import { BoxContainer } from "@/components/box-container"
import { BoxesListSkeleton } from "@/components/skeletons"
import { Container } from "@/components/container"
import { Filters } from "@/components/filters"

interface AppPageProps {
  searchParams: SearchParams
}

const AppPage = async ({ searchParams }: AppPageProps) => {
  return (
    <Container>
      <Suspense fallback={<div>Carregando filtros...</div>}>
          <Filters />
        </Suspense>
      <Suspense fallback={<BoxesListSkeleton />}>
        <BoxContainer searchParams={searchParams} backHref="/app" />
      </Suspense>
    </Container>
  )
}

export default AppPage
