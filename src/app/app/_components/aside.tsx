import { LogOut } from "lucide-react"

// Components
import { Button } from "@/components/ui/button"
import { NavLinks } from "../_components/nav-links"
import { AsideUser } from "../_components/aside-user"
import { logout } from "@/actions/auth"
import { getCurrentUser } from "@/helpers/get-current-user"
import { fetchUserById } from "@/actions/user"

export const Aside = async () => {
  const sessionUser = await getCurrentUser()
  if (!sessionUser) return

  const user = await fetchUserById(sessionUser.id)
  if (!user) return

  return (
    <aside className="fixed bottom-0 top-0 mt-24 hidden w-24 sm:block lg:w-64">
      <div className="flex h-full flex-col justify-between bg-green-700">
        <AsideUser />

        {/* TODO: Links */}
        <div className="flex flex-1 flex-col justify-between px-2 py-4 lg:p-4">
          <NavLinks userRole={user.role} />

          <form action={logout}>
            <Button
              type="submit"
              className="flex w-full items-center gap-2 px-2 sm:justify-center lg:justify-start"
            >
              <LogOut />
              <span className="hidden uppercase lg:block">Sair</span>
            </Button>
          </form>
        </div>
      </div>
    </aside>
  )
}
