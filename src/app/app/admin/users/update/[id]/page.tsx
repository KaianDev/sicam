import { notFound } from "next/navigation"

// Components
import { Subtitle } from "@/components/subtitle"
import { UpdateUserForm } from "../../_components/update-user-form"

// Utilities
import { fetchSectors } from "@/data/sector"
import { fetchUserById } from "@/data/users"
import { Container } from "@/components/container"
import { Title } from "@/components/title"

interface UpdateUserAdminPageProps {
  params: {
    id: string
  }
}

const UpdateUserAdminPage = async ({ params }: UpdateUserAdminPageProps) => {
  const [sectors, user] = await Promise.all([
    fetchSectors(),
    fetchUserById(params.id),
  ])
  if (!user) return notFound()

  return (
    <Container>
      <div className="container space-y-4 px-0">
        <Title>Usuário</Title>
        <Subtitle label="Editar usuário" />
        <UpdateUserForm sectors={sectors} user={user} />
      </div>
    </Container>
  )
}

export default UpdateUserAdminPage
