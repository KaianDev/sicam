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
import { fetchUsers } from "@/actions/user"

export const UserTable = async () => {
  const users = await fetchUsers()

  return (
    <div className="pb-6">
      <Table className="overflow-hidden rounded-md">
        <TableCaption>Lista de Usuários</TableCaption>
        <TableHeader className="bg-green-700">
          <TableRow className="hover:bg-green-700">
            <TableHead className="text-white">Nome do usuário</TableHead>
            <TableHead className="hidden text-white sm:table-cell">
              Setor
            </TableHead>
            <TableHead className="hidden text-white sm:table-cell">
              Perfil
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="flex flex-col text-sm lg:text-base">
                <p className="font-bold sm:font-normal">{user.name}</p>
                <small className="sm:hidden">{user.sector.name}</small>
                <small className="sm:hidden">
                  {user.role === "ADMIN" ? "Administrador" : "Usuário"}
                </small>
              </TableCell>
              <TableCell className="hidden text-sm sm:table-cell lg:text-base">
                {user.sector.name}
              </TableCell>
              <TableCell className="hidden text-sm sm:block lg:text-base">
                {user.role === "ADMIN" ? "Administrador" : "Usuário"}
              </TableCell>
              <TableCell className="text-end">
                <div className="md:hidden">
                  <UpdateDropdown href={`/app/admin/user/update/${user.id}`} />
                </div>
                <Link
                  href={`/app/admin/user/update/${user.id}`}
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
