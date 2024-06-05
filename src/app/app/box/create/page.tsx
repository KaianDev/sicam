import { Container } from "@/components/container"
import { Title } from "@/components/title"
import { CreateBoxForm } from "../_components/create-box-form"

// Utilities
import { fetchEntities } from "@/data/entity"

export const dynamic = "force-dynamic"

const CreateBoxPage = async () => {
  const entities = await fetchEntities()

  return (
    <Container>
      <div className="container space-y-4 px-0 py-2">
        <Title>Criar nova caixa</Title>
        <CreateBoxForm entities={entities} />
      </div>
    </Container>
  )
}

export default CreateBoxPage
