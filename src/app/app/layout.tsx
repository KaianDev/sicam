// Components
import { Aside } from "@/app/app/_components/aside"

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-1 flex-row">
      <Aside />
      <div className="flex-1 bg-zinc-200 px-4">{children}</div>
    </div>
  )
}

export default AppLayout
