import { Suspense } from "react"

// Components
import { Subtitle } from "@/components/subtitle"
import { EntityTableSkeleton } from "@/components/skeletons"
import { CreateEntityForm } from "@/app/app/admin/entity/_components/create-entity-form"
import { EntityTable } from "@/app/app/admin/entity/_components/entity-table"

const Entity = () => {
  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Entidade
        </h1>
        <Subtitle label="Criar nova entidade" />
        <CreateEntityForm />
        <Subtitle label="Entidades cadastradas" />
        <Suspense fallback={<EntityTableSkeleton />}>
          <EntityTable />
        </Suspense>
      </div>
    </main>
  )
}

export default Entity
