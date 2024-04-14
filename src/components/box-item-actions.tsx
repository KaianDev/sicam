"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { BoxWithSchool } from "@/types/box"

// Components
import { Button } from "@/components/ui/button"

interface BoxItemActionsProps {
  box: BoxWithSchool
  userId?: string
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
