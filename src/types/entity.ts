import { Prisma } from "@prisma/client"
import { fetchEntityWithBoxes } from "@/data/entity"

export type EntityWithBoxes = Prisma.PromiseReturnType<
  typeof fetchEntityWithBoxes
>
