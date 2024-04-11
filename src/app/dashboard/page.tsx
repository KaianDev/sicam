import { Aside } from "@/components/aside"
import { BoxList } from "@/components/box-list"
import { Pagination } from "@/components/pagination"
import { getBoxes } from "@/data/box"

const DashboardPage = async () => {
  const boxes = await getBoxes()
  const session = { user: { id: 1 } }

  return (
    <div className="flex flex-1 flex-row bg-red-500">
      <Aside />
      <main className="flex-1 bg-zinc-200 px-4">
        <div className="container mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
          <BoxList boxes={boxes} user={session.user} />
          <Pagination />
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
