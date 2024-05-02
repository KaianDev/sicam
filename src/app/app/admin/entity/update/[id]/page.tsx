// Components
import { Subtitle } from "@/components/subtitle"
import { getEntity } from "@/data/entity"
import { UpdateEntityForm } from "@/app/app/admin/entity/_components/update-entity-form"

interface UpdateEntityPageProps {
  params: {
    id: string
  }
}

const UpdateEntityPage = async ({ params }: UpdateEntityPageProps) => {
  const entity = await getEntity(params.id)

  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Entidade
        </h1>
        <Subtitle label="Editar entidade" />
        <UpdateEntityForm entity={entity} />
      </div>
    </main>
  )
}

export default UpdateEntityPage
