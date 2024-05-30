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
            <TableHead className="hidden text-white md:table-cell">
              Setor
            </TableHead>
            <TableHead className="hidden text-white md:table-cell">
              Perfil
            </TableHead>
            <TableHead className="md:w-32"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="flex flex-col text-sm lg:text-base">
                <p className="font-bold md:font-normal">{user.name}</p>
                <small className="md:hidden">{user.sector.name}</small>
                <small className="md:hidden">
                  {user.role === "ADMIN" ? "Administrador" : "Usuário"}
                </small>
              </TableCell>
              <TableCell className="hidden text-sm md:table-cell lg:text-base">
                {user.sector.name}
              </TableCell>
              <TableCell className="hidden w-full text-sm md:block lg:text-base">
                {user.role === "ADMIN" ? "Administrador" : "Usuário"}
              </TableCell>
              <TableCell className="text-end">
                <div className="md:hidden">
                  <UpdateDropdown href={`/app/admin/users/update/${user.id}`} />
                </div>
                <Link
                  href={`/app/admin/users/update/${user.id}`}
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
