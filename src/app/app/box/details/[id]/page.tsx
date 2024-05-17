import { Suspense } from "react"
import { Metadata } from "next"

// Components
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
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] space-y-4 rounded-md bg-white px-0 pb-8 shadow-md sm:p-4 ">
      <Suspense fallback={<BoxDetailsSkeleton />}>
        <BoxDetails origin="/app" boxId={params.id} />
      </Suspense>
    </main>
  )
}

export default DetailsAppBoxPage
