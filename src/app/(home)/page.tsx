import { Suspense } from "react"

// Components
import { BoxList } from "@/components/box-list"
import { BoxesListSkeleton } from "@/components/skeletons"

interface HomePageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const HomePage = ({ searchParams }: HomePageProps) => {
  return (
    <div className="mx-4">
      <main className="container mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
        {searchParams.search && (
          <div>
            Pesquisando por: <strong>{searchParams.search}</strong>
          </div>
        )}
        <Suspense fallback={<BoxesListSkeleton />}>
          <BoxList searchParams={searchParams} backHref="/" />
        </Suspense>
      </main>
    </div>
  )
}

export default HomePage
