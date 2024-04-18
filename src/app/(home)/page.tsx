// Components
import { BoxList } from "@/components/box-list"
import { Pagination } from "@/components/pagination"

// Utilities
import { getBoxes } from "@/data/box"

interface HomePageProps {
  searchParams: {
    page?: string
    search?: string
  }
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const boxes = await getBoxes(searchParams)
  const pageNum =
    searchParams.page && !isNaN(parseInt(searchParams.page))
      ? parseInt(searchParams.page)
      : 1

  return (
    <div className="mx-4 ">
      <main className="container mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
        <BoxList boxes={boxes} />
        <Pagination />
      </main>
    </div>
  )
}

export default HomePage