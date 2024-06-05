import { Metadata } from "next"
import { Suspense } from "react"

// Components
import { BoxDetails } from "@/components/box-details"
import { BoxDetailsSkeleton } from "@/components/skeletons"
import { Container } from "../../../_components/container"

interface DetailsBoxPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: "Detalhes | SiCAM",
}

const DetailsBoxPage = ({ params }: DetailsBoxPageProps) => {
  return (
    <main className="px-4">
      <Container>
        <Suspense fallback={<BoxDetailsSkeleton />}>
          <BoxDetails origin="/" boxId={params.id} />
        </Suspense>
      </Container>
    </main>
  )
}

export default DetailsBoxPage
