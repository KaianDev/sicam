// Components
import { BoxList } from "@/components/box-list"
import { Pagination } from "@/components/pagination"

// Utilities
import { getBoxes } from "@/data/box"

interface AppPageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const AppPage = async ({ searchParams }: AppPageProps) => {
  const boxes = await getBoxes(searchParams)
  const session = { user: { id: 1 } }

  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <BoxList boxes={boxes} user={session.user} />
      <Pagination />
    </main>
  )
}

export default AppPage
