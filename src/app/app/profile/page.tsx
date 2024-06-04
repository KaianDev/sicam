// Components
import { Container } from "@/components/container"
import { Subtitle } from "@/components/subtitle"
import { ProfileAvatar } from "./_components/profile-avatar"
import { ProfileData } from "./_components/profile-data"

// Utilities
import { fetchUserById } from "@/data/users"
import { getCurrentUser } from "@/helpers/get-current-user"
import { Title } from "@/components/title"

const ProfilePage = async () => {
  const sessionUser = await getCurrentUser()
  if (!sessionUser) return
  const user = await fetchUserById(sessionUser.id)

  return (
    <Container>
      <div className="container space-y-4 px-0">
        <Title>
          Perfil do Usuário
        </Title>
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
    </Container>
  )
}

export default ProfilePage
