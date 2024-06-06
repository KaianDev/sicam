import { PropsWithChildren } from "react"

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto my-10 flex min-h-[calc(100vh-200px)] flex-col rounded-md bg-white p-4 shadow-md">
      {children}
    </main>
  )
}
