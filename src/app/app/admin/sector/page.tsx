import { Suspense } from "react"

// Components
import { Container } from "@/components/container"
import { Title } from "@/components/title"
import { Subtitle } from "@/components/subtitle"
import { CreateSectorForm } from "./_components/create-sector-form"
import { SectorTable } from "./_components/sector-table"

const SectorPage = () => {
  return (
    <Container>
      <div className="container space-y-4 px-0 py-2">
        <Title>Setor</Title>
        <Subtitle label="Criar novo setor" />
        <CreateSectorForm />
        <Subtitle label="Setores cadastrados" />
        <Suspense>
          <SectorTable />
        </Suspense>
      </div>
    </Container>
  )
}

export default SectorPage
