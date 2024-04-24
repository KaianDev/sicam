// Components
import { BoxList } from "@/components/box-list"
import { Pagination } from "@/components/pagination"
import { Suspense } from "react"

interface AppPageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const AppPage = async ({ searchParams }: AppPageProps) => {
  const session = { user: { id: "4e4a4667-9822-408b-bc5d-8f9f37981bd0" } }

  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <Suspense fallback={<div>Carregando...</div>}>
        <BoxList searchParams={searchParams} user={session.user} />
      </Suspense>
      <Pagination />
    </main>
  )
}

export default AppPage
