import { CreateEntityForm } from "@/app/app/admin/entity/_components/create-entity-form"
import { EntityTable } from "@/app/app/admin/entity/_components/entity-table"

const Entity = async () => {
  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Criar nova entidade
        </h1>
        <CreateEntityForm />
        <h2 className="border-b py-2 text-xl">Entidades Cadastradas</h2>
        <EntityTable />
      </div>
    </main>
  )
}

export default Entity
