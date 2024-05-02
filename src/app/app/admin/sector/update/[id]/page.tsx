import { Subtitle } from "@/components/subtitle"
import { UpdateSectorForm } from "../../_components/update-sector-form"

interface UpdateSectorPageProps {
  params: {
    id: string
  }
}

const UpdateSectorPage = ({ params }: UpdateSectorPageProps) => {
  // TODO: get one sector
  const sector = { name: "Cegaf", id: "1" }

  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Setor
        </h1>
        <Subtitle label="Editar setor" />
        <UpdateSectorForm sector={sector} />
      </div>
    </main>
  )
}

export default UpdateSectorPage
