import { Suspense } from "react"

// Components
import { Subtitle } from "@/components/subtitle"
import { CreateSectorForm } from "./_components/create-sector-form"
import { SectorTable } from "./_components/sector-table"

const SectorPage = () => {
  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Setor
        </h1>
        <Subtitle label="Criar novo setor" />
        <CreateSectorForm />
        <Subtitle label="Setores cadastrados" />
        <Suspense>
          <SectorTable />
        </Suspense>
      </div>
    </main>
  )
}

export default SectorPage
