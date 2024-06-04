import { notFound } from "next/navigation"

// Components
import { Container } from "@/components/container"
import { Title } from "@/components/title"
import { Subtitle } from "@/components/subtitle"
import { UpdateEntityForm } from "../../_components/update-entity-form"

// Utilities
import { fetchEntity } from "@/data/entity"

interface UpdateEntityPageProps {
  params: {
    id: string
  }
}

const UpdateEntityPage = async ({ params }: UpdateEntityPageProps) => {
  const entity = await fetchEntity(params.id)
  if (!entity) return notFound()

  return (
    <Container>
      <div className="container space-y-4 px-0">
        <Title>Entidade</Title>
        <Subtitle label="Editar entidade" />
        <UpdateEntityForm entity={entity} />
      </div>
    </Container>
  )
}

export default UpdateEntityPage
