import { CreateEntityForm } from "@/app/app/admin/entity/_components/create-entity-form"
import { getEntities } from "@/data/entity"

const Entity = async () => {
  const entities = await getEntities()

  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Criar nova entidade
        </h1>
        <CreateEntityForm />
        <div>
          {entities.map((entity) => (
            <div key={entity.id}>
              <span>{entity?.uex && `${entity.uex} - `}</span> {entity.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Entity
