// Components
import { Aside } from "@/app/app/_components/aside"
interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex h-[calc(100vh-96px)] overflow-hidden flex-row">
      <Aside />
      <div className="flex-1 overflow-y-auto bg-zinc-200 px-4">{children}</div>
    </div>
  )
}

export default AppLayout
