import Link from "next/link"
import { FolderEdit, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BoxDetailsProps {
  origin: "/" | "/app"
  boxId: string
}

export const BoxDetails = ({ origin, boxId }: BoxDetailsProps) => {
  // TODO: Fetch Box
  // const box = getBoxById(boxId)
  // const user = useSession() //next-auth

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
            Detalhes da Caixa - Nº 999
          </h1>
          <Badge className="h-max">CEGAF</Badge>
        </div>
        <small>EEMTI Professora Theolina de Muryllo Zacas</small>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Conteúdo</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          dolorum animi? Illo, voluptatum architecto. Ducimus sunt nobis
          consectetur ex dolores exercitationem suscipit culpa vel quo, harum
          voluptate accusantium hic impedit? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolorum dolore ratione reiciendis. Culpa
          optio incidunt exercitationem a, mollitia voluptatem voluptates
          asperiores, vero sapiente veritatis quam quaerat recusandae, error
          illum ut?
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Observação</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
          voluptatem sapiente vero, dignissimos quo impedit doloremque ratione?
          Doloribus dolorem beatae rerum perspiciatis ducimus placeat
          perferendis! Enim labore dolore quod.
        </p>
      </div>

      <div className="space-y-4 pt-5">
        <div className="flex flex-col items-end">
          <small>{new Date().toLocaleDateString("pt-BR")}</small>
          <p>
            Criada por: <span className="text-muted-foreground">John Snow</span>
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
