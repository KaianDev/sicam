// Components
import { fetchUserById } from "@/actions/user"
import { CustomAvatar } from "@/components/custom-avatar"

// Utilities
import { getCurrentUser } from "@/helpers/get-current-user"

export const AsideUser = async () => {
  const sessionUser = await getCurrentUser()

  if (!sessionUser) return

  const user = await fetchUserById(sessionUser.id)

  if (!user) return

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-green-800 p-4 lg:w-full">
      <div className="size-[70px] overflow-hidden rounded-full border-4 border-zinc-300 bg-zinc-300 lg:size-[90px]">
        <CustomAvatar
          userName={user.name}
          src={user.avatar || "/assets/default.png"}
        />
      </div>
      <div className="hidden text-center text-zinc-100 lg:block">
        <p>{user.name}</p>
        <p className="font-semibold tracking-wide">{user.sector.name}</p>
      </div>
    </div>
  )
}
