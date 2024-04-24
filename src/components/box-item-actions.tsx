"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { BoxWithEntityAndSector } from "@/types/box"

// Components
import { Button } from "@/components/ui/button"

interface BoxItemActionsProps {
  box: BoxWithEntityAndSector
  userId?: string
}

export const BoxItemActions = ({ box, userId }: BoxItemActionsProps) => {
  const pathname = usePathname()
  // TODO:CanEdit Pathname !== / and userId === ownerId
  const canEdit = pathname !== "/" && box.ownerId === userId

  return (
    <div className="flex justify-end gap-4">
      {canEdit && (
        <Link href={`/app/box/update/${box.id}`}>
          <Button variant="secondary">Editar</Button>
        </Link>
      )}

      <Link
        href={
          pathname.includes("/app")
            ? `/app/box/details/${box.id}`
            : `/box/details/${box.id}`
        }
      >
        <Button>Detalhes</Button>
      </Link>
    </div>
  )
}
