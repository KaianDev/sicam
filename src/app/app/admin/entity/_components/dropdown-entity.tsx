import { Ellipsis, FileEdit } from "lucide-react"
import Link from "next/link"

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownEntityProps {
  entityId: string
}

export const DropdownEntity = ({ entityId }: DropdownEntityProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="gap-2" asChild>
          <Link href={`/app/admin/entity/${entityId}`}>
            <FileEdit />
            Editar
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
