// Components
import { Container } from "@/components/container"
import { Title } from "@/components/title"
import { Subtitle } from "@/components/subtitle"
import { CreateUserForm } from "./_components/create-user-form"
import { UserTable } from "./_components/user-table"

// Utilities
import { fetchSectors } from "@/data/sector"

const UserAdminPage = async () => {
  const sectors = await fetchSectors()
  return (
    <Container>
      <div className="container space-y-4 px-0 py-2">
        <Title>Usuário</Title>
        <Subtitle label="Criar novo usuário" />
        <CreateUserForm sectors={sectors} />

        <Subtitle label="Usuários cadastrados" />
        <UserTable />
      </div>
    </Container>
  )
}

export default UserAdminPage
