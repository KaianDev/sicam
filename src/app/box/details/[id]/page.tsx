// Components
import { BoxDetails } from "@/components/box-details"
import { Metadata } from "next"

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
      <div className="container mx-auto my-10 space-y-10 rounded-md bg-white px-0 pb-8 pt-4 shadow-md">
        <BoxDetails origin="/" boxId={params.id} />
      </div>
    </main>
  )
}

export default DetailsBoxPage
