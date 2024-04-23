import { LogOut } from "lucide-react"

// Components
import { NavLinks } from "@/app/app/_components/nav-links"
import { AsideUser } from "@/app/app/_components/aside-user"
import { Button } from "@/components/ui/button"

export const Aside = () => {
  return (
    <aside className="hidden w-24 sm:block lg:w-64">
      <div className="flex h-full flex-col justify-between bg-green-700">
        {/* TODO:USER */}
        <AsideUser />

        {/* TODO: Links */}
        <div className="flex flex-1 flex-col justify-between px-2 py-4 lg:p-4">
          <NavLinks />

          <Button className="flex w-full items-center gap-2 px-2 sm:justify-center lg:justify-start">
            <LogOut />
            <span className="hidden uppercase lg:block">Sair</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}
