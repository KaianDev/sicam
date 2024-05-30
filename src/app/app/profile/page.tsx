import { mockUser } from "@/data/mock-user"
import { Avatar } from "./_components/avatar"

const ProfilePage = () => {
  const user = mockUser

  return (
    <main className="mx-auto my-10 space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Perfil do Usuário
        </h1>
        <Avatar user={user} />
      </div>
    </main>
  )
}

export default ProfilePage
