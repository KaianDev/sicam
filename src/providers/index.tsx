"use client"

import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>
}
