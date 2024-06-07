import { Metadata } from "next"

// Components
import { Container } from "@/components/container"
import { NotFound as NotFoundComponent } from "@/components/not-found"

export const metadata: Metadata = {
  title: "404 | SiCAM",
}

const NotFound = () => {
  return (
    <Container>
      <NotFoundComponent />
    </Container>
  )
}

export default NotFound
