import { FolderOpen } from "lucide-react"
import { BoxWithEntityAndSector } from "@/types/box"

// Components
import { BoxItemActions } from "./box-item-actions"

interface BoxListProps {
  boxes: BoxWithEntityAndSector[]
  user?: any
}

export const BoxList = ({ boxes, user }: BoxListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="space-y-4 rounded-md bg-zinc-200 p-4 shadow-lg"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <FolderOpen size={30} />
            <div className="flex-1 truncate" title={box.entity.name}>
              <strong className="truncate">{box.entity.name}</strong>
              <p className="text-xl font-bold leading-none">nº {box.numBox}</p>
            </div>
          </div>
          <div className="text-sm">
            <p>Nessa pasta estão os seguintes processos:</p>
            <p className="line-clamp-2 min-h-10">{box.content}</p>
          </div>
          <BoxItemActions box={box} userId={user && user.id} />
        </div>
      ))}
    </div>
  )
}
