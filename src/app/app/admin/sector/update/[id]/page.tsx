import { notFound } from "next/navigation"

// Components
import { Subtitle } from "@/components/subtitle"
import { Container } from "@/components/container"
import { UpdateSectorForm } from "../../_components/update-sector-form"

// Utilities
import { fetchSector } from "@/data/sector"
import { Title } from "@/components/title"

interface UpdateSectorPageProps {
  params: {
    id: string
  }
}

const UpdateSectorPage = async ({ params }: UpdateSectorPageProps) => {
  const sector = await fetchSector(params.id)
  if (!sector) return notFound()

  return (
    <Container>
      <div className="container space-y-4 px-0 py-2">
        <Title>Setor</Title>
        <Subtitle label="Editar setor" />
        <UpdateSectorForm sector={sector} />
      </div>
    </Container>
  )
}

export default UpdateSectorPage
