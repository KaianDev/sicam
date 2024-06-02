import { notFound } from "next/navigation"

// Components
import { Subtitle } from "@/components/subtitle"
import { UpdateUserForm } from "../../_components/update-user-form"

// Utilities
import { fetchSectors } from "@/data/sector"
import { fetchUserById } from "@/actions/user"

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
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Usuário
        </h1>
        <Subtitle label="Editar usuário" />
        <UpdateUserForm sectors={sectors} user={user} />
      </div>
    </main>
  )
}

export default UpdateUserAdminPage
