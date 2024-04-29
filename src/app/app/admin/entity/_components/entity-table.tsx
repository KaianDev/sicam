import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getEntities } from "@/data/entity"
import { formatEntityName } from "@/helpers/format-entity-name"
import { DropdownEntity } from "@/app/app/admin/entity/_components/dropdown-entity"
import Link from "next/link"
import { FileEdit } from "lucide-react"

export const EntityTable = async () => {
  const entities = await getEntities()

  return (
    <div className="pb-6">
      <Table className="overflow-hidden rounded-md">
        <TableCaption>Lista de Entidades</TableCaption>
        <TableHeader className="bg-green-700">
          <TableRow className="hover:bg-green-700">
            <TableHead className="w-full text-white">
              Nome da entidade
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entities.map((entity) => (
            <TableRow key={entity.id}>
              <TableCell className="text-xs sm:text-sm lg:text-base">
                {formatEntityName(entity.name, entity.uex)}
              </TableCell>
              <TableCell className="text-end">
                <div className="md:hidden">
                  <DropdownEntity entityId={entity.id} />
                </div>
                <Link
                  href={`/app/admin/entity/${entity.id}`}
                  className="hidden items-center gap-2 text-base hover:text-primary md:flex"
                >
                  <FileEdit />
                  Editar
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
