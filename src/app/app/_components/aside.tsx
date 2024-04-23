// Components
import { NavLinks } from "@/app/app/_components/nav-links"
import { AsideUser } from "@/app/app/_components/aside-user"

export const Aside = () => {
  return (
    <div className="relative bottom-0 top-0 hidden w-full bg-black sm:block sm:max-w-20 lg:max-w-60">
      <aside className="fixed top-[96px] h-full w-full flex-col bg-green-700 sm:flex sm:max-w-20 lg:max-w-60">
        <AsideUser />

        <NavLinks />
      </aside>
    </div>
  )
}
