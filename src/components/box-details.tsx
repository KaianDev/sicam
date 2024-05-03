import Link from "next/link"
import { notFound } from "next/navigation"
import { FolderEdit, ArrowLeft } from "lucide-react"

// Components
import { Badge } from "@/components/ui/badge"

// Utilities
import { fetchBox } from "@/actions/box"

interface BoxDetailsProps {
  origin: "/" | "/app"
  boxId: string
}

export const BoxDetails = async ({ origin, boxId }: BoxDetailsProps) => {
  // Get User
  const box = await fetchBox(boxId)
  if (!box) return notFound()

  return (
    <div className="container space-y-4">
      <div className="border-b border-zinc-300 py-4">
        <Link
          href={origin}
          className="mb-4 flex w-fit items-center gap-1 hover:text-primary"
        >
          <ArrowLeft />
          Voltar
        </Link>
        <div className="flex justify-start gap-2">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Detalhes da Caixa - Nº {box.numBox}
          </h1>
          <Badge className="h-max">{box.sector.name}</Badge>
        </div>
        <small>{box.entity.name}</small>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Conteúdo</h2>
        <p className="text-muted-foreground">{box.content}</p>
      </div>

      {box.observation && (
        <div>
          <h2 className="text-xl font-semibold">Observação</h2>
          <p className="text-muted-foreground">{box.observation}</p>
        </div>
      )}

      <div className="space-y-4 pt-5">
        <div className="flex flex-col items-end">
          <small className="text-muted-foreground">
            {new Date(box.createdAt).toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
          <p>
            Criada por:{" "}
            <span className="text-muted-foreground">{box.user.name}</span>
          </p>
        </div>
        <div className="flex justify-end gap-4">
          {origin !== "/" && (
            <Link
              href={`/app/box/update/id`}
              className="flex gap-2 rounded-md bg-green-700 p-2 text-white"
            >
              <FolderEdit />
              Editar
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
