import { PropsWithChildren } from "react"

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] rounded-md bg-white shadow-md sm:p-4">
      {children}
    </main>
  )
}
