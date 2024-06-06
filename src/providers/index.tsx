import { auth } from "@/auth"
import { SearchContextProvider } from "@/context/search"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

export const Providers = async ({ children }: PropsWithChildren) => {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <SearchContextProvider>{children}</SearchContextProvider>
    </SessionProvider>
  )
}
