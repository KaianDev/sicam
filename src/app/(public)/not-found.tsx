import { Metadata } from "next"

// Components
import { NotFound as NotFoundComponent } from "@/components/not-found"
import { Container } from "./_components/container"

export const metadata: Metadata = {
  title: "404 | SiCAM",
}

const NotFound = () => {
  return (
    <main className="px-4">
      <Container>
        <NotFoundComponent />
      </Container>
    </main>
  )
}

export default NotFound
