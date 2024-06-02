// Components
import { Subtitle } from "@/components/subtitle"
import { CreateUserForm } from "./_components/create-user-form"
import { UserTable } from "./_components/user-table"

// Utilities
import { fetchSectors } from "@/data/sector"

const UserAdminPage = async () => {
  const sectors = await fetchSectors()
  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Usuário
        </h1>
        <Subtitle label="Criar novo usuário" />
        <CreateUserForm sectors={sectors} />

        <Subtitle label="Usuários cadastrados" />
        <UserTable />
      </div>
    </main>
  )
}

export default UserAdminPage
