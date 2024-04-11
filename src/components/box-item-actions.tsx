"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { Box } from "@/types/box-type"

interface BoxItemActionsProps {
  box: Box
  userId?: number
}

export const BoxItemActions = ({ box, userId }: BoxItemActionsProps) => {
  const pathname = usePathname()
  // TODO:CanEdit Pathname !== / and userId === ownerId
  const canEdit = pathname !== "/" && box.ownerId === userId

  return (
    <div className="flex justify-end gap-4">
      {canEdit && (
        <Link href={`/school/box/${box.id}/details`}>
          <Button variant="secondary">Editar</Button>
        </Link>
      )}

      <Link href={`/school/box/${box.id}/update`}>
        <Button>Detalhes</Button>
      </Link>
    </div>
  )
}
