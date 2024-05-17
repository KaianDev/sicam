import { PropsWithChildren } from "react"

// Components
import { Header } from "@/components/header"

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col overflow-y-auto bg-zinc-200">
        {children}
      </div>
    </>
  )
}

export default HomeLayout
