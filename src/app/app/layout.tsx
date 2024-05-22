// Components
import { Aside } from "@/app/app/_components/aside"
import { Header } from "@/components/header"
interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <div className="mt-24 flex flex-1 flex-row ">
        <Aside />
        <div className="flex-1 overflow-y-auto bg-zinc-200 px-4 sm:ml-24 lg:ml-64">
          {children}
        </div>
      </div>
    </>
  )
}

export default AppLayout
