import { FolderOpen } from "lucide-react"

import type { Box } from "@/types/box-type"

// Components
import { Button } from "./ui/button"
import Link from "next/link"

interface BoxListProps {
  boxes: Box[]
}

export const BoxList = ({ boxes }: BoxListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="space-y-4 rounded-md bg-zinc-200 p-4 shadow-lg"
          title={box.school}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <FolderOpen size={30} />
            <div className="flex-1 truncate">
              <strong className="truncate">{box.school}</strong>
              <p className="text-xl font-bold leading-none">nº {box.numBox}</p>
            </div>
          </div>
          <div className="text-sm">
            <p>Nessa pasta estão os seguintes processos:</p>
            <p className="line-clamp-2">{box.content}</p>
          </div>
          <div>
            <Link href={`/school/box/${box.id}`}>
              <Button className="ml-auto block">Detalhes</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
