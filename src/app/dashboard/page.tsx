import { Aside } from "@/components/aside"
import { BoxList } from "@/components/box-list"
import { Pagination } from "@/components/pagination"
import { getBoxes } from "@/data/box"

const DashboardPage = async () => {
  const boxes = await getBoxes()

  return (
    <div className="flex h-full flex-row bg-red-500">
      <Aside />
      <main className="flex-1 bg-zinc-200 px-4">
        <div className="container mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
          <BoxList boxes={boxes} />
          <Pagination />
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
