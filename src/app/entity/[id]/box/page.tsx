import { fetchEntity, fetchEntityWithBoxes } from "@/actions/entity"
import { BoxItem } from "@/components/ui/box-item"
import { formatEntityName } from "@/helpers/format-entity-name"
import { ArrowLeft, Box, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface EntityDetailsPageProps {
  params: { id: string }
}

const EntityDetailsPage = async ({ params }: EntityDetailsPageProps) => {
  const entity = await fetchEntityWithBoxes(params.id)
  if (!entity) return notFound()
  return (
    <main className="px-4">
      <div className="container mx-auto my-10 space-y-10 rounded-md bg-white pb-8 pt-4 shadow-md">
        <div className="space-y-4">
          <Link
            href={"/"}
            className="flex w-max items-center gap-1 hover:text-primary"
          >
            <ArrowLeft />
            Voltar
          </Link>
          <h1 className="text-start text-xl font-bold sm:text-2xl">
            Caixas - {entity.name}
          </h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {entity.boxes.map((box) => (
            <BoxItem box={{ ...box }} key={box.id} showEntity={false} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default EntityDetailsPage
