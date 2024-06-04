import { Suspense } from "react"
import { Metadata } from "next"

// Components
import { Container } from "@/components/container"
import { BoxDetails } from "@/components/box-details"
import { BoxDetailsSkeleton } from "@/components/skeletons"

export const metadata: Metadata = {
  title: "Detalhes | SiCAM",
}

interface DetailsBoxPageProps {
  params: {
    id: string
  }
}

const DetailsAppBoxPage = ({ params }: DetailsBoxPageProps) => {
  return (
    <Container>
      <Suspense fallback={<BoxDetailsSkeleton />}>
        <BoxDetails origin="/app" boxId={params.id} />
      </Suspense>
    </Container>
  )
}

export default DetailsAppBoxPage
