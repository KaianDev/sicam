import { Suspense } from "react"

// Components
import { BoxList } from "@/components/box-list"
import { BoxesListSkeleton } from "@/components/skeletons"

interface AppPageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const AppPage = async ({ searchParams }: AppPageProps) => {
  return (
    <main className="mx-auto my-10 rounded-md bg-white p-4 shadow-md">
      <Suspense fallback={<BoxesListSkeleton />}>
        <BoxList searchParams={searchParams} backHref="/app" />
      </Suspense>
    </main>
  )
}

export default AppPage
