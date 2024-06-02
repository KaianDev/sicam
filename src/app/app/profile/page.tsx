// Components
import { Subtitle } from "@/components/subtitle"
import { ProfileAvatar } from "./_components/profile-avatar"
import { ProfileData } from "./_components/profile-data"

// Utilities
import { fetchUserById } from "@/data/users"
import { getCurrentUser } from "@/helpers/get-current-user"

const ProfilePage = async () => {
  const sessionUser = await getCurrentUser()
  if (!sessionUser) return
  const user = await fetchUserById(sessionUser.id)

  return (
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] space-y-10 rounded-md bg-white p-4 shadow-md">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Perfil do Usuário
        </h1>
        <div className="flex flex-col gap-8 sm:flex-row">
          <ProfileAvatar user={user} />
        </div>
        <div>
          <div className="mb-2 border-b pb-2">
            <Subtitle label="Dados do Usuário" />
          </div>
          <ProfileData user={user} />
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
