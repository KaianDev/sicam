import Link from "next/link"
import { FileEdit } from "lucide-react"

// Components
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UpdateDropdown } from "@/components/update-dropdown"

// Utilities
import { fetchSectors } from "@/data/sector"

export const SectorTable = async () => {
  const sectors = await fetchSectors()

  return (
    <div>
      <div className="pb-6">
        <Table className="overflow-hidden rounded-md">
          <TableCaption>Lista de Setores</TableCaption>
          <TableHeader className="bg-green-700">
            <TableRow className="hover:bg-green-700">
              <TableHead className="w-full text-white">Nome do Setor</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sectors.map((sector) => (
              <TableRow key={sector.id}>
                <TableCell className="uppercase">{sector.name}</TableCell>
                <TableCell className="text-end">
                  <div className="md:hidden">
                    <UpdateDropdown
                      href={`/app/admin/sector/update/${sector.id}`}
                    />
                  </div>
                  <Link
                    href={`/app/admin/sector/update/${sector.id}`}
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
    </div>
  )
}
