import type { BoxWithEntityAndSector } from "@/types/box"

// Components
import { BoxItem } from "@/components/box-item"

interface BoxListProps {
  boxes: BoxWithEntityAndSector[]
}

export const BoxList = ({ boxes }: BoxListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {boxes.map((box) => (
        <BoxItem box={box} key={box.id} />
      ))}
    </div>
  )
}
