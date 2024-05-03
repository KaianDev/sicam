import type { BoxWithEntityAndSector } from "@/types/box"

import { BoxItemActions } from "@/components/box-item-actions"
import { Badge } from "@/components/ui/badge"
import { FolderOpen } from "lucide-react"
import Link from "next/link"

interface BoxItemProps {
  box: BoxWithEntityAndSector
  user?: any
  showEntity?: boolean
}

export const BoxItem = ({ box, user, showEntity = true }: BoxItemProps) => {
  return (
    <div
      key={box.id}
      className="space-y-4 overflow-hidden rounded-md bg-zinc-200 p-4 shadow-lg"
    >
      <Badge variant="secondary">{box.sector.name}</Badge>
      <div className="flex items-center gap-2 overflow-hidden">
        <FolderOpen size={30} />
        <div className="flex-1 truncate" title={box.entity.name}>
          {showEntity && (
            <Link
              href={`/entity/${box.entityId}/box`}
              className="hover:underline"
            >
              <strong className="truncate">{box.entity.name}</strong>
            </Link>
          )}
          <p className="text-xl font-bold leading-none">nº {box.numBox}</p>
        </div>
      </div>
      <div className="text-sm">
        <p>Nessa pasta estão os seguintes processos:</p>
        <p className="line-clamp-2 min-h-10">{box.content}</p>
      </div>
      <BoxItemActions box={box} userId={user && user.id} />
    </div>
  )
}
