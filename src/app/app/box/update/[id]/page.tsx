import { fetchBox } from "@/data/box"
import { notFound } from "next/navigation"

// Components
import { Container } from "@/components/container"
import { Title } from "@/components/title"
import { UpdateBoxForm } from "../../_components/update-box-form"

// Utilities
import { getCurrentUser } from "@/helpers/get-current-user"
import { fetchEntities } from "@/data/entity"
import { NotAuthorized } from "@/components/not-authorized"

interface UpdateBoxPageProps {
  params: { id: string }
}
const UpdateBoxPage = async ({ params }: UpdateBoxPageProps) => {
  const user = await getCurrentUser()
  const box = await fetchBox(params.id)

  if (!box) return notFound()
  // TODO: Fazer página de acesso negado
  if (user?.id !== box.ownerId) return <NotAuthorized />

  const entities = await fetchEntities()

  return (
    <Container>
      <div className="container space-y-4 px-0 py-2">
        <Title>Editar caixa</Title>
        <UpdateBoxForm box={box} entities={entities} />
      </div>
    </Container>
  )
}

export default UpdateBoxPage
