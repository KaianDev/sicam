import { Metadata } from "next"

// Components
import { NotFound as NotFoundComponent } from "@/components/not-found"

export const metadata: Metadata = {
  title: "404 | SiCAM",
}

const NotFound = () => {
  return (
    <main className="h-screen w-full bg-zinc-200">
      <NotFoundComponent />
    </main>
  )
}

export default NotFound
