"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Components
import { Subtitle } from "./subtitle"
import { EntityWithBoxes } from "@/types/entity"
import { BoxItem } from "./ui/box-item"
import { usePathname } from "next/navigation"

interface EntityBoxListProps {
  entity: EntityWithBoxes
}

export const EntityBoxList = ({ entity }: EntityBoxListProps) => {
  const pathname = usePathname()

  return (
    <div className="space-y-10 pb-8 pt-4 ">
      <div className="space-y-4">
        <div className="flex justify-between">
          <Link
            href={pathname.includes("/app") ? "/app" : "/"}
            className="flex w-max items-center gap-1 hover:text-primary"
          >
            <ArrowLeft />
            Voltar
          </Link>
          {/* TODO: Filtro */}
        </div>

        <div className="border-b pb-2">
          <Subtitle label="Caixas" />
          <strong>{entity?.name}</strong>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {entity?.boxes.map((box) => (
          <BoxItem box={box} key={box.id} showEntity={false} />
        ))}
      </div>
    </div>
  )
}
